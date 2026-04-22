import React from "react";

const PaymentButton = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890", // 🔑 test key
      amount: 49900, // ₹499 (in paisa)
      currency: "INR",
      name: "Daily Bite",
      description: "Order Payment",
      image: "/logo.png",

      handler: function (response) {
        alert("Payment Successful ✅");
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