import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useCookie from "react-use-cookie";
import useUserStore from "../store/useUserStore";
import { set } from "lodash";

const MainLayout = () => {
  const navigate = useNavigate();

  const [token] = useCookie("my_token");
  const [user] = useCookie("user");

  const { setUserStore } = useUserStore();

  useEffect(() => {
    setUserStore(JSON.parse(user));
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
