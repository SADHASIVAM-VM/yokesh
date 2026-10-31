import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { AcademicCapIcon, CalendarIcon, CheckCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative bg-[#000000] py-28 md:py-36 hairline-t">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
            {certifications.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tightest leading-tight mb-16"
        >
          Verified technical{' '}
          <span className="text-zinc-400">credentials &amp; mastery.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.items.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="apple-card p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl apple-glass flex items-center justify-center text-[#A8FF3E]">
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full apple-glass">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#A8FF3E]" />
                    <span className="text-xs font-mono text-zinc-300">{cert.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-[#A8FF3E] uppercase tracking-widest block mb-1.5 font-mono">
                    {cert.category}
                  </span>
                  <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light">{cert.provider}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-2.5">
                  {cert.covered.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-white/[0.02] transition-colors"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                      <span className="text-zinc-300 text-xs font-medium tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-[#A8FF3E]" />
                  <span>Official Verified Curriculum</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400 font-medium">Accredited</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
