import React from 'react';

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses just getting started with dynamic pricing",
      features: [
        "Real-time Pricing Engine",
        "Basic Market Trend Analysis",
        "Standard Reports",
        "Email Support"
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses ready to optimize their pricing strategy",
      features: [
        "Everything in Starter",
        "Automated A/B Testing",
        "Revenue Optimization Reports",
        "Behavioral Analytics",
        "Priority Support"
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full-featured solution for large businesses with complex pricing needs",
      features: [
        "Everything in Professional",
        "Advanced Bayesian Optimization",
        "AI Negotiation Bots",
        "Custom Integration",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <h2 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h2>
      <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
        Choose the perfect plan to optimize your pricing strategy and boost revenue
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 ${
              plan.highlighted ? 'border-4 border-[#10b0e7] relative' : ''
            }`}
          >
            {plan.highlighted && (
              <div className="bg-[#10b0e7] text-white py-1 px-4 absolute top-0 right-0 rounded-bl-lg font-medium">
                Most Popular
              </div>
            )}
            <div className="p-8 text-[#00487c]">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600"> {plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="border-t border-gray-200 pt-4 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-center py-3 px-6 rounded font-medium transition-colors ${
                  plan.highlighted 
                    ? 'bg-[#10b0e7] hover:bg-[#0d9ad0] text-white' 
                    : 'bg-[#00487c] hover:bg-[#003b65] text-white'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
