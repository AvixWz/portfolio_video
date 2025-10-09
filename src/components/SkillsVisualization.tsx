import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Monitor, Camera, Play } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Adobe Premiere Pro',
    level: 90,
    icon: Monitor,
    color: 'from-purple-500 to-indigo-600',
    description: 'Professional video editing and timeline management'
  },
  {
    name: 'After Effects',
    level: 85,
    icon: Zap,
    color: 'from-pink-500 to-rose-600',
    description: 'Motion graphics, VFX, and animation workflows'
  },
  {
    name: 'DaVinci Resolve',
    level: 80,
    icon: Play,
    color: 'from-teal-500 to-cyan-600',
    description: 'Color grading, post-production, and video finishing'
  },
  {
    name: 'Final Cut Pro',
    level: 75,
    icon: Camera,
    color: 'from-orange-500 to-amber-600',
    description: 'Apple video editing software for professional projects'
  }
];

const VideoSoftwareSkills: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100/50 to-stone-200/30 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-slate-900 rounded-[60px] mx-4 sm:mx-8 my-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg inline-block mb-4">
            Video Production Software
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Video Software Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mastery of the most powerful video editing and motion design tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-gradient-to-br from-white via-slate-50 to-stone-100 dark:from-slate-800 dark:via-neutral-800 dark:to-zinc-800 rounded-3xl p-8 shadow-2xl border-2 border-purple-100/50 dark:border-indigo-800/50 hover:border-purple-300/70 dark:hover:border-indigo-600/70 overflow-hidden transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 text-center">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                  {skill.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-purple-600 dark:text-indigo-400">
                      Proficiency
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, type: "spring", stiffness: 50 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-5 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? `bg-gradient-to-r ${skill.color} shadow-lg`
                          : 'bg-slate-200 dark:bg-slate-600'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.5 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSoftwareSkills;
