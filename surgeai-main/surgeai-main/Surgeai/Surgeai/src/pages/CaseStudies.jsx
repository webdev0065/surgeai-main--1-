// src/components/sections/CaseStudies.jsx
import React from 'react';
import CaseStudyCard from "../components/sections/CaseStudyCard";
import Footer from "../components/layout/Footer";
 
const CaseStudies = () => {
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
          <svg className="w-12 h-12 text-cyan-400 neon-glow pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a8 8 0 01-8 8 8 8 0 01-8-8m16 0a8 8 0 00-8-8 8 8 0 00-8 8m4 0h4"></path>
          </svg>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-6 fade-in-up neon-text bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent scanline-glitch">
          Case Studies
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1 neon-text">
          See how Surge has transformed the careers of artists with our AI-powered music promotion platform.
        </p>
 
        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
          <CaseStudyCard
            shape="circle"
            artist="Luna Vibe"
            image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            metrics={['15M Views', '500K New Followers', '2M Spotify Streams']}
            story="Luna Vibe, an emerging pop artist, used Surge's Silver package to promote her debut single. Within two weeks, her TikTok videos went viral, amassing 15 million views and driving significant streams on Spotify."
            delay={0}
          />
          <CaseStudyCard
            shape="hexagon"
            artist="DJ Electro"
            image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            metrics={['30M Views', '1M New Followers', '5M Spotify Streams']}
            story="DJ Electro leveraged Surge's Gold package to promote his latest EDM track. The campaign resulted in 30 million views across TikTok and a massive boost in his follower count, solidifying his presence in the EDM scene."
            delay={1}
          />
          <CaseStudyCard
            shape="octagon"
            artist="The Neon Collective"
            image="https://images.unsplash.com/photo-1511671786161-2b3f8a5a8e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            metrics={['50M Views', '2M New Followers', '10M Spotify Streams']}
            story="The Neon Collective, a band signed to a major label, used Surge's Platinum package for a multi-platform campaign. The result was 50 million views, exponential follower growth, and a top spot on Spotify charts."
            delay={2}
          />
        </div>
 
        {/* Call to Action */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-100 mb-6 fade-in-up neon-text">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-gray-300 mb-8 fade-in-up fade-in-delay-1 neon-text">
            Join Surge and amplify your music career with AI-powered promotion.
          </p>
          <a href="#" className="cta-button text-lg fade-in-up fade-in-delay-2">
            Get Started Now
          </a>
        </div>
      </div>
 
      <Footer />
    </section>
  );
};
 
export default CaseStudies;
 