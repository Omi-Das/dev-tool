import React from 'react';
import shoppingCartPng from './assets/shopping-cart.png'
import { toast } from 'react-toastify';

const Carts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)
    const handleDelete = (id) => {
        const updatedCarts = carts.filter(item => item.id !== id)
        setCarts(updatedCarts)
       toast.success("Item removed from cart")
    }
    const handlePayment = () => {
        setCarts([]);
      toast.success("Payment successful! Thank you for your purchase.")
    }

    return (
        <div className="p-10 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Your Cart</h1>

            {carts.length === 0 ? (
                // <img src={shoppingCartPng} alt="Shopping Cart" />
        <div>
            <p className="text-center text-2xl p-5">Cart is empty</p>
            <img src={shoppingCartPng} alt="Shopping Cart" className='' />

        </div>
            ) : (
                <>
                    <div className="space-y-5 mt-4">
                        {carts.map((item) => (
                            <div className="flex items-center justify-between rounded-lg p-3 bg-[#f4f6f8]" key={item.id}>
                              <div className='grid grid-cols-2 gap-2 items-center flex'>
                                  <div className="flex items-center w-[55px] h-[55px] border-amber-50 bg-white  rounded-full">
                                    <img className="w-[36px] h-[36px] ml-3  object-contain" src={item.icon} alt={item.title} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-[#101627] font-bold">{item.name}</h2>
                                    <div className="text-[#627382] font-bold">${item.price}</div>
                                </div>
                              </div>
                                  <button 
                                        className=" text-red-500"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Remove
                                    </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between align-items text-[#627382] p-5 mt-5  text-xl font-bold">
                        <div>Total</div>
                        <div>${totalPrice}</div>
                    </div>

                    <button
                        className="btn w-full mt-5 bg-gradient-to-r from-[#4f39f6] to-blue-400 text-white text-2xl rounded-full"
                        onClick={handlePayment}
                    >
                        Proceed to Checkout
                    </button>
                </>
           )
            }
        </div>
    );
};

export default Carts;
