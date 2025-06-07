import Header from "@/components/Header";
import React from "react";
import "./style/global.css";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <main className="container mx-auto px-4">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
