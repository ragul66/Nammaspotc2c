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
    <div className="absolute flex flex-row justify-center items-center w-full">
      <div className="flex flex-row lg:p-4 p-4 space-x-2">
        <img
          className="w-16 h-16 rounded-full md:ml-[130px] lg:ml-[200px] mt-2 border-2 border-white"
          src={logo}
          alt="Logo"
        />
        <p className="flex justify-center items-center font-font1 lg:text-2xl sm:text-xl text-white font-bold">
          NammaSpotc2c
        </p>
      </div>
      {/* Navbar Pages */}
      <div className="hidden sm:flex flex-row space-x-5 items-center justify-center font-serif text-white cursor-pointer mr-auto">
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "HOME" ? "text-buttoncl" : ""
          }`}
          onClick={() => handleNavigation("HOME", "/")}
        >
          HOME
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "MENU" ? "text-buttoncl" : ""
          }`}
          onClick={() => handleNavigation("MENU", "/Menu")}
        >
          MENU
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "ABOUT" ? "text-buttoncl" : ""
          }`}
          onClick={() => handleNavigation("ABOUT", "/About")}
        >
          ABOUT
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "CONTACT" ? "text-buttoncl" : ""
          }`}
          onClick={() => handleNavigation("CONTACT", "/Contact")}
        >
          CONTACT
        </a>
      </div>
      <div className="text-white">
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Navbar;
