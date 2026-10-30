import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { TrendingUp, Search, Building2, Workflow, ArrowUpRight } from 'lucide-react';

const interestIcons = [TrendingUp, Search, Building2, Workflow];

const Interests = () => {
  const { interests } = portfolioData;

  return (
    <section id="interests" className="relative bg-[#0F0F0F] py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          {interests.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight tracking-tight mb-4"
        >
          {interests.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A8A8A] text-base mb-16 max-w-2xl font-light"
        >
          {interests.subheading}
        </motion.p>

        {/* Asymmetric Bento Grid matching the Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {interests.items.map((item, idx) => {
            const Icon = interestIcons[idx] || TrendingUp;
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
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(168,255,62,0.35)',
                  boxShadow: '0 18px 45px -15px rgba(168,255,62,0.12)',
                }}
                className={`${colSpan} card p-7 flex flex-col justify-between gap-5 group relative overflow-hidden transition-all duration-300`}
              >
                {/* Hover Glow */}
                <div
                  className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.12) 0%, transparent 70%)' }}
                />

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="w-11 h-11 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <Icon className="w-5 h-5 text-[#A8FF3E]" />
                    </motion.div>
                    <span className="text-[#3A3A3A] group-hover:text-[#A8FF3E] text-xs font-mono transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg sm:text-xl leading-snug mb-2 group-hover:text-[#A8FF3E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.07] flex flex-wrap gap-2">
                  {item.metrics.map((m) => (
                    <motion.span
                      key={m}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(168,255,62,0.12)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(168,255,62,0.3)',
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-[#8A8A8A] transition-colors cursor-default"
                    >
                      {m}
                    </motion.span>
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
