import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const AdminDashboardPage = lazy(() => import("../features/auth/pages/AdminDashboardPage"));
const AdminLoginRoute = lazy(() => import("../features/auth/pages/AdminLoginRoute"));
const AdminRouteRoot = lazy(() => import("../features/auth/guards/AdminRouteRoot"));
const AdminFaqFormPage = lazy(() => import("../features/faqs/pages/AdminFaqFormPage"));
const AdminFaqListPage = lazy(() => import("../features/faqs/pages/AdminFaqListPage"));
const AdminInquiryListPage = lazy(() => import("../features/inquiries/pages/AdminInquiryListPage"));
const AdminNoticeFormPage = lazy(() => import("../features/notices/pages/AdminNoticeFormPage"));
const AdminNoticeListPage = lazy(() => import("../features/notices/pages/AdminNoticeListPage"));
const NoticeDetailPage = lazy(() => import("../features/notices/pages/NoticeDetailPage"));
const AdminReviewFormPage = lazy(() => import("../features/reviews/pages/AdminReviewFormPage"));
const AdminReviewListPage = lazy(() => import("../features/reviews/pages/AdminReviewListPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const DirectionsPage = lazy(() => import("../pages/DirectionsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const LongTermCarePage = lazy(() => import("../pages/LongTermCarePage"));
const NoticePage = lazy(() => import("../pages/NoticePage"));
const PricingPage = lazy(() => import("../pages/PricingPage"));
const RecruitPage = lazy(() => import("../pages/RecruitPage"));
const ReviewPage = lazy(() => import("../pages/ReviewPage"));
const ServicePage = lazy(() => import("../pages/ServicePage"));

function renderDeferredPage(PageComponent) {
  return (
    <Suspense fallback={<div className="notice-page-status">페이지를 불러오는 중입니다.</div>}>
      <PageComponent />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: renderDeferredPage(HomePage) },
      { path: "about", element: renderDeferredPage(AboutPage) },
      { path: "service", element: renderDeferredPage(ServicePage) },
      { path: "bath", element: <Navigate to="/service" replace /> },
      { path: "notice", element: renderDeferredPage(NoticePage) },
      { path: "notice/:slug", element: renderDeferredPage(NoticeDetailPage) },
      { path: "faq", element: renderDeferredPage(FaqPage) },
      { path: "review", element: renderDeferredPage(ReviewPage) },
      { path: "contact", element: renderDeferredPage(ContactPage) },
      { path: "directions", element: renderDeferredPage(DirectionsPage) },
      { path: "pricing", element: renderDeferredPage(PricingPage) },
      { path: "care-guide", element: renderDeferredPage(LongTermCarePage) },
      { path: "recruit", element: renderDeferredPage(RecruitPage) },
    ],
  },
  {
    path: "/admin/login",
    element: renderDeferredPage(AdminLoginRoute),
  },
  {
    path: "/admin",
    element: renderDeferredPage(AdminRouteRoot),
    children: [
      {
        element: renderDeferredPage(AdminLayout),
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: "dashboard", element: renderDeferredPage(AdminDashboardPage) },
          { path: "inquiries", element: renderDeferredPage(AdminInquiryListPage) },
          { path: "notices", element: renderDeferredPage(AdminNoticeListPage) },
          { path: "notices/new", element: renderDeferredPage(AdminNoticeFormPage) },
          { path: "notices/:noticeId/edit", element: renderDeferredPage(AdminNoticeFormPage) },
          { path: "faqs", element: renderDeferredPage(AdminFaqListPage) },
          { path: "faqs/new", element: renderDeferredPage(AdminFaqFormPage) },
          { path: "faqs/:faqId/edit", element: renderDeferredPage(AdminFaqFormPage) },
          { path: "reviews", element: renderDeferredPage(AdminReviewListPage) },
          { path: "reviews/new", element: renderDeferredPage(AdminReviewFormPage) },
          { path: "reviews/:reviewId/edit", element: renderDeferredPage(AdminReviewFormPage) },
        ],
      },
    ],
  },
]);

export default router;
