import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email (Gmail)
import Navbar from './Navbar';
const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = ['JAVA FULL STACK WEB DEVELOPER ','REACT SPECIALIST','FIGMA SPECIALIST'];

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 150;
    const currentRole = roles[loopNum % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, roles]);

  return (
  <div>
  <Navbar/>


    <div className="home-container">
      <div className="content">
        <div className="text-content">
          <h1 className="greeting">
            <p>Hi, I'm</p> <span className="name-highlight">KISHORE</span>
          </h1>
          <h2 className="role">
            {typedText}<span className="cursor">|</span>
          </h2>
          <span className="description">
            I build exceptional digital experiences with modern web technologies.
          </span>
          <div className="buttons">
            <a href="/Projects"><button className="primary-btn">View Work</button></a>
            <button className="secondary-btn">Contact Me</button>

          </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/kishore-s-76b4a7274/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
              <a href="mailto:kishoresundar972@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </a>
              <a href="https://github.com/KISHORE-5002" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </div>
        </div>
        <div className="image-container">
          <div className="profile-image"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;