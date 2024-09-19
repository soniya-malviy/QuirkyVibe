// Cart.js
import { useState, useEffect } from "react";



const Cart = ({ cartItems, removeFromCart }) =>{
    const [loading, setLoading] = useState(false);
    const fetchCategoryItems = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://academics.newtonschool.co/api/v1/ecommerce/cart",
                {
                    headers: {
                        projectId: "akdf9k0yj45r",
                    },
                    body: JSON.stringify({

                    })
                }
            );
            const data = await response.json();
            setLoading(false);
            return data.data;
        } catch (error) {
            setLoading(false);
            console.error("Failed to fetch cart items:", error);
            return [];
        }
    };
    fetchCategoryItems();
    // useEffect(() => {
    //     if (menDropdownOpen && menItems.length === 0) {
    //         fetchCategoryItems().then((items) => {
    //             setMenItems(items);
    //         });
    //     }
    //     if (womenDropdownOpen && womenItems.length === 0) {
    //         fetchCategoryItems().then((items) => {
    //             setWomenItems(items);
    //         });
    //     }
    // }, []);

    api.fetch("").then
    return (
        <div className="container mx-auto p-4 flex flex-col min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
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
