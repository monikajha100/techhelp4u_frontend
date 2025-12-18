'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cpu, Shield, Network, Database, Zap } from 'lucide-react';

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    { icon: Code2, title: 'Web Development', description: 'Modern, scalable web applications' },
    { icon: Cpu, title: 'AI Solutions', description: 'Intelligent systems for smart decisions' },
    { icon: Shield, title: 'Cybersecurity', description: 'Protect your digital assets' },
    { icon: Network, title: 'Cloud Architecture', description: 'Scalable cloud infrastructure' },
    { icon: Database, title: 'Data Management', description: 'Efficient data solutions' },
    { icon: Zap, title: 'DevOps', description: 'Streamlined deployment pipelines' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group glassmorphism p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 cursor-pointer glow-sm hover:glow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <Icon size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
