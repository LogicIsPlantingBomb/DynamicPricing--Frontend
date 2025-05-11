import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#00487c] to-[#0272b6] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Testimonial />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}

export default App;
