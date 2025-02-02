import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Cpu, Cloud, Layers, Terminal } from 'lucide-react';

interface HomeProps {
  setCurrentSection: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({setCurrentSection}) => {
  const backgroundIcons = [
    { Icon: Code2, position: "top-1/4 left-1/4" },
    { Icon: Database, position: "top-1/3 right-1/4" },
    { Icon: Globe, position: "bottom-1/4 left-1/3" },
    { Icon: Server, position: "top-1/2 left-1/6" },
    { Icon: Cpu, position: "bottom-1/3 right-1/3" },
    { Icon: Cloud, position: "top-2/3 right-1/6" },
    { Icon: Layers, position: "bottom-1/2 left-1/2" },
    { Icon: Terminal, position: "bottom-1/4 right-1/4" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {backgroundIcons.map(({ Icon, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} opacity-5`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Oscar Coyla
          </h1>
          <h2 className="dark:text-white" style={{fontSize:35, fontWeight:500,marginBottom:15}}>Full Stack Developer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Passionate about creating elegant solutions to complex problems. 
            Specialized in building modern web applications with cutting-edge technologies.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSection('contact')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSection('projects')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
            <img
              src="/src/img/MAIN_PHOTO.jpg"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};