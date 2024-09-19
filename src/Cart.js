// Cart.js
import { useState, useEffect } from "react";
import { getProducts } from "./api/products/product";

const Cart = ({ cartItems, removeFromCart }) => {
    const [loading, setLoading] = useState(false);
    const [cartData, setCartData] = useState([]);

    const fetchCategoryItems = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://academics.newtonschool.co/api/v1/ecommerce/cart",
                {
                    headers: {
                        projectId: "akdf9k0yj45r",
                    },
                }
            );
            const data = await response.json();
            setCartData(data.data || []);
        } catch (error) {
            console.error("Failed to fetch cart items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategoryItems();
    }, []);

    useEffect(() => {
        // Example usage of getProducts, handle the promise
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                console.log(products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4 flex flex-col min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {loading ? (
                <p>Loading...</p>
            ) : cartData.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartData.map((item) => (
                        <div key={item._id} className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <img src={item.displayImage} alt={item.name} className="w-16 h-16 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">{item.price} INR</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
