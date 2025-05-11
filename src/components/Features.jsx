import React from 'react';

function Features() {
  const features = [
    {
      icon: '📈',
      title: 'Real-time Pricing Engine',
      text: 'Market Trend Analysis with dynamic adjustments based on real-time demand',
    },
    {
      icon: 'AB',
      title: 'Automated A/B Testing',
      text: 'Refine pricing strategies with data-driven testing and consumer behavior insights',
    },
    {
      icon: '⚙️',
      title: 'Revenue Optimization',
      text: 'Comprehensive reports with predictive modeling for accurate demand forecasting',
    },
    {
      icon: '🔍',
      title: 'Consumer Behavior Integration',
      text: 'Behavioral analytics that refine pricing using buying and return trends',
    },
    {
      icon: '⚡',
      title: 'Real-Time Adaptability',
      text: 'Market-responsive pricing that syncs inventory for immediate updates',
    },
    {
      icon: '🤖',
      title: 'AI Negotiation Bots',
      text: 'Advanced AI-powered tools for transparent pricing negotiations',
    },
  ];

  return (
    <section id="features" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white text-[#00487c] p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
