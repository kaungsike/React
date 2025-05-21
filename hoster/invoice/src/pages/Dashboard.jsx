import React from "react";
import Container from "../layout/Container";
import CardContainer from "../template/CardContainer";
import { TfiPackage } from "react-icons/tfi";
import { GrMoney } from "react-icons/gr";
import { TbInvoice } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="w-full h-full mt-5">
      <Container>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 justify-items-center">
          <CardContainer href={"/dashboard/products"} title="Products" description="All your product lists and management."  image={<TfiPackage className="w-[100px] h-[100px]"/>} />
          <CardContainer href={"/dashboard/sales"} title={"Sale"} description={"Track and management your sales."} image={<GrMoney className="w-[100px] h-[100px]" />} />
          <CardContainer href={"/dashboard/vouchers"} title={"Voucher"} description={"List of client vouchers."} image={<TbInvoice  className="w-[100px] h-[100px]"/>} />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
