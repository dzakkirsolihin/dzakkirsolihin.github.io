import React, { useEffect, useState, useRef } from 'react';
import { Code, Server, Palette, Terminal } from 'lucide-react';
import AOS from 'aos';

const SkillSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay the progress bar animation to start after AOS animation
          setTimeout(() => {
            setAnimated(true);
          }, 1200); // AOS duration (800ms) + extra delay (400ms)
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
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Photoshop", level: 65 },
        { name: "Illustrator", level: 60 }
      ]
    },
    {
      title: "Other Tools",
      icon: Terminal,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
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
              className="bg-gray-800 p-6 rounded-lg"
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
                    className="opacity-0"
                    data-aos="fade-right"
                    data-aos-delay={index * 200 + skillIndex * 100}
                    data-aos-duration="600"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
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