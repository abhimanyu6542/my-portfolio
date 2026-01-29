'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      text: '+91 9178318091',
      href: 'tel:+919178318091',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mail,
      text: 'pradumnadas0@gmail.com',
      href: 'mailto:pradumnadas0@gmail.com',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: MapPin,
      text: 'Khordha, Odisha, 752062',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Linkedin,
      text: 'LinkedIn Profile',
      href: 'https://linkedin.com/in/pradumna-das-599858126',
      color: 'from-blue-600 to-indigo-600',
    },
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-primary-950/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow dark:opacity-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow dark:opacity-10" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center lg:text-left max-w-7xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-8"
          >
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Hello, I'm</span>
            <span className="block heading-gradient">Abhimanyu Debata</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-gray-600 dark:text-gray-300">
              Software Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            Full-stack developer specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">.NET</span>,{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">React</span>, and{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">AWS</span> technologies.
            Building scalable web applications with{' '}
            <span className="font-bold">2.9+ years</span> of professional experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get In Touch</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </motion.button>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
            </motion.a>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto lg:mx-0"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg card-hover border border-gray-100 dark:border-gray-800`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-10`}>
                    <info.icon className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} size={20} />
                  </div>
                  <div className="text-left">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.icon === Linkedin ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors block"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {info.text}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate="float"
          variants={floatVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}