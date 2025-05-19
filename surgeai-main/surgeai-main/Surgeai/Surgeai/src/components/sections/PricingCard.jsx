
 
// src/components/sections/PricingCard.jsx
import React from 'react';
 
const PricingCard = ({ shape, icon, plan, price, description, features, backgroundImage, delay }) => {
  return (
    <div
      className={`neon-card-${shape} fade-in-up fade-in-delay-${delay + 1} relative overflow-hidden`}
      style={{
        '--delay': delay,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(5, 5, 25, 0.8)',
      }}
    >
      <div className="icon-circle relative z-10">
        {icon}
      </div>
      <p className="stat-label relative z-10">{plan}</p>
      <p className="price-value relative z-10">{price}</p>
      <p className="stat-label relative z-10 text-gray-400">{description}</p>
      <ul className="feature-list relative z-10">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href="#" className="cta-button relative z-10">Get Started</a>
    </div>
  );
};
 
export default PricingCard;
 