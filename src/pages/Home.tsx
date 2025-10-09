import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveGlobe from '../components/InteractiveGlobe';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import LazyImage from '../components/LazyImage';
import SkillsVisualization from '../components/SkillsVisualization';
import ProjectShowcase from '../components/ProjectShowcase';
import ProcessTimeline from '../components/ProcessTimeline';
import TechStack from '../components/TechStack';
import BlogPreview from '../components/BlogPreview';
import ContactForm from '../components/ContactForm';
import AchievementsTimeline from '../components/AchievementsTimeline';
import AnimatedCounter from '../components/AnimatedCounter';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const homePageSEO = {
    title: 'HenryGFX - Creative Digital Designer & Visual Storyteller | Home',
    description: 'Welcome to HenryGFX\'s portfolio. Discover stunning digital designs, creative storytelling, and innovative visual experiences crafted with passion and expertise.',
    keywords: ['digital design portfolio', 'creative storytelling', 'visual design', 'HenryGFX portfolio', 'digital art', 'graphic design'],
  };

  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Happy Clients', value: 42, suffix: '' },
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'High Budget Projects', value: 25, suffix: '+' },

  ];

  return (
    <div className="relative">
      <SEO {...homePageSEO} />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-gray-900 dark:text-white">
                  𝗛𝗲𝗻𝗿𝘆𝗚𝗙𝗫
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Creative Digital Designer & Visual Storyteller
                <br />
                <span className="text-lg">Bringing Ideas to Life Through Stunning Graphics</span>
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative">View My Work</span>
                  <ArrowRight className="ml-2 relative group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/90 via-slate-50/80 to-stone-100/90 dark:from-slate-800/90 dark:via-neutral-800/80 dark:to-zinc-800/90 backdrop-blur-lg rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-teal-700/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-300/40 dark:hover:shadow-teal-900/40 hover:border-emerald-400/50 dark:hover:border-teal-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-black dark:text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Globe Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100/50 to-stone-200/30 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Global Reach, Local Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Working with clients worldwide to create exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <InteractiveGlobe />
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <Services />

      {/* Skills Visualization */}
      <SkillsVisualization />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Tech Stack */}
      <TechStack />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;