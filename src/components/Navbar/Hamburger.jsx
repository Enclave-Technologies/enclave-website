import React from "react";

const Hamburger = ({ toggleMenu, isOpen }) => {
  return (
    <button
      className="block md:hidden focus:outline-none"
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
