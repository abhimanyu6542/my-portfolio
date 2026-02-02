'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Check, AlertCircle, Loader, MessageSquare, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7504644176',
      href: 'tel:+917504644176',
      description: 'Call or WhatsApp',
      color: 'from-green-500 to-emerald-600',
      delay: 0,
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'abhimanyudebata6@gmail.com',
      href: 'mailto:abhimanyudebata6@gmail.com',
      description: 'For business inquiries',
      color: 'from-blue-500 to-cyan-600',
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Khordha, Odisha',
      description: '752062, India',
      color: 'from-orange-500 to-red-600',
      delay: 0.2,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Abhimanyu Debata',
      href: 'https://www.linkedin.com/in/abhimanyudebata/',
      description: 'Professional profile',
      color: 'from-indigo-500 to-purple-600',
      delay: 0.3,
    },
  ];

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', status: 'Available' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM', status: 'Limited' },
    { day: 'Sunday', time: 'Not Available', status: 'Off' },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would typically send to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setError('');
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  return (
    <section
      id="contact"
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
              <MessageSquare size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="heading-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.icon === Linkedin ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  custom={info.delay}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`block p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 card-hover ${
                    !info.href ? 'cursor-default' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10`}>
                      <info.icon
                        className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg mb-1 text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm break-all">{info.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-green-900/10 dark:to-gray-800 rounded-2xl border border-green-100 dark:border-green-800"
              >
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="text-green-600 dark:text-green-400" />
                  Availability
                </h3>
                <div className="space-y-3">
                  {availability.map((slot, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-700 dark:text-gray-300">
                          {slot.day}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {slot.time}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          slot.status === 'Available'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : slot.status === 'Limited'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}
                      >
                        {slot.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
                      <span className="text-red-700 dark:text-red-300">{error}</span>
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <Check className="text-green-600 dark:text-green-400" size={20} />
                      <span className="text-green-700 dark:text-green-300">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Project discussion"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all relative overflow-hidden ${
                      isSubmitted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : isSubmitting
                        ? 'bg-gradient-to-r from-gray-500 to-gray-600'
                        : 'bg-gradient-to-r from-primary-600 to-purple-600 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader className="animate-spin" size={20} />
                        Sending Message...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <Check size={20} />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Send Message
                      </span>
                    )}
                  </motion.button>

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-2xl p-6 border border-primary-100 dark:border-primary-800"
              >
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <MessageSquare className="text-primary-600 dark:text-primary-400" />
                  What happens next?
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5" />
                    I'll respond within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5" />
                    We'll discuss your project requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5" />
                    I'll provide a proposal with timeline and budget
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5" />
                    Let's start building something amazing together!
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} ❤️ Abhimanyu Debata. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}