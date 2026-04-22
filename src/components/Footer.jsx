import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Daily <span className="text-orange-500">Bite</span>
          </h2>

          <p className="text-gray-600">
            Your trusted source for premium quality groceries and fresh
            essentials. Shop smarter, eat healthier.
          </p>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>

          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="/privacy" className="hover:text-orange-500 transition">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms" className="hover:text-orange-500 transition">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-orange-500 transition">
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="/partnership"
                className="hover:text-orange-500 transition"
              >
                Partnership
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <p className="text-gray-600 mb-2">
            Email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@dailybite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1"
            >
              support@dailybite.com
            </a>
          </p>

          <p className="text-gray-600 mb-4">
            Phone:
            <a
              href="tel:+919876543210"
              className="text-blue-500 hover:underline ml-1"
            >
              +91 98765 43210
            </a>
          </p>

          {/* SOCIAL */}
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>

          {/* APP DOWNLOAD */}
          <h3 className="text-lg font-semibold mt-6 mb-3">Download Our App</h3>

          <div className="flex gap-4">
            <a href="https://play.google.com/store" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 hover:scale-105 transition"
              />
            </a>

            <a href="https://www.apple.com/app-store/" target="_blank">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 hover:scale-105 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-black text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Daily Bite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
