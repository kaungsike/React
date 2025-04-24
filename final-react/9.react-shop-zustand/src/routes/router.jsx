import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MyCart from "../pages/MyCart.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Layout from "../components/Layout.jsx";
import Error from "../pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/productDetail/:slugUrl",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
