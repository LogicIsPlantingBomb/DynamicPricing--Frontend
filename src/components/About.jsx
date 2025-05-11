import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">About Our Solution</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Problem Statement</h3>
          <div className="bg-white/10 p-6 rounded-lg mb-8">
            <p className="mb-4">Online retail struggles with balancing pricing, inventory, and demand due to perishability and fluctuating consumer behavior, requiring adaptive pricing and inventory solutions.</p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Key Challenges</h3>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Demand & Pricing Issues</h4>
              <p>Unpredictable demand complicates pricing and leads to stockouts or excess inventory.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Spoilage Risks</h4>
              <p>Poor pricing or overstocking leads to spoilage and losses.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Inventory & Discount Management</h4>
              <p>Difficulty balancing regular and discount sales.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lack of Consumer Insights</h4>
              <p>Insufficient data to optimize pricing and inventory.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Proposed Methodology</h3>
          <div className="bg-white/10 p-6 rounded-lg mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-xl">✓</span>
                <span><strong>Dynamic Adjustments:</strong> Prices optimize in real-time based on demand.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">✓</span>
                <span><strong>Inventory Control:</strong> Differentiates between regular and discount stages.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">✓</span>
                <span><strong>Behavioral Analytics:</strong> Refines pricing using buying and return trends.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">✓</span>
                <span><strong>Predictive Modelling:</strong> Uses GBM and stacked models for more accurate demand forecasting.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">✓</span>
                <span><strong>Real-Time API:</strong> Syncs inventory for immediate price updates.</span>
              </li>
            </ul>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Novelty of Approach</h3>
          <div className="bg-white/10 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-xl">★</span>
                <span><strong>Consumer Behavior Integration</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">★</span>
                <span><strong>Real-Time Adaptability</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">★</span>
                <span><strong>AI-powered Negotiation Bots</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">★</span>
                <span><strong>Real-Time Pricing Transparency</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
