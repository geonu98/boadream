import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const revealSelector = ".reveal-up, .reveal-left, .reveal-right";
    const observeTarget = (target) => {
      if (!(target instanceof Element)) return;
      if (target.classList.contains("is-visible")) return;
      observer.observe(target);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    document.querySelectorAll(revealSelector).forEach(observeTarget);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(revealSelector)) observeTarget(node);
          node.querySelectorAll?.(revealSelector).forEach(observeTarget);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(location.hash);
        target?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
