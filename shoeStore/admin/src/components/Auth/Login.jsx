import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/shoeIcon.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/auth/login/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        alert(`Login failed: ${errorData.message || 'Unknown error occurred.'}`);
        setIsLoading(false);
        return;
      }

      const responseData = await response.json();
      const { jwt } = responseData;

      if (jwt) {
        localStorage.setItem('jwt', jwt);
        alert('Login successful!');
        navigate('/');
      } else {
        console.error('JWT token missing in response:', responseData);
        alert('Login successful, but no token received.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img src={logo} className="h-20 mx-auto mb-4" alt="Logo" />
        <h2 className="text-2xl font-bold text-center text-[#9A1D20] mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mb-2 text-gray-700 text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A1D20]"
            required
          />
          <label htmlFor="password" className="block mb-2 text-gray-700 text-sm font-bold">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A1D20]"
            required
          />
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 rounded transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
