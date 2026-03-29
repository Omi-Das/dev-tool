import React from 'react';
import bannerImg from './assets/banner.png'
import circlePng from './assets/Group 5 (1).png'
import playPng from './assets/Play.png'
const Section = () => {
    return (
        <div className='mx-auto p-30'>
            <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-24 bg-white gap-12">
  <div className="max-w-xl text-left">
    <div className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6 border border-purple-200">
      <span className="mr-2"><img src={circlePng} alt="Circle" /></span> New: AI-Powered Tools Available
    </div>

    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
      Supercharge Your Digital Workflow
    </h1>

    <p className="text-gray-500 text-lg mb-4">
      Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
    </p>
    
    <a href="#" className="text-gray-500 underline mb-8 block hover:text-purple-600 transition">
      Explore Products
    </a>

    <div className="flex flex-wrap gap-4">
      <button className="bg-[#6333FF] text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition">
        Explore Products
      </button>
      <button className="flex items-center gap-2 border border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition">
        <span><img src={playPng} alt="playButton" /></span> Watch Demo
      </button>
    </div>
  </div>

  <div className="w-full lg:w-1/2">
    <img 
      src={bannerImg}
      alt="Hero Illustration" 
      className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
    />
  </div>
</section>

        </div>
    );
};

export default Section;