import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Star, Trophy, Target } from 'lucide-react';

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metric?: string;
  color: string;
  category: string;
}

const achievements: Achievement[] = [
  { id: 1, year: '2024', title: 'Design Excellence Award', description: 'Recognized for outstanding brand identity work at the International Design Awards', icon: Trophy, metric: '1st Place', color: 'from-yellow-500 to-yellow-600', category: 'Award' },
  { id: 2, year: '2024', title: 'Client Portfolio Milestone', description: 'Reached 150+ completed projects with 98% client satisfaction rate', icon: Target, metric: '150+ Projects', color: 'from-blue-500 to-blue-600', category: 'Milestone' },
  { id: 3, year: '2023', title: 'Revenue Growth', description: 'Achieved 200% year-over-year revenue growth through strategic partnerships', icon: TrendingUp, metric: '+200%', color: 'from-green-500 to-green-600', category: 'Business' },
  { id: 4, year: '2023', title: 'Team Expansion', description: 'Built and led a team of 5 talented designers for large-scale projects', icon: Users, metric: '5 Team Members', color: 'from-purple-500 to-purple-600', category: 'Leadership' },
  { id: 5, year: '2022', title: 'Featured Designer', description: 'Featured in Design Weekly as "Designer to Watch" for innovative work', icon: Star, color: 'from-pink-500 to-pink-600', category: 'Recognition' },
  { id: 6, year: '2021', title: 'First Major Client', description: 'Landed first Fortune 500 client, marking a significant career milestone', icon: Award, color: 'from-indigo-500 to-indigo-600', category: 'Milestone' }
];

const TreeTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 shadow-2xl border border-gray-200/20 dark:border-gray-800/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A living tree-style timeline showcasing growth and achievements dynamically.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Vertical trunk line with growth animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
            viewport={{ once: true }}
            className="absolute w-1 bg-gradient-to-b from-blue-400 to-purple-500 left-1/2 transform -translate-x-1/2 rounded-full"
          />

          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.id}
                className="relative w-full flex items-center justify-center my-20"
              >
                {/* Animated branch */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  transition={{ duration: 1, delay: index * 0.3, type: 'spring', stiffness: 50 }}
                  className={`absolute top-0 h-1 bg-gray-300 dark:bg-gray-700 ${isLeft ? 'right-1/2' : 'left-1/2'}`}
                />

                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.5, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.3 }}
                  className={`z-10 w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}
                >
                  <achievement.icon className="text-white" size={28} />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
                  className={`absolute top-0 w-96 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 ${isLeft ? 'right-full mr-12 text-right' : 'left-full ml-12 text-left'}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{achievement.year}</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{achievement.category}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>

                  {achievement.metric && (
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full mb-2`}>
                      {achievement.metric}
                    </div>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreeTimeline;
