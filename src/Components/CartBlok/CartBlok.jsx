import React from 'react';
import {BiCartAlt }from 'react-icons/bi'
import './CartBlok.css'

const CartBlok = () => {
    return (
        <div className='cart-blok'>
            <BiCartAlt size={25} className="cart-blok__icon"/>
            <span className='card-blok__total-prise'>4567 сом</span>
        </div>
    );
};

export default CartBlok;