import React from 'react'
import './Header.scss';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img src="/logo.png" alt="Furniro" />
                    <span>Furniro</span>
                </div>
                <nav className="header__nav">
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </nav>
                <div className="header__icons">
                    <FaUser className="icon" />
                    <FaSearch className="icon" />
                    <FaHeart className="icon" />
                    <FaShoppingCart className="icon" />
                </div>
            </div>
        </header>
    )
}

export default Header