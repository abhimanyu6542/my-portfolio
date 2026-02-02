'use client';

import { motion } from 'framer-motion';
import { Target, Users, Rocket, Brain, Award, Clock, Code, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        delayChildren: 0.3,
      },
    },
  };

  const qualities = [
    {
      icon: Brain,
      title: 'Quick Learner',
      description: 'Adapt quickly to new technologies and methodologies',
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent interpersonal skills with strong team spirit',
      color: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      icon: Rocket,
      title: 'Self-Motivated',
      description: 'Proactive and driven to deliver exceptional results',
      color: 'from-orange-500 to-red-500',
      delay: 0.2,
    },
    {
      icon: Target,
      title: 'Analytical Mindset',
      description: 'Strong problem-solving and analytical abilities',
      color: 'from-green-500 to-emerald-500',
      delay: 0.3,
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable code',
      color: 'from-yellow-500 to-amber-500',
      delay: 0.4,
    },
    {
      icon: Clock,
      title: 'Punctual',
      description: 'Always meet deadlines with quality deliverables',
      color: 'from-indigo-500 to-purple-500',
      delay: 0.5,
    },
  ];

  const techStack = [
    { name: 'ReactJs, Vite, NextJs', level: 95 },
    { name: 'NodeJs', level: 90 },
    { name: 'Nest JS', level: 85 },
    { name: 'SQL Server', level: 88 },
    { name: 'AWS Services', level: 80 },
    { name: 'JavaScript/TypeScript', level: 85 },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
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
              <Code size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="heading-gradient">Summary</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With{' '}
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    3 years 1 months
                  </span>{' '}
                  of experience in the IT industry, I specialize in building robust web applications
                  using{' '}
                  <span className="font-semibold">ReactJs technologies</span>. My expertise spans from
                  backend development with NestJs and Lambda serverless API and SQL Server to frontend
                  development with React JS and modern JavaScript frameworks.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I thrive in challenging environments that push my technical and analytical
                  abilities to their limits, constantly seeking opportunities to broaden my skill
                  set and contribute to innovative projects.
                </p>
              </div>

              {/* Tech Stack Progress */}
              <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="text-yellow-500" size={20} />
                  Technical Proficiency
                </h3>
                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1, duration: 1, ease: 'easeOut' }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Qualities */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ delay: quality.delay }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                           p-6 rounded-2xl shadow-lg card-hover border border-gray-100 dark:border-gray-800`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${quality.color} bg-opacity-10`}>
                      <quality.icon
                        className={`bg-gradient-to-r ${quality.color} bg-clip-text text-transparent`}
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{quality.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key Achievements */}
          <motion.div variants={fadeInUp} className="mt-20">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-3xl p-8 border border-primary-100 dark:border-primary-800">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="heading-gradient">Key Strengths</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Full-Stack Development',
                    desc: 'End-to-end web application development',
                    icon: '🚀',
                  },
                  {
                    title: 'Cloud Expertise',
                    desc: 'AWS services deployment and management',
                    icon: '☁️',
                  },
                  {
                    title: 'Team Collaboration',
                    desc: 'Effective communication and teamwork',
                    icon: '👥',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}