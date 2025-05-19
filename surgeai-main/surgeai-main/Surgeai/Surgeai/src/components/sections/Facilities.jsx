import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 16h18m-9-8v8"></path>
        </svg>
      ),
      title: 'Phone Farm - Primary Distribution Center',
      description: 'Phone Farm - Primary Distribution Center',
      delay: 'fade-in-delay-2',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4l4 4"></path>
        </svg>
      ),
      title: 'Network Control Center',
      description: 'Network Control Center',
      delay: 'fade-in-delay-3',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"></path>
        </svg>
      ),
      title: 'Device Management Station',
      description: 'Device Management Station',
      delay: 'fade-in-delay-4',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
        </svg>
      ),
      title: 'Content Distribution Hub',
      description: 'Content Distribution Hub',
      delay: 'fade-in-delay-5',
    },
  ];

  const capabilities = [
    { value: '5000+', label: 'Active Devices', delay: 'fade-in-delay-2' },
    { value: '24/7', label: 'Hour Operation', delay: 'fade-in-delay-3' },
    { value: '98%', label: 'Uptime Percentage', delay: 'fade-in-delay-4' },
    { value: '1500+', label: 'Videos Generated Daily', delay: 'fade-in-delay-5' },
  ];

  return (
    <section className="bg-distribution py-24 text-center relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up neon-text">
          Our Facilities
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Explore the infrastructure powering our A2A botting network, strategically designed to maximize reach and engagement across platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className={`neon-card glass-panel fade-in-up ${facility.delay}`}>
              <div className="orbit-icon3">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 neon-text">{facility.title}</h3>
              <p className="text-gray-300 text-lg">{facility.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8 fade-in-up fade-in-delay-1 neon-text">
          Network Capabilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className={`neon-card glass-panel fade-in-up ${capability.delay}`}>
              <p className="text-3xl font-bold text-cyan-400 mb-2 neon-text">{capability.value}</p>
              <p className="text-gray-300 text-lg">{capability.label}</p>
            </div>
          ))}
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Our state-of-the-art facilities house thousands of dedicated devices that work around the clock to distribute your content. This physical infrastructure combined with our proprietary AI forms the backbone of our revolutionary distribution network.
        </p>
        <blockquote className="text-lg md:text-xl text-gray-300 italic max-w-3xl mx-auto fade-in-up fade-in-delay-2">
          "We've built the most advanced content distribution infrastructure in the industry, allowing us to achieve unprecedented scale and results for our artists."
          <footer className="text-cyan-400 mt-2 neon-text">— Surge Technical Operations</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Facilities;