import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";

function Navbar() {
  return (
    <nav className="navbar">
      <NavbarTop />
      <NavbarMain />
    </nav>
  );
}

export default Navbar;
