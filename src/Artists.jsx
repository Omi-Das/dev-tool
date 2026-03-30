import React, { use } from 'react';
import Artist from './Artist';

const Artists = ({productPromise}) => {
    const products = use(productPromise);
    return (
        <div>
            {/* <p>Omi Das</p> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between mt-6'>
                {
                    products.map(product => <Artist key={product.id} product={product}></Artist>)
                }
            </div>
        </div>
    );
};

export default Artists;