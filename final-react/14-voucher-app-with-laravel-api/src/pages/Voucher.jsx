import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import VoucherLists from "../components/template/VoucherList";

const Voucher = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb currentPage={"Vouchers"} />

          <VoucherLists />
        </div>
      </Container>
    </div>
  )
}

export default Voucher