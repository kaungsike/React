import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import ProductEditCard from "../components/template/ProductEditCard";


const ProductEditPage = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb
            link={[{ path: "/product", title: "Products" }]}
            currentPage={"Edit Product"}
          />
          <h4 className="text-sm font-medium mt-5 leading-none mb-2">Edit product</h4>
          <p className="text-sm text-muted-foreground">
          Update the details below to modify an existing product in your invoice. Ensure all changes are accurate for proper billing and record-keeping.
          </p>
          <ProductEditCard />
        </div>
      </Container>
    </div>
  );
};

export default ProductEditPage;
