'use client';

import { motion } from 'motion/react';

export default function AnimatedDivider() {
  return (
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-4 bg-caution w-full origin-left"
    />
  );
}
