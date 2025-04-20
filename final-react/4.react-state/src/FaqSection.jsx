import React, { useState } from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Is my personal data secure?",
      answer:
        "Yes, we use advanced encryption and secure servers to protect your information.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Can I use this service for free?",
      answer:
        "We offer a free plan with basic features. Premium options are available for more functionality.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "Use our contact form or email support@example.com for assistance.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Do you support mobile devices?",
      answer: "Absolutely! Our app is fully responsive and mobile-friendly.",
      isOpen: false,
    },
  ]);

  const handleOpen = (id) => {
    setFaqs(faqs.map((faq) => (faq.id==id? {...faq, isOpen: !faq.isOpen} : {...faq, isOpen: false})));
  }

  return (
    <div className="flex mx-auto flex-col items-center h-screen w-full lg:w-[1200px] lg:p-10 ">
      {faqs.map((faq) => (
        <Faq
          key={faq.id}
          handleOpen={handleOpen}          
          faq={faq}
        />
      ))}
    </div>
  );
};

export default FaqSection;
