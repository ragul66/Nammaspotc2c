import React from "react";
import about from "../assets/about.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full max-w-4xl sm:text-center mb-12">
        <h1 className="text-2xl lg:text-4xl  ">About NammaspotC2C</h1>
        <p className="text-lg text-gray-700 mt-4">
          Discover the story behind our journey, our commitment to quality, and
          our passion for delicious food.
        </p>
      </header>

      {/* Content Section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={about}
            alt="Our Journey"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl text-black mb-4">Our Journey</h2>
          <p className="text-black mb-6">
            NammaspotC2C started with a passion for great food and a desire to
            share it with the community. We believe in using high-quality
            ingredients to create delicious meals that bring people together.
            From our humble beginnings, we've grown into a beloved local
            favorite, known for our commitment to quality and customer
            satisfaction.
          </p>

          <h2 className="text-3xl  mb-4">Our Values</h2>
          <p className="text-gray-600">
            We are committed to providing excellent service, maintaining high
            standards of food safety, and giving back to the community. Our team
            is dedicated to creating a welcoming environment where everyone can
            enjoy a great meal.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-4xl mt-12 text-center">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Join Us on Our Culinary Adventure!
        </h3>
        <p className="text-gray-700 mb-6">
          Whether you're a long-time fan or a first-time visitor, we invite you
          to come and experience the flavors that make NammaspotC2C special.
          Your satisfaction is our top priority, and we can't wait to serve you.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
