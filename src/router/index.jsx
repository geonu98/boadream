import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AdminRoute from "../features/auth/guards/AdminRoute";
import AdminDashboardPage from "../features/auth/pages/AdminDashboardPage";
import AdminLoginPage from "../features/auth/pages/AdminLoginPage";
import AdminFaqFormPage from "../features/faqs/pages/AdminFaqFormPage";
import AdminFaqListPage from "../features/faqs/pages/AdminFaqListPage";
import AdminInquiryListPage from "../features/inquiries/pages/AdminInquiryListPage";
import AdminNoticeFormPage from "../features/notices/pages/AdminNoticeFormPage";
import AdminNoticeListPage from "../features/notices/pages/AdminNoticeListPage";
import NoticeDetailPage from "../features/notices/pages/NoticeDetailPage";
import AdminReviewFormPage from "../features/reviews/pages/AdminReviewFormPage";
import AdminReviewListPage from "../features/reviews/pages/AdminReviewListPage";
import AboutPage from "../pages/AboutPage";
import BathPage from "../pages/BathPage";
import ContactPage from "../pages/ContactPage";
import DirectionsPage from "../pages/DirectionsPage";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import LongTermCarePage from "../pages/LongTermCarePage";
import NoticePage from "../pages/NoticePage";
import PricingPage from "../pages/PricingPage";
import RecruitPage from "../pages/RecruitPage";
import ReviewPage from "../pages/ReviewPage";
import ServicePage from "../pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "service", element: <ServicePage /> },
      { path: "notice", element: <NoticePage /> },
      { path: "notice/:slug", element: <NoticeDetailPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "review", element: <ReviewPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "directions", element: <DirectionsPage /> },
      { path: "bath", element: <BathPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "care-guide", element: <LongTermCarePage /> },
      { path: "recruit", element: <RecruitPage /> },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: "dashboard", element: <AdminDashboardPage /> },
          { path: "inquiries", element: <AdminInquiryListPage /> },
          { path: "notices", element: <AdminNoticeListPage /> },
          { path: "notices/new", element: <AdminNoticeFormPage /> },
          { path: "notices/:noticeId/edit", element: <AdminNoticeFormPage /> },
          { path: "faqs", element: <AdminFaqListPage /> },
          { path: "faqs/new", element: <AdminFaqFormPage /> },
          { path: "faqs/:faqId/edit", element: <AdminFaqFormPage /> },
          { path: "reviews", element: <AdminReviewListPage /> },
          { path: "reviews/new", element: <AdminReviewFormPage /> },
          { path: "reviews/:reviewId/edit", element: <AdminReviewFormPage /> },
        ],
      },
    ],
  },
]);

export default router;