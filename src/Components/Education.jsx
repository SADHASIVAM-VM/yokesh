import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { AcademicCapIcon, CalendarIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative bg-[#000000] py-28 md:py-36 hairline-t">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Apple Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
            {education.label}
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
          Knowledge built through{' '}
          <span className="text-zinc-400">commerce and finance.</span>
        </motion.h2>

        {/* ========================================================
            APPLE VERTICAL TIMELINE SPECIFICATION
           ======================================================== */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/15 space-y-12 sm:space-y-16 ml-3 sm:ml-4">

          {education.items.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Apple Specular Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#000000] border-2 border-[#A8FF3E] flex items-center justify-center shadow-[0_0_16px_rgba(168,255,62,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E]" />
                </div>
              </div>

              {/* Apple Glass Card */}
              <div className="apple-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">

                {/* Top Row: Year Spec & Status Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#A8FF3E]" />
                    <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wider">
                      {item.duration}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full apple-glass text-[10px] font-semibold text-zinc-300 uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-1">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-zinc-400">
                    <span className="font-medium text-white">{item.institution}</span>
                    <span className="text-zinc-600">·</span>
                    <span>Specialization: <strong className="text-zinc-200 font-medium">{item.specialization}</strong></span>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Focus Areas Chips Strip */}
                <div className="pt-5 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpenIcon className="w-4 h-4 text-[#A8FF3E]" />
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono">
                      Curriculum Focus &amp; Core Subjects
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-full apple-glass text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
