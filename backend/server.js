const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_SgXz3KR2UWdXQ0",        // ✅ તારી નવી key
  key_secret: "BN0vwAYmjmxk6SYLyTN82vwD",   // ✅ તારી નવી secret (પૂરી key મૂક)
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Math.round(amount * 100),
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

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});