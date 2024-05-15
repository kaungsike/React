import Box from "./Box";
import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [faqs, setFaq] = useState([
    {
      id: 1,
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide users with comprehensive information and resources on various topics, including technology, health, education, and more.",
      hide: true,
    },
    {
      id: 2,
      question: "How can I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button located at the top right corner of the homepage. Fill in the required details, such as your name, email address, and password, and then click 'Submit'. You will receive a confirmation email to verify your account.",
      hide: true,
    },
    {
      id: 3,
      question: "What should I do if I forget my password?",
      answer:
        "If you forget your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and you will receive a link to reset your password. Follow the instructions in the email to create a new password.",
      hide: true,
    },
    {
      id: 4,
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support by clicking on the 'Contact Us' link at the bottom of the page. Fill out the contact form with your query or issue, and our support team will get back to you within 24 hours. Alternatively, you can reach us at support@example.com or call us at 1-800-123-4567.",
      hide: true,
    },
    {
      id: 5,
      question: "Are there any subscription plans available?",
      answer:
        "Yes, we offer various subscription plans to cater to different needs. You can choose from our Basic, Premium, and Pro plans. Each plan comes with different features and benefits. For more details, visit our 'Pricing' page.",
      hide: true,
    },
  ]);

  const clickBox = (id) => {
    setFaq(
      faqs.map((faq) => {
        if (id === faq.id) {
          faq.hide = false;
          return faq;
        } else {
          faq.hide = true;
          return faq;
        }
        return faq;
      })
    );
  };

  return (
    <div className="h-screen py-5">
      {faqs.map((faq) => (
        <Box
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          hide={faq.hide}
          id={faq.id}
          clickBox={clickBox}
        />
      ))}
    </div>
  );
};

export default App;
