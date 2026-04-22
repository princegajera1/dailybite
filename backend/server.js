const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());                        // ✅ Allow React to connect
app.use(express.json());               // ✅ Read JSON from React

// 🔑 YOUR RAZORPAY KEYS
const razorpay = new Razorpay({
  key_id: "rzp_test_SgWgGypiPrFeQ3",
  key_secret: "BV2xSadujvKzCBW4mdsFNHdf",  // ⚠️ Regenerate this key!
});

// 📦 CREATE ORDER ROUTE
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Math.round(amount * 100),  // convert ₹ to paisa
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("✅ Order Created:", order);
    res.json(order);
  } catch (err) {
    console.error("❌ Razorpay Error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// ▶️ START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});