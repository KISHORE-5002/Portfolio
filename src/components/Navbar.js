import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close menu when resizing to desktop if it was open
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </div>
        )}
        <h1 className="main">PORTFOLIO</h1>
        <ul className={`nav-links ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop' : ''}`}>
          <li><a href="/Home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="/Tools" onClick={() => setIsOpen(false)}>Tools</a></li>
          <li><a href="/Academics" onClick={() => setIsOpen(false)}>Academics</a></li>
          <li><a href="/Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="/Certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="/Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1xGlJ8yJeFEfJSB8O07TM_Wv85f-Tt01Z/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;