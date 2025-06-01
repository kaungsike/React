import React from "react";

import { lazy } from "react";

const LoginPage = lazy(() => import("../guard/pages/LoginPage"));
const RegisterPage = lazy(() => import("../guard/pages/RegisterPage"));

const GuardRoute = [
    {
        path : "login",
        element : <LoginPage/>
    },
    {
        path : "register",
        element : <RegisterPage/>
    }
]

export default GuardRoute;