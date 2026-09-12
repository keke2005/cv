import React from 'react';

function Projects() {
  return (
    <div className="section" id="projects">
      <h2>Projects</h2>
      
      <div className="projects-grid">
        <div className="project-item">
          <h3>Vehicle Identification System</h3>
          <p>JavaFX & PostgreSQL</p>
          <p>A desktop application designed to manage vehicle records, customer details, and service history in a structured and user-friendly way.</p>
        </div>

        <div className="project-item">
          <h3>TechGlobal Network Project</h3>
          <p>Cisco Packet Tracer</p>
          <p>A secure and scalable network designed to connect multiple company branches, using VLANs, routing, DHCP, ACLs, wireless networking, and secure inter-branch communication.</p>
        </div>

        <div className="project-item">
          <h3>NovaWeb Website</h3>
          <p>React.js & CSS</p>
          <p>A responsive business website built with React, JavaScript, and CSS, featuring a clean layout, navigation, and contact information sections.</p>
        </div>

        <div className="project-item">
          <h3>Interactive 3D Quiz Animation</h3>
          <p>3D Modeling & Animation</p> 
          <p>An interactive 3D quiz application featuring real-time visual feedback (green for correct, red for incorrect) using conditional logic to create a gamified learning experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;