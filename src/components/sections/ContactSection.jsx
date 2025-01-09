import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dzakirsolihin@gmail.com",
      link: "mailto:dzakirsolihin@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+6285161115013",
      link: "tel:+6285161115013"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bandung City, Indonesia",
      link: "https://maps.app.goo.gl/1ik3YshXfAmJgLtK7"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/dzakkirsolihin",
      name: "Github"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/muhammad-dzakkir-kilman-solihin-8b0387193",
      name: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements with blur */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full"></div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-gray-800/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16 group" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Get In Touch
            <div className="mt-1"></div>
            <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className="flex items-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 transform"
                >
                  <info.icon className="w-6 h-6 text-blue-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-blue-500 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                data-aos="fade-left"
                data-aos-delay="200"
                className="w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700/50 focus:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              />
              <input
                type="email"
                placeholder="Your Email"
                data-aos="fade-left"
                data-aos-delay="400"
                className="w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700/50 focus:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                data-aos="fade-left"
                data-aos-delay="600"
                className="w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700/50 focus:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              />
              <button
                type="submit"
                data-aos="fade-up"
                data-aos-delay="800"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div 
          className="flex justify-center space-x-6" 
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;