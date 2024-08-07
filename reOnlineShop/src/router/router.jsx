import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Error from '../pages/Error';
import MyCart from '../pages/MyCart';
import ProductDetails from '../pages/ProductDetails';

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/myCart',
                element : <MyCart/>
            },
            {
                path : '/productDetail/:productId',
                element : <ProductDetails/>
            }
        ]
    }
])

export default router