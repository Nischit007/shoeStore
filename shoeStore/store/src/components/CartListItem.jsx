import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cartIcon from '../assets/cartIcon.gif';

const CartListItem = ({ name, handleOnClick }) => {
  // Function to retrieve saved quantities from localStorage or default to 1 for each item
  const getStoredQuantities = () => {
    const savedQuantities = localStorage.getItem('quantities');
    return savedQuantities ? JSON.parse(savedQuantities) : name.map(() => 1);
  };

  const [quantities, setQuantities] = useState(getStoredQuantities);

  // Effect to update localStorage whenever quantities change
  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleQuantityChange = (index, action, maxQuantity) => {
    setQuantities((prev) => {
      const updated = [...prev];
      if (action === "increment" && updated[index] < maxQuantity) {
        updated[index] += 1;
      } else if (action === "decrement" && updated[index] > 1) {
        updated[index] -= 1;
      }
      return updated;
    });
  };

  return (
    <section className="px-2 sm:px-5 lg:px-7 mt-4 overflow-hidden">
      <div className="container mx-auto">
        <Slider className="mr-3" {...settings}>
          {name.map((item, index) => (
            <div
              key={item.id}
              className="rounded-3xl h-80 w-96 max-w-xs mx-auto shadow-lg bg-[#f5f5f5] border-b-[8px] border-[#FFAA1D] scroll"
            >
              <div className="card flex justify-center">
                <img
                  src={`http://localhost:8080/images/${item.shoeImage}`}
                  className="h-32 w-40 mt-6"
                  alt={item.name}
                />
              </div>
              <div className="flex justify-around mt-6">
                <div className="font-light text-lg text-center">
                  <h2 className="text-2xl font-semibold ">{item.name}</h2>
                  <h2>Size: {item.size}</h2>
                  <h2 className="text-[#9A1D20] font-serif">Rs. {item.price}</h2>
                  <div className="flex flex-col gap-5 items-center -mt-0">
                    <div className='flex'>
                    <h2>Available: {item.quantity} </h2>
                    <div className="flex gap-2 ">
                      <button
                        onClick={() => handleQuantityChange(index, "decrement", item.quantity)}
                        className={`bg-[#FFAA1D] px-2 py-1 text-white rounded-md font-bold hover:bg-[#e59d1a] transition ${
                          quantities[index] <= 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={quantities[index] <= 1}
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">{quantities[index]}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(index, "increment", item.quantity)
                        }
                        className={`bg-[#FFAA1D] px-2 py-1 text-white rounded-md font-bold hover:bg-[#e59d1a] transition ${
                          quantities[index] >= item.quantity ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={quantities[index] >= item.quantity}
                      >
                        +
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
                <img
                  src={cartIcon}
                  onClick={() => handleOnClick(item.id, quantities[index])}
                  className="h-10 w-11 cursor-pointer"
                  alt="button"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CartListItem;
