import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { icon: <Mail size={22} />, link: "mailto:youremail@example.com", label: "Email" },
    { icon: <MessageCircle size={22} />, link: "https://discord.gg/svfJdpQN", label: "Discord" },
  ];

  const motivationalQuote = "“Work hard, nap harder.” – Anonymous";

  return (
    <footer
      className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden py-12"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {/* Ultra subtle Mouse Glow */}
      <div
        className="absolute w-72 h-72 rounded-full pointer-events-none mix-blend-screen"
        style={{
          top: mousePos.y - 250,
          left: mousePos.x - 250,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(14,116,144,0) 70%)",
          filter: "blur(80px)",
          transition: "top 0.1s, left 0.1s",
        }}
      />

      {/* Subtle Background Blobs */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-emerald-400/5 via-teal-400/3 to-cyan-400/3 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-pink-400/3 via-purple-400/3 to-indigo-400/3 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left z-10">
        {/* Branding */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 opacity-90">
            Made with <span className="text-red-500 dark:text-red-400 animate-pulse">❤️</span> by{" "}
            <span className="font-bold text-gray-900 dark:text-white">Henry</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic">
            {motivationalQuote}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-300/20 dark:bg-gray-700/30 backdrop-blur-md border border-gray-400/30 dark:border-gray-600/50 hover:bg-gray-300/30 dark:hover:bg-gray-700/50 transition-colors duration-300 text-gray-700 dark:text-gray-200 shadow-md shadow-emerald-500/5 dark:shadow-teal-600/5"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative Neon Footer Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 opacity-30 dark:opacity-20 blur-sm" />
    </footer>
  );
};

export default Footer;
