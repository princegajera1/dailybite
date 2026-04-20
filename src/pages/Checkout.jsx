import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-[600px] mx-auto p-10">

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.qty}</span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <h2 className="font-bold mt-4">Total: ₹{total}</h2>

      {/* 💳 PAYMENT UI */}
      <button className="bg-green-500 text-white px-4 py-3 mt-6 w-full rounded">
        Pay Now (Demo)
      </button>

    </div>
  );
};

export default Checkout;