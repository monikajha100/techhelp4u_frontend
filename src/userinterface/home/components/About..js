'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">TechHelp4U</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
            We believe that technology should empower everyone. Our mission is to bridge the gap between complex tech solutions and people who need them.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'Expert Guidance',
                description: 'Leverage decades of combined tech expertise from our community of seasoned professionals'
              },
              {
                number: '02',
                title: 'Innovation First',
                description: 'Stay ahead with cutting-edge solutions and methodologies in the ever-evolving tech landscape'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group glassmorphism p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
