import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({
  children,
  id,
  className = '',
  hasSeparator = true,
  padding = 'py-20 md:py-28',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${padding} ${className}`}
    >
      {hasSeparator && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSection;

