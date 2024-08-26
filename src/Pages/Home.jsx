import React from "react";
// import banner from "../assets/banner1.jpg";
import bannerm from "../assets/banner mobile.jpg";
import banner4 from "../assets/banner4.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import Menu from "./Menu";
import OfferModal from "../components/pop-upmodal";
import TestimonialCarousel from "../components/Customers";

function Card({ img, name, offer, order }) {
  return (
    <div className="sm:flex sm:flex-col md:flex-row lg:flex  lg:flex-row  justify-center items-center sm:items-center sm:justify-center  lg:w-[500px] shadow-lg rounded-lg p-8 mt-8 bg-cardbg font-font1 text-xl">
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4">
        <img
          className="rounded-full w-32 h-32 border-4 border-borderbg hover:scale-110"
          src={img}
        />
        <div className="text-center flex flex-col justify-center items-center md:text-left md:ml-4">
          <h2 className="text-white text-xl font-semibold">{name}</h2>
          <p className="text-white">{offer}</p>
          {/* <button className="bg-buttoncl text-white px-4 py-2 rounded mt-2">
            {order}
          </button> */}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const data = [
    {
      name: "Tasty Sunday",
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
    {
      name: "Pizza days",
      offer: "15% off",
      order: "Order Now",
      img: two,
    },
    {
      name: "Summer Fries",
      offer: "15% off",
      order: "Order Now",
      img: two,
    },
  ];

  return (
    <>
      <OfferModal />
      <div className="">
        {/* Mobile Screen */}
        <img
          src={banner4}
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

      <div className="w-full max-w-4xl text-red-600  lg:text-3xl text-2xl mt-8 p-3 lg:ml-[100px]">
        Our Exciting Offers
      </div>

      {/* Center the cards on large screens */}
      <div className="grid grid-cols-2  md:grid md:grid-cols-2 lg:flex  lg:justify-center lg:items-center gap-4 p-4">
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            offer={item.offer}
            // order={item.order}
          />
        ))}
      </div>
      <Menu />

      <TestimonialCarousel />
    </>
  );
}

export default Home;
