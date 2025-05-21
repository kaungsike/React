import React from "react";
import Container from "../layout/Container";
import Breadcrumb from "../template/Breadcrumb";
import SaleForm from "../template/SaleForm";
import { SaleTable } from "../template/SaleTable";
import CustomerForm from "../template/CustomerForm";

const SalePage = () => {
  return (
    <div className="mt-5">
      <Container>
        <Breadcrumb currentPage={"Sale"} />
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 mt-5">
          <div className="w-full">
            <SaleForm />

            <SaleTable />
          </div>
          <CustomerForm />
        </div>
      </Container>
    </div>
  );
};

export default SalePage;
