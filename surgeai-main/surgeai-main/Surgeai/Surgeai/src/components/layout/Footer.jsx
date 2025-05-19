import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ai-transform py-16 text-center relative overflow-hidden">
      <div className="particle-bg">
        <div className="particle" style={{ width: '6px', height: '6px', top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '4px', height: '4px', top: '20%', left: '30%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '5px', height: '5px', top: '40%', left: '50%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ width: '3px', height: '3px', top: '60%', left: '70%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ width: '6px', height: '6px', top: '80%', left: '20%', animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 rounded-xl fade-in-up">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-9 h-9 text-cyan-400 animate-spin-slow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"></path>
              </svg>
              <span className="text-3xl font-extrabold text-cyan-400 neon-text">Surge</span>
            </div>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              AI-powered TikTok growth for music artists. Automate your way to viral success.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 neon-text">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Resources</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 neon-text">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Support</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 neon-text">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Surge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;