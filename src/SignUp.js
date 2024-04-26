import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SignUp = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const projectID = "f104bi07c490"; // Replace with your actual project ID

    const userData = {
      name: name,
      email: email,
      password: password,
      appType: "ecommerce"
    };

      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'projectID': projectID
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if(data.status === "success"){
        navigate(("/login"))
      }


  };

  return (
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100">
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="relative w-full max-w-md">
            <h1 className="text-center font-bold text-2xl mb-4">Welcome to the world of Bewakoof!</h1>
            <img
                src="homepage.png"
                alt="Bewakoof Welcome"
                className="max-w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex-1 max-w-md w-full bg-white shadow-lg rounded-lg p-8 m-4">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block mb-2 text-lg">
                Password
              </label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Create your new account
            </button>
          </form>
          <p className="text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
  );
};

export default SignUp;
