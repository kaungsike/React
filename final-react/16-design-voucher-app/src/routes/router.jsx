import React from "react";

import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../public/layout/PublicLayout";
import PublicRoute from "./PublicRoute";
import ErrorPage from "../error/ErrorPage";
import GuardRoute from "./GuardRoute";

const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <PublicLayout />,
    children: [...PublicRoute],
  },
  ...GuardRoute,
]);

export default route;
