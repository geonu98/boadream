import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext";
import { inquiryService } from "../features/inquiries/api/inquiryService";
import { requireSupabase } from "../shared/lib/supabase/client";
import Seo from "../shared/seo/Seo";

const adminNavItems = [
  { label: "대시보드", to: "/admin/dashboard" },
  { label: "상담 문의", to: "/admin/inquiries", type: "inquiries" },
  { label: "공지사항", to: "/admin/notices" },
  { label: "FAQ", to: "/admin/faqs" },
  { label: "후기", to: "/admin/reviews" },
];

function formatToastTime(value) {
  if (!value) {
    return "방금";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { profile, logout } = useAuth();
  const [toasts, setToasts] = useState([]);
  const toastTimersRef = useRef(new Set());
  const inquiriesQuery = useQuery({
    queryKey: ["admin-inquiries"],
    queryFn: inquiryService.listInquiries,
  });

  useEffect(() => {
    const client = requireSupabase();
    const channel = client
      .channel("admin-layout-contact-inquiries")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "contact_inquiries",
        },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ["admin-inquiries"] });

          if (payload.eventType !== "INSERT" || !payload.new) {
            return;
          }

          const toastId = `${payload.new.id}-${Date.now()}`;
          setToasts((current) => [
            {
              id: toastId,
              name: payload.new.name,
              phone: payload.new.phone,
              serviceType: payload.new.service_type,
              createdAt: payload.new.created_at,
            },
            ...current,
          ].slice(0, 3));

          const timerId = window.setTimeout(() => {
            setToasts((current) => current.filter((toast) => toast.id !== toastId));
            toastTimersRef.current.delete(timerId);
          }, 5000);

          toastTimersRef.current.add(timerId);
        },
      )
      .subscribe();

    return () => {
      client.removeChannel(channel);
      toastTimersRef.current.forEach((timerId) => window.clearTimeout(timerId));
      toastTimersRef.current.clear();
    };
  }, [queryClient]);

  const receivedCount = inquiriesQuery.data?.filter((inquiry) => inquiry.status === "received").length ?? 0;

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  const handleToastClick = () => {
    setToasts([]);
    navigate("/admin/inquiries");
  };

  return (
    <main className="admin-shell">
      <Seo page="admin" />
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <p className="admin-sidebar-eyebrow">Boadream</p>
          <h1>관리자</h1>
          <p>{profile?.display_name || profile?.email || "관리자"}</p>
        </div>

        <nav className="admin-sidebar-nav" aria-label="Admin">
          {adminNavItems.map((item) => {
            const badgeCount = item.type === "inquiries" ? receivedCount : 0;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `admin-sidebar-link${isActive ? " is-active" : ""}`}
              >
                <span>{item.label}</span>
                {badgeCount > 0 ? (
                  <span className="admin-sidebar-badge" aria-label={`접수 문의 ${badgeCount}건`}>
                    {badgeCount > 99 ? "99+" : badgeCount}
                  </span>
                ) : null}
              </NavLink>
            );
          })}
        </nav>

        <button type="button" className="button button-outline button-small admin-logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      </aside>

      <section className="admin-content">
        <Outlet />
      </section>

      {toasts.length ? (
        <div className="admin-toast-stack" aria-live="polite" aria-label="새 문의 알림">
          {toasts.map((toast) => (
            <button key={toast.id} type="button" className="admin-toast" onClick={handleToastClick}>
              <span className="admin-toast-badge">새 문의</span>
              <strong>{toast.name}</strong>
              <p>{toast.serviceType} / {toast.phone}</p>
              <small>{formatToastTime(toast.createdAt)} 접수됨</small>
            </button>
          ))}
        </div>
      ) : null}
    </main>
  );
}
