import React, { useState } from "react";

const Faq = ({faq}) => {

    const [open,setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    }

      

  return (
    <div className="">
      <h1 onClick={handleOpen} className="border border-black text-3xl px-8 py-4 select-none border-b-0">{faq.question}</h1>
      <p className={`border py-3 text-xl px-8 border-t-black ${open ? "" : "hidden"}`}>
        {faq.answer}
      </p>
    </div>
  );
};

export default Faq;
