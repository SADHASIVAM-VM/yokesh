import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative bg-[#0A0A0A] py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          {certifications.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight tracking-tight mb-16"
        >
          {certifications.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.items.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(168,255,62,0.35)',
                boxShadow: '0 16px 40px -15px rgba(168,255,62,0.12)',
              }}
              className="card p-7 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A8FF3E]/40 to-transparent group-hover:via-[#A8FF3E] transition-all duration-500" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center transition-transform"
                  >
                    <Award className="w-5 h-5 text-[#A8FF3E]" />
                  </motion.div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.07]">
                    <Calendar className="w-3 h-3 text-[#A8FF3E]" />
                    <span className="text-[11px] font-mono text-[#8A8A8A]">{cert.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-[#A8FF3E] uppercase tracking-widest block mb-1.5 font-mono">
                    {cert.category}
                  </span>
                  <h3 className="text-white font-bold text-xl leading-snug mb-1 group-hover:text-[#A8FF3E] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm">{cert.provider}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.07] space-y-2.5">
                  {cert.covered.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 3, color: '#FFFFFF' }}
                      className="flex items-center gap-2.5 transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A8FF3E] shrink-0" />
                      <span className="text-[#8A8A8A] text-xs hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between text-[11px] text-[#555555]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A8FF3E]" />
                  <span>Official Course Curriculum</span>
                </div>
                <span className="font-mono text-[10px] text-[#A8FF3E]">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
