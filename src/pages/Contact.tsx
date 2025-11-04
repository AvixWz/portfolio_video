import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Instagram, Linkedin, Twitter, MapPin, Clock, Phone, ArrowRight, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@henrygfx.com',
      link: 'mailto:hello@henrygfx.com',
      description: 'Best for project inquiries and detailed discussions',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'henry_00_',
      link: 'https://discord.com/users/henrygfx',
      description: 'Quick chats and real-time collaboration',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      description: 'Voice calls and instant messaging',
      color: 'from-teal-500 to-green-500',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@henrygfx',
      link: 'https://instagram.com/henrygfx',
      followers: '12.5K',
      description: 'Daily design inspiration',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Henry GFX',
      link: 'https://linkedin.com/in/henrygfx',
      followers: '3.2K',
      description: 'Professional updates',
    },
    {
      icon: Twitter,
      name: 'X',
      handle: '@Saptadweep19847',
      link: 'https://x.com/Saptadweep19847',
      followers: '8.7K',
      description: 'Design tips & trends',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Closed (Nap Day 😴)' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6"
          >
            <Zap size={16} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Let's Create Magic Together</span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block"
            >
              Get In Touch
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it. Reach out through your preferred channel and let's discuss how we can bring your vision to life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, rgb(16 185 129), rgb(20 184 166))` }} />

              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  whileHover={{ rotate: 12 }}
                >
                  <method.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>

                <p className="text-lg font-semibold text-emerald-600 mb-3">
                  {method.value}
                </p>

                <p className="text-gray-600 text-sm mb-6">
                  {method.description}
                </p>

                <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Connect Now</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <Clock className="text-emerald-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">
                  Working Hours
                </h3>
              </div>

              <div className="space-y-4">
                {workingHours.map((schedule, idx) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100"
                  >
                    <span className="font-semibold text-gray-900">
                      {schedule.day}
                    </span>
                    <span className="text-emerald-600 font-bold">
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border border-emerald-200"
              >
                <p className="text-sm text-emerald-900 font-semibold">
                  <span className="font-bold">Response Time:</span> Typically respond within 2-4 hours during working hours.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-8">
                <MapPin className="text-emerald-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">
                  Location
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-3 font-semibold">
                Tripura, India (IST Timezone)
              </p>
              <p className="text-gray-600">
                Available for remote work worldwide. No borders, no limits.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              How We'll Work Together
            </h3>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Discovery', desc: 'Initial consultation to understand your needs and vision' },
                { step: '02', title: 'Proposal', desc: 'Project proposal with timeline and pricing' },
                { step: '03', title: 'Creation', desc: 'Iterative design process with regular check-ins' },
                { step: '04', title: 'Delivery', desc: 'Final delivery with all source files and assets' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Follow My Work
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <social.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-emerald-600 font-semibold text-sm mb-3">
                  {social.handle}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {social.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-semibold">
                    {social.followers} followers
                  </span>
                  <span className="text-emerald-600 font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <ContactForm />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Don't let your project wait. Reach out today and let's create something extraordinary together!
          </p>
          <motion.a
            href="mailto:hello@henrygfx.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300"
          >
            <Mail size={20} />
            Send Me an Email
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
