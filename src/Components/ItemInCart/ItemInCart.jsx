import React from 'react';
import './ItemInCart.css'

const ItemInCart = ({
    quantity = 0
}) => {
    
    return quantity > 0 ? (
        <div className='item-in-cart'>
            {quantity}          
        </div>
    ): null
};

export default ItemInCart;