import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import ProductPage from "../pages/ProductPage";
import SalePage from "../pages/SalePage";
import VoucherPage from "../pages/VoucherPage";



const route = createBrowserRouter([
    {
        path : "/",
        errorElement : <ErrorPage/>,
        children : [
            {
                index : true,
                element : <LoginPage/>
            },
            {
                path : "/register",
                element : <RegisterPage/>
            },
            {
                path : "dashboard",
                element : <MainLayout/>,
                children : [
                    {
                        index : true,
                        element : <Dashboard/>
                    },
                    {
                        path : "products",
                        element : <ProductPage/>
                    },
                    {
                        path : "sales",
                        element : <SalePage/>
                    },
                    {
                        path : "vouchers",
                        element : <VoucherPage/>
                    }
                ]
            },
            
        ]
    }
])

export default route;