import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Instagram, Linkedin, Twitter, MapPin, Clock, Phone, Send, Sparkles } from 'lucide-react';

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
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'henry_00_',
      link: 'https://discord.gg/JTnWwf42hW',
      description: 'Quick chats and real-time collaboration',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+91 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      description: 'Voice calls and instant messaging',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@henrygfx',
      link: 'https://instagram.com/henrygfx',
      followers: '19.5K',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Henry GFX',
      link: 'https://linkedin.com/in/henrygfx',
      followers: '3.2K',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Twitter,
      name: 'X',
      handle: '@Saptadweep19847',
      link: 'https://x.com/Saptadweep19847',
      followers: '8.7K',
      color: 'from-gray-800 to-gray-900',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Closed (Nap Day)' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Sparkles className="absolute -top-4 -right-4 text-emerald-500 dark:text-teal-400" size={32} />
              <h1 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h1>
            </div>
          </motion.div>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Choose your preferred way to reach out
          </p>
        </motion.div>

        {/* Contact Methods - Modern Card Grid */}
        <section className="mb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-emerald-500/20 dark:hover:shadow-teal-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <method.icon className="text-white" size={36} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {method.title}
                  </h3>

                  <p className={`text-lg font-semibold text-center mb-3 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                    {method.value}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                    {method.description}
                  </p>

                  <div className="mt-6 flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Get in touch →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Social Media - Pill Style */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Follow My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay updated with my latest work and creative process
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group flex items-center gap-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-full px-8 py-5 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 min-w-[280px]"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {social.handle} • {social.followers}
                  </p>
                </div>

                <Send className="text-emerald-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </motion.a>
            ))}
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Working Hours
              </h3>
            </div>

            <div className="space-y-4">
              {workingHours.map((schedule) => (
                <motion.div
                  key={schedule.day}
                  whileHover={{ x: 4 }}
                  className="flex justify-between items-center py-3 px-4 bg-white/5 dark:bg-gray-700/20 rounded-xl"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-gray-900 dark:text-white font-bold">
                    {schedule.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/30">
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                <strong>Response Time:</strong> Usually within 2-4 hours during working hours
              </p>
            </div>
          </motion.div>

          {/* Location & Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">IST Timezone</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Based in Tripura, India
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Available for remote work worldwide
              </p>
            </div>

            {/* Quick Process */}
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How We'll Work Together
              </h3>
              <div className="space-y-3">
                {[
                  'Initial consultation',
                  'Project proposal',
                  'Design iterations',
                  'Final delivery',
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-emerald-200/30 dark:border-teal-700/30">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Reach out and let's discuss your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hello@henrygfx.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500"
              >
                <Mail className="mr-2" size={20} />
                Send an Email
              </motion.a>

              <motion.a
                href="https://discord.gg/JTnWwf42hW"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl text-gray-900 dark:text-white font-bold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-teal-500 transition-all duration-300"
              >
                <MessageSquare className="mr-2" size={20} />
                Chat on Discord
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
