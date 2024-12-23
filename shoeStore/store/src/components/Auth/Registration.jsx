import React, { useState } from 'react';
import logo from '../../assets/shoeIcon.png';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    fullName: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        alert('Registration failed: ' + (errorData.message || 'Unknown error occurred.'));
        return;
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);

      // Extract user from responseData
      const user = responseData.data || responseData.user || responseData; // Adjust based on actual API structure
      if (user) {
        console.log('User:', user); // Properly logs the user data
        alert('Registration successful!');
        // Navigate to login page or dashboard
        navigate('/login');
      } else {
        console.error('User data is missing:', responseData);
        alert('Registration successful, but user data is missing.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md -mt-8">
        <div className="flex justify-center -mb-1">
          <img src={logo} className="h-20" alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-[#9A1D20] text-center">User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <label className="text-black ml-24">Already have an account?</label>
          <span onClick={() => navigate('/login')} className="text-blue-500 cursor-pointer ml-2">
            Login
          </span>
          <button
            type="submit"
            className="w-full bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:shadow-outline mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
