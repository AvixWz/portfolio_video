import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative bg-gradient-to-br from-slate-50/5 via-transparent to-stone-100/5 dark:from-slate-800/5 dark:via-transparent dark:to-zinc-800/5 backdrop-blur-[2px] rounded-[2rem] p-6 border border-slate-200/10 dark:border-slate-700/10 hover:border-emerald-200/20 dark:hover:border-emerald-700/20 transition-all duration-500 text-center"
        >
          <div className="relative space-y-1">
            <div className="text-lg font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 inline-block text-transparent bg-clip-text group-hover:scale-105 transform transition-transform duration-500">
              Made with <span aria-hidden className="text-red-500 animate-pulse">❤️</span> by <span className="font-bold">Avix</span>
            </div>
            <div className="text-sm text-gray-500/80 dark:text-gray-400/80 font-medium">
              © {new Date().getFullYear()}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
