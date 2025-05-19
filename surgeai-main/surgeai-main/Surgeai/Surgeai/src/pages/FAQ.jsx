// src/components/sections/FAQ.jsx
import React from 'react';
import FAQSection from '../components/sections/FAQSection';
import Footer from "../components/layout/Footer";
 
const FAQ = () => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-6 fade-in-up neon-text bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent scanline-glitch">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up fade-in-delay-1 neon-text">
          Everything you need to know about Surge's AI-powered music promotion platform.
        </p>
 
        <FAQSection
          title="Frequently Asked Questions" // Added title prop for consistency
          faqs={[
            { question: 'How does Surge generate videos?', answer: 'Surge uses proprietary AI models to create engaging, viral-ready videos by analyzing your music’s rhythm, genre, and audience preferences. The AI generates visually stunning edits with effects, transitions, and captions tailored for TikTok.' },
            { question: 'Are my views based on views on social or streams?', answer: 'Views are primarily based on social media engagement (e.g., TikTok video views). For Spotify campaigns, we track streams separately and provide detailed analytics for both metrics.' },
            { question: 'Which platforms are live right now?', answer: 'Surge currently supports TikTok and Spotify as its primary platforms. We’re actively working on expanding to Instagram Reels and YouTube Shorts, with beta access available for select users.' },
            { question: 'What happens to the original sound on TikTok?', answer: 'Your original sound remains intact and is credited to your TikTok account. Surge ensures that the sound is properly linked so you retain ownership and gain visibility as the creator.' },
            { question: 'Will these edits clear TikTok\'s originality check?', answer: 'Yes, Surge’s AI-generated edits are designed to meet TikTok’s originality guidelines. We use unique visual elements and avoid repetitive templates to ensure your content passes the check.' },
            { question: 'How quickly will I see results?', answer: 'Most artists see initial results within 48-72 hours of campaign launch, with views and engagement steadily increasing over the first two weeks as the algorithm amplifies your content.' },
            { question: 'Do I need to have a large existing following?', answer: 'No, Surge is designed for artists at all levels. Whether you’re just starting or already established, our AI tailors campaigns to maximize growth based on your current audience size.' },
            { question: 'How do you measure campaign success?', answer: 'We measure success through key metrics like total views, engagement rate (likes, shares, comments), follower growth, and Spotify streams (if applicable). You’ll receive a detailed analytics dashboard to track progress.' },
            { question: 'What kind of music works best with Surge?', answer: 'Surge works best with music that has a strong beat or emotional hook, such as pop, hip-hop, EDM, and R&B. However, our AI can adapt to any genre by analyzing its unique characteristics.' },
            { question: 'Can I customize how my music is presented?', answer: 'Yes, you can provide input on the style, mood, and visual themes for your videos. Surge also offers pre-campaign consultations for Platinum-tier users to fully customize their promotion strategy.' },
          ]}
        />
      </div>
 
      <Footer />
    </section>
  );
};
 
export default FAQ;
 