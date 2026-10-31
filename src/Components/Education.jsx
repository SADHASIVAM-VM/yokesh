import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { AcademicCapIcon, CalendarIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        {/* Apple Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {education.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-6 sm:mb-10"
        >
          Knowledge built through{' '}
          <span className="text-neutral-500 font-medium">commerce and finance.</span>
        </motion.h2>

        {/* Apple Vertical Timeline */}
        <div className="relative pl-5 sm:pl-10 md:pl-12 border-l-2 border-amber-300/60 space-y-6 sm:space-y-10 ml-2.5 sm:ml-4">

          {education.items.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[33px] sm:-left-[49px] md:-left-[57px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
              </div>

              {/* Apple Glass Card */}
              <div className="apple-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">

                {/* Top Row: Year & Status Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-amber-600" />
                    <span className="font-mono text-base sm:text-lg font-bold text-neutral-900 tracking-wider">
                      {item.duration}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug mb-1">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-neutral-600">
                    <span className="font-bold text-neutral-900">{item.institution}</span>
                    <span className="text-neutral-400">·</span>
                    <span>Specialization: <strong className="text-neutral-800 font-semibold">{item.specialization}</strong></span>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Focus Areas Chips Strip */}
                <div className="pt-5 border-t border-neutral-200">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpenIcon className="w-4 h-4 text-amber-600" />
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                      Curriculum Focus &amp; Core Subjects
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 hover:bg-neutral-200 transition-colors cursor-default"
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
