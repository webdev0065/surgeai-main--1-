const Stats = () => {
  return (
    <section className="bg-stats py-24">
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up">
          Utilizing machine learning to bypass 100% of originality checks and create
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 neon-text mb-16 fade-in-up fade-in-delay-1">
          Algorithmically Optimized Social Campaigns
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="neon-card p-10 rounded-xl w-full fade-in-up">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4 neon-text">50K+</h3>
            <p className="text-gray-300 text-lg">Unique Content Pieces</p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-1">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4 neon-text">1.8B+</h3>
            <p className="text-gray-300 text-lg">Across Social Platforms</p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-2">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4 neon-text">22.5M+</h3>
            <p className="text-gray-300 text-lg">Average Daily Reach</p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-3">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4 neon-text">125K+</h3>
            <p className="text-gray-300 text-lg">Total User Base</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;