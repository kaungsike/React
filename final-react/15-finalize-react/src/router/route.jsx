import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Lazy-loaded components
const Layout = lazy(() => import("../layout/Layout"));
const Error = lazy(() => import("../pages/Error"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Product = lazy(() => import("../pages/Product"));
const ProductCreatePage = lazy(() => import("../pages/ProductCreatePage"));
const ProductEditPage = lazy(() => import("../pages/ProductEditPage"));
const Sale = lazy(() => import("../pages/Sale"));
const Voucher = lazy(() => import("../pages/Voucher"));
const VoucherDetail = lazy(() => import("../pages/VoucherDetail"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const UserProfilePage = lazy(() => import("../pages/UserProfilePage"));
const UserChangeName = lazy(() => import("../pages/UserChangeName"));
const UserChangeImage = lazy(() => import("../pages/UserChangeImage"));
const UserChangePassword = lazy(() => import("../pages/UserChangePassword"));

const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "productCreate",
            element: <ProductCreatePage />,
          },
          {
            path: "product/edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <Sale />,
          },
          {
            path: "voucher",
            element: <Voucher />,
          },
          {
            path: "voucher/voucherDetail/:id",
            element: <VoucherDetail />,
          },
          {
            path: "user-profile",
            children: [
              {
                index: true,
                element: <UserProfilePage />,
              },
              {
                path: "user-change-name",
                element: <UserChangeName />,
              },
              {
                path: "user-change-image",
                element: <UserChangeImage />,
              },
              {
                path: "user-change-password",
                element: <UserChangePassword />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default route;
