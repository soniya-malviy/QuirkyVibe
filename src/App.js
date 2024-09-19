// App.js

import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ProductDetail from "./ProductDetail";
import { AuthProvider } from "./AuthContext";
import Cart from "./Cart";
import "./index.css";
import Footer from "./Footer";
import { getProducts } from "./api/products/product";

const App = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item._id !== product._id));
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProducts();
                console.log(data);
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const routes = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Header />
                    <Footer />
                </>
            ),
            children: [
                {
                    path: "/",
                    element: <Home products={products} isLoading={isLoading} error={error} />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/signup",
                    element: <SignUp addUser={addUser} />,
                },
                {
                    path: "/product/:productId",
                    element: <ProductDetail products={products} addToCart={addToCart} />,
                },
                {
                    path: "/cart",
                    element: <Cart cartItems={cartItems} removeFromCart={removeFromCart} />,
                },
            ],
        },
    ]);

    return (
        <AuthProvider value={{ currentUser, setUser: setCurrentUser }}>
            <RouterProvider router={routes} />
        </AuthProvider>
    );
};

export default App;
