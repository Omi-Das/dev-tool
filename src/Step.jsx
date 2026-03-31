import React from 'react';
import user from './assets/user.png'
import product from './assets/package.png'
import rocket from './assets/rocket.png'

const Step = () => {
    return (
        <section className="py-20 px-10 bg-white text-center">
            <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
            <p className="text-gray-500 mb-16">Start using premium digital tools in minutes, not hours.</p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative bg-white p-12 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">01</span>
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                        <img src={user} alt="User Icon" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Create Account</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                <div className="relative bg-white p-12 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">02</span>
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                        <img src={product} alt="Product Icon" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Choose Products</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                <div className="relative bg-white p-12 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">03</span>
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                        <img src={rocket} alt="Rocket Icon" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Start Creating</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Step;
