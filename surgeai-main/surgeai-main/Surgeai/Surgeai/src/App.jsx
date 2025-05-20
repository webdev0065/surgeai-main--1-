import { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Cursor from './components/layout/Cursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import CallToAction from './components/sections/CallToAction';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import AIContent from './components/sections/AIContent';
import AITransform from './components/sections/AITransform';
import Distribution from './components/sections/Distribution';
import FanGrowth from './components/sections/FanGrowth';
import AdditionalBenefits from './components/sections/AdditionalBenefits';
import Facilities from './components/sections/Facilities';
import SuccessStories from './components/sections/SuccessStories';
import WhyChooseSurge from './components/sections/WhyChooseSurge';
import JoinElite from './components/sections/JoinElite';
import Footer from './components/layout/Footer';
import Pricing from './pages/Pricing';
import FAQ from "./pages/FAQ";
import CaseStudies from './pages/CaseStudies';
import './assets/styles/global.css';
 
function App() {
  const navbarRef = useRef(null);
  const mainRef = useRef(null);
 
  useEffect(() => {
    if (navbarRef.current && mainRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight + 32;
      mainRef.current.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);
 
  return (
    <Router>
      <div className="text-gray-100">
        {/* <Cursor /> */}
        <Navbar ref={navbarRef} />
        <main ref={mainRef}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
                <CallToAction />
                <Problem />
                <Solution />
                <AIContent />
                <AITransform />
                <Distribution />
                <FanGrowth />
                <AdditionalBenefits />
                <Facilities />
                <SuccessStories />
                <WhyChooseSurge />
                <JoinElite />
                <Footer />
              </>
            } />
    
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
 
export default App;
 