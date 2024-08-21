import React from "react";
import banner from "../assets/banner1.jpg";
import bannerm from "../assets/banner mobile.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import Navbar from "../components/Navbar";
import Menu from "./Menu";

function Card({ img, name, offer, order }) {
  return (
    <div className="sm:flex sm:flex-col md:flex-row lg:flex  lg:flex-row  justify-center items-center sm:items-center sm:justify-center  lg:w-[500px] shadow-lg rounded-lg p-8 mt-12 bg-cardbg font-font1 text-xl">
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4">
        <img
          className="rounded-full w-32 h-32 border-4 border-borderbg hover:scale-110"
          src={img}
        />
        <div className="text-center md:text-left md:ml-4">
          <h2 className="text-white text-xl font-semibold">{name}</h2>
          <p className="text-white">{offer}</p>
          <button className="bg-buttoncl text-white px-4 py-2 rounded mt-2">
            {order}
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const data = [
    {
      name: "Tasty Thursday",
      offer: "20% off",
      order: "Order Now",
      img: one,
    },
    {
      name: "Pizza days",
      offer: "15% off",
      order: "Order Now",
      img: two,
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        {/* Mobile Screen */}
        <img
          src={banner}
          alt="LaptopScreen"
          className="hidden sm:block md:block w-full h-fit lg:mb-24"
        />

        {/* Laptop image */}
        <img
          src={bannerm}
          alt="mobilescreen"
          className="block sm:hidden w-full"
        />
      </div>

      <div className="flex justify-center items-center font-font1 font-bold text-3xl mt-12">
        Our Existing Offers
      </div>

      {/* Center the cards on large screens */}
      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-4 p-4">
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            offer={item.offer}
            order={item.order}
          />
        ))}
      </div>

      <Menu />
    </>
  );
}

export default Home;
