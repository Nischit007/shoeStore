import React, { useState } from 'react';
import axios from 'axios';

const UpdateModel = ({ shoe, onClose }) => {
  const [file, setFile] = useState(null); // File input
  const [shoeName, setShoeName] = useState(shoe.name); // Shoe name
  const [shoePrice, setPrice] = useState(shoe.price); // Shoe price
  const [shoeSize, setSize] = useState(shoe.size); // Shoe size
  const [shoeQuantity, setShoeQuantity] = useState(shoe.quantity); // Shoe quantity

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update file state
  };

  const handleQuantityChange = (e) => {
    setShoeQuantity(e.target.value); // Update quantity
  };

  const handleNameChange = (e) => {
    setShoeName(e.target.value); // Update name
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value); // Update price
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value); // Update size
  };

  const jwtToken = localStorage.getItem('jwt'); // Retrieve token

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    if (!file || !shoeName || !shoePrice || !shoeSize) {
      alert('Please provide all required fields');
      return;
    }

    // Create FormData for the request
    const formData = new FormData();
    formData.append('shoeImage', file); // Matches @RequestParam("image")
    formData.append('name', shoeName); // Matches a field in @ModelAttribute Shoe
    formData.append('price', shoePrice);
    formData.append('size', shoeSize);
    formData.append('quantity', shoeQuantity);

    try {
      // Make the API call
      const response = await axios.put(
        `http://localhost:8080/api/shoes/update/${shoe.id}`, // Update endpoint URL
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${jwtToken}`, // Include JWT for authorization
          },
        }
      );
      console.log('Shoe updated successfully:', response.data);
      onClose(); // Close the modal after success
    } catch (error) {
      console.error('Error updating shoe:', error.response.data);
      alert('Failed to update shoe. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Shoe</h2>
        <form onSubmit={handleSubmit}>
          {/* Shoe Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Shoe Name
            </label>
            <input
              type="text"
              id="name"
              value={shoeName}
              onChange={handleNameChange}
              className="w-full rounded-md border px-4 py-2 focus:ring-indigo-500"
            />
          </div>

          {/* Shoe Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={shoeQuantity}
              onChange={handleQuantityChange}
              className="w-full rounded-md border px-4 py-2 focus:ring-indigo-500"
            />
          </div>

          {/* Shoe Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Shoe Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              className="w-full rounded-md border px-4 py-2 focus:ring-indigo-500"
            />
          </div>

          {/* Shoe Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={shoePrice}
              onChange={handlePriceChange}
              className="w-full rounded-md border px-4 py-2 focus:ring-indigo-500"
            />
          </div>

          {/* Shoe Size */}
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Size
            </label>
            <input
              type="number"
              id="size"
              value={shoeSize}
              onChange={handleSizeChange}
              className="w-full rounded-md border px-4 py-2 focus:ring-indigo-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
