import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

type GoodToKnowProps = {
  includes: { description: string; status: string }[];
};

const GoodToKnow: React.FC<GoodToKnowProps> = ({ includes }) => {
  // Split the includes into "included" and "excluded" based on the status
  const includedItems = includes.filter((item) => item.status === "yes");
  const excludedItems = includes.filter((item) => item.status === "no");

  return (
    <div className="lg:p-0 p-3">
      <h2 className="text-3xl font-bold mb-6 text-[#0C1D6D]">Good To Know</h2>
      <div className="lg:w-full w-full pr-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Included Items */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Included
            </h3>
            <ul>
              {includedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 mb-2"
                >
                  <FiCheckCircle className="text-green-600 mr-2" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded Items */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Excluded
            </h3>
            <ul>
              {excludedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 mb-2"
                >
                  <FiXCircle className="text-red-600 mr-2" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
