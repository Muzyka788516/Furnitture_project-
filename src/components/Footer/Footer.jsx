import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section footer__section--left">
                    <h2 className="footer__logo">Funiro.</h2>
                    <address className="footer__address">
                        400 University Drive Suite 200 Coral Gables, <br />
                        FL 33134 USA
                    </address>
                </div>

                <div className="footer__section">
                    <h3>Links</h3>
                    <ul className="footer__links">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Help</h3>
                    <ul className="footer__links">
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>

                <div className="footer__section footer__section--newsletter">
                    <h3>Newsletter</h3>
                    <div className="footer__newsletter">
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button className="footer__subscribe-btn">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>2023 Funiro. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
