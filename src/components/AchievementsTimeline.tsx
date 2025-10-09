import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Users, Star, Award } from 'lucide-react';

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

const PillTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-[60px] mx-4 sm:mx-8 shadow-2xl border border-gray-200/20 dark:border-gray-800/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-full p-6 flex space-x-4 items-center shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <achievement.icon className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white">{achievement.year}</span>
                  {achievement.metric && (
                    <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color}`}>
                      {achievement.metric}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillTimeline;
