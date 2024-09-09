import React from 'react';
import './Rooms.scss';

const Rooms = () => {
    return (
        <div className="rooms">
            <div className="rooms__content">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button className="explore-btn">Explore More</button>
            </div>

            <div className="rooms__carousel">
                <div className="carousel__item">
                    <img src="/Room-1.jpg" alt="Room 1" />
                    <div className="carousel__info">
                        <span className="carousel__number">01 — Bed Room</span>
                        <h3>Inner Peace</h3>
                        <button className="carousel__btn">→</button>
                    </div>
                </div>

                <div className="carousel__item">
                    <img src="/Room-2.jpg" alt="Room 2" />
                    <div className="carousel__info">
                        <span className="carousel__number">02 — Living Room</span>
                        <h3>Modern Comfort</h3>
                        <button className="carousel__btn">→</button>
                    </div>
                </div>

                <div className="carousel__controls">
                    <span className="carousel__dot active"></span>
                    <span className="carousel__dot"></span>
                    <span className="carousel__dot"></span>
                </div>
            </div>
        </div>
    );
};

export default Rooms;