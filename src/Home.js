import React from 'react';
import ProductList from './Products';
import "./index.css";

const Home = ({ products, isLoading, error }) => {
    return (
        <div className="container mx-auto mt-8">

            <ProductList products={products} isLoading={isLoading} error={error} />
        </div>
    );
};

export default Home;


