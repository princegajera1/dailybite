import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    discount,
  } = useContext(CartContext);

  // 💰 CALCULATIONS
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <>
      {/* 🔥 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        ></div>
      )}

      {/* 🔥 SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-xl p-5 z-[9999] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {/* EMPTY */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            Cart is empty 🛒
          </p>
        ) : (
          <>
            {/* ITEMS */}
            <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="border-b pb-3">

                  <h3 className="font-semibold">{item.name}</h3>

                  {/* ➕➖ */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* PRICE */}
                  <p className="text-orange-500 font-semibold mt-1">
                    ₹{item.price * item.qty}
                  </p>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>

                </div>
              ))}
            </div>

            {/* 💰 TOTAL */}
            <div className="mt-6 border-t pt-4 space-y-2">

              <p>Subtotal: ₹{subtotal}</p>

              {discount > 0 && (
                <p className="text-green-600">
                  Discount (20%): -₹{discountAmount}
                </p>
              )}

              <h3 className="text-lg font-bold">
                Total: ₹{total}
              </h3>

              {/* CHECKOUT */}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/checkout");
                }}
                className="bg-orange-500 text-white w-full py-3 mt-4 rounded-md hover:bg-orange-600 transition"
              >
                Checkout
              </button>

            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;