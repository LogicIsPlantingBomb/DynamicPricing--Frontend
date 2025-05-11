import React from 'react';

function Hero() {
  return (
    <section id="home" className="py-20">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Smarter Pricing<br />Starts Here
      </h1>
      <p className="text-2xl max-w-2xl mb-8">
        Leverage Bayesian Optimization to stay ahead of market trends.
      </p>
      <a 
        href="#features" 
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-block bg-[#10b0e7] text-white px-8 py-4 text-xl rounded mb-16 hover:bg-[#0d9ad0] transition-colors"
      >
        Try Profit Optic Free
      </a>
    </section>
  );
}

export default Hero;
