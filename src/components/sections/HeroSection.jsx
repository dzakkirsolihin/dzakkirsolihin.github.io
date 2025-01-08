import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <img 
            src="/src/assets/images/profile.png"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
          />
        </div>
        
        {/* Name and Title with Animation */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Hello, I'm <span className="text-blue-500">Muhammad Dzakkir</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            Software Engineering Student at Universitas Pendidikan Indonesia
          </h2>
        </div>

        {/* Short Bio */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          Passionate about creating elegant solutions to complex problems. 
          Focused on web development, machine learning, and building scalable applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/dzakkirsolihin" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/muhammad-dzakkir-kilman-solihin-8b0387193" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:dzakirsolihin@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          {/* <a href="/resume.pdf" className="text-gray-400 hover:text-white transition-colors">
            <Download className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;