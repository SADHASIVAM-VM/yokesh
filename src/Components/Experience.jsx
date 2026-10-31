import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { BriefcaseIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {experience.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-2 sm:mb-4"
        >
          Practical exposure.{' '}
          <span className="text-neutral-500 font-medium">Real-world learning.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 text-xs sm:text-base max-w-xl mb-6 sm:mb-10 font-normal leading-relaxed"
        >
          Direct internship experience supporting accounts payable workflows, enterprise financial records, and operational reporting.
        </motion.p>

        {/* Experience Cards (Open, Light Mode, Mobile-First) */}
        <div className="space-y-4 sm:space-y-8">
          {experience.items.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="apple-card p-5 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group"
            >
              {/* Header: Company, Role & Track */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-amber-200/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Company Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl premium-icon-box flex items-center justify-center shrink-0 shadow-md text-white">
                    <BriefcaseIcon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                      {item.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 font-normal">
                      {item.locationDetail} <span className="text-neutral-300">·</span> {item.track}
                    </p>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="self-start sm:self-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 tracking-wide">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="pt-6 pb-2">
                <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider font-mono mb-4">
                  Core Responsibilities &amp; Operations
                </p>

                <div className="space-y-3.5 sm:space-y-4">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <p className="text-sm sm:text-[15px] text-neutral-600 group-hover/item:text-neutral-950 leading-relaxed font-normal transition-colors">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow Systems */}
              <div className="mt-6 pt-5 border-t border-neutral-200">
                <div className="flex items-center gap-2 mb-3">
                  <CpuChipIcon className="w-4 h-4 text-amber-600" />
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                    Systems &amp; Tools Utilized
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold text-neutral-800 hover:bg-neutral-200 transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
