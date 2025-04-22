import React, { useState } from "react";
import Faq from "./Faq";
import useFaqsStore from "./store/useFaqsStore";

const FaqSection = () => {

  const {faqs} = useFaqsStore();

  // console.log(faqs);


  return (
    <div className="flex mx-auto flex-col items-center h-screen w-full lg:w-[1200px] lg:p-10 ">
      {faqs.map((faq) => (
        <Faq
          key={faq.id}          
          faq={faq}
        />
      ))}
    </div>
  );
};

export default FaqSection;
