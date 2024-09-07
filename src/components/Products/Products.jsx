import React from 'react';
import './Products.scss';

const products = [
    {
        id: 1,
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        originalPrice: 'Rp 3.500.000',
        discount: '-30%',
        image: '/img-1.jpg',
    },
    {
        id: 2,
        name: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        originalPrice: null,
        discount: null,
        image: '/img-1.jpg',
    },
    {
        id: 3,
        name: 'Lolito',
        description: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        originalPrice: 'Rp 14.000.000',
        discount: '-50%',
        image: '/img-3.jpg',
    },
    {
        id: 4,
        name: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        originalPrice: null,
        discount: 'New',
        image: '/img-4.jpg',
    },
    {
        id: 5,
        name: 'Grifo',
        description: 'Night lamp',
        price: 'Rp 1.500.000',
        originalPrice: null,
        discount: null,
        image: '/img-5.jpg',
    },
    {
        id: 6,
        name: 'Muggo',
        description: 'Small mug',
        price: 'Rp 150.000',
        originalPrice: null,
        discount: 'New',
        image: '/img-6.jpg',
    },
    {
        id: 7,
        name: 'Pingky',
        description: 'Cute bed set',
        price: 'Rp 7.000.000',
        originalPrice: 'Rp 14.000.000',
        discount: '-50%',
        image: '/img-7.jpg',
    },
    {
        id: 8,
        name: 'Potty',
        description: 'Minimalist flower pot',
        price: 'Rp 500.000',
        originalPrice: null,
        discount: 'New',
        image: '/img-8.jpg',
    },
];

const Products = () => {
    return (
        <div className="products">
            <h2>Our Products</h2>
            <div className="products__grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-card__image">
                            {product.discount && (
                                <span className={`product-card__badge ${product.discount === 'New' ? 'new' : ''}`}>
                                    {product.discount}
                                </span>
                            )}
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="product-card__price">
                            <span>{product.price}</span>
                            {product.originalPrice && (
                                <span className="product-card__original-price">{product.originalPrice}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className="show-more">Show More</button>
        </div>
    );
};

export default Products;