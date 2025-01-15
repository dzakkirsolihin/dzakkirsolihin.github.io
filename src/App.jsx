import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/layout/Navigation';
import LoadingSpinner from './components/ui/LoadingSpinner';
import SEO from './components/ui/SEO';

// Lazy load sections
const HeroSection = React.lazy(() => import('./components/sections/HeroSection'));
const AboutSection = React.lazy(() => import('./components/sections/AboutSection'));
const ProjectSection = React.lazy(() => import('./components/sections/ProjectSection'));
const SkillSection = React.lazy(() => import('./components/sections/SkillSection'));
const ContactSection = React.lazy(() => import('./components/sections/ContactSection'));
const TechSection = React.lazy(() => import('./components/sections/TechSection'));

const SectionLoader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <LoadingSpinner size="large" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <div className="relative w-full">
        <SEO />
        
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          
          {/* Main background overlay */}
          <div className="absolute inset-0 bg-gray-900/90"></div>
        </div>

        {/* Navigation - Should be outside the main content and always on top */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <SkillSection />
            <ContactSection />
            <TechSection />
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;