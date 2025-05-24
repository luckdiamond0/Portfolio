import React from 'react';
import { Card, CardContent, Button, Image, Link, ExternalLink } from './ui/Card';
import './Projects.css';

// Updated projects data
const projects = [
  {
    title: "Login App",
    description: "A login application with a backend built with C#, Js and Imgui",
    tags: ["C#", ".NET","Js", "Imgui"],
    image: "/Loginapp.png",
    link: "https://github.com/luckdiamond0/Login-App-",
  },
  {
    title: "Charm Pad",
    description: "Notepadd for productivity enhancement C# with WPF",
    tags: ["C#", ".NET", "WPF"],
    image: "/Charmpad.png",
    link: "https://github.com/luckdiamond0/Charmpad#",
  },
  {
    title: "Charm Tool",
    description: "Multitool created in C# made for ease and agility in using the app",
    tags: ["C#", ".NET"],
    image: "/Charmtool.png",
    link: "https://github.com/luckdiamond0/CharmsTool",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-cyan-500 transition-all group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <Link
                    href={project.link}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="btn-viewallpjt" onClick={() => window.location.href = 'https://github.com/luckdiamond0?tab=overview&from=2025-05-01&to=2025-05-22'}>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;