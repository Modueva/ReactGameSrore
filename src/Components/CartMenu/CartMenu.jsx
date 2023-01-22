import React from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { calcTotalPrice } from '../utils';
import "./CartMenu.css"

const CartMenu = ({ items, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className="card-menu__game-list">
                {
                    items.length > 0 
                    ? items.map(game => (
                        <CartItem 
                            key={game.title} 
                            price={game.price} 
                            title={game.title} 
                            id={game.id}
                        />
                    )) 
                : 'Карзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="card-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} сом.</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                : 
                    null
            }
        </div>
    );
};

export default CartMenu;