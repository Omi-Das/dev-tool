import React from 'react';

const Workflow = () => {
    return (
        <section className="w-full bg-[#8b31ff] py-24 px-5 text-center text-white border-none block m-0">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready To Transform Your Workflow?
                </h2>
                
                <div className="text-purple-100 mb-10 space-y-1">
                    <p className="text-lg opacity-90">Join thousands of professionals who are already using Digitools to work smarter.</p>
                    <p className="text-lg opacity-90">Start your free trial today.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <button className="bg-white text-[#8b31ff] px-10 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all">
                        Explore Products
                    </button>
                    <button className="border border-white/60 text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                        View Pricing
                    </button>
                </div>

                <p className="text-sm text-purple-200/70">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Workflow;