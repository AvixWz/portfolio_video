import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { icon: <Mail size={20} />, link: "mailto:youremail@example.com", label: "Email" },
    { icon: <MessageCircle size={20} />, link: "https://discord.gg/vgWVHCDfvT", label: "Discord" },
  ];

  return (
    <footer
      className="mt-12 py-8 relative"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group mx-auto max-w-full rounded-[2rem] px-12 py-6 border border-white/20 dark:border-gray-700/20 bg-white/10 dark:bg-gray-900/20 backdrop-blur-3xl shadow-lg shadow-emerald-300/10 dark:shadow-teal-700/10 hover:shadow-emerald-300/30 dark:hover:shadow-teal-600/30 transition-all duration-500 text-center overflow-hidden"
        >
          {/* Mouse-following neon glow */}
          <div
            className="absolute w-60 h-60 rounded-full pointer-events-none mix-blend-screen"
            style={{
              top: mousePos.y - 300,
              left: mousePos.x - 300,
              background:
                "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(14,116,144,0) 70%)",
              filter: "blur(120px)",
              transition: "top 0.1s, left 0.1s",
            }}
          />

          {/* Floating gradient blobs */}
          <div className="absolute -top-10 -left-16 w-48 h-48 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/10 rounded-full blur-3xl animate-blob pointer-events-none" />
          <div className="absolute -bottom-10 -right-16 w-48 h-48 bg-gradient-to-br from-pink-400/20 via-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <span className="font-bold">Avix</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/70 dark:text-gray-300/70">© {new Date().getFullYear()}</p>

            {/* Social links */}
            <div className="flex justify-center gap-6 mt-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-600/20 hover:bg-white/20 dark:hover:bg-gray-800/60 transition-colors duration-300 text-white shadow-md shadow-emerald-500/30 dark:shadow-teal-600/30"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
