import React from 'react';
import { Code, Palette, Database, Book } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building beautiful and responsive user interfaces using modern frameworks.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing scalable server-side applications and APIs.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences.'
    },
    {
      icon: Book,
      title: 'Continuous Learning',
      description: 'Always excited to learn new technologies and best practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 group" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
                About Me
                <div className="mt-1"></div>
                <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-white mb-4">Who am I?</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Software Engineering student with a strong foundation in both frontend and backend development. 
              Currently pursuing my degree at XYZ University, I combine academic knowledge with practical experience through 
              various projects and internships.
            </p>
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-white mb-4">What drives me?</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm driven by the desire to create meaningful solutions that make a positive impact. 
              Whether it's developing user-friendly interfaces or optimizing backend systems, 
              I always strive for excellence and continuous improvement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((item, index) => (
            <div 
              key={index} 
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group"
            >
              <item.icon className="w-12 h-12 text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;