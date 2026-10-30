import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Building2, CheckCircle2, Layers, Cpu } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label text-[#A8FF3E]">{experience.label}</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white leading-tight tracking-tight mb-4"
        >
          Practical exposure.{' '}
          <span className="text-[#A8FF3E]">Real-world learning.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A8A8A] text-sm sm:text-base max-w-xl mb-14 font-light leading-relaxed"
        >
          Direct internship experience supporting accounts payable workflows, enterprise financial records, and operational reporting.
        </motion.p>

        {/* Experience Cards (Permanently Open, Mobile-Optimized, No Accordion) */}
        <div className="space-y-8 sm:space-y-10">
          {experience.items.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ borderColor: 'rgba(168,255,62,0.35)', y: -4 }}
              className="card p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden transition-all duration-300 shadow-xl group border-white/10"
              style={{ background: 'linear-gradient(160deg, #131313 0%, #0D0D0D 100%)' }}
            >
              {/* Top signature lime hairline accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A8FF3E]/50 to-transparent group-hover:via-[#A8FF3E] transition-all duration-500" />

              {/* Header: Company, Role & Track */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Company Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center shrink-0 text-[#A8FF3E]">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#A8FF3E] transition-colors leading-snug">
                      {item.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A8A8A] mt-0.5 font-light">
                      {item.locationDetail} <span className="text-[#555555]">·</span> {item.track}
                    </p>
                  </div>
                </div>

                {/* Role Badge in Signature Lime */}
                <div className="self-start sm:self-center">
                  <span className="pill text-[10px] sm:text-[11px] font-mono text-[#A8FF3E] bg-[#A8FF3E]/10 border border-[#A8FF3E]/30 px-3.5 py-1">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Responsibilities List (Mobile-Optimized Clean Typography) */}
              <div className="pt-6 pb-2">
                <p className="text-[11px] font-semibold text-[#666666] uppercase tracking-wider font-mono mb-4">
                  Key Responsibilities &amp; Contributions
                </p>

                <div className="space-y-3.5 sm:space-y-4">
                  {item.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group/item"
                    >
                      {/* Subtle elegant lime dot marker */}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] mt-2 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(168,255,62,0.4)]" />

                      <p className="text-sm sm:text-[15px] text-[#A5ADB7] group-hover/item:text-white leading-relaxed font-light transition-colors">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow Systems */}
              <div className="mt-6 pt-5 border-t border-white/[0.07]">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-3.5 h-3.5 text-[#A8FF3E]" />
                  <span className="text-[11px] font-semibold text-[#666666] uppercase tracking-wider font-mono">
                    Systems &amp; Tools Utilized
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(168,255,62,0.14)',
                        color: '#A8FF3E',
                        borderColor: 'rgba(168,255,62,0.35)',
                      }}
                      className="px-3 py-1 rounded-full bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 text-[#A8FF3E] text-xs font-mono transition-all cursor-default"
                    >
                      {tool}
                    </motion.span>
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
