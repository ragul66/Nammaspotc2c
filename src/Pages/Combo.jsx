import React from "react";
import image from "../assets/burger1.png";
import Footer from "../components/Footer";

// burger
import burger1 from "../assets/burger1.png";

// pasta
import pasta from "../assets/pasta.png";

//fries
import fries from "../assets/fries.png";

//pizza
import pizza from "../assets/pizza.png";

const Combo = () => {
  const combos = [
    {
      id: 1,
      name: "Spicy Chicken Combo",
      description: "Includes 2 pieces of spicy chicken, fries, and a drink.",
      price: "₹149",
      image: image, // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Burger Meal Combo",
      description: "A delicious burger with fries and a soft drink.",
      price: "₹149",
      image: pasta,
    },
    {
      id: 3,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹99",
      image: fries,
    },
    {
      id: 4,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: pizza,
    },
    {
      id: 5,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: pasta,
    },
    {
      id: 6,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: burger1,
    },
  ];

  return (
    <div className="min-h-screen bg-white  p-4 flex flex-col items-center ">
      <header className="w-full max-w-4xl  mb-6 font-font1">
        {/* <div className="ml-auto flex flex-row">
          <img className="w-12 h-12" src={offer} />
        </div> */}
        <h1 className="text-2xl lg:text-3xl  text-red-600">Combo Offers</h1>
        <p className="text-xs lg:text-lg text-gray-600 mt-2">
          Choose your favorite combo and enjoy the deliciousness!
        </p>
      </header>

      <div className="w-full max-w-6xl  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 font-font1">
        {combos.map((combo) => (
          <div
            key={combo.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-48 object-cover rounded-md p-2"
            />
            <div className="mt-4 animate-scale-up  ">
              <h2 className="text-xl font-semibold text-gray-800">
                {combo.name}
              </h2>
              <p className="text-gray-600 mt-2">{combo.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-red-500 font-bold text-xl">
                  {combo.price}
                </span>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Combo;
