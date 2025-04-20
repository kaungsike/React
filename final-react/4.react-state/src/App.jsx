import React, { useState } from "react";

const App = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "Is my personal data secure?",
      answer:
        "Yes, we use advanced encryption and secure servers to protect your information.",
    },
    {
      question: "Can I use this service for free?",
      answer:
        "We offer a free plan with basic features. Premium options are available for more functionality.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Use our contact form or email support@example.com for assistance.",
    },
    {
      question: "Do you support mobile devices?",
      answer: "Absolutely! Our app is fully responsive and mobile-friendly.",
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-5">
      <h1 className="text-5xl font-bold">{count}</h1>
      <div className="flex gap-5">
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black px-6 py-2 rounded active:scale-95 duration-150"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="border border-black px-6 py-2 rounded active:scale-95 duration-150"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
