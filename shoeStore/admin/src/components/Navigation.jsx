import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    LayoutDashboard,
    Clock3,
    LogOut,
    Calendar 
} from 'lucide-react';

const navLinks = [
    {
        id: 0,
        path: '/dashboard',
        name: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 3,
        path: '/Table',
        name: "Table",
        icon: Clock3,
    },

    {
        id: 4,
        path: '/Calendar',
        name: "Calendar",
        icon: Calendar, 
    },
    {
        id: 5,
        path: '/logout',
        name: "Logout",
        icon: LogOut,
    },
];

const Navigation = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);

    return (
        <>
            <div className='px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen relative'>
                <div className='logo-div flex space-x-3 items-center'>
                <h1 className='logo text-[#9A1D20] font-bold text-2xl md:text-3xl'>Hamro<span className='text-[#FFAA1D]'>Jutta</span></h1>
                </div>

                <div className='mt-10 flex flex-col space-y-8'>
                    {navLinks.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={
                                'flex space-x-3 p-2 rounded' + (activeNavIndex === item.id
                                    ? ' bg-[#9A1D20] text-white font-semibold'
                                    : ""
                                )}
                            onClick={() => setActiveNavIndex(item.id)}
                        >
                            <item.icon />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navigation;
