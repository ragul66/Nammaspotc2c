import React from "react";

function Menu() {
  const data = [
    {
      heading: "",
      img: "",
      headdname: "",
      Description: "",
      price: "₹99",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center font-font1 text-3xl font-bold mt-12">
        our Home
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 mt-12">
        <p className="text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center">
          All
        </p>
        <p className="text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center">
          Burger
        </p>
        <p className="text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center">
          Pizza
        </p>
        <p className="text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center">
          Pasta
        </p>
        <p className="text-white bg-cardbg p-2 rounded-full w-20 flex justify-center items-center">
          Fries
        </p>
      </div>
    </>
  );
}

export default Menu;
