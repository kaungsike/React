import React from "react";

const Faq = ({ faq: { question, answer }, handleToggle, open }) => {
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
          className={`size-6 duration-300 ${open && "rotate-180"}`}
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
          !open && "hidden"
        }`}
      >
        {answer}
      </p>
    </>
  );
};

export default Faq;
