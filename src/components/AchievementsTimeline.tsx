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

const AchievementsTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden rounded-3xl mx-4 sm:mx-8 shadow-2xl border border-gray-200/20 dark:border-gray-800/40">
      {/* Floating background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-green-400/20 via-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key moments and accomplishments in my design journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Card */}
                <div className="flex-1 max-w-full lg:max-w-[480px]">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 group w-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="text-white" size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.year}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{achievement.category}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>

                    {achievement.metric && (
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm font-semibold rounded-full mb-3 shadow-md`}>
                        {achievement.metric}
                      </div>
                    )}

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="relative hidden lg:flex flex-col items-center justify-center w-20 h-20">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900 z-10`}
                  >
                    <achievement.icon className="text-white" size={24} />
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full`}
                  />
                </div>

                <div className="flex-1 max-w-full lg:max-w-[480px] hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
