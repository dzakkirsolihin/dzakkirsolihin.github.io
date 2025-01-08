import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Mail, Settings } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: Settings, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-gray-800/80 backdrop-blur-lg' : 'bg-gray-800'} 
        rounded-full px-6 py-3`}>
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-xl text-gray-300 hover:text-white transition-colors duration-200"
              >
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;