import React from 'react';
import ProductCaroseul from './ProductCaroseul'; // Ensure the path is correct

const ProductList = ({ products, isLoading, error }) => {
    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching data: {error.message}</p>
            ) : (
                <div className="mt-16 p-4">
                    <ProductCaroseul title="Top Rated Products" products={products.filter(product => product.sellerTag === 'top rated')} />
                    <ProductCaroseul title="New Arrivals" products={products.filter(product => product.sellerTag === 'new arrival')} />
                    <ProductCaroseul title="Best Sellers" products={products.filter(product => product.sellerTag === 'best seller')} />
                </div>
            )}
        </div>
    );
};

export default ProductList;

