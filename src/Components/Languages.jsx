import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="relative bg-transparent py-10 sm:py-16 md:py-24 hairline-t">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {languages.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight mb-6 sm:mb-8"
        >
          Articulate communication across teams.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl">
          {languages.items.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="apple-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl premium-icon-box flex items-center justify-center text-white shrink-0">
                <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-950 font-bold text-lg tracking-tight">
                  {lang.name}
                </h3>
                <p className="text-neutral-500 text-xs mt-0.5 font-normal">{lang.context}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-800">
                {lang.code}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Languages;
