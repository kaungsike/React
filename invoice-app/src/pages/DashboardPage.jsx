import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { CiDatabase } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <ModuleBtn
              name={"Product"}
              icon={<CiDatabase className="size-12"/>}
              url={"/product"}
            />
          </div>
          <div className="col-span-1">
            <ModuleBtn
              name={"Sale"}
              icon={<CiDeliveryTruck className="size-12"/>}
              url={"/sale"}
            />
          </div>

          <div className="col-span-1">
            <ModuleBtn
              name={"Voucher"}
              icon={<CiBookmark className="size-12"/>}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
