import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span> </span>
        Aniket Srivastava
      </Link>
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
        <li><Link to="/project" onClick={toggleMenu}>Project</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
