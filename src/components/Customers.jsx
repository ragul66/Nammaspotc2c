import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Moana Michell",
    role: "magna aliqua",
    image: "path/to/image1.jpg", // Replace with actual image path
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    name: "Mike Hamell",
    role: "magna aliqua",
    image: "path/to/image2.jpg", // Replace with actual image path
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    name: "Jessica Anderson",
    role: "magna aliqua",
    image: "path/to/image3.jpg", // Replace with actual image path
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "James Carter",
    role: "magna aliqua",
    image: "path/to/image4.jpg", // Replace with actual image path
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of testimonials
  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  // Function to go to the previous set of testimonials
  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextTestimonials, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Says Our Customers
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {testimonials
          .slice(currentIndex, currentIndex + 2) // Show only 2 testimonials at a time
          .map((testimonial, index) => (
            <div
              key={index}
              className="max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg"
            >
              <p className="mb-4">{testimonial.feedback}</p>
              <div className="flex items-center mt-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-yellow-500"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="mx-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={prevTestimonials}
        >
          &lt;
        </button>
        <button
          className="mx-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={nextTestimonials}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
