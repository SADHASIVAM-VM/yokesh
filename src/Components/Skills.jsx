import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowTrendingUpIcon, 
  CircleStackIcon, 
  CpuChipIcon, 
  UserGroupIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const categoryIcons = {
  'finance-research': ArrowTrendingUpIcon,
  software: CircleStackIcon,
  'technical-business': CpuChipIcon,
  professional: UserGroupIcon,
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative bg-[#000000] py-28 md:py-36 hairline-t">
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
            {skills.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tightest leading-tight mb-4"
        >
          Tools &amp; capabilities that drive{' '}
          <span className="text-zinc-400">my work.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base mb-16 max-w-xl font-light leading-relaxed"
        >
          A rigorous blend of financial valuation concepts, enterprise accounting software tools, and data-driven operational frameworks.
        </motion.p>

        {/* 2×2 Apple Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || ArrowTrendingUpIcon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="apple-card p-7 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl apple-glass flex items-center justify-center text-[#A8FF3E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-600 text-xs font-mono font-semibold">
                      {cat.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg tracking-tight mb-1.5">
                      {cat.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Spec Grid */}
                <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                  {cat.skills.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] transition-colors"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                      <span className="text-zinc-300 text-xs font-medium tracking-tight">
                        {s}
                      </span>
                    </div>
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

export default Skills;
