import React from 'react';
import './Furnituro.scss';

const Furnituro = () => {
    return (
        <div className="furnituro">
            <h2>Share your setup with <span>#FuniroFurniture</span></h2>
            <div className="furnituro__gallery">
                <div className="gallery__item">
                    <img src="/R-7.jpg" alt="Image 1" />
                </div>
                <div className="gallery__item">
                    <img src="/R-2.jpg" alt="Image 2" />
                </div>
                <div className="gallery__item">
                    <img src="/R-3.jpg" alt="Image 3" />
                </div>
                <div className="gallery__item">
                    <img src="/R-4.jpg" alt="Image 4" />
                </div>
                <div className="gallery__item">
                    <img src="/R-5.jpg" alt="Image 5" />
                </div>
                <div className="gallery__item">
                    <img src="/R-6.jpg" alt="Image 6" />
                </div>
                <div className="gallery__item">
                    <img src="/R-1.jpg" alt="Image 7" />
                </div>
            </div>
        </div>
    );
};

export default Furnituro;
