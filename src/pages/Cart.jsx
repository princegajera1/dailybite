import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const navigate = useNavigate();

  // 🔥 TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // 🔥 DISCOUNT 20%
  const discount = total * 0.2;

  // 🔥 FINAL TOTAL
  const finalTotal = total - discount;

  // 💳 PAYMENT FUNCTION
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    const options = {
      key: "rzp_test_1234567890",
      amount: finalTotal * 100,
      currency: "INR",
      name: "Daily Bite",
      description: "Order Payment",
      image: "/logo.png",

      handler: function (response) {
        alert("Payment Successful ✅");
        console.log(response);
        navigate("/");
      },

      prefill: {
        name: "Prince",
        email: "support@dailybite.com",
        contact: "9876543210",
      },

      theme: {
        color: "#f97316",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-10">
          🛒 Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-zinc-500 mt-20">
            <h3 className="text-xl font-semibold">
              Your cart is empty 😢
            </h3>
          </div>
        ) : (

          <div className="grid md:grid-cols-3 gap-10">

            {/* 🧾 LEFT ITEMS */}
            <div className="md:col-span-2 space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition"
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-5">

                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[80px] h-[80px] object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.name}
                      </h3>
                      <p className="text-orange-500 font-bold">
                        ₹{item.price}
                      </p>
                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-4">

                    {/* 🔢 QUANTITY */}
                    <div className="flex items-center border rounded-md">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 text-lg"
                      >
                        -
                      </button>

                      <span className="px-3">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>

                    </div>

                    {/* ❌ REMOVE */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-lg"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* 💳 RIGHT SUMMARY */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">

              <h3 className="text-xl font-semibold mb-4">
                Order Summary
              </h3>

              <div className="flex justify-between mb-2">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between mb-2 text-green-600">
                <span>Discount (20%)</span>
                <span>- ₹{discount}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between mb-4 font-bold text-lg">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>

              {/* 🔥 CHECKOUT → PAYMENT */}
              <button
                onClick={handlePayment}
                className="cursor-pointer  w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Cart;