import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

// ✅ All product names based on your assets folder
const ALL_PRODUCTS = [
  "Apple",
  "Banana",
  "Basket Full Vegetables",
  "Beef",
  "Broccoli",
  "Butter",
  "Cabbage",
  "Capsicum",
  "Cheese",
  "Chicken Breast",
  "Condensed Milk",
  "Dairy And Eggs",
  "Eggplant",
  "Eggs",
  "Fresh Fruits",
  "Fruits And Veggies",
  "Grapes",
  "Grocery",
  "Kale",
  "Kiwi",
  "Lettuce",
  "Meat And Seafood",
  "Milk",
  "Pineapple",
  "Ricotta Cheese",
  "Salmon",
  "Shrimp",
  "Slice Cheese",
  "Strawberry",
  "Tilapia",
  "Tofu",
  "Yogurt",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

  const { cart = [], wishlist = [] } = useContext(CartContext);

  // ✅ Filter suggestions as user types
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = ALL_PRODUCTS.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  // ✅ Navigate on search
  const handleSearch = (query = search) => {
    if (query.trim() !== "") {
      navigate("/products", { state: { search: query } });
      setSearch("");
      setSuggestions([]);
      setShowSuggestions(false);
      setMenuOpen(false);
    }
  };

  // ✅ Click on suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    handleSearch(suggestion);
  };

  // ✅ Enter key
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  // ✅ Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-[1400px] mx-auto px-6 h-[80px]">

          {/* LOGO */}
          <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="text-orange-500">D</span>aily{" "}
            <span className="text-orange-500">B</span>ite
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-500 transition">Products</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-orange-500 transition">Wishlist</Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* ✅ DESKTOP SEARCH WITH SUGGESTIONS */}
            <div className="hidden md:block relative" ref={suggestionsRef}>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-orange-400">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={handleSearchChange}
                  onKeyDown={handleKey}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  className="outline-none px-2 py-1 text-sm w-[160px]"
                />
                <FaSearch
                  onClick={() => handleSearch()}
                  className="text-gray-500 cursor-pointer hover:text-orange-500"
                />
              </div>

              {/* SUGGESTIONS DROPDOWN */}
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-[220px] overflow-y-auto">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item)}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 hover:text-orange-500 flex items-center gap-2 transition"
                    >
                      <FaSearch className="text-xs text-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* WISHLIST */}
            <Link to="/wishlist" className="relative">
              <FaHeart className="text-xl text-zinc-700 hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                {wishlist.length}
              </span>
            </Link>

            {/* CART */}
            <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
              <IoBag className="text-xl text-zinc-700 hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-xl text-zinc-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 ${
            menuOpen ? "max-h-[400px] py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-5">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link></li>
          </ul>

          {/* ✅ MOBILE SEARCH WITH SUGGESTIONS */}
          <div className="flex flex-col items-center mt-4 px-6 relative">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-full">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleKey}
                className="outline-none px-2 py-1 text-sm w-full"
              />
              <FaSearch onClick={() => handleSearch()} className="cursor-pointer" />
            </div>

            {/* MOBILE SUGGESTIONS */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 max-h-[180px] overflow-y-auto z-50">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 hover:text-orange-500 flex items-center gap-2 transition"
                  >
                    <FaSearch className="text-xs text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      <CartSidebar open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Navbar;
