import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/reducers/cartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const initialCart = useSelector((st) => st?.cart?.cartItems);
  const [cart, setCart] = useState(initialCart);
  const [shipping] = useState(4);
  console.log("initialCart", cart);
  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  const handleQuantityChange = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + increment > 0 ? item.quantity + increment : 1,
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shipping;

  return (
    <div className="min-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left side - Shopping Cart */}
        <div className="col-span-12 lg:col-span-8">
          <Link
            to="/"
            className="text-gray-600 border-b flex  pb-4 font-bold mb-4 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
                fill="currentColor"
              />
            </svg>
            Shopping Continue
          </Link>
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <p className="text-black mb-6">
            You have {cart.length} item(s) in your cart
          </p>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 mb-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.type}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="text-xl font-bold text-gray-700 p-2"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="text-xl font-bold text-gray-700 p-2"
                >
                  +
                </button>
              </div>
              <div className="font-bold flex gap-4">
                ${(item.price * item.quantity).toFixed(2)}
                <img
                  src="/Auth/trash.svg"
                  className="w-6 h-6"
                  alt="Trash"
                  onClick={() => handleRemoveFromCart(item.cartItemId)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Payment Card Details */}
        <div className="bg-[#89089F] text-white p-6 max-w-[398px] rounded-lg col-span-12 lg:col-span-4">
          <h2 className="text-xl font-semibold mb-6">Card Details</h2>

          <div className="flex justify-start gap-4 mb-4">
            <img src="/Auth/masterCard.svg" alt="card-type" />
            <img src="/Auth/visaCard.svg" alt="card-type" />
            <img src="/Auth/rupay.svg" alt="card-type" />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-base font-normal  text-[#FEFCFC]">
              Name on card
            </label>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full p-2 rounded mt-[4px] bg-[#BA68C8] text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-base font-normal  text-[#FEFCFC]">
              {" "}
              Card Number
            </label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 rounded mt-[4px] bg-white text-gray-700"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col justify-between gap-4 mb-4">
              <label
                htmlFor=""
                className="text-base font-normal  text-[#FEFCFC]"
              >
                {" "}
                Card Number
              </label>
              <input
                type="text"
                placeholder="mm/yy"
                className="w-full p-2 rounded bg-white text-gray-700"
              />
            </div>
            <div className="flex flex-col justify-between gap-4 mb-4">
              <label
                htmlFor=""
                className="text-base font-normal  text-[#FEFCFC]"
              >
                {" "}
                Card Number
              </label>

              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 rounded bg-white text-gray-700"
              />
            </div>
          </div>

          <div className="border-t border-purple-400 my-4"></div>

          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <button className="w-full mt-6 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
