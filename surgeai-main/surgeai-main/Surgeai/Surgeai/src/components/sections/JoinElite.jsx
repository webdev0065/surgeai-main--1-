import React from 'react';

const JoinElite = () => {
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
        <div className="neon-card glass-panel fade-in-up fade-in-delay-2 max-w-md mx-auto">
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-magenta-500 text-white text-sm px-5 py-2 rounded-full mb-6 neon-glow">
            Limited Availability
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 neon-text">
            Join Our Elite Roster
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Currently accepting 3 elite artists and record labels for our exclusive roster. Reserved for the industry’s most discerning professionals.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition neon-glow pulse">
              Request Private Access
            </button>
            <span className="inline-flex items-center bg-transparent text-cyan-400 text-sm px-5 py-2 rounded-full border border-cyan-400 neon-glow">
              By Invitation Only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinElite;