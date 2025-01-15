import React from 'react';
import { 
  Code, 
  Layers, 
  Server, 
  Layout, 
  Palette, 
  Workflow 
} from 'lucide-react';

const TechnologiesSection = () => {
  const technologyCategories = [
    {
      title: "Frontend",
      icon: Code,
      technologies: [
        { name: "React", logo: "images/logos/react-logo.png" },
        { name: "Tailwind CSS", logo: "images/logos/tailwind-logo.png" },
        { name: "Vite", logo: "images/logos/vite.svg" },
        { name: "React Helmet", logo: "images/logos/react-helmet.jpg" }
      ]
    },
    {
      title: "Animation & Interaction",
      icon: Workflow,
      technologies: [
        { name: "AOS (Animate on Scroll)", logo: "images/logos/aos.webp" },
        { name: "Framer Motion", logo: "images/logos/framer-motion.png" }
      ]
    },
    {
      title: "Deployment & Hosting",
      icon: Server,
      technologies: [
        { name: "GitHub Pages", logo: "images/logos/github.png" }
      ]
    },
    {
      title: "Design & Styling",
      icon: Palette,
      technologies: [
        { name: "Figma", logo: "images/logos/figma.png" },
        { name: "CSS3", logo: "images/logos/css3.png" }
      ]
    }
  ];

  return (
    <section 
      id="technologies" 
      className="py-20 relative overflow-hidden bg-gray-900"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16 group" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
                Technologies Used
            <div className="mt-2"></div>
            <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern technologies used to build responsive and interactive web portfolios.
          </p>
        </div>

        {/* Teknologi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologyCategories.map((category, index) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center space-x-3 p-2 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    {tech.logo ? (
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-6 h-6"
                      />
                    ) : null}
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Catatan Tambahan */}
        <div 
          className="mt-16 text-center bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg"
          data-aos="fade-up"
        >
          <p className="text-gray-400 italic">
            “Using the latest technology to create a modern and responsive web experience.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;