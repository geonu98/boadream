
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import KakaoConsultButton from "./KakaoConsultButton";

const headerNav = [
  {
    label: "센터소개",
    href: "/about",
    children: [
      { label: "센터 인사말", href: "/about" },
      { label: "시설/환경 안내", href: "/facility" },
    ],
  },
  {
    label: "서비스안내",
    href: "/service",
    children: [
      { label: "방문요양 서비스", href: "/service" },
      { label: "방문목욕 서비스", href: "/bath" },
      { label: "서비스 이용 절차", href: "/service" },
    ],
  },
  {
    label: "장기요양안내",
    href: "/care-guide",
    children: [
      { label: "장기요양등급 안내", href: "/care-guide" },
      { label: "이용 금액 안내", href: "/pricing" },
    ],
  },
  { label: "공지사항", href: "/notice" },
  { label: "자주묻는질문", href: "/faq" },
  { label: "채용안내", href: "/recruit" },
  {
    label: "상담문의 / 오시는길",
    href: "/contact",
    children: [
      { label: "상담 신청", href: "/contact" },
      { label: "오시는 길", href: "/directions" },
    ],
  },
];

function PhoneGlyph() {
  return (
    <svg className="nav-cta-phone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.2 4.5h2.1l1.1 3.1-1.6 1.5a14 14 0 0 0 6.4 6.4l1.5-1.6 3.1 1.1v2.1c0 .7-.5 1.3-1.2 1.4a16.8 16.8 0 0 1-13.6-13.6c.1-.7.7-1.2 1.4-1.2Z" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isMenuActive = (item) => {
    if (location.pathname === item.href) {
      return true;
    }

    return item.children?.some((child) => location.pathname === child.href) ?? false;
  };

  const isHome = location.pathname === "/";

  const homeHeaderStyle = isHome
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 120,
        paddingTop: "12px",
        background: "transparent",
        pointerEvents: "none",
      }
    : undefined;

  const homeNavShellStyle = isHome
    ? {
        position: "relative",
        width: "min(calc(100vw - 28px), calc(var(--container-max) + (var(--container-padding) * 2)))",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.92)",
        boxShadow: "0 16px 34px rgba(98, 79, 62, 0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        pointerEvents: "auto",
      }
    : undefined;

  return (
    <header className={`site-header${isMobileOpen ? " is-mobile-open" : ""}`} style={homeHeaderStyle}>
      <div className="container nav-shell nav-shell-dropdown" style={homeNavShellStyle}>
        <Link className="brand-mark" to="/" aria-label="보아드림노인복지센터 홈">
          <span className="brand-flower" aria-hidden="true">
            <img className="brand-mark-image" src="/boadream-mark.png" alt="" />
          </span>
          <span className="brand-copy">보아드림노인복지센터</span>
        </Link>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={isMobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <span className="nav-mobile-toggle-bar"></span>
          <span className="nav-mobile-toggle-bar"></span>
          <span className="nav-mobile-toggle-bar"></span>
        </button>

        <nav id="primary-navigation" className="main-nav main-nav-dropdown" aria-label="Primary">
          {headerNav.map((item) => (
            <div
              key={item.label}
              className={`nav-dropdown${item.children ? " has-children" : ""}${isMenuActive(item) ? " is-active" : ""}`}
            >
              <NavLink to={item.href} className="nav-dropdown-trigger">
                <span>{item.label}</span>
                {item.children ? <span className="nav-caret" aria-hidden="true"></span> : null}
              </NavLink>

              {item.children ? (
                <div className="nav-dropdown-menu" role="menu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.href}
                      className={({ isActive }) => `nav-dropdown-item${isActive ? " is-current" : ""}`}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <KakaoConsultButton variant="outline" size="small" className="nav-kakao-button" readyLabel="카톡상담" pendingLabel="카톡상담" />
          <Button href="/contact" variant="solid" size="small" className="nav-cta-button nav-cta-button-compact">
            <span className="nav-cta-icon" aria-hidden="true">
              <PhoneGlyph />
            </span>
            <span>상담문의</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
