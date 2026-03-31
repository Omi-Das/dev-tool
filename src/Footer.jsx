import React from 'react';

const Footer = () => {
    return (
        <div >
             <footer className="bg-[#0B1120] text-gray-400 ">
      <div className="h-[4px] w-full mt-4"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Social Links</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
              {/* Facebook */}
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </div>
              {/* Twitter */}
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition">
                <span className="text-white font-bold text-lg"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>

      {/* Bottom Glowing Border */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#4F39F6] to-[#A05CFF]"></div>
    </footer>
        </div>
    );
};

export default Footer;