const Hero = () => {
  return (
    <section className="bg-hero min-h-screen flex items-center justify-center ">
      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        <span className="inline-block bg-gradient-to-r from-cyan-500 to-magenta-500 text-white text-sm px-5 py-2 rounded-full invitation">
          By Invitation Only
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 neon-text fade-in-up fade-in-delay-1">
          Turn Every Song Into<br />Millions of Posts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 fade-in-up fade-in-delay-2">
          Our proprietary AI-driven A2A botting network dynamically split-tests, generates,and mass distributes optimized content to maximize real fan acquisition and streaming growth on Spotify.
        </p>
        <div className="flex justify-center space-x-6 fade-in-up fade-in-delay-3">
          <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white px-8 py-4 rounded-lg text-lg font-semibold request">
            Request Demo
          </button>
          <button className="bg-transparent border border-cyan-400 hover:bg-cyan-400 hover:text-indigo-900 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold howit">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;