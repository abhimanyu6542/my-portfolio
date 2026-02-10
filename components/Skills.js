'use client';

import { motion } from 'framer-motion';
import { Code, Zap, BarChart, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Individual skill cards with modern tech stack
  const skills = [
    // Programming Languages
    { name: 'JavaScript', icon: '🟨', category: 'Language', level: 90, color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { name: 'TypeScript', icon: '🔷', category: 'Language', level: 85, color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    // { name: 'C#', icon: '💜', category: 'Language', level: 95, color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { name: 'HTML', icon: '🧡', category: 'Markup', level: 95, color: 'from-orange-400 to-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'CSS', icon: '🔵', category: 'Styling', level: 90, color: 'from-blue-400 to-cyan-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
    
    // Frontend Frameworks & Libraries
    { name: 'React JS', icon: '⚛️', category: 'Frontend', level: 88, color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
    { name: 'Next.js', icon: '▲', category: 'Frontend', level: 85, color: 'from-gray-700 to-gray-900', bgColor: 'bg-gray-50 dark:bg-gray-900/20' },
    { name: 'Vite', icon: '⚡', category: 'Build Tool', level: 80, color: 'from-purple-400 to-pink-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', level: 90, color: 'from-teal-400 to-blue-500', bgColor: 'bg-teal-50 dark:bg-teal-900/20' },
    
    // Backend Technologies
    { name: 'NestJS', icon: '🐱', category: 'Backend', level: 82, color: 'from-red-500 to-pink-600', bgColor: 'bg-red-50 dark:bg-red-900/20' },
    // { name: 'ASP.NET Core', icon: '🔷', category: 'Backend', level: 92, color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'Web API', icon: '🔗', category: 'Backend', level: 90, color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    
    // Databases
    { name: 'MongoDB', icon: '🍃', category: 'Database', level: 85, color: 'from-green-500 to-green-700', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 80, color: 'from-blue-600 to-indigo-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    // { name: 'SQL Server', icon: '🗄️', category: 'Database', level: 90, color: 'from-red-500 to-red-700', bgColor: 'bg-red-50 dark:bg-red-900/20' },
    { name: 'Supabase', icon: '⚡', category: 'Database', level: 78, color: 'from-green-400 to-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' },
    
    // Cloud & DevOps
    { name: 'AWS Lambda', icon: '☁️', category: 'Cloud', level: 82, color: 'from-orange-400 to-yellow-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'Serverless', icon: '⚡', category: 'Cloud', level: 80, color: 'from-purple-500 to-pink-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { name: 'API Gateway', icon: '🚪', category: 'Cloud', level: 78, color: 'from-indigo-500 to-purple-600', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20' },
  ];

  const tools = [
    { name: 'Visual Studio', icon: '🔷', category: 'IDE', color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { name: 'VS Code', icon: '💙', category: 'Editor', color: 'from-blue-500 to-cyan-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'Kiro', icon: '🤖', category: 'AI Editor', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    { name: 'Windsurf', icon: '🏄', category: 'AI Editor', color: 'from-cyan-500 to-blue-600', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
    { name: 'Cursor', icon: '🎯', category: 'AI Editor', color: 'from-indigo-500 to-purple-600', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { name: 'GitHub', icon: '🐙', category: 'Version Control', color: 'from-gray-700 to-gray-900', bgColor: 'bg-gray-50 dark:bg-gray-900/20' },
    { name: 'Postman', icon: '📮', category: 'API Testing', color: 'from-orange-500 to-red-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 mb-4">
              <Zap size={10} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="heading-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Modern technologies and frameworks I work with
            </p>
          </motion.div>

          {/* Technologies Section */}
          <motion.div variants={cardVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Code className="text-primary-600 dark:text-primary-400" />
              Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${skill.bgColor} rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-sm sm:text-base">
                      {skill.name}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 mb-3 inline-block">
                      {skill.category}
                    </span>
                    
                    {/* Skill Level Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-lg transition-shadow duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={cardVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Settings className="text-purple-600 dark:text-purple-400" />
              Development Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${tool.bgColor} rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-xs sm:text-sm">
                      {tool.name}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400">
                      {tool.category}
                    </span>
                    
                    {/* Tool highlight effect */}
                    <div className={`mt-3 h-1 rounded-full bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary Stats */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div className="group">
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  3+
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="group">
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {skills.length}+
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">Technologies</div>
              </div>
              <div className="group">
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {tools.length}+
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">Dev Tools</div>
              </div>
              <div className="group">
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  6+
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">Major Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Learning Goals */}
          <motion.div
            variants={cardVariants}
            className="mt-16 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/10 dark:to-gray-800 rounded-3xl p-6 sm:p-8 border border-purple-100 dark:border-purple-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <BarChart className="text-purple-600 dark:text-purple-400" />
              Currently Learning & Goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Advanced AWS Architecture', icon: '☁️', progress: 30 },
                { name: 'Microservices with NestJS', icon: '🐱', progress: 45 },
                { name: 'Advanced TypeScript Patterns', icon: '🔷', progress: 60 },
                { name: 'Docker & Kubernetes', icon: '🐳', progress: 20 },
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl mb-2">{goal.icon}</div>
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-800 dark:text-gray-200 mb-3">
                      {goal.name}
                    </h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${goal.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 block">
                      {goal.progress}% Complete
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}