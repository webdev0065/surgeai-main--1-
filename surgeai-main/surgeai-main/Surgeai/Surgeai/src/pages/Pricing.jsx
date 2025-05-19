// src/components/sections/Pricing.jsx
import React from 'react';
import PricingCard from "../components/sections/PricingCard"
import FAQSection from '../components/sections/FAQSection';
import Footer from "../components/layout/Footer"
 
const Pricing = () => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-6 fade-in-up neon-text bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent scanline-glitch">
          Pricing Plans
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1 neon-text">
          Choose the right package for your music promotion needs.
        </p>
 
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
          <PricingCard
            shape="circle"
            icon={<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path></svg>}
            plan="Silver"
            price="$10,000"
            description="For emerging artists ready to establish a dominant social presence."
            features={['80,000 Posts', '4.5M - 8.5M Views', 'Private Support Channel', '500 Fan Pages (500-5k followers each)', 'AI Model Fine-tuning', 'Basic Analytics Dashboard']}
            backgroundImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            delay={0}
          />
          <PricingCard
            shape="hexagon"
            icon={<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>}
            plan="Gold"
            price="$40,000"
            description="For established artists seeking aggressive growth and market dominance."
            features={['350,000 Posts', '12.5M - 18.5M Views', 'Dedicated Support Manager', '2000 Fan Pages (1k-10k followers each)', 'Custom AI Model Development', 'Advanced Analytics Suite', 'Priority Content Generation']}
            backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            delay={1}
          />
          <PricingCard
            shape="octagon"
            icon={<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"></path></svg>}
            plan="Platinum"
            price="$80,000"
            description="Elite tier for major labels and artists demanding maximum impact."
            features={['800,000 Posts', '26M - 35M Views', '24/7 VIP Support Team', '5000 Fan & Niche Pages (1k-20k followers each)', 'Proprietary AI Model Access', 'Real-time Analytics & Insights', 'Exclusive Strategy Sessions', 'Multi-Platform Campaign Integration']}
            backgroundImage="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            delay={2}
          />
        </div>
 
        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions About Pricing"
          faqs={[
            { question: 'Are there any hidden fees?', answer: 'No, our pricing is all-inclusive. Once you select a package, there are no additional costs unless you opt for add-on services like dedicated pages.' },
            { question: 'Do you offer refunds?', answer: "We stand by our results. If a campaign fails to deliver within the promised view range, we'll provide additional posts to meet the guaranteed metrics." },
            { question: 'Can I upgrade my plan mid-campaign?', answer: "Yes, you can upgrade to a higher tier at any point. We'll prorate the difference and extend your campaign accordingly." },
            { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, wire transfers, and cryptocurrency payments for your convenience and privacy.' },
          ]}
        />
 
        {/* Call to Action */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-100 mb-6 fade-in-up neon-text">Ready to Amplify Your Music?</h3>
          <p className="text-lg text-gray-300 mb-8 fade-in-up fade-in-delay-1 neon-text">Select the plan that fits your goals and start seeing results within weeks.</p>
          <a href="#" className="cta-button text-lg fade-in-up fade-in-delay-2">Get Started Now</a>
        </div>
      </div>
 
      {/* Footer */}
      <Footer />
    </section>
  );
};
 
export default Pricing;