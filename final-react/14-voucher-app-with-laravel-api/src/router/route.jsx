import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Sale from "../pages/Sale";
import Voucher from "../pages/Voucher";
import VoucherDetail from "../pages/VoucherDetail";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import UserChangeName from "../pages/UserChangeName";
import UserChangeImage from "../pages/UserChangeImage";
import UserChangePassword from "../pages/UserChangePassword";

const route = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
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
            path : "user-profile",
            children : [
              {
                index : true,
                element : <UserProfilePage/>
              },
              {
                path : "user-change-name",
                element : <UserChangeName/>
              },
              {
                path : "user-change-image",
                element : <UserChangeImage/>
              },
              {
                path : 'user-change-password',
                element : <UserChangePassword/>
              }
            ]
          }
        ],
      },
    ],
  },
]);

export default route;
