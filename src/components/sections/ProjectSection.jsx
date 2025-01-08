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
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 group" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
                Featured Projects
                <div className="mt-2"></div>
                <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
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