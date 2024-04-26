import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p._id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="rounded overflow-hidden shadow-lg m-2 flex">
                <div className="w-1/2">
                    <img className="w-full h-auto" src={product.displayImage} alt={product.name}/>
                </div>

                <div className="w-1/2 px-4 py-4">
                    <div className="font-bold text-lg mb-1">{product.name}</div>
                    <p className="text-gray-700 text-sm">{product.subCategory}</p>
                    <p className="text-gray-900 text-base font-semibold">{product.price} INR</p>
                    <p className="text-gray-700 text-base">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

