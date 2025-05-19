import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      quote: 'Surge completely transformed my streaming numbers. The AI-generated content reached audiences I never thought possible.',
      initial: 'A',
      before: '50K',
      after: '1.2M',
      metric: 'Monthly Listeners',
      delay: 'fade-in-delay-2',
    },
    {
      quote: 'The quality of AI-generated content was incredible. My track went viral on TikTok within days.',
      initial: 'J',
      before: '12K',
      after: '780K',
      metric: 'Spotify Streams',
      delay: 'fade-in-delay-3',
    },
    {
      quote: 'No other platform delivers results like Surge. The AI understood exactly what would resonate with our audience.',
      initial: 'M',
      before: '85K',
      after: '4.3M',
      metric: 'Social Media Views',
      delay: 'fade-in-delay-4',
    },
  ];

  return (
    <section className="bg-ai-transform py-24 text-center relative overflow-hidden image-part">
      <div className="particle-bg">
        <div className="particle" style={{ width: '6px', height: '6px', top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '4px', height: '4px', top: '20%', left: '30%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '5px', height: '5px', top: '40%', left: '50%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ width: '3px', height: '3px', top: '60%', left: '70%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ width: '6px', height: '6px', top: '80%', left: '20%', animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 fade-in-up neon-text">
          Artist Success Stories
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1">
          Delivering Measurable Results
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className={`neon-card glass-panel fade-in-up ${story.delay}`}>
              <blockquote className="text-lg md:text-xl text-gray-300 italic mb-6">
                {story.quote}
              </blockquote>
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-gray-900 font-bold text-xl neon-text">
                  {story.initial}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">Verified Artist</p>
              <div className="flex justify-center items-center space-x-4">
                <div>
                  <p className="text-gray-400 text-sm">Before</p>
                  <p className="text-xl font-bold text-gray-300">{story.before}</p>
                </div>
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">After</p>
                  <p className="text-xl font-bold text-cyan-400 neon-text">{story.after}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mt-4">{story.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;