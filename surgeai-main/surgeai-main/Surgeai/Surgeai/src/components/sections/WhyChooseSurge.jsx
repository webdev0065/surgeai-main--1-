import React from 'react';

const WhyChooseSurge = () => {
  const comparisons = [
    {
      feature: 'Core Focus',
      surge: 'Automated content seeding via non-influencer accounts',
      whop: 'Promoting creators via clipping bounty program',
      breakr: 'Infrastructure for influencer campaigns',
      pearpop: 'Marketplace for performance-based creator collaborations',
    },
    {
      feature: 'Target Audience',
      surge: 'Our own AI-generated accounts with full ownership',
      whop: 'Non-Influencers (Clippers) & small pages/theme pages',
      breakr: 'Influencers',
      pearpop: 'Influencers',
    },
    {
      feature: 'Automation',
      surge: 'Fully automated content distribution ✅',
      whop: 'Manual clipping required ❌',
      breakr: 'Manual outreach & deals ❌',
      pearpop: 'Company manually negotiates ❌',
    },
    {
      feature: 'Campaign Reliability',
      surge: 'Run any campaign at any time ✅',
      whop: 'Campaigns run only when clippers choose to participate ❌',
      breakr: 'Campaigns run only after successful influencer negotiations ❌',
      pearpop: 'Campaigns run only if influencers opt in ❌',
    },
  ];

  return (
    <section className="bg-ai-transform py-24 text-center relative overflow-hidden">
      <div className="particle-bg">
        <div className="particle" style={{ width: '6px', height: '6px', top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '4px', height: '4px', top: '20%', left: '30%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '5px', height: '5px', top: '40%', left: '50%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ width: '3px', height: '3px', top: '60%', left: '70%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ width: '6px', height: '6px', top: '80%', left: '20%', animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up neon-text">
          Why Choose Surge?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          See how our automated approach compares to traditional music marketing solutions.
        </p>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-gray-300 fade-in-up fade-in-delay-2 neon-card glass-panel">
            <thead>
              <tr>
                <th className="p-6"></th>
                <th className="p-6 text-center">
                  <span className="text-2xl font-bold text-cyan-400 neon-text">Surge ⭐</span>
                </th>
                <th className="p-6 text-center">
                  <span className="text-2xl font-bold text-gray-100">Whop</span>
                </th>
                <th className="p-6 text-center">
                  <span className="text-2xl font-bold text-gray-100">breakr</span>
                </th>
                <th className="p-6 text-center">
                  <span className="text-2xl font-bold text-gray-100">pearpop</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comp, index) => (
                <tr key={index} className="border-t border-cyan-400 border-opacity-30">
                  <td className="p-6 font-semibold text-cyan-400 neon-text">{comp.feature}</td>
                  <td className="p-6 text-center">{comp.surge}</td>
                  <td className="p-6 text-center">{comp.whop}</td>
                  <td className="p-6 text-center">{comp.breakr}</td>
                  <td className="p-6 text-center">{comp.pearpop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSurge;