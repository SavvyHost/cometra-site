import Image from "next/image";
import React, { useState } from "react";
import { FiChevronDown, FiChevronsDown, FiChevronUp } from "react-icons/fi";
import MapImage from "../../../public/assets/69219368_2571828409542819_6020075708263432192_n 1.png";

const ProgramDetails: React.FC<{ itineraries: any[] }> = ({ itineraries }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg lg:p-0 p-3 flex flex-col md:flex-row md:justify-between">
      {/* Left Column: Program Details */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-6 text-[#0C1D6D]">Program</h2>
        <div className="relative grid grid-cols-1 gap-6">
          {/* Vertical line */}
          <div className="absolute h-full w-[2px] bg-blue-800 left-[12px] top-0"></div>
          {itineraries.map((item, index) => (
            <div key={item.id} className="pb-6 last:border-b-0 relative pl-10">
              {/* Dot */}
              <div className="absolute h-4 w-4 rounded-full bg-blue-800 left-[5px] top-2"></div>
              {/* Program Details with Expand/Collapse */}
              <div className="flex flex-col w-full">
                <div
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title} ({item.place.name})
                  </h3>
                  <div className="transition-transform duration-300 ease-in-out">
                    {activeIndex === index ? (
                      <FiChevronUp className="text-gray-600" />
                    ) : (
                      <FiChevronsDown className="text-gray-600" />
                    )}
                  </div>
                </div>
                <div
                  className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-2">
                    <p>{item.description}</p>
                    <p>Location: {item.place.name}</p>
                    <p>City: {item.city.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Download Brochure
          </button>
        </div>
      </div>
      {/* Right Column: Map Image */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0 md:ml-8">
        <Image src={MapImage} alt="Map" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default ProgramDetails;
