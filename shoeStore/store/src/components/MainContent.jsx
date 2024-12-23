import React from 'react'
import image1 from '../assets/mainpageImage.png'
import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <>
    <div className={styles.maincontent}>
    <div className='content flex justify-around w-full'>
     <div className='text-center mt-24'>
     <h1 className='font-bold text-5xl'>Premium Quality<span className='text-[#9A1D20]'> Shoes </span></h1>
    <p className='mt-4 font-light'>Step into style and comfort with shoes designed to last</p>
    <button className='border-2 p-2 mt-7 border-[#9A1D20] text-[#9A491D] font-semibold'>Shop Now</button>
    </div>
    <div className='h-96 w-2/4'>
    <img src={image1}/>
    </div>
   </div>
   </div>
    </>
  )
}

export default MainContent