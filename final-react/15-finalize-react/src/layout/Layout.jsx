import React, { Suspense, useEffect } from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import useCookie from "react-use-cookie";
import useUserStore from "../store/useUserStore";

const Layout = () => {
  const [token] = useCookie("my_token");
  const [userCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col min-h-screen">
          <Header />
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <Outlet />
          </Suspense>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default Layout;
