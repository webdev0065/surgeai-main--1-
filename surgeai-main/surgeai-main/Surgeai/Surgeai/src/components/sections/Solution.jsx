const Solution = () => {
  return (
    <section className="bg-solution py-24 text-center relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up neon-text">
          Our Solution: Mass Distribution
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-16 fade-in-up fade-in-delay-1">
          We use extreme volume combined with AI optimization to flood algorithms with your content across thousands of accounts simultaneously.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="neon-card p-10 rounded-xl w-full fade-in-up">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 neon-text">01</h3>
            <h4 className="text-xl font-semibold text-gray-100 mb-4">AI Content Generation</h4>
            <p className="text-gray-300 text-lg">
              Our AI creates thousands of unique variations of your content optimized for each platform.
            </p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 neon-text">02</h3>
            <h4 className="text-xl font-semibold text-gray-100 mb-4">Mass Distribution</h4>
            <p className="text-gray-300 text-lg">
              Content is distributed across our network of thousands of accounts and profiles.
            </p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 neon-text">03</h3>
            <h4 className="text-xl font-semibold text-gray-100 mb-4">Algorithm Optimization</h4>
            <p className="text-gray-300 text-lg">
              Real-time analytics optimizes distribution for maximum engagement and conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;