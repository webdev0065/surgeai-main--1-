import React from 'react';
import NeonCard from '../common/NeonCard';

const Result = () => {
  const initialStats = [
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      label: 'Total Views',
      value: '1.75B+',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      label: 'Posts Created',
      value: '2.5M+',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'octagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Unique Accounts',
      value: '100K+',
      delay: 2,
      bgImage: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const viralGrowthStats = [
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Duration',
      value: '1 month',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      label: 'Total Social Views',
      value: '13.5M+',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'octagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      label: 'Spotify Streams',
      value: '245K+',
      delay: 2,
      bgImage: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Viral Videos',
      value: '2 (9.6M & 3.9M views)',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Follower Growth',
      value: '+245%',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const tikTokStats = [
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      label: 'Total Streams',
      value: '563,376',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      label: 'Total Social Views',
      value: '8.2M+',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'octagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Unique Listeners',
      value: '171,889',
      delay: 2,
      bgImage: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Monthly Growth',
      value: '+324%',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: 'Playlist Adds',
      value: 'TBD',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const spotifyStats = [
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      label: 'Total Streams',
      value: '750,000',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Unique Listeners',
      value: '250,000',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'octagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Monthly Growth',
      value: '+280%',
      delay: 2,
      bgImage: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const streamGrowthStats = [
    {
      shape: 'circle',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      label: 'Streams (Week 1)',
      value: '150,000',
      delay: 0,
      bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'hexagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      label: 'Streams (Week 4)',
      value: '563,376',
      delay: 1,
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      shape: 'octagon',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Growth Rate',
      value: '+275%',
      delay: 2,
      bgImage: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section className="bg-hero py-24 text-center relative overflow-hidden">
      <div className="particle-bg">
        <div className="particle" style={{ width: '5px', height: '5px', top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '3px', height: '3px', top: '20%', left: '30%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ width: '4px', height: '4px', top: '40%', left: '50%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '6px', height: '6px', top: '60%', left: '70%', animationDelay: '3s' }}></div>
        <div className="particle" style={{ width: '5px', height: '5px', top: '80%', left: '20%', animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-8 fade-in-up">
          <svg className="w-12 h-12 text-cyan-400 neon-glow pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-6 fade-in-up neon-text bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent scanline-glitch">
          Real Results, Real Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1 neon-text">
          Sustainable Spotify growth through viral TikTok campaigns.
        </p>

        {/* Initial Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {initialStats.map((stat, index) => (
            <NeonCard key={index} {...stat} />
          ))}
        </div>

        {/* Viral Growth Campaign */}
        <h3 className="text-3xl font-semibold text-gray-100 mb-8 fade-in-up neon-text">Viral Growth Campaign</h3>
        <h4 className="text-2xl font-semibold text-gray-100 mb-6 fade-in-up fade-in-delay-1 neon-text">Campaign Results</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {viralGrowthStats.map((stat, index) => (
            <NeonCard key={index} {...stat} />
          ))}
        </div>

        {/* TikTok Growth Analytics */}
        <h3 className="text-3xl font-semibold text-gray-100 mb-8 fade-in-up neon-text">TikTok Growth Analytics</h3>
        <h4 className="text-2xl font-semibold text-gray-100 mb-6 fade-in-up fade-in-delay-1 neon-text">Campaign Results</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {tikTokStats.map((stat, index) => (
            <NeonCard key={index} {...stat} />
          ))}
        </div>

        {/* Spotify Analytics */}
        <h3 className="text-3xl font-semibold text-gray-100 mb-8 fade-in-up neon-text">Spotify Analytics</h3>
        <h4 className="text-2xl font-semibold text-gray-100 mb-6 fade-in-up fade-in-delay-1 neon-text">Campaign Results</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {spotifyStats.map((stat, index) => (
            <NeonCard key={index} {...stat} />
          ))}
        </div>

        {/* Stream Growth Study */}
        <h3 className="text-3xl font-semibold text-gray-100 mb-8 fade-in-up neon-text">Stream Growth Study</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {streamGrowthStats.map((stat, index) => (
            <NeonCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;