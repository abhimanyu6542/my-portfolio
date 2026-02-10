'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Code, Server, Shield, Bug, GitBranch, Database, Cloud, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [activeProject, setActiveProject] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    company: 'Ritswa Software Solution Pvt Ltd',
    role: 'Full Stack Developer',
    location: 'Assam, India (Remote)',
    period: 'Jan 2023 - Present',
    duration: '3 years 1 months',
    teamSize: 4,
    projects: [
      {
        name: 'Puqlo Event management',
        tagline: 'Smart Ticketing for Every Shows & Events',
        url: 'https://puqlo.com',
        subdomains: [
          'business.puqlo.com',
        ],
        description: 'Power your events with easy ticketing, real-time tracking, and secure revenue management',
        technologies: [
          { name: 'ReactJs', icon: Code },
          { name: 'AWS Lambda', icon: Cloud },
          { name: 'TypeScript', icon: Code },
          // { name: '.NET 6', icon: Server },
          { name: 'Node JS', icon: Code },
          { name: 'PostgresSQL', icon: Database },
          { name: 'Tailwindcss', icon: Globe },
          // { name: 'jQuery/Ajax', icon: Code },
          // { name: 'ADO.NET', icon: Database },
        ],
        responsibilities: [
          'Developed Restful APIs for internal/external communication',
          'Implemented JWT Authentication securely for client/service authentication',
          'Analyzed requirements and devised effective approaches',
          'Diligently analyzed bugs and provided optimal solutions',
          'Successfully resolved issues and assisted team members',
          'Coordinated with onsite colleagues to address and resolve issues',
        ],
        achievements: [
          'Contributed to a platform serving event organisers',
          'Implemented secure authentication system',
          'Improved API response times by 40%',
        ],
      },
      {
        name: 'Employee Tracking System',
        tagline: 'Employees Tracking System',
        url: 'https://admin-emptracky.netlify.app',
        description: 'Tracks applications and website usage to see what team members are actively doing.',
        technologies: [
          { name: 'ReactJs', icon: Code },
          { name: 'HTML', icon: Globe },
          { name: 'CSS', icon: Globe },
          { name: 'PstgresSQL', icon: Database },
          { name: 'JavaScript', icon: Code },
          { name: 'NestJs', icon: Globe },
        ],
        responsibilities: [
          'Developed project tracking modules',
          'Implemented document management system',
          'Created reporting dashboards',
          'Optimized database queries',
        ],
        achievements: [
          'Reduced manual tracking by 70%',
          'Improved report generation speed',
        ],
      },
      {
        name: 'Bookzify Business Portal',
        tagline: 'Bookzify appears to be a business dashboard/portal',
        url: 'https://business.bookzify.com',
        description: 'The main Bookzify ecosystem (including bookzify.com and its business portal) focuses on helping businesses get discovered by customers and manage bookings, deals, or service listings',
        technologies: [
          { name: 'Tailwindcss', icon: Server },
          { name: 'TypeScript', icon: Code },
          { name: 'React', icon: Code },
          { name: 'AWS Lambda', icon: Cloud },
          { name: 'PostgresSQL', icon: Database },
        ],
        responsibilities: [
          'Implemented business kyc document verification system',
          'Developed compliance tracking',
          'Created integration APIs',
        ],
        achievements: [
          'Reduced onboarding time by 60%',
        ],
      },
    ],
  };

  const responsibilities = [
    { icon: Code, text: 'API Development', desc: 'RESTful Web APIs' },
    { icon: Shield, text: 'Security', desc: 'JWT Authentication' },
    { icon: Bug, text: 'Bug Fixing', desc: 'Analysis & Solutions' },
    { icon: Users, text: 'Team Work', desc: 'Coordination & Support' },
    { icon: GitBranch, text: 'Version Control', desc: 'AWS Code Commit' },
    { icon: Cloud, text: 'Cloud', desc: 'AWS Services' },
  ];

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 mb-4">
              <Calendar size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Work History
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="heading-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 lg:p-8 sticky top-24 border border-gray-100 dark:border-gray-800">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 heading-gradient">
                    {experience.company}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {experience.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {experience.location}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Duration */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <Calendar className="text-primary-600 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {experience.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.duration}
                      </p>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <Users className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Team Size</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.teamSize} members
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold mb-3 text-gray-700 dark:text-gray-300">
                      Primary Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Javascript', 'TypeScript', 'ReactJs', 'AWS', 'SQL', "NodeJs", "NestJs"].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content - Projects */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              {/* Project Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {experience.projects.map((project, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeProject === index
                        ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {project.name}
                  </motion.button>
                ))}
              </div>

              {/* Active Project Details */}
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {experience.projects.map(
                  (project, index) =>
                    activeProject === index && (
                      <div key={index}>
                        {/* Project Header */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 mb-8">
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                  {project.name}
                                </h3>
                                {project.url && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                                  >
                                    <Globe size={16} />
                                    Visit Site
                                  </a>
                                )}
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                                {project.tagline}
                              </p>
                              <p className="text-gray-700 dark:text-gray-300">
                                {project.description}
                              </p>
                            </div>
                          </div>

                          {/* Subdomains */}
                          {project.subdomains && (
                            <div className="mb-8">
                              <h4 className="font-bold text-lg mb-3 text-gray-700 dark:text-gray-300">
                                Platform Components
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.subdomains.map((domain, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-700"
                                  >
                                    {domain}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technologies */}
                          <div className="mb-8">
                            <h4 className="font-bold text-lg mb-3 text-gray-700 dark:text-gray-300">
                              Technologies Used
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {project.technologies.map((tech, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-700"
                                >
                                  <div className="p-2 rounded-md bg-white dark:bg-gray-800">
                                    <tech.icon size={18} className="text-primary-600 dark:text-primary-400" />
                                  </div>
                                  <span className="font-medium">{tech.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities & Achievements */}
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Responsibilities */}
                          <div className="bg-gradient-to-br from-primary-50/50 to-white dark:from-primary-900/10 dark:to-gray-800 rounded-3xl p-6 sm:p-8 border border-primary-100 dark:border-primary-800">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                              <Code className="text-primary-600 dark:text-primary-400" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-4">
                              {project.responsibilities.map((resp, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/10 dark:to-gray-800 rounded-3xl p-6 sm:p-8 border border-purple-100 dark:border-purple-800">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                              <Shield className="text-purple-600 dark:text-purple-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-4">
                              {project.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}