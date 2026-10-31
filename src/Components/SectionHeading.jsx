import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  label,
  heading,
  description,
  align = 'left',
  goldWords = [],
}) => {
  // Helper to highlight specific words in gold if requested
  const renderHeading = () => {
    if (!goldWords.length) {
      return heading;
    }
    const words = heading.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
      const isGold = goldWords.some(
        (gw) => gw.toLowerCase() === cleanWord.toLowerCase()
      );
      return (
        <span
          key={index}
          className={isGold ? 'text-gold font-normal italic' : 'text-ivory'}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[1px] bg-gold/60 inline-block" />
          <span className="text-[11px] md:text-xs font-semibold tracking-editorial text-gold uppercase font-sans">
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl sm:text-2xl xl:text-4xl font-display font-medium text-ivory tracking-tight leading-tight max-w-3xl"
      >
        {renderHeading()}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-ivory-secondary text-sm md:text-base leading-relaxed max-w-2xl font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

