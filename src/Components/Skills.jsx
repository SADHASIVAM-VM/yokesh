import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowTrendingUpIcon, 
  CircleStackIcon, 
  CpuChipIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const categoryIcons = {
  'finance-research': ArrowTrendingUpIcon,
  software: CircleStackIcon,
  'technical-business': CpuChipIcon,
  professional: UserGroupIcon,
};

// Flattened list of skills for the infinite horizontal marquee
const marqueeSkillsRow1 = [
  { name: 'SAP FICO', tag: 'Enterprise ERP', icon: '⚡' },
  { name: 'Tally Prime', tag: 'Accounting & AP/AR', icon: '📊' },
  { name: 'Advanced MS Excel', tag: 'Financial Modeling', icon: '📈' },
  { name: 'Financial Statement Analysis', tag: 'Reporting', icon: '📑' },
  { name: 'Accounts Payable (P2P)', tag: 'Operations', icon: '🔄' },
  { name: 'Ratio & Valuation Analysis', tag: 'Valuation', icon: '🔍' },
  { name: 'Invoice Reconciliation', tag: 'AP Workflow', icon: '🧾' },
];

const marqueeSkillsRow2 = [
  { name: 'Working Capital Management', tag: 'Corporate Finance', icon: '💼' },
  { name: 'Company & Industry Research', tag: 'Equity Analysis', icon: '🏢' },
  { name: 'Cost Accounting & Control', tag: 'Management', icon: '💰' },
  { name: 'Workflow Optimization', tag: 'Operations', icon: '⚙️' },
  { name: 'Corporate Compliance', tag: 'Governance', icon: '🛡️' },
  { name: 'Tally ERP 9', tag: 'Bookkeeping', icon: '📋' },
  { name: 'Variance Analysis', tag: 'Cost Control', icon: '📉' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t overflow-hidden">
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
            {skills.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-2 sm:mb-4"
        >
          Tools &amp; capabilities that drive{' '}
          <span className="text-neutral-500 font-medium">my work.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 text-xs sm:text-base mb-6 sm:mb-10 max-w-xl font-normal leading-relaxed"
        >
          A rigorous blend of financial valuation concepts, enterprise accounting software tools, and data-driven operational frameworks.
        </motion.p>

      </div>

      {/* ========================================================
          INFINITE HORIZONTAL SCROLLING SKILLS TICKER (Full-Width)
         ======================================================== */}
      <div className="relative w-full mb-8 sm:mb-12 overflow-hidden py-2 space-y-3">
     
        {/* Row 1: Scrolling Left */}
        <div className="flex w-fit overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-2.5 sm:gap-3 shrink-0"
          >
            {[...marqueeSkillsRow1, ...marqueeSkillsRow1].map((skill, i) => (
              <div
                key={i}
                className="apple-card px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 shrink-0 hover:border-amber-400 transition-colors cursor-default"
              >
                <span className="w-7 h-7 rounded-xl bg-amber-500/15 border border-amber-400/40 text-sm flex items-center justify-center shrink-0">
                  {skill.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold tracking-wider uppercase font-mono">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-fit overflow-hidden">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-2.5 sm:gap-3 shrink-0"
          >
            {[...marqueeSkillsRow2, ...marqueeSkillsRow2].map((skill, i) => (
              <div
                key={i}
                className="apple-card px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 shrink-0 hover:border-amber-400 transition-colors cursor-default"
              >
                <span className="w-7 h-7 rounded-xl bg-amber-500/15 border border-amber-400/40 text-sm flex items-center justify-center shrink-0">
                  {skill.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold tracking-wider uppercase font-mono">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          PREMIUM CATEGORY BENTO MODULES
         ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || ArrowTrendingUpIcon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="apple-card p-5 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl premium-icon-box flex items-center justify-center shadow-md shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-amber-800/80 text-xs font-mono font-bold bg-amber-100/70 px-2 py-0.5 rounded-md">
                      {cat.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-neutral-950 font-bold text-base sm:text-lg tracking-tight mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Spec Grid */}
                <div className="space-y-1.5 pt-3 sm:pt-4 border-t border-amber-200/50">
                  {cat.skills.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-white/80 transition-colors"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-neutral-800 text-xs sm:text-sm font-semibold tracking-tight">
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
