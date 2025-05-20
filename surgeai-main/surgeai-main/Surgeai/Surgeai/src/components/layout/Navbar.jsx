import React, { forwardRef } from 'react';

const Navbar = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="capsule-header">
      <div className="flex items-center capsule-header2">
        <div className="flex items-center space-x-4 fade-in-up">
          <svg
            className=""
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
            />
          </svg>
          <span className="surge-text">Surge</span>
        </div>
        <div className="ml-12 flex space-x-8 items-center">
          <a href="/" className='nav-links'>
            Home
          </a>
          <a href="/case-studies" className='nav-linkss'>
            Case Studies
          </a>
          <a href="/pricing" className='nav-links1'>
            Pricing
          </a>
          <a href="/faq"className='nav-links2'>
            FAQ
          </a>
        </div>
          <div>
          <button
            className="demo-btn"
          >
            Request Demo
          </button>
          </div>
      </div>
    </nav>
  );
});

export default Navbar;
