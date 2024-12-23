import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Attempting login with:', { username, password }); // Debugging log
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password,
            });
    
            console.log('Response:', response.data); // Log the response data
    
            // Adjusting based on the expected response structure
            if (response.status === 200 && response.data.success) {
                localStorage.setItem('authenticated', 'true');
                navigate('/dashboard');
            } else {
                setError(response.data.message || 'Invalid username or password'); // Handle invalid login
            }
        } catch (err) {
            console.error('Login error:', err); // Log the error details
            if (err.response) {
                // Server responded with a status other than 200
                setError(err.response.data.message || 'Invalid username or password');
            } else {
                setError('Network error, please try again later');
            }
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <h1 className="logo text-[#9A1D20] font-bold text-2xl md:text-3xl">Hamro<span className="text-[#FFAA1D]">Jutta</span></h1>
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-black text-center">Admin Panel Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;