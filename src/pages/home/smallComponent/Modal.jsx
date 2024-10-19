import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, imageUrl }) => {
  // useEffect to control scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body when modal is open
      document.body.classList.add("overflow-hidden");
    } else {
      // Re-enable scrolling on body when modal is closed
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup: ensure scrolling is re-enabled when modal unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-[90%] max-w-md p-0 relative border border-white ">
        
        {/* Close button with increased z-index */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white border border-white text-xl ease-in rounded-full  hover:bg-gray-300 px-2 pb-1  z-50"
        >
          &times;
        </button>

        {/* Image and overlay */}
        <div className="relative">
          <img
            src={imageUrl}
            alt="Modal Thumbnail"
            className="w-full h-full object-cover rounded-t-lg"
          />
          
          {/* Gradient overlay on the image */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-gray-900 to-transparent"></div>
          
          {/* Text overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-left">
            {/* Movie title */}
            <h2 className="text-4xl font-bold">MAHARAJA</h2>
            
            {/* Movie details */}
            <p className="text-sm text-gray-300 mt-1">
              2024 | U/A 16+ | Movie | Dramas
            </p>

            {/* Movie description */}
            <p className="text-sm text-gray-300 mt-2">
              When his prized possession gets stolen, a barber seeks help from the police, 
              who jeer at his request — until they learn what they're really looking for.
            </p>
          </div>
        </div>

        {/* New gradient between image and button div */}
        <div className="relative h-6 bg-gradient-to-b from-transparent to-black"></div>

        {/* Watch Now button */}
        <div className="p-6 bg-black text-center">
          <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
