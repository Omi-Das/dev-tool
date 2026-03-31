import React, { use, useState } from 'react';
import checkPng from './assets/Check.png'
import { toast } from 'react-toastify';
const Artist = ({ product, carts, setCarts }) => {
    const [isAdded, setIsAdded] = useState(false);
    const handleAddToCart = () => {
    setIsAdded(true);
          const isFound = carts.find(item => item.id === product.id)

          if(isFound){
            toast.error("Item already in cart")
            return;
          }
            setCarts([...carts, product]);
            // setIsAdded(true);
            toast.success("Item added to cart")
      
    }
    return (
        <div>
             <div className="card w-full max-w-sm bg-white border border-gray-100 shadow-lg p-6 rounded-3xl relative flex flex-col gap-1 justify-between mx-auto w-[380px] h-[400]">
      
      {/* Top Section: Icon & Tag */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center shadow-sm object-contain">
          <img src={product.icon} alt="icon" className="w-8 h-8 object-contain" />
        </div>
        
        {/* Dynamic Tag (e.g., Best Seller) */}
        {product.tag && (
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm ml-1 font-medium">
          /{product.period === "monthly" ? "Mo" : "One-time"}
        </span>
      </div>

      {/* Dynamic Features List */}
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
            <img src={checkPng} alt="check" className="w-4 h-4 object-contain" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button  onClick={handleAddToCart} className="w-full bg-gradient-to-r from-[#4f39f6] to-[#6a629e] hover:bg-[#5229d6] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-md active:scale-95">
       { isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
        </div>
    );
};

export default Artist;