import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserOrderedItem = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const jwtToken = localStorage.getItem('jwt'); 
  console.log(jwtToken);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/order/showUserOrders', {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
          },
        });
        setOrders(response.data); // Assuming response.data is the list of orders
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching the data. Please try again later.');
      }
    };

    if (jwtToken) {
      fetchOrders();
    }
  }, [jwtToken]);

  return (
    <div className="container min-h-screen bg-white-100 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        User Ordered Items
      </h1>

      {error && (
        <div className="text-red-500 mb-6 text-center">{error}</div>
      )}

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Shoe Image</th>
              <th className="py-3 px-4 text-left">Shoe Name</th>
              <th className="py-3 px-4 text-left">Size</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? orders.map((order) => (
              <tr
                key={order.shoeId}
                className="border-t bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <td className="py-3 px-4">
                  <img
                    src={`http://localhost:8080/images/${order.shoeImage}`} 
                    alt={order.shoeName}
                    onError={(e) => (e.target.src = 'path/to/placeholder.jpg')}
                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{order.shoeName}</td>
                <td className="py-3 px-4 text-gray-600">{order.size}</td>
                <td className="py-3 px-4 text-gray-600">{order.quantity}</td>
                <td className="py-3 px-4 text-gray-800 font-semibold">Rs. {order.totalPrice}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrderedItem;
