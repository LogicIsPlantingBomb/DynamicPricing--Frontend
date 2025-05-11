import React from 'react';

function Testimonial() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Boost revenue by 30%</h2>
          <p className="text-2xl italic mb-8">
            "Profit Optic has increased our revenue and saved us time. The dynamic pricing system adapted perfectly to our market's volatility."
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" 
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-[#00487c] hover:bg-[#003b65] text-white px-8 py-4 rounded font-bold transition-colors">
              Get Started
            </a>
            <a href="#pricing" 
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-white hover:bg-gray-200 text-[#00487c] px-8 py-4 rounded font-bold transition-colors">
              View Pricing
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/api/placeholder/400/320" 
            alt="Laptop showing revenue growth chart" 
            className="max-w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
