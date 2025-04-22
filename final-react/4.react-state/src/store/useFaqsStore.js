import { create } from "zustand";

const useFaqsStore = create((set) => ({
  faqs: [
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
  ],
  toggleFaq: (id) =>
    set((state) => ({
      faqs: state.faqs.map((faq) => 
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      ),
    })),
}));

export default useFaqsStore;
