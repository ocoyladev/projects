import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin, Phone } from 'lucide-react';
import { BackgroundIcons } from '../components/BackgroundIcons';

export const Contact: React.FC = () => {
  const contactInfo = {
    email: 'ocoyladev@gmail.com',
    phone: '+51 906589869',
    location: 'Perú',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  };

  const contactCards = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Profile',
      href: contactInfo.github,
      color: 'bg-gray-100 dark:bg-gray-800',
      hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
      textColor: 'text-gray-800 dark:text-gray-200',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contactInfo.linkedin,
      color: 'bg-blue-100 dark:bg-blue-900/50',
      hoverColor: 'hover:bg-blue-200 dark:hover:bg-blue-900',
      textColor: 'text-blue-800 dark:text-blue-200',
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'bg-purple-100 dark:bg-purple-900/50',
      hoverColor: 'hover:bg-purple-200 dark:hover:bg-purple-900',
      textColor: 'text-purple-800 dark:text-purple-200',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      color: 'bg-green-100 dark:bg-green-900/50',
      hoverColor: 'hover:bg-green-200 dark:hover:bg-green-900',
      textColor: 'text-green-800 dark:text-green-200',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      color: 'bg-red-100 dark:bg-red-900/50',
      hoverColor: 'hover:bg-red-200 dark:hover:bg-red-900',
      textColor: 'text-red-800 dark:text-red-200',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <BackgroundIcons />
      <div className="max-w-4xl w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactCards.map(({ icon: Icon, label, value, href, color, hoverColor, textColor }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl shadow-lg ${color} ${hoverColor} transition-all duration-300 ${
                  href ? 'cursor-pointer' : ''
                }`}
                onClick={() => href && window.open(href, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`h-6 w-6 ${textColor}`} />
                  <div>
                    <h3 className={`font-semibold mb-1 ${textColor}`}>{label}</h3>
                    <p className={`${textColor} text-sm`}>{value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/path-to-your-cv.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              <FileText className="h-5 w-5" />
              <span className="font-semibold">Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};