import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import ProductPage from "../pages/ProductPage";
import SalePage from "../pages/SalePage";
import VoucherPage from "../pages/VoucherPage";
import AddProductPage from "../pages/ProductAdd";
import ProductEditPage from "../pages/ProductEditPage";
import VoucherDetailPage from "../pages/VoucherDetailPage";
import UserProfilePage from "../pages/UserProfilePage";
import UserChangeNamePage from "../pages/UserChangeNamePage";
import { UserChangeImagPage } from "../pages/UserChangeImagPage";



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
                        path : "products/addNew",
                        element : <AddProductPage/>
                    },
                    {
                        path : "product/edit/:id",
                        element : <ProductEditPage/>
                    },
                    {
                        path : "sales",
                        element : <SalePage/>
                    },
                    {
                        path : "vouchers",
                        element : <VoucherPage/>
                    },
                    {
                        path : "vouchers/detail/:id",
                        element : <VoucherDetailPage/>
                    },
                    {
                        path : "profile",
                        children : [
                            {
                                index : true,
                                element : <UserProfilePage/>
                            },
                            {
                                path : "user-change-name",
                                element : <UserChangeNamePage/>
                            },
                            {
                                path : "user-change-image",
                                element : <UserChangeImagPage/>
                            }
                        ]
                    }
                ]
            },
            
        ]
    }
])

export default route;