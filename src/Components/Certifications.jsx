import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { AcademicCapIcon, CalendarIcon, CheckCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {certifications.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-6 sm:mb-10"
        >
          Verified technical{' '}
          <span className="text-neutral-500 font-medium">credentials &amp; mastery.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.items.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="apple-card p-5 sm:p-8 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl premium-icon-box flex items-center justify-center text-white shadow-md shrink-0">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-xs font-mono font-bold text-neutral-800">{cert.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-1.5 font-mono">
                    {cert.category}
                  </span>
                  <h3 className="text-neutral-950 font-bold text-xl sm:text-2xl tracking-tight leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-600 text-sm font-normal">{cert.provider}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-200 space-y-2.5">
                  {cert.covered.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-neutral-800 text-xs font-semibold tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2 font-medium">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-600" />
                  <span>Official Verified Curriculum</span>
                </div>
                <span className="font-mono text-[11px] text-amber-700 font-bold">Accredited</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
