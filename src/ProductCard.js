import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {


    return (
        <Link to={`/product/${product._id}`}>
            <div className="min-w-xl rounded overflow-hidden shadow-lg m-2 transition-transform transform hover:scale-105">
                <img className="w-full h-128 object-cover" src={product.displayImage} alt={product.name} />
                <div className="px-4 py-4">
                    <div className="font-bold text-lg mb-1">{product.name}</div>
                    <p className="text-gray-700 text-sm">{product.subCategory}</p>
                    <p className="text-gray-900 text-base font-semibold">{product.price} INR</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
