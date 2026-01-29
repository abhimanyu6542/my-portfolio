'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar, MapPin, Star, Trophy, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Maharaja Institute of Technology (BPUT)',
      location: 'Bhubaneswar, Odisha',
      score: 'CGPA 7.67',
      year: '2017 - 2021',
      duration: '4 Years',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Specialized in Software Engineering',
        'Completed major projects in Web Development',
        'Active participant in coding competitions',
      ],
      delay: 0,
    },
    {
      degree: 'Class 12th (Science Stream)',
      institution: 'Shri Jagannath Junior College',
      location: 'Khurdha, Odisha',
      score: '61%',
      year: '2015 - 2017',
      duration: '2 Years',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Mathematics & Computer Science',
        'Foundation in Programming Concepts',
        'Academic excellence award',
      ],
      delay: 0.2,
    },
    {
      degree: 'Class 10th',
      institution: 'Rautapada High School',
      location: 'Khurdha, Odisha',
      score: '65%',
      year: '2014 - 2015',
      duration: '1 Year',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Mathematics & Science focus',
        'Early interest in technology',
        'Consistent academic performance',
      ],
      delay: 0.4,
    },
  ];

  const certifications = [
    {
      title: 'C# Programming Fundamentals',
      issuer: 'Microsoft Learning',
      year: '2022',
      icon: Target,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
    },
    {
      title: 'React Development',
      issuer: 'Online Course',
      year: '2021',
      icon: Star,
      color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300',
    },
    {
      title: 'AWS Basics',
      issuer: 'AWS Training',
      year: '2023',
      icon: Trophy,
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
    },
  ];

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
      id="education"
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
              <GraduationCap size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Education & <span className="heading-gradient">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-purple-200 to-pink-200 dark:from-primary-800 dark:via-purple-800 dark:to-pink-800"></div>

            {/* Education Items */}
            <div className="space-y-12 lg:space-y-24">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={edu.delay}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center`}
                >
                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    } mb-8 lg:mb-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 card-hover"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-10`}>
                          <edu.icon
                            className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                            size={28}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                            <MapPin size={14} className="inline mr-1" />
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      {/* Score & Duration */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl">
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                            {edu.score}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/10 dark:to-gray-800 rounded-xl">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <Calendar size={18} />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {edu.year}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Star className="text-yellow-500" size={18} />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                  </div>

                  {/* Empty spacer for alignment */}
                  <div
                    className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-24">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-3xl p-8 border border-primary-100 dark:border-primary-800">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="heading-gradient">Certifications & Training</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 card-hover"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                        <cert.icon className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${cert.color}`}>
                        {cert.year}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Completed</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Continuous Learning */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-6 text-center">Continuous Learning Journey</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { topic: 'Advanced .NET', progress: 80 },
                    { topic: 'Cloud Architecture', progress: 70 },
                    { topic: 'React Ecosystem', progress: 85 },
                    { topic: 'System Design', progress: 75 },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-2xl font-bold mb-2">{item.progress}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.topic}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Philosophy */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                "Education is not just about acquiring knowledge, but about developing the skills to
                solve real-world problems. My academic journey has provided me with a strong
                foundation, and my professional experience continues to build upon it."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}