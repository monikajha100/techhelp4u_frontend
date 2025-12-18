import React from "react";
import { motion } from "framer-motion";

const eventPhotos = [
  "/event1.jpg",
  "/event2.jpg",
  // Add more photos here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedEventGallery() {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, color: "#007bff" }}>
        Event Gallery
      </h2>

      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 25,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {eventPhotos.map((photo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            style={{
              borderRadius: 15,
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={photo}
              alt={`Event photo ${index + 1}`}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
