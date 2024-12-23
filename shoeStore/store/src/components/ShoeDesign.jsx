import React from 'react'
import jordan from '../assets/jordan.png'

const ShoeDesign = () => {
  return (
    <>
    <div className='image flex justify-center mt-4'>
        <img src={jordan} className='h-56 w-56'></img>
        <h1 className='text-2xl font-semibold text-[#FFAA1D]'>JUST DO IT</h1>
    </div>
    </>
  )
}

export default ShoeDesign