import { useState } from "react";

export default function FaqItem({ item, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className={`faq-item${isOpen ? " is-open" : ""}`}>
      <button
        className="faq-question"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="faq-toggle" aria-hidden="true">{isOpen ? "-" : "+"}</span>
      </button>
      <div className="faq-answer-wrap" aria-hidden={!isOpen}>
        <div className="faq-answer-inner">
          <p className="faq-answer">{item.answer}</p>
        </div>
      </div>
    </article>
  );
}
