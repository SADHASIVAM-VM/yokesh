import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Globe2 } from 'lucide-react';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="relative  py-20 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          {languages.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-10"
        >
          Articulate communication across teams.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {languages.items.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(168,255,62,0.35)',
                boxShadow: '0 12px 30px -10px rgba(168,255,62,0.12)',
              }}
              className="card p-6 flex items-center gap-4 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center transition-transform"
              >
                <Globe2 className="w-5 h-5 text-[#A8FF3E]" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:text-[#A8FF3E] transition-colors">
                  {lang.name}
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-0.5">{lang.context}</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-[#A8FF3E]">
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
