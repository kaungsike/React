import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import VoucherInfo from "../components/template/VoucherInfo";

const Sale = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb currentPage={"Sales"} />
          <VoucherInfo/>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
