import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();

  const { cart = [], wishlist = [] } = useContext(CartContext);

  // 🔍 SEARCH FUNCTION
  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate("/products", { state: { search } });
      setSearch("");
      setMenuOpen(false);
    }
  };

  // 🔍 ENTER KEY SEARCH
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-[1400px] mx-auto px-6 h-[80px]">

          {/* 🔥 LOGO */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-wide"
          >
            <span className="text-orange-500">D</span>aily{" "}
            <span className="text-orange-500">B</span>ite
          </Link>

          {/* 🖥 DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-orange-500 transition">
                Wishlist
              </Link>
            </li>
          </ul>

          {/* 👉 RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* 🔍 DESKTOP SEARCH */}
            <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-orange-400">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                className="outline-none px-2 py-1 text-sm w-[140px]"
              />
              <FaSearch
                onClick={handleSearch}
                className="text-gray-500 cursor-pointer hover:text-orange-500"
              />
            </div>

            {/* ❤️ WISHLIST */}
            <Link to="/wishlist" className="relative">
              <FaHeart className="text-xl text-zinc-700 hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                {wishlist.length}
              </span>
            </Link>

            {/* 🛒 CART */}
            <div
              onClick={() => setCartOpen(true)}
              className="relative cursor-pointer"
            >
              <IoBag className="text-xl text-zinc-700 hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            </div>

            {/* 📱 MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-xl text-zinc-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* 📱 MOBILE MENU */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 ${
            menuOpen ? "max-h-[350px] py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-5">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                Wishlist
              </Link>
            </li>
          </ul>

          {/* 🔍 MOBILE SEARCH */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-[80%]">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                className="outline-none px-2 py-1 text-sm w-full"
              />
              <FaSearch
                onClick={handleSearch}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 🔥 CART SIDEBAR */}
      <CartSidebar open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Navbar;