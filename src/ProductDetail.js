import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const ProductDetail = ({ products, addToCart }) => {
    const { productId } = useParams();
    const product = products.find(p => p._id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    const productDetails = parse(product.description);

    return (
        <div className="container mx-auto px-4 py-8 flex justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl flex flex-col md:flex-row border border-gray-200">
                <div className="md:w-1/2">
                    <img className="w-full h-auto object-cover" src={product.displayImage} alt={product.name} />
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-900 mb-2">{product.name}</h1>
                        <p className="text-gray-500 text-sm mb-4">{product.subCategory}</p>
                        <p className="text-gray-900 text-xl font-bold mb-4">₹{product.price}</p>
                        <div className="text-gray-700 text-sm mb-6">{productDetails}</div>
                    </div>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition duration-300"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
