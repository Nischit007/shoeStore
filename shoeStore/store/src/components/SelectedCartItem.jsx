import React, { useState } from "react";
import axios from "axios";

const SelectedCartItem = ({ handleDelete, cart }) => {
  
  let sum = 0;
  cart.forEach((element) => {
    sum += element.price * element.quantity;
  });

 const handleBuy = async () => {
    try {
        const orderDto = cart.map((item) => ({
            shoeId: item.id,
            quantity: item.quantity,
            totalPrice: item.quantity * item.price, 
        }));

        const jwtToken = localStorage.getItem("jwt");

        if (!jwtToken) {
            alert("No authorization token found. Please log in.");
            return;
        }

        const response = await axios.post(
            "http://localhost:8080/api/order/buy",
            orderDto,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`, 
                },
            }
        );

        // Ensure the response contains the payment_url
        if (response.data && response.data.payment_url) {
            console.log("Redirecting to payment URL: " + response.data.payment_url);
            window.location.href = response.data.payment_url;
        } else {
            console.error("No payment URL in response", response);
            alert("Failed to generate payment link. Please try again.");
        }

    } catch (error) {
        console.error("Error during checkout:", error.response ? error.response.data : error.message);
        alert("Failed to place the order. Please try again.");
    }
};


  return (
    <>
      <div>
        <div className="p-6">
          <div className="list row-span-4">
            <div className="flex justify-evenly font-bold text-lg">
              <h1>Product Image</h1>
              <h1>Product Name</h1>
              <h1>Size</h1>
              <h1>Quantity</h1>
              <h1>Price</h1>
              <h1>Delete</h1>
            </div>
          </div>
          <hr className="w-3/4 border-t-[2px] border-[#9A1D20] mt-6 mx-auto" />

          {cart.map((item, index) => (
            <div className="flex justify-evenly mt-4 ml-6 space-y-4" key={item.id}>
              <img
                src={`http://localhost:8080/images/${item.shoeImage}`}
                className="w-28 h-20"
                alt={item.name}
              />
              <h2 className="font-serif text-xl">{item.name}</h2>
              <h2 className="font-serif text-xl">{item.size}</h2>
              <h2 className="font-serif text-xl">{item.quantity}</h2>
              <h2 className="text-[#9A1D20] font-serif text-xl">
                Rs. {item.price}
              </h2>
              <button
                onClick={() => handleDelete(item.id)}
                className="py-2 px-4 border-1 rounded-lg hover:bg-[#a04143] text-white font-bold h-10 bg-[#9A1D20]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-10">
        <hr className="w-1/2 border-t-2 border-[#9A1D20] ml-96" />
        <h3 className="font-bold text-md md:text-lg text-[#333] p-2 flex justify-center">
          Total Price:
          <span className="text-[#9A1D20] font-serif font-bold text-lg md:text-xl ml-64">
            Rs. {sum}
          </span>
        </h3>

        <div className="p-3 ml-80 flex justify-center">
          <button
            onClick={handleBuy}
            className="p-7 bg-[#6a8a8a] text-white font-bold py-2 px-4 rounded-xl"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedCartItem;
