import React from "react";
import image from "../assets/burger1.png";

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
      image: image,
    },
    {
      id: 3,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: image,
    },
    {
      id: 4,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: image,
    },
    {
      id: 5,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: image,
    },
    {
      id: 6,
      name: "Family Feast",
      description:
        "8 pieces of chicken, 4 biscuits, large fries, and 4 drinks.",
      price: "₹149",
      image: image,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-4 flex flex-col items-center font-font1">
      <header className="w-full max-w-4xl text-center mb-6">
        <h1 className="text-4xl font-bold text-red-600">Combo Offers</h1>
        <p className="text-lg text-white mt-2">
          Choose your favorite combo and enjoy the deliciousness!
        </p>
      </header>

      <div className="w-full max-w-6xl  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
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
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">
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
    </div>
  );
};

export default Combo;
