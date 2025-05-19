const AITransform = () => {
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
          AI Transformation Chamber
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 fade-in-up fade-in-delay-1 neon-text">
          10,000+ Custom Variations
        </h3>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-2">
          Our AI analyzes your content to generate thousands of platform-optimized custom variations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="holo-card fade-in-up fade-in-delay-2">
            <div className="icon-circle">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Verified Accounts</h3>
          </div>
          <div className="holo-card fade-in-up fade-in-delay-3">
            <div className="icon-circle">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Split Testing</h3>
          </div>
          <div className="holo-card fade-in-up fade-in-delay-4">
            <div className="icon-circle">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Algorithm Optimized</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransform;