import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
   <>
    <footer className="bg-[#FFAA1D] text-white py-8 mb-4 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm font-light">
            We are passionate about delivering the best quality shoes to our customers. 
            Our brand is built on comfort, style, and affordability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 font-semibold">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Collecton</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-xl font-bold mb-4">Customer Support</h2>
          <ul className="space-y-2 font-semibold">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Siraj Shoe Store. All rights reserved.
      </div>
    </footer>


   
 
   
   </>
  )
}

export default Footer