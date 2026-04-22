import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ open, setOpen }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  const discount = subtotal * 0.2;
  const total = subtotal - discount;

  // 🔥 CHECKOUT FUNCTION
  const handleCheckout = () => {
    setOpen(false);          // 👉 Sidebar close
    navigate("/payment");    // 👉 Go to payment page
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <FaTimes
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto">

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className=" mb-4 border-b pb-3">

                <h3>{item.name}</h3>

                <div className=" cursor-pointer flex gap-3 mt-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className=" cursor-pointer px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className=" cursor-pointer px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <p className="text-orange-500 mt-2">
                  ₹{item.price * item.qty}
                </p>

              </div>
            ))
          )}

        </div>

        {/* FOOTER */}
        <div className="border-t pt-4">

          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </p>

          <p className="flex justify-between text-green-600">
            <span>Discount (20%):</span>
            <span>- ₹{discount}</span>
          </p>

          <p className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>₹{total}</span>
          </p>

          {/* 🔥 CHECKOUT BUTTON */}
          <button
            onClick={handleCheckout}
            className=" cursor-pointer w-full mt-4 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default CartSidebar;