//import React from 'react';
//import './Navbar.css';
//
//const Navbar = () => {
//  return (
//    <nav className="navbar">
//      <ul>
//        <li><a href="/Home">Home</a></li>
//        <li><a href="/Skills">Skills</a></li>
//        <li><a href="/Academics">Academics</a></li>
//        <li><a href="/Projects">Projects</a></li>
//        <li><a href="/Certificates">Certificates</a></li>
//        <li><a href="/Contact">Contact</a></li>
//        <li><a href="https://drive.google.com/file/d/1xGlJ8yJeFEfJSB8O07TM_Wv85f-Tt01Z/view?usp=drive_link" target="_blank">RESUME</a></li>
//      </ul>
//    </nav>
//  );
//};
//
//export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <h1 className="main">PORTFOLIO</h1>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/Home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="/Tools" onClick={() => setIsOpen(false)}>Tools</a></li>
          <li><a href="/Academics" onClick={() => setIsOpen(false)}>Academics</a></li>
          <li><a href="/Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="/Certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="/Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1xGlJ8yJeFEfJSB8O07TM_Wv85f-Tt01Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer">RESUME</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;