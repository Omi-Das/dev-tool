import React from 'react';

const Block = () => {
    return (
        <div>
            <section className="bg-[#6333FF] py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around text-white gap-10 md:gap-4 ">
    
    {/* Item 1: Active Users */}
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90 uppercase tracking-wide">
        Active Users
      </p>
    </div>

    {/* Vertical Divider (Visible only on desktop) */}
    <div className="hidden md:block h-16 w-[1.5px] bg-white opacity-20"></div>

    {/* Item 2: Premium Tools */}
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90 uppercase tracking-wide">
        Premium Tools
      </p>
    </div>

    {/* Vertical Divider (Visible only on desktop) */}
    <div className="hidden md:block h-16 w-[1.5px] bg-white opacity-20"></div>

    {/* Item 3: Rating */}
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90 uppercase tracking-wide">
        Rating
      </p>
    </div>

  </div>
</section>

        </div>
    );
};

export default Block;