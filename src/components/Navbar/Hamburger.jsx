import React from "react";

const Hamburger = ({ toggleMenu, isOpen }) => {
  return (
    <button
      className="block xl:hidden focus:outline-none px-2 md:px-4"
      onClick={toggleMenu}
      aria-label="Toggle navigation menu"
    >
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Hamburger;
