import React from "react";

const Hamburger = ({ toggleMenu, isOpen }) => {
  return (
    <button
      className="relative block md:hidden focus:outline-none w-8 h-8 z-[1000]"
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      aria-label="Toggle navigation menu"
    >
      <div className="w-8 h-8 flex flex-col justify-center items-center">
        <span
          className={`block h-0.5 w-6 bg-[#FB4E29] absolute transform transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#FB4E29] absolute transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#FB4E29] absolute transform transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </div>
    </button>
  );
};

export default Hamburger;
