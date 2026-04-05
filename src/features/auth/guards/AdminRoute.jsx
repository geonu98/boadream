import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute() {
  const location = useLocation();
  const { isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <main className="admin-auth-page">
        <section className="admin-auth-card">
          <p className="admin-auth-eyebrow">Admin</p>
          <h1>관리자 세션을 확인하고 있습니다.</h1>
        </section>
      </main>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
