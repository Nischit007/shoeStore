import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  
  const [file, setFile] = useState(null);
  const [shoeName, setShoeName] = useState('');
  const [shoePrice, setPrice] = useState(0);
  const [shoeSize, setSize] = useState('');
  const [shoeQuantity, setShoeQuantity] = useState(0);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const handleQuantityChange=(e)=>{
    setShoeQuantity(e.target.value)
  }
  const handleNameChange = (e) => {
    setShoeName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwtToken = localStorage.getItem('jwt'); // Retrieve token
    // Ensure all fields are filled
    if (!file || !shoeName || !shoePrice || !shoeSize) {
      alert('Please provide all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('shoeImage', file); // Matches @RequestParam("image")
    formData.append('name', shoeName); // Matches a field in @ModelAttribute Shoe
    formData.append('price', shoePrice);
    formData.append('size', shoeSize);
    formData.append('quantity', shoeQuantity);

    try {
      const response = await axios.post('http://localhost:8080/api/shoes/addShoe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwtToken}`, // Include JWT for authorization
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mt-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Submit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
              <input
                type="text"
            
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={shoeName}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">Size</label>
              <input
              
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={shoeSize}
                onChange={handleSizeChange}
                required
              />
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">Quantity</label>
              <input
              
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={shoeQuantity}
                onChange={handleQuantityChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={shoePrice}
                onChange={handlePriceChange}
                required
              />
            </div>
            <div className="mb-6 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">File</label>
              <input
                type="file"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

