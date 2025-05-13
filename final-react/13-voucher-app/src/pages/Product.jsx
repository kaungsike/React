import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import ProductLists from "../components/template/ProductLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuPlus } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Product = () => {

  console.log(import.meta.env.VITE_API_URL);
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
          <Link to={"/productCreate"} className="flex h-[36px] rounded-md px-2 dark:bg-orange-600 items-center gap-2 bg-orange-500 text-white text-[14px] text-nowrap"><LuPlus /> Add New</Link>
          </div>
          <ProductLists />
        </div>
      </Container>
    </div>
  );
};

export default Product;
