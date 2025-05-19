const AdditionalBenefits = () => {
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
          Additional Benefits
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Unlock the full potential of your music with Surge’s cutting-edge features.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="neon-card glass-panel fade-in-up fade-in-delay-2">
            <div className="orbit-icon1">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 neon-text">Automated Content Generation</h3>
            <p className="text-gray-300 text-lg">AI creates thousands of unique content pieces tailored to your music, saving you time and effort.</p>
          </div>
          <div className="neon-card glass-panel fade-in-up fade-in-delay-3">
            <div className="orbit-icon1">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 neon-text">Multi-Platform Optimization</h3>
            <p className="text-gray-300 text-lg">Content is optimized for TikTok, Instagram, and YouTube to maximize engagement on each platform.</p>
          </div>
          <div className="neon-card glass-panel fade-in-up fade-in-delay-4">
            <div className="orbit-icon1">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 neon-text">Algorithmic Distribution Strategy</h3>
            <p className="text-gray-300 text-lg">Smart distribution targets the right audiences, ensuring your music reaches those who matter most.</p>
          </div>
          <div className="neon-card glass-panel fade-in-up fade-in-delay-5">
            <div className="orbit-icon1">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 neon-text">Real-Time Performance Tracking</h3>
            <p className="text-gray-300 text-lg">Monitor your campaign’s success with live analytics to optimize performance on the fly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalBenefits;