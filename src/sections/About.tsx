import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Code, Award, Cloud, Database, Terminal, GitBranch } from 'lucide-react';
import { BackgroundIcons } from '../components/BackgroundIcons';

export const About: React.FC = () => {
  const skills = {
    languages: ['JavaScript (Proficient)', 'Java (Proficient)', 'Python (Basic)'],
    frameworks: ['Spring', 'React', 'Vue.js'],
    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    databases: ['MySQL'],
    tools: ['GitHub', 'VS Code', 'IntelliJ']
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <BackgroundIcons />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer and Cloud Engineer with a strong foundation in JavaScript, Java, and AWS. 
              Experienced in optimizing workflows and improving team collaboration, leveraging transferable 
              skills from an auditing background. Passionate about building scalable and reliable software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-600 h-6 w-6" />
                  <h3 className="text-xl font-semibold dark:text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h4 className="font-medium dark:text-white">Digital House</h4>
                    <p className="text-gray-600 dark:text-gray-300">Certified Tech Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Expected Graduation: Dec 2024</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h4 className="font-medium dark:text-white">Google Cloud Certification</h4>
                    <p className="text-gray-600 dark:text-gray-300">Associate Cloud Engineer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">In Progress</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-blue-600 h-6 w-6" />
                  <h3 className="text-xl font-semibold dark:text-white">Experience</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <h4 className="font-medium dark:text-white">SUNAT</h4>
                  <p className="text-gray-600 dark:text-gray-300">Auditor</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2020 - Present • Lima, Perú</p>
                  <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      Increased team efficiency by 40% through workflow optimization
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      Reduced process errors by 40% with standardized procedures
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      Improved onboarding efficiency by 30% through documentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-600 h-6 w-6" />
                <h3 className="text-xl font-semibold dark:text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="text-blue-600 h-5 w-5" />
                    <h4 className="font-medium dark:text-white">Programming Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-blue-600 h-5 w-5" />
                    <h4 className="font-medium dark:text-white">Frameworks</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="text-blue-600 h-5 w-5" />
                    <h4 className="font-medium dark:text-white">Cloud & DevOps</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="text-blue-600 h-5 w-5" />
                    <h4 className="font-medium dark:text-white">Databases</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="text-blue-600 h-5 w-5" />
                    <h4 className="font-medium dark:text-white">Development Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};