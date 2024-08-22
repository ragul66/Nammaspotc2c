import React from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <div className="absolute flex flex-row justify-center items-center">
      <div className="flex flex-row lg:p-4 p-4 space-x-2">
        <img
          className="w-16 h-16 rounded-full md:ml-[130px] lg:ml-[200px] mt-2 border-2 border-white "
          src={logo}
        />
        <p className="flex justify-center items-center font-font1 lg:text-2xl text-white">
          NammaSpotc2c
        </p>
      </div>
      {/* navbar pages */}
      <div className="hidden sm:flex flex-row space-x-5 items-center justify-center font-font1 text-white  cursor-pointer">
        <a>HOME</a>
        <a>MENU</a>
        <a>ABOUT</a>
        <a>CONTACT</a>
      </div>

      <div className="text-white">
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Navbar;
