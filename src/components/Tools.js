// ApiTools.js
import React from 'react';
import './Tools.css';
import Navbar from './Navbar';

const Tools = () => {
  const apiTools = [
    { name: 'VS Code', icon: 'vscode-icon', type: 'Code Editor' },
    {name: 'IntelliJ IDEA',icon: 'intellij-api-icon', type: 'Ultimate Edition'},
    { name: 'Postman', icon: 'postman-icon', type: 'API Testing' },
    { name: 'Git Bash', icon: 'gitbash-icon', type: 'Version Control' },
    { name: 'GitHub', icon: 'github-icon', type: 'Code Repository' },
    { name: 'MySQL', icon: 'mysql-icon', type: 'Database' },
    { name: 'PostgreSQL', icon: 'postgresql-icon', type: 'Database' },
    { name: 'Vercel', icon: 'vercel-icon', type: 'Deployment' },
    { name: 'Figma Suite', icon: 'figma-icon', type: 'Design'}
  ];

  return (
    <div>
      <Navbar/>
      <section id="api-tools" className="api-tools-section">
        <h2 className="section-title">API Development Toolkit</h2>
        <div className="api-tools-container">
          {apiTools.map((tool, index) => (
            <div key={index} className="api-tool-card">
              <div className={`api-tool-icon ${tool.icon}`}></div>
              <h3>{tool.name}</h3>
              <p className="tool-type">{tool.type}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tools;