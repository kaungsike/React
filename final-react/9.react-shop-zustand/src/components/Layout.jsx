import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
        <Toaster/>
      </Container>
    </>
  );
};

export default Layout;
