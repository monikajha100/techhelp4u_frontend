'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export function WhyJoinUs() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const reasons = [
    'Access to industry experts and mentors',
    'Collaborative project opportunities',
    'Cutting-edge tech resources',
    'Career advancement support',
    'Exclusive networking events',
    'Hands-on learning experiences',
  ];

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Join <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">TechHelp4U</span>?
            </h2>
            <p className="text-gray-400 mb-8">
              Be part of a thriving community where innovation meets collaboration. Get support from experts and grow your tech skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 glassmorphism rounded-xl hover:border-purple-500/50 transition-colors"
              >
                <CheckCircle2 size={24} className="text-cyan-400 flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
