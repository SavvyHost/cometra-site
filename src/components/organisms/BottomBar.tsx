import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 z-50 left-0 right-0 bg-[#e5f9ff] lg:p-1 py-1 flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Text Section */}
      <div className="flex lg:flex-col flex-row gap-2 text-center md:text-left mb-4 md:mb-0 ml-0 md:ml-4">
        <span className="font-bold text-black">Join us</span>
        <span className="text-black">Get your price</span>
      </div>

      {/* Links Section */}
      <div className="flex flex-row md:flex-row gap-4 md:gap-6 text-center justify-center items-center md:text-right mr-0 md:mr-4">
        <a href="#brochure" className="text-blue-600 font-bold">
          Download Brochure
        </a>
        <button className="bg-[#0C1D6D] text-white font-bold lg:py-2 py-1 lg:px-6 px-3 rounded-sm">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
