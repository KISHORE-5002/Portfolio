import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><a href="/Academics">Academics</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Certificates">Certificates</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1xGlJ8yJeFEfJSB8O07TM_Wv85f-Tt01Z/view?usp=drive_link" target="_blank">RESUME</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;