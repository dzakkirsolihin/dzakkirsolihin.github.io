import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectSection = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "Description of the project goes here. Explain what was built and what technologies were used.",
      image: "/api/placeholder/400/200",
      tech: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Title 2",
      description: "Another amazing project description. Focus on the problem solved and the impact made.",
      image: "/api/placeholder/400/200",
      tech: ["Python", "Django", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Title 3",
      description: "A third impressive project. Highlight the key features and technical challenges overcome.",
      image: "/api/placeholder/400/200",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;