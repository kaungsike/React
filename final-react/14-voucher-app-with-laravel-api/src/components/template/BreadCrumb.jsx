import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPage, link = []}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to={"/dashboard"}>Home</Link>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        {link &&
          link.map((item) => (
            <div className="flex items-center gap-3" key={item.title}>
              <BreadcrumbItem >
                <Link to={`${item.path}`}>{item.title}</Link>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
            </div>
          ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
