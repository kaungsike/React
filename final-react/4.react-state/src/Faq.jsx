import React from "react";
import useFaqsStore from "./store/useFaqsStore";

const Faq = ({ faq: { id, isOpen, question, answer } }) => {

  console.log(id);

  const {toggleFaq} = useFaqsStore();
  
  const handleToggle = () => {
    toggleFaq(id);
  }

  return (
    <>
      <div
        onClick={handleToggle}
        className={`border flex items-center justify-between w-full p-5 select-none duration-150 border-black`}
      >
        <p>{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-300 ${isOpen && "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p
        className={`border bg-gray-200 w-full duration-150 p-5 border-black ${
          !isOpen && "hidden"
        }`}
      >
        {answer}
      </p>
    </>
  );
};

export default Faq;
