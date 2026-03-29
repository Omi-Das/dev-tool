import React from 'react';
import shoppingCart from './assets/shopping-cart.png';
const Navbar = () => {
    return (
    //   <div className="w-[800px]">
    //       <div className='text-center text-white bg-amber-700'>
    //         Omi Das is a student 
    //     </div>
    //   </div>
  <div className="navbar bg-base-100 p-2 md:p-2 h-10px shadow-sm mx-auto">
  {/* Left Side: Brand Name */}
  <div className="flex-1">
    <a className="text-2xl font-bold text-[#6333FF] cursor-pointer">DigiTools</a>
  </div>

  {/* Middle: Navigation Links (Hidden on small screens) */}
  <div className="">
    <ul className="menu menu-horizontal px-1 gap-4 font-medium text-gray-600">
      <li><a className="hover:text-[#6333FF]">Products</a></li>
      <li><a className="hover:text-[#6333FF]">Features</a></li>
      <li><a className="hover:text-[#6333FF]">Pricing</a></li>
      <li><a className="hover:text-[#6333FF]">Testimonials</a></li>
      <li><a className="hover:text-[#6333FF]">FAQ</a></li>
    </ul>
  </div>

  {/* Right Side: Cart, Login & CTA */}
  <div className='grid grid-cols-1'>
    <div className="flex-none gap-4 items-center ml-4">
    {/* Shopping Cart Icon */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
         <img src={shoppingCart} alt="shoppingCart" />
        </div>
      </div>
    </div>

    {/* Login Link */}
   <div>
     <a className="hidden sm:block font-medium text-gray-700 hover:text-black cursor-pointer">Login</a>
   </div>

    {/* Get Started Button */}
   <div>
     <button className="btn bg-[#6333FF] hover:bg-[#4f28cc] text-white border-none rounded-full px-6">
      Get Started
    </button>
   </div>
  </div>
  </div>
</div>

   
    );
};

export default Navbar;