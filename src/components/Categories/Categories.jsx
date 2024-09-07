import React from 'react';
import './Categories.scss';

const Categories = () => {
    const categories = [
        {
            title: 'Dining',
            image: '/Dining.jpg',
        },
        {
            title: 'Living',
            image: '/Living_2.jpg',
        },
        {
            title: 'Bedroom',
            image: '/Bedroom.jpg',
        },
    ];

    return (
        <div className="categories">
            <h2>Browse The Range</h2>
            <p>Large selection for the whole family.</p>
            <div className="categories__grid">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <img src={category.image} alt={category.title} />
                        <h3>{category.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;