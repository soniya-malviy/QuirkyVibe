import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ProductDetail from "./ProductDetail";
import { AuthProvider } from "./AuthContext";
import "./index.css";

const App = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products", {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
                const data = await response.json();
                setProducts(data.data);
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
            path:"/",
            element:<Header/>,
            children:[
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
                    element: <ProductDetail products={products} />,
                }
            ]
        }

    ]);

    return (
        <AuthProvider value={{ currentUser, setUser: setCurrentUser }}>
            <RouterProvider router={routes}/>

        </AuthProvider>
    );
};

export default App;
