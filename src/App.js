import React, { useState, useEffect } from 'react';
import './App.css';

// --- ALL REQUIRED IMPORTS ---
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';       // <--- ADDED
import References from './components/References';   // <--- ADDED
import Footer from './components/Footer';

function App() {
  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);
  
  // State for Show/Hide Features
  const [showReferences, setShowReferences] = useState(true);
  const [showSkills, setShowSkills] = useState(true);

  // useEffect to update the document title on load
  useEffect(() => {
    document.title = "Kekeletso Tsilane - Online CV";
  }, []);

  // Event Handlers
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <Header 
        onToggleDarkMode={toggleDarkMode} 
        onPrint={handlePrint} 
        darkMode={darkMode}
      />
      
      <main>
        <Profile />
        
        <div className="cv-content">
          <div className="cv-left">
            <Education />
            <Skills 
              showSkills={showSkills} 
              toggleSkills={toggleSkills} 
            />
          </div>
          
          <div className="cv-right">
            <Experience />
            
            {/* Make sure Projects is imported above! */}
            <Projects />
            
            <div className="section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>References</h2>
                <button onClick={toggleReferences} style={{ marginBottom: '10px' }}>
                  {showReferences ? 'Hide References' : 'Show References'}
                </button>
              </div>
              {/* Make sure References is imported above! */}
              {showReferences && <References />}
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;