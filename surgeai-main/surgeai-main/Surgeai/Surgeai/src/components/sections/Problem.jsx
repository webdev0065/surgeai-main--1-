const Problem = () => {
  return (
    <section className="bg-problem py-24 text-center relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up neon-text">
          Artists are Drowning in a Saturated Market
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          With over 65 million Instagram Reels and TikToks uploaded daily, it’s difficult to stand out, adapt, and optimize your content effectively.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="neon-card p-10 rounded-xl glass-panel fade-in-up fade-in-delay-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">The Challenge</h3>
            <p className="text-gray-300 text-lg">
              The sheer volume of content uploaded daily buries even the most creative artists, making visibility nearly impossible without strategic amplification.
            </p>
          </div>
          <div className="neon-card p-10 rounded-xl glass-panel fade-in-up fade-in-delay-3">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Surge Solves This</h3>
            <p className="text-gray-300 text-lg">
              Using extreme volume + proprietary AI to distribute your content across a massive network of accounts to drive real streams and engagement.
            </p>
          </div>
        </div>
        <div className="mt-12 fade-in-up fade-in-delay-4">
          <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition neon-glow pulse">
            Discover Our Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;