import React from 'react';
import shoppingCart from './assets/shopping-cart.png';
const Navbar = ({ carts, setCarts }) => {
    return (
    //   <div className="w-[800px]">
    //       <div className='text-center text-white bg-amber-700'>
    //         Omi Das is a student 
    //     </div>
    //   </div>
  <div className="navbar bg-base-100 h-10px shadow-sm mx-auto flex justify-between items-center px-50">
  {/* Left Side: Brand Name */}
  <div className="pl-6">
    <a className="text-2xl font-bold text-[#6333FF] cursor-pointer">DigiTools</a>
  </div>

  {/* Middle: Navigation Links (Hidden on small screens) */}
  <div className="flex justify-between items-center hidden lg:block">
    <ul className="menu menu-horizontal px-1 gap-4 font-medium text-gray-600 pl-45">
      <li><a href='/' className="hover:text-[#6333FF]">Products</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Features</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Pricing</a></li>
      <li><a href='/' className="hover:text-[#6333FF]">Testimonials</a></li>
      <li><a href='/'className="hover:text-[#6333FF]">FAQ</a></li>
    </ul>
  </div>

  {/* Right Side: Cart, Login & CTA */}
  <div className="flex items-center justify-end gap-4 ml-auto mr-3 "> 
  {/* shooping cart icon*/}
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <div className="indicator">
    {/* shopping cart image jate chutu boro na hoi soman rakhlam
     */}
        <img src={shoppingCart} alt="shoppingCart" className="w-6 h-6" />
           <span class="badge badge-sm indicator-item bg-red-500 text-white rounded-full">{carts.length}</span>
      </div>
    </div>
  </div>

  {/* login link*/}
  <a className="hidden sm:block font-medium text-gray-700 hover:text-black cursor-pointer">
    Login
  </a>

  {/* get started button */}
  <button className="btn bg-[#6333FF] hover:bg-[#4f28cc] text-white border-none rounded-full px-6 min-h-0 h-10">
    Get Started
  </button>
</div>

</div>

    );
};

export default Navbar;