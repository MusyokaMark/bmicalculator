import React, { useState } from 'react'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="w-[50%] max-w-md mx-auto">
      <div className="border border-gray-300 rounded-md">
        <div
          className="flex justify-between items-center border-b border-gray-300 px-4 py-3 cursor-pointer"
          onClick={toggleAccordion}
        >
          <span className="text-lg font-medium">Accordion Title</span>
          <svg
            className={`transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-0.001-1.413z"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="px-4 py-3 border-b border-gray-300">
            <p className="text-gray-700">Accordion Content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion