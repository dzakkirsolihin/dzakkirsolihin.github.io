import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../../assets/images/profile.png'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements with blur */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-gray-900/50"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Profile Image with Animation */}
        <div className="mb-8" data-aos="fade-down">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
            <img 
              src={profileImg}
              alt="Profile"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
        
        {/* Name and Title with Animation */}
        <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {"Hello, I'm ".split('').map((char, index) => (
              <span 
                key={index} 
                className="inline-block hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                {char}
              </span>
            ))}
            <br />
            {"Muhammad ".split('').map((char, index) => (
              <span 
                key={`first-${index}`}
                className="inline-block text-blue-500 hover:text-white hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                {char}
              </span>
            ))}
            <span></span>
            {"Dzakkir".split('').map((char, index) => (
              <span 
                key={`last-${index}`}
                className="inline-block text-blue-500 hover:text-white hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                {char}
              </span>
            ))}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300" data-aos="fade-up" data-aos-delay="400">
            Software Engineering Student at Universitas Pendidikan Indonesia
          </h2>
        </div>

        {/* Short Bio with Glass Effect */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8 bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
          Passionate about crafting intuitive and user-friendly digital experiences. 
          Focused on web application development, mobile app design, and implementing efficient software solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="800">
          <a 
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links with Glass Effect */}
        <div 
          className="flex justify-center space-x-6 bg-gray-800/30 backdrop-blur-sm p-4 rounded-full" 
          data-aos="fade-up" 
          data-aos-delay="1000"
        >
          <a 
            href="https://github.com/dzakkirsolihin" 
            className="text-gray-400 hover:text-white hover:scale-125 transition-all p-2 hover:bg-gray-700/50 rounded-full"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/muhammad-dzakkir-kilman-solihin-8b0387193" 
            className="text-gray-400 hover:text-white hover:scale-125 transition-all p-2 hover:bg-gray-700/50 rounded-full"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:dzakirsolihin@gmail.com" 
            className="text-gray-400 hover:text-white hover:scale-125 transition-all p-2 hover:bg-gray-700/50 rounded-full"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;