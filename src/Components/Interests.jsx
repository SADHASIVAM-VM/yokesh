import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowTrendingUpIcon, 
  ChartBarIcon, 
  BuildingOffice2Icon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';

const interestIcons = [ArrowTrendingUpIcon, ChartBarIcon, BuildingOffice2Icon, CpuChipIcon];

const Interests = () => {
  const { interests } = portfolioData;

  return (
    <section id="interests" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
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
            {interests.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4"
        >
          Curiosity that goes{' '}
          <span className="text-neutral-500 font-medium">beyond accounting.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 text-sm sm:text-base mb-6 sm:mb-10 max-w-2xl font-normal leading-relaxed"
        >
          {interests.subheading}
        </motion.p>

        {/* Asymmetric Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {interests.items.map((item, idx) => {
            const Icon = interestIcons[idx] || ArrowTrendingUpIcon;
            const colSpan =
              idx === 0
                ? 'md:col-span-7'
                : idx === 1
                ? 'md:col-span-5'
                : idx === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`${colSpan} apple-card p-6 sm:p-8 flex flex-col justify-between gap-6 group`}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl premium-icon-box flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-neutral-400 font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-neutral-950 font-bold text-lg sm:text-xl tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-200 flex flex-wrap gap-2">
                  {item.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors cursor-default"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Interests;
