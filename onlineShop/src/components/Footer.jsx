import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="mx-5 mb-3 mt-auto bg-black text-white text-center py-3">
        &copy;
      {date.getFullYear()} By Youu. All rights reversed.
    </footer>
  );
};

export default Footer;
