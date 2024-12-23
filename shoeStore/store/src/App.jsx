import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Login from './components/Login';
import Bag from './components/Bag';
import Auth from './components/Auth/Auth';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserOrderedItem from './components/UserOrderedItem';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [details, setDetails] = useState([]);
  const [jwt, setJwt] = useState(() => localStorage.getItem('jwt'));
  const jwtToken = localStorage.getItem('jwt'); 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchAllShoes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/shoes/getAllShoe',{
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
          },
        });
        console.log(response.data);
        
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching shoes:', error.response.data);
      }
    };

    fetchAllShoes();
  }, []);

  const handleOnClick = (itemId, quantity) => {
    const item = details.find((item) => item.id === itemId);
    alert(`Successfully added ${item.name}`);
    if (!cart.some((cartItem) => cartItem.id === itemId)) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      console.log('Item already in cart');
    }
  };

  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: jwt ? <Layout /> : <Auth />,
      children: jwt
        ? [
            { path: '/', element: <Homepage details={details} handleOnClick={handleOnClick} /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/orderedShoe', element: <UserOrderedItem/> },
            { path: '/cart', element: <Bag cart={cart} handleDelete={handleDelete} /> },
          ]
        : [],
    },
    { path: '/login', element: <Auth /> },
    { path: '/register', element: <Auth /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
