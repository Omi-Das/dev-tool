import React from 'react';
import shoppingCartPng from './assets/shopping-cart.png'

const Carts = ({ carts, setCarts }) => {

    return (
        <div className="p-10 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Your Cart</h1>

            {carts.length === 0 ? (
                // <img src={shoppingCartPng} alt="Shopping Cart" />
                <p className="text-center text-2xl p-5">Cart is empty</p>
            ) : (
                <>
                    <div className="space-y-5 mt-4">
                        {carts.map((item) => (
                            <div className="flex items-center justify-between border rounded-lg p-3" key={item.id}>
                                <div className="flex items-center gap-2">
                                    <img className="h-20 w-20 object-contain" src={item.image} alt={item.title} />
                                    <h2 className="text-xl font-bold">{item.title}</h2>
                                </div>

                                <div className="flex gap-10">
                                    <div className="text-3xl font-bold">${item.price}</div>
                                    <button 
                                        className="btn rounded-full text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between align-items text-[#627382] p-5 mt-5  text-xl font-bold">
                        <div>Total</div>
                        <div>0</div>
                    </div>

                    <button
                        className="btn w-full mt-5 bg-gradient-to-r from-[#4f39f6] to-[#6a629e] text-white text-2xl rounded-full"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Carts;
