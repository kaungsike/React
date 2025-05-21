import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useCookie from "react-use-cookie";

const MainLayout = () => {
  const navigate = useNavigate();

  const [token] = useCookie("my_token");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
