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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Who am I?</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Software Engineering student with a strong foundation in both frontend and backend development. 
              Currently pursuing my degree at XYZ University, I combine academic knowledge with practical experience through 
              various projects and internships.
            </p>
          </div>
          
          <div>
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
              className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;