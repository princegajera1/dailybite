import React from "react";

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

      <h1 className="text-3xl font-bold mb-6">
        Scan & Pay
      </h1>

      {/* QR CODE */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&pn=DailyBite&am=100"
          alt="QR Code"
          className="mx-auto mb-4"
        />

        <p className="text-gray-600 mb-2">
          Scan this QR using any UPI app
        </p>

        <p className="font-semibold text-lg">
          Pay to: Daily Bite
        </p>

      </div>

      {/* NOTE */}
      <p className="mt-6 text-sm text-gray-500">
        After payment, your order will be processed.
      </p>

    </div>
  );
};

export default Payment;