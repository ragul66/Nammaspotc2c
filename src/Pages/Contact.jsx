import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: "",
    table: "",
    timing: "",
    review: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.review) {
      setReviews([...reviews, formData.review]);
      setFormData({ ...formData, review: "" }); // Clear review field after submission
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between font-serif ">
        {/* Header Section */}
        <header className=" text-red-600 text-center py-4 mt-12">
          <h1 className="text-2xl md:text-3xl font-bold">
            Contact NammaSpotC2C
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row flex-1 p-2 lg:p-12">
          {/* Form Section */}
          <section className="bg-white p-6 rounded shadow-md w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone No</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Seats</label>
                <input
                  type="number"
                  name="seats"
                  value={formData.seats}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Table</label>
                <input
                  type="text"
                  name="table"
                  value={formData.table}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Timing</label>
                <input
                  type="time"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Review</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </section>

          {/* Reviews Section */}
          <section className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded bg-gray-50 shadow-sm"
                  >
                    <p>{review}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </section>
        </main>

        <h1 className="text-2xl text-center md:text-3xl text-red-600 font-bold mt-12">
          Find us here
        </h1>

        {/* Google Map Section */}
        <section className="w-full h-64 md:h-96 mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.618606671289!2d78.03894877459943!3d9.882329590217143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c59808795b25%3A0x583cfb501acb24d!2sNamma%20Spot%20C2%20Chicken!5e0!3m2!1sen!2sin!4v1724659362475!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="NammaSpotC2C Location"
          ></iframe>
        </section>

        {/* Footer Section */}
        {/* <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 NammaSpotC2C. All rights reserved.</p>
      </footer> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
