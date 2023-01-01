import React from "react";

function HamburgerMenu({ setIsActive, isActive }) {
  return (
    <div
      className={isActive ? "hamburger is-active" : "hamburger"}
      id="hamburger-11"
      onClick={(event) => {
        event.stopPropagation();
        setIsActive(!isActive);
      }}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}

export default HamburgerMenu;
