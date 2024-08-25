import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("HOME");
  const navigate = useNavigate();

  const handleNavigation = (category, path) => {
    setSelectedCategory(category);
    navigate(path);
  };

  return (
    <div className="absolute flex flex-col sm:flex-row items-center sm:justify-center w-full p-4">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-2 w-full lg:ml-[100px] sm:w-auto justify-start sm:justify-center">
        <img
          className="w-16 h-16 rounded-full mt-2 border-2 border-white"
          src={logo}
          alt="Logo"
        />
        <p className="font-font1 lg:text-2xl text-xl text-white font-bold">
          NammaSpotc2c
        </p>
      </div>

      {/* Navbar Pages - Hidden on mobile */}
      <div className="hidden sm:flex flex-row space-x-5 items-center justify-center font-serif text-white cursor-pointer flex-grow">
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "HOME" ? "text-gold" : ""
          }`}
          onClick={() => handleNavigation("HOME", "/")}
        >
          HOME
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "MENU" ? "text-gold" : ""
          }`}
          onClick={() => handleNavigation("MENU", "/Menu")}
        >
          MENU
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "ABOUT" ? "text-gold" : ""
          }`}
          onClick={() => handleNavigation("ABOUT", "/About")}
        >
          ABOUT
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "CONTACT" ? "text-gold" : ""
          }`}
          onClick={() => handleNavigation("CONTACT", "/Contact")}
        >
          CONTACT
        </a>
      </div>

      {/* User Icon */}
      <div className="text-white mt-2 sm:mt-0 sm:ml-auto">
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Navbar;
