'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LiquidEther from '@/components/LiquidEther';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Where deep tech meets human mindset';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
          
             <LiquidEther
               colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
               mouseForce={20}
               cursorSize={100}
               isViscous={false}
               viscous={30}
               iterationsViscous={32}
               iterationsPoisson={32}
               resolution={0.5}
               isBounce={false}
               autoDemo={true}
               autoSpeed={0.5}
               autoIntensity={2.2}
               takeoverDuration={0.25}
               autoResumeDelay={3000}
               autoRampDuration={0.6}
             />
            
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm text-purple-400">Welcome to TechHelp4U</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-balance">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-purple-400"
            >
              |
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          We are a collective of passionate tech enthusiasts bound together by our deep tech knowledge and human-centric mindset
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full px-8 py-6 text-base">
            Join Our Community
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            className="border border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-base"
          >
            Watch Demo
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
