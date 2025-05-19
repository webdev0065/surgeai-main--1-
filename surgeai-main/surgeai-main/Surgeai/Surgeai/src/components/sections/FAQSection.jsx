// src/components/sections/FAQSection.jsx
import React from 'react';
 
const FAQSection = ({ title, faqs = [] }) => {
  return (
    <>
      {title && <h3 className="text-3xl font-semibold text-gray-100 mb-8 fade-in-up neon-text">{title}</h3>}
      <div className="faq-container fade-in-up fade-in-delay-1">
        {Array.isArray(faqs) && faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4 className="faq-question">{faq.question}</h4>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No FAQs available at this time.</p>
        )}
      </div>
    </>
  );
};
 
export default FAQSection;
 