import React from 'react';

function HowItWorks() {
  const steps = [
    {
      icon: '💾',
      title: 'Input Pricing Data',
    },
    {
      icon: '🧮',
      title: 'Apply Bayesian Optimization',
    },
    {
      icon: '📊',
      title: 'Generate Strategic Insights',
    },
    {
      icon: '⚙️',
      title: 'Monitor & Optimize Continuously',
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center max-w-xs my-6 md:my-0">
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-xl font-medium">{step.title}</div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="text-5xl md:rotate-0 rotate-90 my-2 md:my-0 text-white font-bold">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
