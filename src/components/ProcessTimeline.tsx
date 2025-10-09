import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Palette, Video, TestTube, Rocket } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  deliverables: string[];
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Research',
    description: 'Understanding your vision, goals, and target audience.',
    icon: MessageSquare,
    duration: '1-2 days',
    deliverables: ['Project brief', 'Research findings', 'Mood board'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Concept Development',
    description: 'Brainstorming and developing initial creative concepts.',
    icon: Lightbulb,
    duration: '2-3 days',
    deliverables: ['Concept sketches', 'Storyboards', 'Style exploration'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Design Creation',
    description: 'Crafting visual designs with attention to detail.',
    icon: Palette,
    duration: '1-2 weeks',
    deliverables: ['High-fidelity designs', 'Brand assets', 'Illustrations'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'Video Editing & Motion Graphics',
    description: 'Creating polished video content and dynamic animations.',
    icon: Video,
    duration: '3-5 days',
    deliverables: ['Edited videos', 'Motion graphics', 'Social media clips'],
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 5,
    title: 'Testing & Refinement',
    description: 'Reviewing outputs to ensure quality and consistency.',
    icon: TestTube,
    duration: '1-2 days',
    deliverables: ['Feedback review', 'Color correction', 'Final tweaks'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    title: 'Delivery & Support',
    description: 'Handing over final files and providing ongoing guidance.',
    icon: Rocket,
    duration: '1 day',
    deliverables: ['Final assets', 'Documentation', 'Support'],
    color: 'from-teal-500 to-teal-600'
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-gradient">
            My Creative Process
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Step-by-step approach to delivering stunning design and video content
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                <step.icon className="text-white" size={28} />
              </div>

              {/* Glassy Pill/Card */}
              <div className="glass rounded-full px-6 py-4 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4 border border-white/10 shadow-xl backdrop-blur-md">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white truncate">{step.title}</h3>
                  <p className="text-sm text-gray-200">{step.duration}</p>
                  <p className="text-sm text-gray-200 mt-1 truncate">{step.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {step.deliverables.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
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

export default ProcessTimeline;
