import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { TrendingUp, Database, LineChart, Users, CheckCircle2, Sparkles } from 'lucide-react';

const categoryIcons = {
  'finance-research': TrendingUp,
  software: Database,
  'technical-business': LineChart,
  professional: Users,
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative bg-[#0F0F0F] py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          {skills.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight tracking-tight mb-4"
        >
          The tools &amp; skills that drive
          <span className="text-[#A8FF3E]"> my work.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A8A8A] text-base mb-16 max-w-xl font-light"
        >
          A rigorous blend of financial valuation concepts, enterprise accounting software tools, and data-driven decision frameworks.
        </motion.p>

        {/* 2×2 grid of category cards with interactive hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || TrendingUp;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(168,255,62,0.35)',
                  boxShadow: '0 18px 45px -15px rgba(168,255,62,0.12)',
                }}
                className="card p-7 flex flex-col justify-between gap-5 relative overflow-hidden transition-all duration-300 group"
              >
                {/* Subtle lime corner glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.06, 0.14, 0.06],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.35) 0%, transparent 70%)' }}
                />

                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-11 h-11 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center transition-transform"
                    >
                      <Icon className="w-5 h-5 text-[#A8FF3E]" />
                    </motion.div>
                    <span className="text-[#555555] text-xs font-mono font-semibold">
                      {cat.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg tracking-tight mb-1 group-hover:text-[#A8FF3E] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[#8A8A8A] text-xs leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-2 pt-4 border-t border-white/[0.07]">
                  {cat.skills.map((s) => (
                    <motion.div
                      key={s}
                      whileHover={{ x: 4, color: '#FFFFFF' }}
                      className="flex items-center gap-2.5 transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A8FF3E] shrink-0" />
                      <span className="text-[#8A8A8A] hover:text-white text-xs transition-colors">
                        {s}
                      </span>
                    </motion.div>
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
