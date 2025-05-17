import React from "react";
import Container from "../layout/Container";
import BreadCrumb from "../components/template/BreadCrumb";
import VoucherCard from "../components/template/VoucherCard";

const VoucherDetail = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-5">
          <BreadCrumb
            currentPage={"Voucher Detail"}
            link={[{ path: "/voucher", title: "Voucher" }]}
          />
          <div className="w-full lg:flex-row lg:h-auto h-[950px] flex-col flex items-center justify-between mt-5">
          <VoucherCard/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VoucherDetail;
