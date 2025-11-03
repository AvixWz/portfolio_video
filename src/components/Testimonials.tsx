import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    content:
      'Henry delivered exceptional work that exceeded our expectations. His attention to detail and creative vision transformed our brand identity completely.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content:
      'Working with Henry was a game-changer for our startup. His designs helped us secure funding and establish credibility in the market.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'DesignStudio',
    content:
      "Henry's UI/UX expertise is outstanding. He created intuitive interfaces that significantly improved our user engagement metrics.",
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },  {
    id: 4,
    name: 'Milly Rodriguez',
    role: 'Product Manager',
    company: 'DesignStudio',
    content:
      "Henry's UI/UX expertise is outstanding. He created intuitive interfaces that significantly improved our user engagement metrics.",
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100/50 to-stone-200/30 dark:from-neutral-950 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Don&apos;t just take my word for it — hear from satisfied clients.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white via-slate-50 to-stone-100 dark:from-slate-800 dark:via-neutral-800 dark:to-zinc-800 rounded-3xl p-8 shadow-xl border border-emerald-100/50 dark:border-teal-800/40 hover:border-emerald-300/60 dark:hover:border-teal-600/60 relative hover:shadow-emerald-300/30 dark:hover:shadow-teal-900/40 transition-all duration-500 hover:scale-[1.03]"
            >
              <Quote
                className="absolute top-6 right-6 text-emerald-500/20 dark:text-teal-500/25"
                size={48}
              />

              {/* Avatar and Name */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-4 border-emerald-200/50 dark:border-teal-700/50 shadow-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-400 fill-current drop-shadow-sm"
                    size={18}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
