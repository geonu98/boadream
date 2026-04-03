import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import BathPage from "../pages/BathPage";
import ContactPage from "../pages/ContactPage";
import DirectionsPage from "../pages/DirectionsPage";
import FacilityPage from "../pages/FacilityPage";
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
      { path: "faq", element: <FaqPage /> },
      { path: "review", element: <ReviewPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "facility", element: <FacilityPage /> },
      { path: "directions", element: <DirectionsPage /> },
      { path: "bath", element: <BathPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "care-guide", element: <LongTermCarePage /> },
      { path: "recruit", element: <RecruitPage /> },
    ],
  },
]);

export default router;
