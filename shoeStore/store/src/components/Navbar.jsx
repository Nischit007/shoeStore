import React from 'react'
import cartIcon from '../assets/cartIcon.gif'
import shoeIcon from '../assets/shoeIcon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <>
        <div className=' bg-[#f5f5f5] w-full'>
          <div className='container flex justify-between items-center ml-3 px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center'>
              <h1 className='logo text-[#9A1D20] font-bold text-2xl md:text-3xl'>Hamro<span className='text-[#FFAA1D]'>Jutta</span></h1>
              <img src={shoeIcon} className='h-10 w-10 md:h-12 md:w-12 ml-2' />
            </div>
            <div className='hidden md:flex gap-6 lg:gap-16 items-center text-[#9A1D20] font-semibold text-sm md:text-lg cursor-pointer'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/contact'>Contact Us</Link>
              <Link to='/orderedShoe'>Orderd Item</Link>
              <Link to='/cart'>
              <img src={cartIcon} className='h-8 w-9 md:h-10 md:w-11'  />
              </Link>
            </div>
          </div>
          </div>
        </>
      )
    }
    

export default Navbar