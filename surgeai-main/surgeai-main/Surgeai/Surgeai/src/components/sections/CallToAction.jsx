const CallToAction = () => {
  return (
    <section className="bg-cta py-24 text-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up">
          Most Artists Fail on Social Media
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-16 fade-in-up fade-in-delay-1">
          The music industry has changed. It’s no longer enough to just create great music.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="neon-card p-10 rounded-xl w-full fade-in-up">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Oversaturated Market</h3>
            <p className="text-gray-300 text-lg">
              With 65M+ Reels and TikToks uploaded daily, your content gets buried without massive distribution.
            </p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Complex Algorithms</h3>
            <p className="text-gray-300 text-lg">
              Each platform has unique algorithms that are constantly changing, making it impossible to keep up manually.
            </p>
          </div>
          <div className="neon-card p-10 rounded-xl w-full fade-in-up fade-in-delay-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text">Limited Resources</h3>
            <p className="text-gray-300 text-lg">
              Creating enough variations to test what works requires teams of content creators most artists can’t afford.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;