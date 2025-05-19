const FanGrowth = () => {
  return (
    <section className="bg-fan-growth py-24 text-center">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Drives real fan growth by targeting users who are most likely to engage with your content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="growth-card fade-in-up fade-in-delay-2">
            <div className="orbit-icon">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Targeted Users</h3>
            <p className="text-3xl font-bold growth-value mb-2">250K+</p>
            <p className="growth-label">New Fans Acquired</p>
          </div>
          <div className="growth-card fade-in-up fade-in-delay-3">
            <div className="orbit-icon">
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
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0113.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2L8 10m6 0H8"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Engagement Rate</h3>
            <p className="text-3xl font-bold growth-value mb-2">15%</p>
            <p className="growth-label">Average Interaction Rate</p>
          </div>
          <div className="growth-card fade-in-up fade-in-delay-4">
            <div className="orbit-icon">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Spotify Streams</h3>
            <p className="text-3xl font-bold growth-value mb-2">1.2M+</p>
            <p className="growth-label">Total Streams Generated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanGrowth;