
// src/components/sections/CaseStudyCard.jsx
import React from 'react';
 
const CaseStudyCard = ({ shape, artist, image, metrics, story, delay }) => {
  return (
    <div
      className={`neon-card-${shape} fade-in-up fade-in-delay-${delay + 1} relative overflow-hidden`}
      style={{
        '--delay': delay,
        // backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(5, 5, 25, 0.8)',
      }}
    >
      <div className="icon-circle relative z-10">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p className="stat-label relative z-10 text-lg font-semibold">{artist}</p>
      <div className="relative z-10 mb-4">
        {metrics.map((metric, index) => (
          <p key={index} className="stat-value">{metric}</p>
        ))}
      </div>
      <p className="feature-list relative z-10">{story}</p>
      <a href="#" className="cta-button relative z-10">Learn More</a>
    </div>
  );
};
 
export default CaseStudyCard;
 