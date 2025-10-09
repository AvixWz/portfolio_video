import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'Experience & About' },
    { path: '/contact', label: 'Contact Me' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-emerald-200/20 dark:shadow-teal-900/30 border-b border-emerald-100/50 dark:border-teal-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              {/* ✅ Circular Image Logo */}
              <img
                src="/assets/henry.png" // 👈 Update this if your image is in a different location
                alt="HenryGFX Logo"
                className="w-10 h-10 rounded-full object-cover shadow-lg"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Henry
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-emerald-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-teal-400'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-slate-800 dark:to-neutral-800 text-emerald-600 dark:text-teal-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-teal-900/50 transition-all duration-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-slate-800 dark:to-neutral-800 text-emerald-600 dark:text-teal-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl shadow-emerald-200/30 dark:shadow-teal-900/40 border border-emerald-100/50 dark:border-teal-900/50"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-emerald-600 dark:text-teal-400 bg-gradient-to-r from-emerald-50 to-teal-100 dark:from-teal-900/30 dark:to-emerald-900/30 shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
