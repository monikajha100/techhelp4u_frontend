// components/WorkshopCard.jsx
import React from 'react';
import { motion } from 'framer-motion';


 export default function WorkshopCard ({ title, image, date, description, type, time, location }) {
  const getTagColor = () => {
    switch (type) {
      case 'latest': return 'bg-blue-500';
      case 'upcoming': return 'bg-green-500';
      case 'old': return 'bg-gray-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">📅 Date: {date}</p>
       
        <p className="text-sm text-gray-600 dark:text-gray-400">📍 Location: {location}</p>
      </div>
      <div className="px-6 pb-4 flex items-center justify-between">
        <span className={`inline-block ${getTagColor()} text-white px-3 py-1 rounded-full text-xs uppercase`}>
          {type}
        </span>
        
        {type === 'upcoming' && (
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1 px-3 rounded"
          >
            Register Now
          </Link>
        )}
      </div>
    </motion.div>

  );
};


