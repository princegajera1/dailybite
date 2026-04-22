import React from "react";

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      const res = await fetch("https://dailybite-backend-4t3g.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 499 }),
      });

      const order = await res.json();

      if (!order.id) {
        alert("❌ Order creation failed!");
        return;
      }

      const options = {
        key: "rzp_test_SgXz3KR2UWdXQ0",
        amount: order.amount,
        currency: order.currency,
        name: "Daily Bite",
        description: "Order Payment",
        image: "/logo.png",
        order_id: order.id,

        handler: function (response) {
          alert("✅ Payment Successful!");
          console.log(response);
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

    } catch (err) {
      console.error("Payment Error:", err);
      alert("❌ Oops! Something went wrong. Payment Failed");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
    >
      Pay Now
    </button>
  );
};

export default PaymentButton;