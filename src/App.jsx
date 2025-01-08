import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-500">Hello</span>, I'm Dzakkir
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Software Engineering Student
          </p>
          <a 
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-colors duration-200"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/api/placeholder/400/200" alt="project" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-400 mb-4">
                  Description of the project goes here. What was built and what technologies were used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-400">Demo</a>
                  <a href="#" className="text-blue-500 hover:text-blue-400">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;