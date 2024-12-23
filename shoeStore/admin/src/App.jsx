import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Table from './components/Table';
import AdminLogin from './components/AdminLogin';
import Auth from './components/Auth/Auth';

function App() {
    const [jwt, setJwt] = useState(() => localStorage.getItem('jwt'));

    return (
        <>
            {jwt ? (
                <Router>
                    <div className="App flex">
                        <Navigation />
                        <div className="w-4/5">
                            <Routes>
                                {/* Authenticated Routes */}
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/table" element={<Table />} />
                                <Route path="/calendar" element={<Calendar />} />
                                {/* Redirect /login to dashboard if already logged in */}
                                <Route path="/login" element={<Navigate to="/dashboard" />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            ) : (
                <Router>
                    <Routes>
                        {/* Unauthenticated Routes */}
                        <Route path="/login" element={<Auth />} />
                    
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Router>
            )}
        </>
    );
}

export default App;
