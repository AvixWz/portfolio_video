import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

interface Tool {
  name: string;
  category: string;
  proficiency: number;
  logo: string;
  description: string;
}

const tools: Tool[] = [
  { name: 'Adobe After Effects', category: 'Video', proficiency: 95, logo: '🎬', description: 'Motion graphics, VFX, and compositing' },
  { name: 'Adobe Premiere Pro', category: 'Video', proficiency: 92, logo: '🎞️', description: 'Professional video editing' },
  { name: 'DaVinci Resolve', category: 'Video', proficiency: 88, logo: '🎥', description: 'Color grading and editing' },
  { name: 'Final Cut Pro', category: 'Video', proficiency: 85, logo: '🍎', description: 'Apple’s professional video editing suite' },
  { name: 'Cinema 4D', category: '3D', proficiency: 80, logo: '🎭', description: '3D animation and motion graphics' },
  { name: 'Blender', category: '3D', proficiency: 75, logo: '🔷', description: '3D modeling, rendering, and animation' },
  { name: 'After Effects Plugins', category: 'Video', proficiency: 78, logo: '✨', description: 'Trapcode, Element 3D, Red Giant suites' },
];

const categories = Array.from(new Set(tools.map(tool => tool.category)));

const VideoTechStack: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section className="relative py-20 bg-transparent">
      {/* Particles background */}
      <Particles
        id="tsparticles-video"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
          particles: {
            color: { value: ['#00FFB2', '#14B8A6', '#06B6D4'] },
            links: { enable: true, distance: 120, color: '#14B8A6', opacity: 0.2, width: 1 },
            collisions: { enable: false },
            move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, outModes: 'out' },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-gradient">
            Video & Motion Design Tools
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The essential tools I use to create cinematic videos, motion graphics, and animations.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{category} Tools</h3>

            <div className="flex flex-wrap justify-center gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="glass flex items-center justify-between px-8 py-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)]"
                  >
                    {/* Icon */}
                    <div className="text-3xl flex-shrink-0">{tool.logo}</div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col ml-4 min-w-0">
                      <span className="font-bold text-white truncate">{tool.name}</span>
                      <span className="text-sm text-gray-200 truncate">{tool.description}</span>

                      {/* Progress Bar */}
                      <div className="mt-2 w-full bg-gray-700/40 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 h-3 rounded-full shadow-md shadow-emerald-500/50"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, type: "spring", stiffness: 50 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoTechStack;
