//carousel component
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerl from "../assets/banner1.jpg";
import bannerl2 from "../assets/bannerl2.jpg";
import bannerl3 from "../assets/bannerl3.webp";

import bannerm from "../assets/banner mobile.jpg";
import bannerm1 from "../assets/pizzabannerm.jpg";
import bannerm2 from "../assets/bannerm2.jpg";

const CarouselComponent = () => {
  // Helper function to determine if the screen is mobile
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="w-full h-fit bg-gray-100 flex justify-center items-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        autoPlay={true} // Enable auto sliding only for mobile
        infiniteLoop={true} // Enable infinite loop
        interval={3000} // Slide change interval
        swipeable={isMobile} // Allow swipe on mobile only
        emulateTouch={isMobile} // Allow touch to emulate swipe on mobile
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <div className={`w-full ${isMobile ? "h-full" : "h-[500px]"}`}>
          <picture>
            {/* Image for large screens */}
            <source media="(min-width: 1024px)" srcSet={bannerl2} />
            {/* Image for smaller screens */}
            <img
              src={bannerm}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-4xl  font-bold mb-4 animate-left-to-right ">
              Blasting Burgers
            </h1>
            <p className="text-md md:text-lg p-2 animate-bottom-to-top">
              Burgers are sandwiches with a meat or veggie patty between buns.
              They often include toppings <br />
              like cheese, lettuce, tomatoes, and sauces. Popular for their
              juicy texture and delicious flavor.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={`w-full ${isMobile ? "h-full" : "h-[500px]"}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={bannerl} />
            <img
              src={bannerm1}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-left-to-right">
              Pizza days💕
            </h1>
            <p className="text-md md:text-lg p-2 animate-bottom-to-top">
              Pizza is a flatbread topped with tomato sauce, cheese, and various
              toppings like pepperoni, <br />
              vegetables, and olives. It is baked until crispy and is popular
              for its rich, savory flavors.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className={`w-full ${isMobile ? "h-full" : "h-[500px]"}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={bannerl3} />
            <img
              src={bannerm2}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-left-to-right">
              ASpiring Combos
            </h1>
            <p className="text-md md:text-lg animate-bottom-to-top">
              This is the third slide. Make it engaging!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
