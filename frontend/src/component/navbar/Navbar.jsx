import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import './navbar.css'
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="Container">
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        QureyHive
      </a>

      <button className="navbar-toggle" onClick={handleToggle}>
        <FaBars />
      </button>

      <ul className={`navbar-links ${showLinks ? "show-links" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
      </ul>

      <div className="navbar-buttons">
        <a href="/login" className="navbar-button login-button">
          Login
        </a>
        <a href="/signup" className="navbar-button signup-button">
          Sign up
        </a>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;