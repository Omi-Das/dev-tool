import React from 'react';
import shoppingCart from './assets/shopping-cart.png';
import { MdMenu } from 'react-icons/md';
const Navbar = ({ carts, setCarts }) => {
    return (
  

<div className="navbar bg-base-100 shadow-sm mx-auto flex flex-wrap justify-between items-center px-4 md:px-10 py-4 md:py-2">
  
  <div className="flex items-center justify-between w-full md:w-auto">
    <div className="flex items-center gap-1">
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <MdMenu className="w-6 h-6" />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
          <li><a href='/'>Products</a></li>
          <li><a href='/'>Features</a></li>
          <li><a href='/'>Pricing</a></li>
          <li><a href='/'>Testimonials</a></li>
          <li><a href='/'>FAQ</a></li>
        </ul>
      </div>
      <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6333FF] to-[#A855F7] bg-clip-text text-transparent">
        DigiTools
      </p>
    </div>
  </div>

  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-600">
      <li><a href='/' className="hover:text-[#6333FF]">Products</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Features</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Pricing</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Testimonials</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">FAQ</a></li>
    </ul>
  </div>

  <div className="flex items-center justify-between md:justify-end gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0  md:border-t-0 pt-3 md:pt-0"> 
    <div className="indicator ml-2">
      <img src={shoppingCart} alt="shoppingCart" className="w-6 h-6" />
      <span className={`indicator-item badge badge-sm bg-red-600 text-white ${carts.length === 0 ? "hidden" : ""}`}>
        {carts.length}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <a className="font-medium text-gray-700 hover:text-black cursor-pointer text-sm">
        Login
      </a>
      <button className="btn bg-[#6333FF] hover:bg-[#4f28cc] text-white border-none rounded-full px-5 min-h-0 h-10 text-sm">
        Get Started
      </button>
    </div>
  </div>

</div>



    );
};

export default Navbar;