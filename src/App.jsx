import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import ProductSection from "./components/ProductSection";
import Values from "./components/Values";
import Discount from "./components/Discount";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";

// PAGES
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

// CONTEXT
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
                <Values />
                <ProductSection />
                <Discount />
                <Process />
                 <Testimonials />
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;   // 🔥 IMPORTANT LINE (aa error fix kare che)