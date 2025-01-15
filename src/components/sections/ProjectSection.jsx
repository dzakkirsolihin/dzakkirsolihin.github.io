import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { getImagePath } from '../../utils/imageUtils';

// Dalam komponen:
// <img src={getImagePath('profile/profile.png')} alt="Profile" />

const ProjectSection = () => {
  const projects = [
    {
      title: "BSB Website",
      description: "a company profile website and attendance system according to the needs of the Baitush Sholihin Bandung Foundation.",
      image: "images/projects/bsb-presensi-guru.png",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      // demoLink: "#",
      codeLink: "https://github.com/dzakkirsolihin/bsb-website"
    },
    {
      title: "ConnecTrip",
      description: "The website offers an interactive map for each trip, along with photos of the memories shared during the trip.",
      image: "images/projects/connectrip-trip-map.png",
      tech: ["Laravel", "Tailwind", "MySQL"],
      // demoLink: "#",
      codeLink: "https://github.com/dzakkirsolihin/ConnecTrip"
    },
    {
      title: "PerSeaBlue",
      description: "A third impressive project. Highlight the key features and technical challenges overcome.",
      image: "images/projects/login-perseablue.png",
      tech: ["Java", "OOP"],
      // demoLink: "#",
      codeLink: "https://github.com/dzakkirsolihin/PerSeaBlue"
    },
    {
      title: "Klasifikasi Tipe Investor",
      description: "an investor type classification program based on financial attributes using k-NN learning algorithm.",
      image: "images/projects/klasifikasi-tipe-investor.png",
      tech: ["Python", "k-NN algorithm"],
      // demoLink: "#",
      codeLink: "https://github.com/dzakkirsolihin/klasifikasi-tipe-investor-kNN"
    },
    {
      title: "Sensus Penduduk",
      description: "C++ program to collect population data.",
      image: "images/projects/sensus-penduduk.png",
      tech: ["C++", "Git"],
      // demoLink: "#",
      codeLink: "https://github.com/dzakkirsolihin/Sensus-Penduduk"
    },
    {
      title: "UI Design NeuroScan",
      description: "Designed an intuitive UI/UX for the face matching feature of the NeuroScan app that combines aesthetics and functionality.",
      image: "images/projects/neuroscan-face-recognition.png",
      tech: ["Figma"],
      // demoLink: "#",
      codeLink: "https://www.figma.com/design/V3uNq5NuUUStNNU9rrWBfU/Design-UI-NeuroScan?node-id=173-1803&t=WvTRrtcY6NwVGuI8-1"
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements with blur */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full"></div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-gray-800/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
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
              className="bg-gray-900/50 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-gray-900/70 backdrop-blur-lg">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm text-blue-400 bg-blue-500/10 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* <a 
                    href={project.demoLink} 
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a> */}
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