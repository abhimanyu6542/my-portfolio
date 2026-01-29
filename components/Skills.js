'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Terminal, GitBranch, Server, Cpu, Layout, Shield, Zap, BarChart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 95, color: 'from-purple-500 to-purple-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-600' },
      ],
      gradient: 'from-purple-500 to-purple-600',
      delay: 0,
    },
    {
      icon: Terminal,
      title: '.NET Technologies',
      skills: [
        { name: 'ASP.NET Core', level: 92, color: 'from-blue-500 to-blue-600' },
        { name: 'Web API', level: 90, color: 'from-cyan-500 to-cyan-600' },
        { name: 'MVC', level: 88, color: 'from-indigo-500 to-indigo-600' },
        { name: 'ADO.NET', level: 85, color: 'from-violet-500 to-violet-600' },
      ],
      gradient: 'from-blue-500 to-cyan-600',
      delay: 0.1,
    },
    {
      icon: Palette,
      title: 'Frontend Technologies',
      skills: [
        { name: 'React JS', level: 87, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-orange-600' },
        { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'jQuery', level: 80, color: 'from-blue-500 to-blue-600' },
      ],
      gradient: 'from-cyan-500 to-teal-600',
      delay: 0.2,
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'SQL Server', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'Database Design', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Query Optimization', level: 82, color: 'from-yellow-500 to-yellow-600' },
      ],
      gradient: 'from-red-500 to-orange-600',
      delay: 0.3,
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Lambda', level: 82, color: 'from-yellow-500 to-yellow-600' },
        { name: 'AWS S3/CloudFront', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'API Gateway', level: 78, color: 'from-red-500 to-red-600' },
        { name: 'Route 53', level: 75, color: 'from-purple-500 to-purple-600' },
      ],
      gradient: 'from-yellow-500 to-red-600',
      delay: 0.4,
    },
    {
      icon: GitBranch,
      title: 'Tools & Others',
      skills: [
        { name: 'Visual Studio', level: 94, color: 'from-purple-500 to-purple-600' },
        { name: 'VS Code', level: 92, color: 'from-blue-500 to-blue-600' },
        { name: 'Git/GitHub', level: 88, color: 'from-gray-500 to-gray-600' },
        { name: 'AWS Code Commit', level: 80, color: 'from-orange-500 to-orange-600' },
      ],
      gradient: 'from-gray-500 to-blue-600',
      delay: 0.5,
    },
  ];

  const certifications = [
    { name: 'AWS Certified', status: 'In Progress', icon: Cloud },
    { name: 'Microsoft .NET', status: 'Planned', icon: Code },
    { name: 'React Certification', status: 'Planned', icon: Layout },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 mb-4">
              <Zap size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="heading-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={category.delay}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-100 dark:border-gray-800 card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                    <category.icon
                      className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + idx * 0.05, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Additional Skills */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/10 dark:to-gray-800 rounded-3xl p-8 border border-primary-100 dark:border-primary-800"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="text-primary-600 dark:text-primary-400" />
                Additional Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Object-Oriented Programming',
                  'RESTful API Design',
                  'JWT Authentication',
                  'Database Optimization',
                  'AWS Serverless',
                  'Team Leadership',
                  'Agile Methodologies',
                  'Code Review',
                  'Unit Testing',
                  'CI/CD Pipelines',
                  'Microservices',
                  'Performance Tuning',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/10 dark:to-gray-800 rounded-3xl p-8 border border-purple-100 dark:border-purple-800"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-purple-600 dark:text-purple-400" />
                Certifications & Goals
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <cert.icon className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-100">{cert.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Developer</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {cert.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Learning Goals */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BarChart className="text-green-600 dark:text-green-400" />
                  Learning Goals 2024
                </h4>
                <div className="space-y-3">
                  {[
                    'Advanced AWS Architecture',
                    'Microservices with .NET',
                    'React Native Development',
                    'Advanced TypeScript Patterns',
                  ].map((goal, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 text-white"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2.9+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-primary-100">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-primary-100">Major Projects</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}