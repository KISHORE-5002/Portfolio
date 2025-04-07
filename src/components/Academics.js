import React from 'react';
import './Academics.css';
import Navbar from './Navbar';
const Academics = () => {
  const academics = [
    {
      degree: 'B.Tech - IT',
      institution: 'Er. Perumal Manimekalai College Of Engineering',
      score: '7.72 CGPA'
    },
    {
      degree: 'HSC',
      institution: 'ST.Joseph Matric Higher Secondary School',
      score: '63.1%'
    },
    {
      degree: 'SSLC',
      institution: 'ST.Joseph Matric Higher Secondary School',
      score: '83%'
    }
  ];

  return (
  <div>
  <Navbar/>
    <section id="academics" className="academics-section">
      <h2 className="section-title">My Academics</h2>
      <div className="academics-container">
        {academics.map((academic, index) => (
          <div key={index} className="academic-card">
            <h3>{academic.degree}</h3>
            <p>{academic.institution}</p>
            <p className="score">{academic.score}</p>
          </div>

        ))}
      </div>
    </section>
       </div>
  );
};

export default Academics;