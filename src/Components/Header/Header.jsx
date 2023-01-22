import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBlok from '../CartBlok/CartBlok';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <NavLink to='/' className="header__store-title">
                    Game Store
                </NavLink>
            </div>
            <div className="wrapper header__card-btn-wrapper">
                <CartBlok/>
            </div>
        </div>
    );
};

export default Header;