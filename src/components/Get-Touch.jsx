import React from 'react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail } from 'react-icons/fa'
import './Get-Touch.css';

function GetTouch() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200">luckdiamondplayer@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Github className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-gray-200">github.com/luckdiamond0</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </div>
               <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-gray-200">linkedin.com/in/luckdiamond0</p>
                </div> */}
              </div>          
            </div>
          </div>
          <div className='get-touch-contact'>
            <h1>Let’s Start the Conversation!</h1>
            <a className='get-touch-btnmail' href="mailto:luckdiamondplayer@gmail.com?subject=Contact%20Form%20Submission">Send Message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetTouch;

