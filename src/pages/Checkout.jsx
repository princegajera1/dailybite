import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // 🧾 TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 💸 DISCOUNT (20%)
  const discount = total * 0.2;

  // 💰 FINAL TOTAL
  const finalTotal = total - discount;

  // 💳 PAYMENT FUNCTION
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    const options = {
      // ✅ FIXED: Real Razorpay Test Key
      key: "rzp_test_SgWgGypiPrFeQ3",

      // ✅ FIXED: Math.round to avoid decimal paisa errors
      amount: Math.round(finalTotal * 100),

      currency: "INR",
      name: "Daily Bite",
      description: "Order Payment",
      image: "/logo.png",

      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);

        // 🔥 redirect after payment
        navigate("/");
      },

      prefill: {
        name: "Prince",
        email: "support@dailybite.com",
        contact: "9876543210",
      },

      theme: {
        color: "#22c55e", // green
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-[600px] mx-auto p-10 bg-white shadow-lg rounded-xl mt-10">

      <h1 className="text-2xl font-bold mb-6">
        🧾 Checkout
      </h1>

      {/* 🛒 ITEMS */}
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-3 border-b pb-2">
          <span>
            {item.name} × {item.qty}
          </span>
          <span className="font-medium">
            ₹{item.price * item.qty}
          </span>
        </div>
      ))}

      {/* 💰 SUMMARY */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount (20%)</span>
          <span>- ₹{discount}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{finalTotal}</span>
        </div>
      </div>

      {/* 💳 PAYMENT BUTTON */}
      <button
        onClick={handlePayment}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 mt-6 w-full rounded-lg font-semibold transition"
      >
        Pay Now 💳
      </button>

    </div>
  );
};

export default Checkout;
