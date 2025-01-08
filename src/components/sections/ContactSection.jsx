import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

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
      value: "+6289638722970",
      link: "tel:+6289638722970"
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
    },
    // {
    //   icon: Twitter,
    //   url: "https://twitter.com/yourusername",
    //   name: "Twitter"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <info.icon className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-white transition-colors duration-300"
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