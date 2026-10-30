import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, BookOpen, Calendar, ArrowUpRight, Award } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label text-[#A8FF3E]">{education.label}</span>
        </motion.div>

        {/* Section Heading with Signature Lime */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white leading-tight tracking-tight mb-16"
        >
          Knowledge built through{' '}
          <span className="text-[#A8FF3E]">commerce and finance.</span>
        </motion.h2>

        {/* ========================================================
            VERTICAL TIMELINE ARCHITECTURE
           ======================================================== */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-white/[0.1] space-y-12 sm:space-y-16 ml-3 sm:ml-4">

          {education.items.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Node (Pulsing glowing dot aligned with the track) */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#0A0A0A] border-2 border-[#A8FF3E] flex items-center justify-center shadow-[0_0_15px_rgba(168,255,62,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-[#A8FF3E] animate-pulse" />
                </div>
              </div>

              {/* Timeline Card */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(168,255,62,0.35)' }}
                className="card p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(160deg, #141414 0%, #0D0D0D 100%)' }}
              >
                {/* Top decorative hairline accent in lime */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A8FF3E]/40 to-transparent group-hover:via-[#A8FF3E] transition-all duration-500" />

                {/* Top Row: Year Label & Status Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#A8FF3E]" />
                    <span className="font-mono text-base sm:text-lg font-bold text-[#A8FF3E] tracking-wider">
                      {item.duration}
                    </span>
                  </div>

                  <span className="pill text-[10px] font-mono text-[#A8FF3E] bg-[#A8FF3E]/10 border border-[#A8FF3E]/30 px-3 py-1">
                    {item.status}
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#A8FF3E] transition-colors mb-1.5">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#A5ADB7]">
                    <span className="font-medium text-white">{item.institution}</span>
                    <span className="text-[#555555]">·</span>
                    <span className="text-[#8A8A8A]">Specialization: <strong className="text-white font-normal">{item.specialization}</strong></span>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-sm sm:text-[15px] text-[#8A8A8A] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Focus Areas Chips Strip */}
                <div className="pt-5 border-t border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-[#A8FF3E]" />
                    <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider font-mono">
                      Core Academic Subjects &amp; Focus
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((area) => (
                      <motion.span
                        key={area}
                        whileHover={{
                          scale: 1.04,
                          backgroundColor: 'rgba(168,255,62,0.12)',
                          color: '#A8FF3E',
                          borderColor: 'rgba(168,255,62,0.3)',
                        }}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-[#A5ADB7] transition-all cursor-default"
                      >
                        {area}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
