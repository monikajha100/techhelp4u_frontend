'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function CommunityStats() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [counts, setCounts] = useState({ members: 0, projects: 0, solutions: 0 });

  useEffect(() => {
    if (!inView) return;

    const targets = { members: 5000, projects: 1200, solutions: 8500 };
    const duration = 2000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        members: Math.floor(targets.members * progress),
        projects: Math.floor(targets.projects * progress),
        solutions: Math.floor(targets.solutions * progress),
      });

      if (progress === 1) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [inView]);

  const stats = [
    { label: 'Active Members', value: `${counts.members}+` },
    { label: 'Projects Completed', value: `${counts.projects}+` },
    { label: 'Solutions Provided', value: `${counts.solutions}+` },
  ];

  return (
    <section id="community" ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Community <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Highlights</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.2 }}
              className="glassmorphism p-8 rounded-2xl text-center glow-md"
            >
              <motion.div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
