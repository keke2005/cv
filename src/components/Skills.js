import React from 'react';

function Skills({ showSkills, toggleSkills }) {
  // Updated with your exact skills from the screenshot
  const skillsList = [
    "Java",
    "JavaFX",
    "C++",
    "Python",
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Cisco Packet Tracer",
    "3D Modelling",
    "UI/UX Design",
    "Multimedia Production",
    "PostgreSQL",
    "Database Design",
  ];

  return (
    <div className="section" id="skills">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Skills</h2>
        <button onClick={toggleSkills} style={{ marginBottom: '10px' }}>
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </button>
      </div>

      {showSkills && (
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index} className="skill">{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Skills;