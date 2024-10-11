import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const TripClients: React.FC<Props> = (props) => {
  return (
    <div className="w-full lg:p-0 p-3">
      <h2 className="text-3xl font-bold text-[#0C1D6D]  mb-4">Client Review</h2>
      <div className="bg-white/30 backdrop-blur-md border rounded-lg p-6 shadow-sm flex flex-col gap-4 mx-auto md:w-3/4">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="w-5 h-5 text-black" />
            ))}
          </div>
          <span className="text-gray-500 text-sm">10 Feb 2024</span>
        </div>
        <p className="text-gray-700">
          Each month we pick a few breathtaking places were super excited about
          and use our connections to negotiate extraordinary vacation packages –
          exclusively for members. Offers so good, its like buying Bitcoin in
          2010.
        </p>
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <h4 className="font-bold">User Name</h4>
            <span className="text-gray-500 text-sm">Job title</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripClients;
