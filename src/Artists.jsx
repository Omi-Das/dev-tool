import React, { use } from 'react';
import Artist from './Artist';

const Artists = ({productPromise, carts, setCarts}) => {
    const products = use(productPromise);
    return (
        <div>
            {/* <p>Omi Das</p> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mt-6'>
                {
                    products.map(product => <Artist key={product.id} product={product} carts={carts} setCarts={setCarts}></Artist>)
                }
            </div>
        </div>
    );
};

export default Artists;