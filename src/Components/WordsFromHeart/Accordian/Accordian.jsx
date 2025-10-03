import React, { useState } from "react";
import './Accordian.css'

const faqData = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Just follow the simple steps outlined in our comprehensive setup guide, which will walk you through the entire process from beginning to end.",
  },
  {
    question: "Where can I find my account details?",
    answer:
      "You can find all of your account information, including your profile, settings, and billing history, on the 'My Account' page once you have successfully logged in.",
  },
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, please click the "Forgot Password" link on the login page. We will then send an email with further instructions to your registered email address.',
  },
  {
    question: "Who can I contact for support?",
    answer:
      "Our dedicated support team is available around the clock to assist you. You can reach us through the contact form on our website or by sending an email to support@example.com.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-gradient-overlay"></div>
      <button className="accordion-button" onClick={onClick}>
        <span className="accordion-question">{question}</span>
        <svg
          className={`accordion-icon ${isOpen ? "rotate" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-answer-wrapper">
          <p className={`accordion-answer ${isOpen ? "visible" : ""}`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Accordian() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-accordion-section">
      <div className="custom-accordion-container">
        <div className="custom-accordion-header">
          <h1 className="custom-accordion-title">My Thoughts</h1>
        </div>
        <div className="accordion-list">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}