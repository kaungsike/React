import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import ProductLists from "../components/template/ProductLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuPlus } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

const Product = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb currentPage={"Products"} />
          <div className="flex w-full gap-2 items-center justify-between mt-7">
          <div className="flex w-full max-w-[340px] gap-2 items-center">
              <Input type="search" placeholder="" />
              <Button type="submit"><FiSearch /> Search</Button>
            </div>
          <Button type="button"><LuPlus /> Add New</Button>
          </div>
          <ProductLists />
        </div>
      </Container>
    </div>
  );
};

export default Product;
