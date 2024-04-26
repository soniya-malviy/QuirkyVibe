import React from 'react';
import { Carousel } from 'primereact/carousel';
import ProductCard from './ProductCard';

const ProductCarousel = ({ title, products }) => {
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 },
    ];

    return (
        <div className="card">
            <h1 className="font-bold text-3xl m-10 text-center">{title}</h1>
            <Carousel
                value={products}
                numVisible={4}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={5000}
                itemTemplate={(product) => <ProductCard product={product} />}
            />
        </div>
    );
};

export default ProductCarousel;
