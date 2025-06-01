import React, { lazy } from "react";

const AboutPage = lazy(() => import("../public/pages/AboutPage"));
const ContactUsPage = lazy(() => import("../public/pages/ContactUsPage"));
const HomePage = lazy(() => import("../public/pages/HomePage"));

const PublicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
];

export default PublicRoute;
