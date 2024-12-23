import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateModel from './UpdateModel';

const Table = () => {
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState('');
  const [selectedShoe, setSelectedShoe] = useState(null);
  const jwtToken = localStorage.getItem('jwt');

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/shoes/getAllShoe', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setShoes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching the data. Please try again later.');
      }
    };

    fetchShoes();
  }, [jwtToken]);

  const handleEdit = (shoe) => {
    setSelectedShoe(shoe);
  };

  const handleDelete = async (shoeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/shoes/delete/${shoeId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setShoes(shoes.filter((shoe) => shoe.id !== shoeId));
      alert('Deleted successfully');
    } catch (error) {
      console.error('Error deleting shoe:', error);
      setError('Failed to delete the shoe. Please try again later.');
    }
  };

  const closeModal = () => {
    setSelectedShoe(null);
  };

  return (
    <div className="container min-h-screen bg-gray-100 p-4">
      <h1 className="max-w-full bg-white text-2xl font-sans font-bold py-2 px-3 text-red-700">
        Shoe Data Table
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="py-2 px-2 text-left text-red-700">Shoe Name</th>
            <th className="py-2 px-2 text-left text-red-700">Price</th>
            <th className="py-2 px-2 text-left text-red-700">Size</th>
            <th className="py-2 px-2 text-left text-red-700">Image</th>
            <th className="py-2 px-3 text-left text-red-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe) => (
            <tr
              key={shoe.id}
              className="border-t bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td className="py-1 px-2">{shoe.name}</td>
              <td className="py-1 px-2">{shoe.price}</td>
              <td className="py-1 px-2">{shoe.size}</td>
              <td className="py-1 px-2">
                <img
                  src={`http://localhost:8080/images/${shoe.shoeImage}`}
                  alt={shoe.name}
                  onError={(e) => (e.target.src = 'path/to/placeholder.jpg')}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </td>
              <td className="py-3 px-3 flex space-x-2">
                <button
                  onClick={() => handleEdit(shoe)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(shoe.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedShoe && <UpdateModel shoe={selectedShoe} onClose={closeModal} />}
    </div>
  );
};

export default Table;
