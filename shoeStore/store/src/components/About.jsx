import React from 'react'
import aboutImage from '../assets/nike3.png'

const About = () => {
  return (
    <>
    <div className='about flex justify-around bg-[#f5f5f5] p-4'>
    <h1 className='font-bold text-4xl text-[#9A1D20] mt-20 '>About Us</h1>
      <div className='w-96 h-80 rounded-s-lg mt-4'>
      <img src={aboutImage}/>
      </div>
    </div>
    <div className='title text-center text-2xl font-light p-6'>
    <h2>Welcome to Shoestore – Your Ultimate Footwear Destination!</h2>
    </div>
    <div className='description  text-justify p-8 font-extralight'>
      <p>At Shoestore, we're passionate about bringing you the latest and most stylish footwear. Whether you're looking for athletic sneakers, casual shoes, or formal footwear, we’ve got something for everyone. Our mission is to provide high-quality, comfortable, and trendy shoes that meet your needs and fit your style.
      We believe that the right pair of shoes can boost your confidence and take you further. That’s why we carefully select every item in our collection, ensuring you always step out in style.
      <br></br>
      <br></br>
      At Shoestore, we believe that a great pair of shoes is more than just an accessory – it's a reflection of your personality, style, and ambition. That's why we’re dedicated to offering a diverse range of footwear that caters to every occasion, from casual outings to high-performance activities.

Founded with a passion for quality and craftsmanship, Shoestore is built on the idea that comfort and style should always go hand in hand. Our carefully curated collections feature top brands, timeless designs, and the latest trends to ensure that you find the perfect pair for every step of your journey.

</p>
      
    </div>
    </>
  )
}

export default About