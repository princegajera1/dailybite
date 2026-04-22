import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // 🧾 TOTAL
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 💸 DISCOUNT
  const discount = total * 0.2;

  // 💰 FINAL TOTAL
  const finalTotal = Math.round(total - discount); // ✅ rounded

  // 🔥 UPI QR LINK
  const upiLink = `upi://pay?pa=example@upi&pn=DailyBite&am=${finalTotal}&cu=INR`;

  // 💳 RAZORPAY PAYMENT
  const handlePayment = async () => {
    if (cart.length === 0) {
      alert("❌ Cart is empty!");
      return;
    }

    try {
      console.log("📡 Connecting to backend...");

      const res = await fetch("http://127.0.0.1:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: finalTotal }),
      });

      const order = await res.json();
      console.log("✅ Order Created:", order);

      if (!order.id) {
        alert("❌ Order not created. Check backend.");
        return;
      }

      const options = {
        key: "rzp_test_SgWgGypiPrFeQ3",   // ✅ your test key
        amount: order.amount,
        currency: "INR",
        name: "Daily Bite",
        description: "Food Order Payment",
        order_id: order.id,

        handler: function (response) {
          alert("✅ Payment Successful! 🎉");
          console.log("Payment Response:", response);
          navigate("/"); // ✅ redirect to home after payment
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

    } catch (err) {
      console.error("❌ ERROR:", err);
      alert("❌ Backend not running! Start your Flask server first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-6">Payment Options</h1>

      {/* 💳 RAZORPAY BUTTON */}
      <button
        onClick={handlePayment}
        className=" cursor-pointer mb-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Pay with Razorpay 💳
      </button>

      {/* 📱 QR BOX */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${upiLink}`}
          alt="QR Code"
          className="mx-auto mb-4"
        />
        <p className="text-gray-600 mb-2">Scan this QR using any UPI app</p>
        <p className="font-semibold text-lg">Pay to: Daily Bite</p>
        <p className="text-orange-500 font-bold mt-2">Amount: ₹{finalTotal}</p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        After payment, your order will be processed.
      </p>
    </div>
  );
};

export default Payment;
