import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {BiCartAlt }from 'react-icons/bi'
import './CartBlok.css'
import CartMenu from '../CartMenu/CartMenu';
import { calcTotalPrice } from '../utils';
import ItemInCart from '../ItemInCart/ItemInCart';

const CartBlok = () => {
    const [ isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector( state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    return (
        <div className='cart-blok'>
            <ItemInCart quantity={items.length}/>
            <BiCartAlt
                size={25} 
                className="cart-blok__icon" 
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            { totalPrice > 0 ? (
                <span className='card-blok__total-prise'>{totalPrice} сом.</span>
            ) : null }
            {isCartMenuVisible && <CartMenu items={items} onClick={ () => null}/> }
        </div>
    );
};

export default CartBlok;