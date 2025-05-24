import React from 'react'
"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Link } from 'react-router-dom';

const Error = () => {

    const words = [
        {
          text: "Opps! ",
          className: "text-red-600 dark:text-blue-500 ml-2",
        },
        {
          text: " nothing ",
          clgassName: "ml-2",
        },
        {
            text: " here...",
            clgassName: "ml-4 w-auto",
          },
      ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background dark:bg-background-dark">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <Link to={"/"} className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Back to home
        </button>
      </Link>
    </div>
  )
}

export default Error