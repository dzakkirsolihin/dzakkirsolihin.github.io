import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, AlertCircle, CheckCircle2, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dzakirsolihin@gmail.com",
      link: "mailto:dzakirsolihin@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      value: "+62 851-6111-5013",
      link: "https://wa.me/+6285161115013"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bandung City, Indonesia",
      link: "https://maps.app.goo.gl/1ik3YshXfAmJgLtK7"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "dzakkirslhn",
      link: "https://www.instagram.com/dzakkirslhn"
    },
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

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success scenario
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements with blur - same as before */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full"></div>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`mb-4 p-4 rounded-lg flex items-center space-x-2 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 text-green-200' 
                  : 'bg-red-500/20 text-red-200'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                    hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                    hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full p-3 bg-gray-900/50 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                    hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                  transition-all duration-300 transform hover:scale-105 disabled:opacity-50 
                  disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
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