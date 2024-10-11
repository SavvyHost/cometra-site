import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface FaqsProps {
  questions: Question[];
}

const Faqs: React.FC<FaqsProps> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle collapse
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center py-9 items-start ">
      <div className="lg:w-full w-full px-4 lg:px-0">
        <h2 className="text-2xl font-bold mb-4 text-[#0C1D6D]">FAQS</h2>
        <div className="grid grid-cols-1 gap-4">
          {questions.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <div className="flex flex-col w-full">
                <div
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {activeIndex === index && (
                    <div className="mt-2 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
