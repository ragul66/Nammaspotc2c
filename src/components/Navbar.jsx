// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import gif from "../assets/special gif.gif";
// import combooffer from "../assets/combooffer.png";
// import burger from "../assets/pasta.png";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const [selectedCategory, setSelectedCategory] = useState("HOME");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
//   const navigate = useNavigate();

//   const handleNavigation = (category, path) => {
//     setSelectedCategory(category);
//     navigate(path);
//     setIsMobileMenuOpen(false); // Close mobile menu after navigation
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className=" flex flex-col sm:flex-row items-center  w-full  p-4  bg-yellow-100  lg:bg-yellow-100 ">
//       {/* Logo and Brand Name */}
//       <div className="flex items-center space-x-2 w-full lg:ml-[100px] sm:w-auto justify-between sm:justify-center">
//         <img
//           className="w-16 h-16 rounded-full mt-2 border-2 border-white"
//           src={logo}
//           alt="Logo"
//         />
//         <p className="lg:text-2xl text-xl text-black font-bold  font-serif">
//           NammaSpotc2c
//         </p>

//         {/* Hamburger Menu for Mobile */}
//         <div className="sm:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-white focus:outline-none"
//           >
//             <img
//               name={isMobileMenuOpen ? "close-outline" : "menu-outline"}
//               src={burger}
//             />
//             {/* <i class="fa-solid fa-bars"></i> */}
//           </button>
//         </div>
//       </div>

//       {/* Navbar Pages - Shown based on screen size */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "flex" : "hidden"
//         } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-10 items-center justify-center font-serif text-black cursor-pointer flex-grow`}
//       >
//         <a
//           className={`hover:text-buttoncl ${
//             selectedCategory === "HOME"
//               ? "text-red-600 border-b-2 border-red-600"
//               : ""
//           }`}
//           onClick={() => handleNavigation("HOME", "/")}
//         >
//           HOME
//         </a>
//         <a
//           className={`hover:text-buttoncl ${
//             selectedCategory === "MENU"
//               ? "text-red-600 border-b-2 border-red-600"
//               : ""
//           }`}
//           onClick={() => handleNavigation("MENU", "/Menu")}
//         >
//           MENU
//         </a>
//         <a
//           className={`hover:text-buttoncl ${
//             selectedCategory === "ABOUT"
//               ? "text-red-600 border-b-2 border-red-600"
//               : ""
//           }`}
//           onClick={() => handleNavigation("ABOUT", "/about")}
//         >
//           ABOUT
//         </a>
//         <a
//           className={`hover:text-buttoncl ${
//             selectedCategory === "CONTACT"
//               ? "text-red-600 border-b-2 border-red-600"
//               : ""
//           }`}
//           onClick={() => handleNavigation("CONTACT", "/Contact")}
//         >
//           CONTACT
//         </a>
//         <a
//           className={` lg:w-20 lg:h-20 w-12 h-12 ${
//             selectedCategory === "combos"
//               ? "text-buttoncl border-b-2 border-buttoncl"
//               : ""
//           }`}
//           onClick={() => handleNavigation("combos", "/combos")}
//         >
//           <img src={combooffer} />
//         </a>
//       </div>

//       {/* Special Offer Icon */}
//       <div className="sm:flex sm:flex-row mr-auto">
//         <img
//           className="hidden sm:block   w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 cursor-pointer animate-wiggle"
//           src={gif}
//           onClick={() => navigate("/combos")}
//           alt="Special Offer"
//         />
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import gif from "../assets/special gif.gif";
import combooffer from "../assets/combooffer.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const handleNavigation = (category, path) => {
    setSelectedCategory(category);
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center w-full p-4 bg-yellow-100 lg:bg-gray-500">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-2 w-full lg:ml-[100px] sm:w-auto justify-between sm:justify-center">
        <img
          className="w-16 h-16 rounded-full mt-2 border-2 border-white"
          src={logo}
          alt="Logo"
        />
        <p className="lg:text-2xl text-xl text-black font-bold font-serif">
          NammaSpotc2c
        </p>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <ion-icon
              name={isMobileMenuOpen ? "close-outline" : "menu-outline"}
              size="large"
            ></ion-icon>
          </button>
        </div>
      </div>

      {/* Navbar Pages - Shown based on screen size */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-10 items-center justify-center font-serif text-black cursor-pointer flex-grow`}
      >
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "HOME"
              ? "text-red-600 border-b-2 border-red-600"
              : ""
          }`}
          onClick={() => handleNavigation("HOME", "/")}
        >
          HOME
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "MENU"
              ? "text-red-600 border-b-2 border-red-600"
              : ""
          }`}
          onClick={() => handleNavigation("MENU", "/Menu")}
        >
          MENU
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "ABOUT"
              ? "text-red-600 border-b-2 border-red-600"
              : ""
          }`}
          onClick={() => handleNavigation("ABOUT", "/about")}
        >
          ABOUT
        </a>
        <a
          className={`hover:text-buttoncl ${
            selectedCategory === "CONTACT"
              ? "text-red-600 border-b-2 border-red-600"
              : ""
          }`}
          onClick={() => handleNavigation("CONTACT", "/Contact")}
        >
          CONTACT
        </a>
        <a
          className={`lg:w-20 lg:h-20 w-12 h-12 ${
            selectedCategory === "combos"
              ? "text-buttoncl border-b-2 border-buttoncl"
              : ""
          }`}
          onClick={() => handleNavigation("combos", "/combos")}
        >
          <img src={combooffer} alt="Combo Offer" />
        </a>
      </div>

      {/* Special Offer Icon */}
      <div className="sm:flex sm:flex-row mr-auto">
        <img
          className="hidden sm:block w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 cursor-pointer animate-wiggle"
          src={gif}
          onClick={() => navigate("/combos")}
          alt="Special Offer"
        />
      </div>
    </div>
  );
}

export default Navbar;
