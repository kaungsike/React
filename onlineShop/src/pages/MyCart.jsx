import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <div className="p-[20px]">
      <Container>
        <Breadcrumb currentPageTitle={"My Cart"} />
        <CartSection />
      </Container>
    </div>
  );
};

export default MyCart;
