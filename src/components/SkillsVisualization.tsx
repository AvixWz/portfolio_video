import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Monitor, Smartphone, Camera, Zap, Globe, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Graphic Design',
    level: 95,
    icon: Palette,
    color: 'from-emerald-500 to-teal-600',
    description: 'Visual identity, logos, and brand design'
  },
  {
    name: 'UI/UX Design',
    level: 90,
    icon: Monitor,
    color: 'from-cyan-500 to-blue-600',
    description: 'User interfaces and experience design'
  },
  // {
  //   name: 'Web Development',
  //   level: 85,
  //   icon: Code,
  //   color: 'from-green-500 to-emerald-600',
  //   description: 'Frontend development and responsive design'
  // },
  {
    name: 'Mobile Design',
    level: 88,
    icon: Smartphone,
    color: 'from-teal-500 to-cyan-600',
    description: 'iOS and Android app interface design'
  },
  {
    name: 'Photography',
    level: 80,
    icon: Camera,
    color: 'from-pink-500 to-rose-600',
    description: 'Product and portrait photography'
  },
  {
    name: 'Motion Graphics',
    level: 75,
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    description: 'Animation and video editing'
  },
  {
    name: 'Brand Strategy',
    level: 92,
    icon: Globe,
    color: 'from-teal-500 to-emerald-600',
    description: 'Brand positioning and market analysis'
  },
  {
    name: '3D Design',
    level: 70,
    icon: Layers,
    color: 'from-red-500 to-orange-600',
    description: 'Product visualization and 3D modeling'
  }
];

const SkillsVisualization: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100/50 to-stone-200/30 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-slate-900 rounded-[80px] mx-4 sm:mx-8 my-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg">
              Skills & Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my design and technical capabilities
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
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative bg-gradient-to-br from-white via-slate-50 to-stone-100 dark:from-slate-800 dark:via-neutral-800 dark:to-zinc-800 rounded-3xl p-8 shadow-2xl border-2 border-emerald-100/50 dark:border-teal-800/50 hover:border-emerald-300/70 dark:hover:border-teal-600/70 overflow-hidden hover:shadow-emerald-300/30 dark:hover:shadow-teal-900/40 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
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
                    <span className="text-xs font-semibold text-emerald-600 dark:text-teal-400">
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

export default SkillsVisualization;
