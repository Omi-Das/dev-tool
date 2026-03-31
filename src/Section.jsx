import React from 'react';
import bannerImg from './assets/banner.png'
import circlePng from './assets/Group 5 (1).png'
import playPng from './assets/Play.png'
const Section = () => {
    return (
     <div className="mx-auto p-4 md:p-12 lg:p-20">
  <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 lg:px-12 bg-white gap-12 lg:gap-16">
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-xs md:text-sm font-medium mb-6 border border-purple-200">
        <span className="mr-2">
          <img src={circlePng} alt="Circle" className="w-4 h-4" />
        </span>
        New: AI-Powered Tools Available
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
        Supercharge Your <br className="hidden md:block" /> Digital Workflow
      </h1>

      <p className="text-gray-500 text-lg mb-4 max-w-lg">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
      </p>

      <a href="#" className="text-gray-500 underline mb-8 block hover:text-purple-600 transition">
        Explore Products
      </a>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button className="bg-[#6333FF] text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200">
          Explore Products
        </button>
        <button className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
          <img src={playPng} alt="playButton" className="w-5 h-5" />
          Watch Demo
        </button>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
      <div className="relative w-full max-w-md lg:max-w-full">
        <img
          src={bannerImg}
          alt="Hero Illustration"
          className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-auto lg:aspect-square"
        />
      </div>
    </div>
  </section>
</div>

    );
};

export default Section;