import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>Portfolio</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="navbar-link">Home</a>
          </li>
          {/*   <li className="navbar-item">
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} className="navbar-link">About</a> 
          </li> */}
          <li className="navbar-item">
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }} className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }} className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }} className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;