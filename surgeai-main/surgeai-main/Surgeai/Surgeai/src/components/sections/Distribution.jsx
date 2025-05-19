const Distribution = () => {
  return (
    <section className="bg-distribution py-24 text-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-8 fade-in-up">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            ></path>
          </svg>
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Powerful distribution across multiple platforms enables maximum reach and engagement for your content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="metric-card fade-in-up fade-in-delay-2">
            <div className="icon-circle">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">AI-Generated Variations</h3>
            <p className="text-3xl font-bold metric-value mb-2">50K+</p>
            <p className="metric-label">Unique Content Pieces</p>
          </div>
          <div className="metric-card fade-in-up fade-in-delay-3">
            <div className="icon-circle">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Potential Reach</h3>
            <p className="text-3xl font-bold metric-value mb-2">100M+</p>
            <p className="metric-label">Monthly Viewers</p>
          </div>
          <div className="metric-card fade-in-up fade-in-delay-4">
            <div className="icon-circle">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Unique Accounts</h3>
            <p className="text-3xl font-bold metric-value mb-2">1M+</p>
            <p className="metric-label">Total Unique Viewers</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="platform-card fade-in-up fade-in-delay-2">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-100 platform-icon youtube"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a2.978 2.978 0 00-2.097-2.097C19.92 3.5 12 3.5 12 3.5s-7.92 0-9.401.589a2.978 2.978 0 00-2.097 2.097C0 7.668 0 12 0 12s0 4.332.502 5.814a2.978 2.978 0 002.097 2.097C4.08 20.5 12 20.5 12 20.5s7.92 0 9.401-.589a2.978 2.978 0 002.097-2.097C24 16.332 24 12 24 12s0-4.332-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-100 ml-3">YouTube</h3>
            </div>
            <p className="text-gray-300 text-lg mb-4">AI-optimized video content for maximum engagement</p>
            <div className="platform-metric">
              <span>Unique Videos</span>
              <span className="positive">
                15K+ <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Average Views</span>
              <span className="positive">
                5.2K <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Engagement Rate</span>
              <span className="positive">
                8.7% <span className="text-green-400">↗</span>
              </span>
            </div>
          </div>
          <div className="platform-card fade-in-up fade-in-delay-3">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-100 platform-icon tiktok"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 8.5c-.72 0-1.42-.24-1.98-.66v2.96c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.28.05-.55.14-.81-.09.27-.14.55-.14.83 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-6.5h-2v-.5c0-1.38 1.12-2.5 2.5-2.5h.5v-1.5h-.5c-1.93 0-3.5 1.57-3.5 3.5v.5h-2v6.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-2.96c.56.42 1.26.66 1.98.66v1.5z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-100 ml-3">TikTok</h3>
            </div>
            <p className="text-gray-300 text-lg mb-4">Viral short-form content across trending clips</p>
            <div className="platform-metric">
              <span>Unique Clips</span>
              <span className="positive">
                22K+ <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Average Views</span>
              <span className="positive">
                8.7K <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Share Rate</span>
              <span className="positive">
                12.3% <span className="text-green-400">↗</span>
              </span>
            </div>
          </div>
          <div className="platform-card fade-in-up fade-in-delay-4">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-100 platform-icon instagram"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.5-.5a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-100 ml-3">Instagram</h3>
            </div>
            <p className="text-gray-300 text-lg mb-4">Curated visual stories to build brand loyalty</p>
            <div className="platform-metric">
              <span>Unique Posts</span>
              <span className="positive">
                18K+ <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Average Likes</span>
              <span className="positive">
                3.4K <span className="text-green-400">↗</span>
              </span>
            </div>
            <div className="platform-metric">
              <span>Save Rate</span>
              <span className="positive">
                9.1% <span className="text-green-400">↗</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;