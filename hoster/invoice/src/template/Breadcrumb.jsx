import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage, link = [] }) => {
  return (
    <Breadcrumbs fullWidth>
      <Link to={"/dashboard"} className="opacity-60">
        Dashboard
      </Link>
      {link && link.map((el) => <Link to={el.path} key={el.title} className="opacity-60">{el.title}</Link>)}
      <p >{currentPage}</p>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
