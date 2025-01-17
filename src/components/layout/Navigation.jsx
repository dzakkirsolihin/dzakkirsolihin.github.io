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
    { name: 'Home', icon: Home, href: '' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: Settings, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300
            ${isScrolled 
              ? 'bg-gray-800/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]' 
              : 'bg-gray-800/80 backdrop-blur-md'} 
            rounded-full px-6 py-3 border border-gray-700/50`}
          >
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Button */}
      <div className="fixed top-4 right-4 z-[999] md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isScrolled || isMenuOpen 
              ? 'bg-gray-800/60 backdrop-blur-xl' 
              : 'bg-gray-800/80'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-lg md:hidden z-[998] pt-20">
          <div className="flex flex-col items-center justify-start h-full space-y-8 mt-8">
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