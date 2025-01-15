import React, { useEffect, useState, useRef } from 'react';
import { Code, Server, Palette, Terminal } from 'lucide-react';

const SkillSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimated(true);
          }, 1200);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5", level: 93 },
        { name: "CSS3/Tailwind", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Figma", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "PHP", level: 85 },
        { name: "Python", level: 30 },
        { name: "MySQL", level: 90 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Frameworks",
      icon: Code,
      skills: [
        { name: "Laravel", level: 88 },
        { name: "React.js", level: 40 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 65 }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      skills: [
        { name: "UI Design", level: 90 },
        { name: "UX Design", level: 90 },
        { name: "Software Architecture", level: 65 },
        { name: "UML Diagrams", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      icon: Terminal,
      skills: [
        { name: "Git", level: 86 },
        { name: "Software Requirement", level: 84 },
        { name: "Algorithms", level: 95 },
        { name: "Project Management", level: 74 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements with blur */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full"></div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-gray-900/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16 group" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Skills & Technologies
            <div className="mt-2"></div>
            <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    data-aos="fade-right"
                    data-aos-delay={index * 200 + skillIndex * 100}
                    data-aos-duration="600"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.2 + skillIndex * 0.15}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;