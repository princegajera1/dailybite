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
import Footer from "./components/Footer";

// PAGES
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

// 🔥 NEW PAGES (Footer links)
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Partnership from "./pages/Partnership";
import Payment from "./pages/Payment";

// CONTEXT
import CartProvider from "./context/CartContext";

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
                <Footer />
              </>
            }
          />
          {/* MAIN PAGES */}
          <Route
            path="/products"
            element={
              <>
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <Wishlist />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
                <Footer />
              </>
            }
          />
          import Payment from "./pages/Payment";
          <Route
            path="/payment"
            element={
              <>
                <Payment />
                <Footer />
              </>
            }
          />
          {/* FOOTER PAGES */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Privacy />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Terms />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/partnership"
            element={
              <>
                <Partnership />
                <Footer />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
