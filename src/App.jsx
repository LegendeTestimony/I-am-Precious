import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import './App.css';
import Navbar from './components/navbar.components.jsx';
import HomePage from './pages/homePage.pages.jsx';
import AboutPage from './pages/aboutPage.Pages.jsx';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollToTop component to handle scrolling to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  
  useEffect(() => {
    // Initialize smooth scrolling
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.5, // Adjust this value to control smoothness
      effects: true // Enables special effects like parallax scrolling
    });
    
    // Cleanup function
    return () => {
      if (smoother) smoother.kill();
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <Router>
      <ScrollToTop />
      <div className="font-dmsans">
        {/* Fixed position container for navbar to stay outside scroll */}
        <div className="px-[4%] relative z-10">
          <Navbar />
        </div>
        
        {/* Smooth scroll wrapper */}
        <div id="smooth-wrapper" ref={smoothWrapperRef} className="w-full">
          <div id="smooth-content" ref={smoothContentRef}>
            <div className="px-[4%]">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<div className="min-h-screen">Projects Page</div>} />
                <Route path="/gallery" element={<div className="min-h-screen">Gallery Page</div>} />
                <Route path="/blog" element={<div className="min-h-screen">Blog Page</div>} />
                <Route path="/impact" element={<div className="min-h-screen">Impact Metrics Page</div>} />
                <Route path="/reports" element={<div className="min-h-screen">Reports Page</div>} />
                <Route path="/community" element={<div className="min-h-screen">Community Page</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;