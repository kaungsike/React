import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Sale from "../pages/Sale";
import Voucher from "../pages/Voucher";
import VoucherDetail from "../pages/VoucherDetail";

const route = createBrowserRouter(
    [
        {
            path : "/",
            element : <Layout/>,
            errorElement : <Error/>,
            children : [
                {
                    path : "/",
                    element : <Dashboard/>,
                },
                {
                    path : "/product",
                    element : <Product/>
                },
                {
                    path : "/sale",
                    element : <Sale/>
                },
                {
                    path : "/voucher",
                    element : <Voucher/>
                },
                {
                    path : "/voucherDetail",
                    element : <VoucherDetail/>
                }
            ]
        }
    ]
)

export default route;