import React, { useState } from "react";
import Faq from "./Faq";

const FaqSection = () => {
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

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex mx-auto flex-col items-center h-screen w-full lg:w-[1200px] lg:p-10 ">
      {faqs.map((faq) => (
        <Faq key={faq.answer} open={open} handleToggle={handleToggle} faq={faq}/>
      ))}
    </div>
  );
};

export default FaqSection;
