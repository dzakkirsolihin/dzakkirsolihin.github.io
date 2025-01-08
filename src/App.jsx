import React from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import SkillSection from './components/sections/SkillSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;