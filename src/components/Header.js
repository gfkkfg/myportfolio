import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <a href="#home">Thangaraj M</a>
      </div>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div
        className={`hamburger ${menuActive ? 'active' : ''}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
