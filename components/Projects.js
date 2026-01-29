'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Users, Shield, Zap, Globe, Database, Cloud, Code, Lock, BarChart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'HuntsJob Recruitment Platform',
      tagline: 'Global Digital Staffing Solution',
      description: 'Leading global digital media solution for Staffing/HR companies specializing in empowering businesses to discover perfect candidates.',
      longDescription: 'A comprehensive recruitment platform serving global staffing companies with multi-tenant architecture, real-time candidate matching, and advanced analytics.',
      features: [
        'Multi-tenant architecture with role-based access',
        'JWT Authentication & Authorization system',
        'Real-time notifications and messaging',
        'Advanced search filters with AI matching',
        'Dashboard analytics with reporting',
        'Document management system',
        'Interview scheduling system',
        'Candidate tracking pipeline',
      ],
      tech: [
        { name: '.NET 6', icon: Code, color: 'text-purple-600' },
        { name: 'React JS', icon: Code, color: 'text-cyan-600' },
        { name: 'AWS Lambda', icon: Cloud, color: 'text-yellow-600' },
        { name: 'SQL Server', icon: Database, color: 'text-red-600' },
        { name: 'CloudFront', icon: Cloud, color: 'text-orange-600' },
        { name: 'API Gateway', icon: Server, color: 'text-green-600' },
      ],
      links: [
        { icon: ExternalLink, label: 'Live Site', url: 'https://huntsjob.com', color: 'from-blue-500 to-cyan-500' },
        { icon: Server, label: 'API Docs', url: '#', color: 'from-green-500 to-emerald-500' },
      ],
      category: 'enterprise',
      color: 'from-blue-500 to-purple-500',
      status: 'Live',
      teamSize: 6,
      role: 'Full-stack Developer',
    },
    {
      title: 'PDOT Management System',
      tagline: 'Project Documentation & Tracking',
      description: 'Comprehensive project management and tracking system for enterprise clients with document management and reporting.',
      longDescription: 'Enterprise-grade project management system for tracking project lifecycles, resource allocation, compliance, and documentation across multiple departments.',
      features: [
        'Project lifecycle management',
        'Resource allocation tracking',
        'Progress monitoring dashboards',
        'Reporting and analytics',
        'Role-based access control',
        'Document version control',
        'Workflow automation',
        'Compliance tracking',
      ],
      tech: [
        { name: 'C#', icon: Code, color: 'text-purple-600' },
        { name: 'MVC', icon: Globe, color: 'text-blue-600' },
        { name: 'jQuery', icon: Code, color: 'text-blue-600' },
        { name: 'ADO.NET', icon: Database, color: 'text-red-600' },
        { name: 'SQL Server', icon: Database, color: 'text-red-600' },
        { name: 'Bootstrap', icon: Globe, color: 'text-purple-600' },
      ],
      links: [
        { icon: Users, label: 'Demo Access', url: '#', color: 'from-orange-500 to-red-500' },
      ],
      category: 'enterprise',
      color: 'from-green-500 to-teal-500',
      status: 'Live',
      teamSize: 4,
      role: 'Backend Developer',
    },
    {
      title: 'Mobilization Portal',
      tagline: 'Employee Deployment Management',
      description: 'Employee mobilization and deployment management system for large organizations with compliance tracking.',
      longDescription: 'Streamlined employee mobilization platform for managing deployment processes, document verification, compliance requirements, and onboarding workflows.',
      features: [
        'Employee onboarding workflows',
        'Document management and verification',
        'Compliance requirement tracking',
        'Workflow automation engine',
        'Integration APIs with HR systems',
        'Notification system',
        'Reporting dashboard',
        'Audit trail logging',
      ],
      tech: [
        { name: 'ASP.NET Core', icon: Server, color: 'text-purple-600' },
        { name: 'Web API', icon: Code, color: 'text-blue-600' },
        { name: 'React', icon: Code, color: 'text-cyan-600' },
        { name: 'AWS S3', icon: Cloud, color: 'text-yellow-600' },
        { name: 'Route 53', icon: Globe, color: 'text-green-600' },
        { name: 'SQL Server', icon: Database, color: 'text-red-600' },
      ],
      links: [
        { icon: Shield, label: 'Internal System', url: '#', color: 'from-indigo-500 to-purple-500' },
      ],
      category: 'enterprise',
      color: 'from-orange-500 to-red-500',
      status: 'Live',
      teamSize: 5,
      role: 'Full-stack Developer',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'fullstack', label: 'Full-stack' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
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
              <Globe size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="heading-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Enterprise-level applications built with modern technologies and best practices
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 card-hover"
              >
                {/* Project Header */}
                <div className={`p-8 bg-gradient-to-r ${project.color} bg-opacity-10 border-b border-gray-100 dark:border-gray-800`}>
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 bg-gradient-to-r ${link.color} text-white rounded-lg font-medium flex items-center gap-2 shadow-lg`}
                        >
                          <link.icon size={16} />
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Team: <span className="font-semibold">{project.teamSize} members</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Role: <span className="font-semibold">{project.role}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart size={16} className="text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Category: <span className="font-semibold">{project.category}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-yellow-500" />
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mt-8">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Code className="text-primary-600 dark:text-primary-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                            >
                              <tech.icon className={tech.color} size={18} />
                              <span className="font-medium">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      {/* Description */}
                      <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Globe className="text-blue-600" size={18} />
                          Project Overview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Architecture */}
                      <div className="p-6 bg-gradient-to-br from-primary-50/50 to-white dark:from-primary-900/10 dark:to-gray-800/50 rounded-2xl border border-primary-100 dark:border-primary-800">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Server className="text-primary-600 dark:text-primary-400" size={18} />
                          Architecture
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Lock size={14} className="text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">Secure Authentication</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Database size={14} className="text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-300">Scalable Database</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Cloud size={14} className="text-yellow-600" />
                            <span className="text-gray-700 dark:text-gray-300">Cloud Deployment</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Shield size={14} className="text-purple-600" />
                            <span className="text-gray-700 dark:text-gray-300">Enterprise Security</span>
                          </li>
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="p-6 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/10 dark:to-gray-800/50 rounded-2xl border border-purple-100 dark:border-purple-800">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <BarChart className="text-purple-600 dark:text-purple-400" size={18} />
                          Impact & Results
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="text-gray-700 dark:text-gray-300">
                            • Improved efficiency by 40%
                          </li>
                          <li className="text-gray-700 dark:text-gray-300">
                            • Reduced manual work by 70%
                          </li>
                          <li className="text-gray-700 dark:text-gray-300">
                            • Enhanced user experience
                          </li>
                          <li className="text-gray-700 dark:text-gray-300">
                            • Scalable architecture
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-full">
              <span className="text-gray-600 dark:text-gray-300">
                More projects and contributions available upon request
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}