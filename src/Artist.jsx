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
            toast.success("Item added to cart")
      
    }
    return (
        <div>
          <div className="card w-full max-w-sm bg-white border border-gray-100 shadow-lg p-6 rounded-[32px] relative flex flex-col justify-between mx-auto h-[500px]">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
            <img src={product.icon} alt="icon" className="w-8 h-8 object-contain" />
          </div>
          
          {product.tag && (
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase ${
              product.tag === 'Best Seller' ? 'bg-orange-50 text-orange-500' : 
              product.tag === 'Popular' ? 'bg-blue-50 text-blue-500' : 
              'bg-green-50 text-green-500'
            }`}>
              {product.tag}
            </span>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-baseline mb-6">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-xs ml-1 font-medium">
            /{product.period === "monthly" ? "Mo" : "One-time"}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-500 text-[13px] font-medium">
              <img src={checkPng} alt="check" className="w-4 h-4 opacity-70" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button  
        onClick={handleAddToCart} 
        className="w-full bg-gradient-to-r from-[#5b43f7] to-[#7b5ef7] hover:brightness-110 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-md active:scale-95 text-sm"
      >
       { isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
      </div>
    );
};

export default Artist;