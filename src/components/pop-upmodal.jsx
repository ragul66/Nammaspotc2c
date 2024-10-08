import React, { useState, useEffect, useRef } from "react";
// import offerModal from "../assets/offermodal.jpg";
import offer from "../assets/offer1.jpg";
import { useNavigate } from "react-router-dom";

const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsOpen(true);

    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-5 animate-scale-up duration-700 ">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full  mx-4"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-800 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="w-full">
              <img
                src={offer} // Replace with your offer image URL
                alt="Special Offer"
                className="w-full h-full rounded-t-lg cursor-pointer"
                onClick={() => navigate("/combos")}
              />
            </div>

            {/* Text Content Section */}
            {/* <div className="p-6 text-center animate-scale-up">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                Special Offer Just for You!
              </h2>
              <p className="text-gray-700 mb-4">
                Enjoy a <span className="font-bold">20% discount</span> on your
                first order. Use the code:{" "}
                <span className="font-bold text-red-600">WELCOME20</span>
              </p>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
                onClick={handleClose}
              >
                Claim Offer Now
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default OfferModal;
