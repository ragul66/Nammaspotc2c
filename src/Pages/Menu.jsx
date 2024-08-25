import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// burger
import burger1 from "../assets/burger1.png";

// pasta
import pasta from "../assets/pasta.png";

//fries
import fries from "../assets/fries.png";

//pizza
import pizza from "../assets/pizza.png";
import Navbar from "../components/Navbar";
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const data = [
    {
      heading: "Burger",
      img: burger1,
      headdname: "Cheese Burger",
      Description: "A delicious cheese burger with fresh lettuce and tomato.",
      price: "₹99",
    },
    {
      heading: "Pizza",
      img: pizza,
      headdname: "Pepperoni Pizza",
      Description: "A classic pepperoni pizza with a crispy crust.",
      price: "₹199",
    },
    {
      heading: "Pasta",
      img: pasta,
      headdname: "Spaghetti Bolognese",
      Description: "Spaghetti with a rich and flavorful bolognese sauce.",
      price: "₹149",
    },
    {
      heading: "Fries",
      img: fries,
      headdname: "French Fries",
      Description: "Crispy golden french fries.",
      price: "₹49",
    },
    {
      heading: "Fries",
      img: fries,
      headdname: "French Fries",
      Description: "Crispy golden french fries.",
      price: "₹49",
    },
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.heading === selectedCategory);

  return (
    <>
      <div className="flex justify-center items-center font-font1 text-3xl font-bold mt-12">
        Our Home
      </div>

      <div className="sm:grid sm:grid-cols-4  lg:flex lg:flex-row justify-center items-center space-x-2 mt-12 lg:p-2">
        {["All", "Burger", "Pizza", "Pasta", "Fries"].map((category) => (
          <p
            key={category}
            className={`sm:grid sm:grid-col-4 text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center cursor-pointer ${
              selectedCategory === category ? "bg-selectedbg" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12 ">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white m-4 p-4 rounded-lg  w-80 md:w-60 lg:w-80 shadow-2xl font-font1"
          >
            <img
              src={item.img}
              alt={item.headdname}
              className="w-full h-40 object-cover rounded-lg hover:scale-110"
            />
            <div className="bg-cardbg text-white p-2 rounded-lg mt-2">
              <h3 className="text-xl font-bold mt-2">{item.headdname}</h3>
              <p className="mt-2">{item.Description}</p>
              <div className="text-xl font-bold mt-2 text-buttoncl">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center items-center mt-12">
        <div
          className="bg-buttoncl w-fit rounded-full text-white font-font1 p-2 text-2xl hover:bg-gray-400 cursor-pointer"
          onClick={() => navigate("/Menu")}
        >
          View More
        </div>
      </div>
    </>
  );
}

export default Menu;
