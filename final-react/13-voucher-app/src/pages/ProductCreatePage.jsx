import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import ProductCreateCard from "../components/template/ProductCreateCard";


const ProductCreatePage = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb
            link={[{ path: "/product", title: "Products" }]}
            currentPage={"Create Product"}
          />
          <h4 className="text-sm font-medium mt-5 leading-none mb-2">Add a new product</h4>
          <p className="text-sm text-muted-foreground">
          Fill out the details below to include a new product in your invoice. Make sure the information is accurate for billing and records.
          </p>
          <ProductCreateCard />
        </div>
      </Container>
    </div>
  );
};

export default ProductCreatePage;
