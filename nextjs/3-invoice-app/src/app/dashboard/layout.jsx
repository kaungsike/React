import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";
import Header from "@/features/dashboard/components/Header";
import Sidebar from "@/features/dashboard/components/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
<>

    <div>
      <Header />
      <Sidebar />
      <div  className='lg:ps-72 p-3'>
        {children}
      </div>
    </div>
    <PrelineScriptWrapper/>
</>
  );
};

export default layout;
