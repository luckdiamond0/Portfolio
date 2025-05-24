import React from 'react';
import './Footer.css'
import { FaGithub as Github, FaLinkedin as Linkedin,FaCode as Code ,FaEnvelope as Mail } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer-container bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="footer-flex flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className='footer-myname'>Luckdiamond0</p>
            <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/luckdiamond0" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5 colorblue" />
            </a>
           {/*  <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5 colorblue" />
            </a> */}
            <a href="mailto:luckdiamondplayer@gmail.com?subject=Contact%20Form%20Submission" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5 colorblue" />
            </a>
            <a href="https://github.com/luckdiamond0/Portfolio" className="text-gray-400 hover:text-white transition-colors">
              <Code className="h-5 w-5 colorblue" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

