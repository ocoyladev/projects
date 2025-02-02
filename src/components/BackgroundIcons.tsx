import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Cpu, Cloud, Layers, Terminal } from 'lucide-react';

export const BackgroundIcons: React.FC = () => {
  const icons = [
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
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, position }, index) => (
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
  );
};