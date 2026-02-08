import './App.css'
import Navbar from './components/Navbar'
import Code_display from './components/Code-display'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SkillCard from './components/SkillCard'
import './components/SkillCard.css'
import Projects from './components/Projects'
import GetTouch from './components/Get-Touch'
import Footer from './components/Footer'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: "React", icon: "/react.svg", level: 60},
    { name: "C#", icon: "/csharp.svg", level: 90 },
    { name: ".NET", icon: "/dotnet-logo.svg", level: 85 },
    { name: "JavaScript", icon: "/js-logo.svg", level: 65 },
  ]

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <motion.div
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: .98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ transformOrigin: 'center' }}
        >
          <Code_display />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{" "}
          <span className="text-primary relative">
            Igor Sarda Rezende
            <span className="absolute inset-0 bg-cyan-400/20 blur-xl -z-10"></span>
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a developer who loves C# and React, specializing in building exceptional digital experiences that
          combine beautiful design with powerful functionality.
        </motion.p>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="main-button work-button" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>View My Work</button>
          <button className="main-button contact-button" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact Me</button>
        </motion.div>
        <motion.div
          className="social-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/luckdiamond0" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="main-icons" />
          </a>
          {/*<a href="https://linkedin.com/in/" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="main-icons" /> 
          </a>  */}
          <a href="mailto:igorsarda.dev@gmail.com?subject=Contact%20Form%20Submission" className="text-gray-400 hover:text-white transition-colors">
            <FaEnvelope className="main-icons" />
          </a>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
          </motion.h2>
        </motion.div>
      </div>
      <div id="skills" className='skill-container'>
        <h2 className="skills-name">
          My <span className="skills-text-color">Skills</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
        <div className="otherlg-main-container">
          <div className="otherlg-container">
            <h3 className="otherlg-main-text">Other Technologies I Work With</h3>
            <div className="otherlg-text">
              {[
                "HTML",
                "CSS",
                "TypeScript",
                "Git",
              ].map((tech, index) => (
                <span key={index} className="otherlg-background-text">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <GetTouch />
      <Footer />
    </>
  )
}

export default App
