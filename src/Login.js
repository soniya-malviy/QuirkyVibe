import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'projectID': 'f104bi07c490', // Replace with your actual project ID
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        appType: 'ecommerce'
      })
    })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            const { token, data: userData } = data;
            localStorage.setItem('token', token);
            console.log(data)
            alert(`Login successful: ${userData.user.email}`); // Display user email or relevant information
            // Update the authentication state
            navigate('/'); // Navigate to home page on successful login
          } else {
            setError('Login failed. Please check your credentials.');
          }
        })
        .catch(() => {
          setError('Login failed. Please try again.');
        });
  };

  return (
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center'>
          <h1 className='text-2xl font-bold mb-6'>Log in into your account</h1>
          {error && <p className='text-red-500'>{error}</p>}
          <form onSubmit={login} className='space-y-4'>
            <input
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                placeholder='Email Address'
                className='w-full p-3 border border-gray-300 rounded-lg'
            />
            <input
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                placeholder='Password'
                className='w-full p-3 border border-gray-300 rounded-lg'
            />
            <button
                type="submit"
                className='w-full mt-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300'
            >
              Continue
            </button>
          </form>
          <p className='mt-4 text-gray-600'>
            Create new
            <span onClick={() => navigate('/signup')} className='text-blue-500 cursor-pointer underline'> Sign up here</span>
          </p>
        </div>
      </div>
  );
};

export default Login;
