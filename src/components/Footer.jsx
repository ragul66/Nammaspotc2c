import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-whitesmoke border-1 border-black text-black py-10 px-4 w-full mt-12">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black ">NammaspotC2C</h2>
          <p className="text-sm">
            At NammaspotC2C, we serve the most delicious and quality food made
            with the finest ingredients. Our commitment is to provide the best
            culinary experience to our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-buttoncl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-buttoncl"
                onClick={() => navigate("/Menu")}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-buttoncl"
                onClick={() => navigate("/about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-buttoncl"
                onClick={() => navigate("/combos")}
              >
                Offers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-buttoncl"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>Phone: +91 8946014462</li>
            <li>Email: info@nammaspotc2c.com</li>
            <li>Address: ThiruNagar,Madurai-7</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.402.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.919.001c-1.505 0-1.797.715-1.797 1.764v2.314h3.594l-.468 3.622h-3.126V24h6.126c.729 0 1.326-.598 1.326-1.333V1.333C24 .598 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.9 9.9 0 01-2.828.775 4.943 4.943 0 002.165-2.723 9.86 9.86 0 01-3.127 1.195 4.927 4.927 0 00-8.391 4.487 13.978 13.978 0 01-10.15-5.145 4.902 4.902 0 001.523 6.573 4.917 4.917 0 01-2.23-.616c-.053 2.281 1.581 4.415 3.949 4.888a4.948 4.948 0 01-2.224.084 4.927 4.927 0 004.604 3.417A9.867 9.867 0 010 21.543a13.896 13.896 0 007.548 2.212c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.49 0-9.967 4.477-9.967 9.967s4.477 9.967 9.967 9.967 9.967-4.477 9.967-9.967S17.49 2.163 12 2.163zm4.911 14.795h-3.014V12.96c0-.91-.327-1.531-1.144-1.531-.623 0-.99.416-1.154.818-.06.146-.075.348-.075.552v3.16H8.604V9.816h2.896v1.002h.041c.403-.732 1.168-1.316 2.403-1.316 1.753 0 3.067 1.145 3.067 3.606v4.85z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nammaspotc2c/"
              className="text-gray-700 hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.97.24 2.438.403a4.92 4.92 0 0 1 1.775 1.029 4.92 4.92 0 0 1 1.029 1.775c.164.468.349 1.268.403 2.438.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.054 1.17-.24 1.97-.403 2.438a4.92 4.92 0 0 1-1.029 1.775 4.92 4.92 0 0 1-1.775 1.029c-.468.164-1.268.349-2.438.403-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.17-.054-1.97-.24-2.438-.403a4.92 4.92 0 0 1-1.775-1.029 4.92 4.92 0 0 1-1.029-1.775c-.164-.468-.349-1.268-.403-2.438-.058-1.265-.069-1.645-.069-4.849s.011-3.584.069-4.849c.054-1.17.24-1.97.403-2.438a4.92 4.92 0 0 1 1.029-1.775 4.92 4.92 0 0 1 1.775-1.029c.468-.164 1.268-.349 2.438-.403 1.265-.058 1.645-.069 4.849-.069zm0-2.163C8.739 0 8.332 0 7.053.049c-1.366.058-2.582.26-3.604.552a7.41 7.41 0 0 0-2.683 1.723A7.41 7.41 0 0 0 .723 4.957c-.292 1.022-.494 2.238-.552 3.604C0 8.332 0 8.739 0 12s0 3.668.049 4.947c.058 1.366.26 2.582.552 3.604a7.41 7.41 0 0 0 1.723 2.683 7.41 7.41 0 0 0 2.683 1.723c1.022.292 2.238.494 3.604.552C8.332 24 8.739 24 12 24s3.668 0 4.947-.049c1.366-.058 2.582-.26 3.604-.552a7.41 7.41 0 0 0 2.683-1.723 7.41 7.41 0 0 0 1.723-2.683c.292-1.022.494-2.238.552-3.604C24 15.668 24 15.261 24 12s0-3.668-.049-4.947c-.058-1.366-.26-2.582-.552-3.604a7.41 7.41 0 0 0-1.723-2.683A7.41 7.41 0 0 0 19.457.723c-1.022-.292-2.238-.494-3.604-.552C15.668 0 15.261 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.825-11.163a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t-2 border-red-600  mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NammaspotC2C. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
