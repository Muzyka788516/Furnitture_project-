import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__image">
                <img src="banner.png" alt="New Collection" />
            </div>
            <div className="banner__content">
                <h4>New Arrival</h4>
                <h1>Discover Our New Collection</h1>
                <p>Discover stylish and functional furniture at Funiro.
                    We offer a wide range of high-quality pieces for every room in your home, combining modern design with comfort and durability. Transform your space with Funiro today!</p>
                <button className="banner__button">Buy Now</button>
            </div>
        </div>
    );
};

export default Banner;