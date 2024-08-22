import React, { useState } from "react";
import burger1 from "../assets/burger1.png";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      img: "pizza.jpg",
      headdname: "Pepperoni Pizza",
      Description: "A classic pepperoni pizza with a crispy crust.",
      price: "₹199",
    },
    {
      heading: "Pasta",
      img: "pasta.jpg",
      headdname: "Spaghetti Bolognese",
      Description: "Spaghetti with a rich and flavorful bolognese sauce.",
      price: "₹149",
    },
    {
      heading: "Fries",
      img: "fries.jpg",
      headdname: "French Fries",
      Description: "Crispy golden french fries.",
      price: "₹49",
    },
    {
      heading: "Fries",
      img: "fries.jpg",
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

      <div className="flex flex-row justify-center items-center space-x-2 mt-12">
        {["All", "Burger", "Pizza", "Pasta", "Fries"].map((category) => (
          <p
            key={category}
            className={`text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center cursor-pointer ${
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
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="bg-cardbg text-white p-2 rounded-lg mt-2">
              <h3 className="text-xl font-bold mt-2">{item.headdname}</h3>
              <p className="mt-2">{item.Description}</p>
              <div className="text-xl font-bold mt-2">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
