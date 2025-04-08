import React from 'react';
import './Projects.css';
import Navbar from './Navbar';



const Projects = () => {
  const projects = [
    {
      title: 'NewNest',
      description: 'A system facilitating adoption processes for New Nest Child Adoption, ensuring the support. A digital platform streamlining child adoption processes for New Nest Child Adoption, ensuring transparency, legal compliance, and post-adoption support. Secure user portals, document verification, matching algorithms, and real-time communication tools for agencies, parents, and social workers.',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'MYSQL', 'REACT JS', 'SPRING BOOT'],
      sourceCode: '#',
      image: 'Newnest.png',
      imageAlt: 'NewNest Adoption Platform'
    },
    {
      title: 'Smart Table Food Order in restaurant',
      description: 'Smart Table Food Ordering system aims to streamline dining experiences in restaurants. Customers can scan a QR code to access the menu, customize orders, and share preferences directly with the kitchen, enhancing efficiency and reducing errors while ensuring prompt service and effective order management.',
      technologies: ['Python', 'HTML', 'CSS', 'JAVASCRIPT', 'MYSQL'],
      sourceCode: '#',
      image: 'Smart Table Food Order in restaurant.png',
      imageAlt: 'Smart Table Food Ordering System'
    },
    {
      title: 'An Intelligent Vehicle Breakdown Assistance management Service',
      description: 'The project aims to create a system for handling vehicle breakdowns. customer can report issues and share their GPS location for services like roadside assistance The system streamlines reporting for prompt customer assistance and effective breakdown management.',
      technologies: ['Python', 'HTML', 'CSS', 'JAVASCRIPT', 'MYSQL'],
      sourceCode: '#',
      image: "vehicle-assistance.png",
      imageAlt: 'Vehicle Breakdown Assistance System'
    }
  ];

  return (
    <div>
      <Navbar />
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-image"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.sourceCode} className="source-code-btn">Source Code</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;