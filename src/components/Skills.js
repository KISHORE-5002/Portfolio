import React from 'react';
import './Skills.css';
import Navbar from './Navbar';
const Skills = () => {
  const skills = [
    { name: 'Java', icon: 'java-icon' },
    { name: 'HTML', icon: 'html-icon' },
    { name: 'CSS', icon: 'css-icon' },
    { name: 'Bootstrap', icon: 'bootstrap-icon' },
    { name: 'JavaScript', icon: 'js-icon' },
    { name: 'Git', icon: 'git-icon' },
    { name: 'GitHub', icon: 'github-icon' },
    { name: 'MySQL', icon: 'mysql-icon' },
    { name: 'React', icon: 'react-icon' },
    { name: 'PostgreSQL', icon: 'postgresql-icon' },
   { name: 'SpringBoot', icon: 'spring-icon' },
   { name: 'Figma', icon: 'figma-icon' }
  ];

  return (
  <div>
  <Navbar/>
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className={`skill-icon ${skill.icon}`}></div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skills;