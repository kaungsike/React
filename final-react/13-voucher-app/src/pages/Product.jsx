import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import ProductLists from "../components/template/ProductLists";

const Product = () => {

  console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb currentPage={"Products"} />
          <ProductLists />
        </div>
      </Container>
    </div>
  );
};

export default Product;
