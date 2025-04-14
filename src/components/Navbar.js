import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className="navbar"
      ref={navbarRef}
      style={{
        transform: navbarVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div className="navbar-container">
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </div>
        )}

        <h1 className="left">PORTFOLIO</h1>
        <ul className={`nav-links ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop' : ''}`}>
          <li><a href="/Home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="/Tools" onClick={() => setIsOpen(false)}>Tools</a></li>
          <li><a href="/Academics" onClick={() => setIsOpen(false)}>Academics</a></li>
          <li><a href="/Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="/Certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="/Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="right">
            <a
              href="https://drive.google.com/file/d/13sxU9SV0S6HgTToSUpX4lddAbp0e1xrB/view?usp=drive_link"
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