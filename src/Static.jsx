import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Static = () => {
     const pricingData = [
        {
            id: 1,
            name: "Starter",
            description: "Perfect for getting started",
            price: 0,
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            id: 2,
            name: "Pro",
            description: "Best for professionals",
            price: 29,
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            id: 3,
            name: "Enterprise",
            description: "For teams and businesses",
            price: 99,
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];
    return (
         <section className="py-20 px-5 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {pricingData.map((plan) => (
                    <div 
                        key={plan.id} 
                        className={`relative p-8 rounded-2xl border ${plan.isPopular ? 'bg-[#7C3AED] text-white scale-105 shadow-xl' : 'bg-white border-gray-100 shadow-sm'}`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-100' : 'text-gray-400'}`}>{plan.description}</p>
                        
                        <div className="mb-8">
                            <span className="text-4xl font-bold">${plan.price}</span>
                            <span className={plan.isPopular ? 'text-purple-100' : 'text-gray-400'}>/Month</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm">
                                    <BiCheck size={18} className={plan.isPopular ? 'text-white' : 'text-green-600'} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                            plan.isPopular 
                            ? 'bg-white text-[#7C3AED] hover:bg-gray-100' 
                            : 'bg-[#7C3AED] text-white hover:bg-purple-700'
                        }`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Static;