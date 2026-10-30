import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2, ArrowRight, FileText, MapPin, Building, GraduationCap, Sparkles } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import profileImg from '../assets/images/profile.jpeg';

// Animated Counter Component for Stats
const AnimatedCounter = ({ target, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const numericTarget = parseInt(target, 10);
    const duration = 1400;
    const stepTime = 35;
    const steps = duration / stepTime;
    const increment = numericTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const { about, personal } = portfolioData;
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-40px' });

  const stats = [
    { target: 2, suffix: '+', label: 'Years of Studies', sub: 'Commerce & Finance' },
    { target: 2, suffix: '', label: 'Internship Roles', sub: 'Finance & Operations' },
    { target: 3, suffix: '+', label: 'Enterprise Tools', sub: 'SAP FICO, Tally, Excel' },
  ];

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">{about.label}</span>
        </motion.div>

        {/* Section Heading with Lime Accent */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white leading-tight tracking-tight max-w-3xl mb-14"
        >
          Beyond numbers.<br />
          <span className="text-[#A8FF3E]">Understanding how businesses create value.</span>
        </motion.h2>

        {/* BENTO PROFILE ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 items-stretch">

          {/* Module 1: Executive Portrait & Identity Card (Full Image Fit) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, borderColor: 'rgba(168,255,62,0.35)' }}
            className="lg:col-span-5 card p-6 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300"
            style={{ background: 'linear-gradient(160deg, #131313 0%, #0D0D0D 100%)' }}
          >
            {/* Top Status & Location Strip */}
            <div className="w-full flex items-center justify-between mb-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A8FF3E]/10 border border-[#A8FF3E]/30 text-[10px] font-semibold text-[#A8FF3E] uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
                Available
              </span>
              <span className="text-[11px] font-mono text-[#777777] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#A8FF3E]" />
                Chennai, IN
              </span>
            </div>

            {/* FULL IMAGE CONTAINER (100% Uncropped Portrait) */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#161616] shadow-2xl relative group my-2">
              <img
                src={profileImg}
                alt="Yokesh D - Finance & Operations Professional"
                className="w-full h-auto object-contain block mx-auto filter brightness-[0.98] contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Specialization Badge on Image */}
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#A8FF3E]/30 text-[10px] font-mono text-[#A8FF3E] flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3 text-[#A8FF3E]" />
                <span>SAP · Tally</span>
              </div>
            </div>

            {/* Identity & Degree */}
            <div className="mt-4 mb-5 z-10">
              <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
                {personal.name}
              </h3>
              <p className="text-[#A8FF3E] text-xs font-semibold tracking-wider uppercase mb-1 font-mono">
                MBA CANDIDATE · FINANCE &amp; OPERATIONS
              </p>
              <p className="text-[#8A8A8A] text-xs font-light">
                S.A Engineering College (2025–2026)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="w-full pt-4 border-t border-white/[0.07] flex items-center gap-3 z-10">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Yokesh_D_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Resume PDF</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08, borderColor: 'rgba(168,255,62,0.4)', color: '#A8FF3E' }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-white/10 bg-[#171717] text-[#8A8A8A] hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Module 2: Editorial Thesis & Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4, borderColor: 'rgba(168,255,62,0.35)' }}
            className="lg:col-span-7 card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
            style={{ background: 'linear-gradient(160deg, #131313 0%, #0D0D0D 100%)' }}
          >
            {/* Top decorative line in Lime */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A8FF3E]/60 to-transparent" />

            <div>
              {/* Header pill */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="pill text-[10px]">
                  <span className="dot-lime animate-pulse" />
                  Candidate Spotlight
                </span>
              </div>

              {/* Bold Thesis Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-[26px] text-white font-medium leading-snug tracking-tight mb-6">
                "{about.leadQuote}"
              </blockquote>

              {/* Clean Structured Copy */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#9A9A9A] leading-relaxed font-light mb-8">
                <p>
                  I am a Bachelor of Commerce graduate currently pursuing an MBA with a specialization in Finance and Operations. With foundational knowledge of accounting, financial reporting, and business operations, I have developed practical exposure through internships and corporate industry visits.
                </p>
                <p>
                  I have hands-on experience working with <span className="text-white font-medium">Tally Prime</span>, <span className="text-white font-medium">SAP FICO</span>, and <span className="text-white font-medium">Microsoft Excel</span>, supporting day-to-day financial transactions, invoice verification, accounts payable, and operational reporting.
                </p>
              </div>

              {/* 4 Interactive Credential Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.07] mb-8 text-xs">
                <div className="flex items-center gap-2.5 text-[#9A9A9A]">
                  <GraduationCap className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>MBA Candidate (Finance &amp; Operations)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#9A9A9A]">
                  <Building className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>Visomax (Finance Intern)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#9A9A9A]">
                  <Sparkles className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>SAP FICO · Tally Prime · MS Excel</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#9A9A9A]">
                  <GraduationCap className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>B.Com Commerce Graduate</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA in Lime */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A8FF3E] text-[#0A0A0A] font-bold text-xs hover:bg-[#BEF566] transition-all cursor-pointer shadow-lg shadow-[#A8FF3E]/15"
              >
                <span>Explore Professional Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(168,255,62,0.35)',
                boxShadow: '0 12px 30px -10px rgba(168,255,62,0.12)',
              }}
              className="card p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center mb-4 transition-transform"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A8FF3E]" />
                </motion.div>
                <h4 className="text-white text-base font-semibold mb-2">{pillar.title}</h4>
                <p className="text-[#8A8A8A] text-xs leading-relaxed font-light">{pillar.description}</p>
              </div>
              <span className="text-[10px] font-mono text-[#555555] uppercase mt-5 block">Pillar 0{idx + 1}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats Row with Animated Numbers in Pure Signature LIME Color */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden border border-white/[0.07]"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0A0A0A] px-6 py-8 text-center group hover:bg-[#0F0F0F] transition-colors">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A8FF3E] tracking-tight drop-shadow-[0_0_15px_rgba(168,255,62,0.25)]">
                <AnimatedCounter target={s.target} suffix={s.suffix} inView={isStatsInView} />
              </p>
              <p className="mt-2 text-white text-xs sm:text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-[#555555] text-[11px] sm:text-xs">{s.sub}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
