import React from 'react';

function Header({ onToggleDarkMode, onPrint, darkMode }) {
  return (
    <header className="header">
      <h1>Kekeletso Tsilane</h1>
      
      <nav className="nav-links">
        <a href="#profile">Profile</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>

      <div className="action-buttons">
        <button onClick={onToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={onPrint}>Print CV</button>
      </div>
    </header>
  );
}

export default Header;