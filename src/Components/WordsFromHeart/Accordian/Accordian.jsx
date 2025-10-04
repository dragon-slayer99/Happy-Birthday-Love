import React, { useState } from "react";
import './Accordian.css'

const faqData = [
  {
    question: "Why I wait for you're call ?",
    answer:
      "Because I love hearing your voice, listening to you talk about your day, your likes and dislikes, your moments of happiness, sadness or pain it all makes me feels so much closer to you. It's like I am seeing this part of you that no one else gets to see and that makes feel special.",
  },
  {
    question: "What makes you special in my eyes ?",
    answer:
      // "You trying to be considerate, you putting me before yourself, out of all those things, the moment you came to the canteen and gave me that dairymilk and milkshake was when I realized How lucky I am to have you.",
      "You trying to be considerate, you putting me before yourself, you're way of talking; everything you do, wheather it's good or bad, just makes you even more special to me. Maybe it's overthinking or maybe you really are that special.",
  },
  {
    question: "What I think about our relationship ?",
    answer:
      "Well first of all I do think we have a very complex relationship and I mean it in a good way. I might not share everything with you, but I should tell you this: you already know so many things about me that even my friends and family don't know. And be sure of this - I always tell the truth, atleast to you, because I feel like you understand me so well that lying to you would be pointless.",
  },
  {
    question: "What I wish for ?",
    answer:
      "To know even more about you, I want to know everything about you, well not everything because it wouldn't be any fun but I do want to know more, beacuse the more I learn about you the closer I feel to you.",
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