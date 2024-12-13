import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src="src/assets/MG Marcelo Guillamón.png" alt="logo" />
          </Link>
        </div>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/nosotros" onClick={() => setIsOpen(false)}>
            Nosotros
          </Link>
          <Link to="/vehiculos" onClick={() => setIsOpen(false)}>
            Vehículos
          </Link>
          <Link to="/noticias" onClick={() => setIsOpen(false)}>
            Noticias
          </Link>
          <button onClick={scrollToContact} className="contact-link">
            Contacto
          </button>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <HiMenu/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
