import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  BuildingOffice2Icon, 
  CheckCircleIcon, 
  DocumentArrowDownIcon, 
  MapPinIcon, 
  SparklesIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.jpeg';

// Apple Animated Number Component
const AnimatedCounter = ({ target, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const numericTarget = parseInt(target, 10);
    const duration = 1400;
    const stepTime = 30;
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
    { target: 3, suffix: '+', label: 'Enterprise Systems', sub: 'SAP FICO, Tally, Excel' },
  ];

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative bg-[#000000] py-28 md:py-36 hairline-t">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Apple Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
            {about.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tightest leading-tight max-w-3xl mb-14"
        >
          Beyond numbers.<br />
          <span className="text-zinc-400">Understanding how businesses create sustainable value.</span>
        </motion.h2>

        {/* ========================================================
            APPLE BENTO ARCHITECTURE (Executive Matrix)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 items-stretch">

          {/* Module 1: Executive Portrait Glass Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 apple-card p-6 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden"
          >
            {/* Top Status & Location Strip */}
            <div className="w-full flex items-center justify-between mb-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 text-[10px] font-semibold text-[#A8FF3E] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
                Available
              </span>
              <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                <MapPinIcon className="w-3.5 h-3.5 text-[#A8FF3E]" />
                Chennai, India
              </span>
            </div>

            {/* FULL PORTRAIT CONTAINER (Apple VisionOS Specular Frame) */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0C0D12] shadow-2xl relative group my-2">
              <img
                src={profileImg}
                alt="Yokesh D - Finance & Operations Professional"
                className="w-full h-auto object-contain block mx-auto filter brightness-[0.98] contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Specialization Glass Pill */}
              <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full apple-glass border border-white/15 text-[10px] font-semibold text-white flex items-center gap-1 shadow-lg">
                <SparklesIcon className="w-3.5 h-3.5 text-[#A8FF3E]" />
                <span>SAP · Tally</span>
              </div>
            </div>

            {/* Candidate Identity Details */}
            <div className="mt-4 mb-5 z-10">
              <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
                {personal.name}
              </h3>
              <p className="text-[#A8FF3E] text-xs font-semibold tracking-wide uppercase mb-1">
                MBA Candidate · Finance &amp; Operations
              </p>
              <p className="text-zinc-400 text-xs font-normal">
                S.A Engineering College (2025–2026)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="w-full pt-4 border-t border-white/[0.08] flex items-center gap-3 z-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Yokesh_D_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
              >
                <DocumentArrowDownIcon className="w-4 h-4 text-black" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl apple-glass text-zinc-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Module 2: Strategic Narrative & Credentials (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 apple-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Header Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="apple-pill">
                  Executive Profile
                </span>
              </div>

              {/* Apple Pull Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-[26px] text-white font-medium leading-snug tracking-tight mb-6">
                "{about.leadQuote}"
              </blockquote>

              {/* Narrative Statements */}
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-8">
                <p>
                  Bachelor of Commerce graduate currently pursuing an MBA with specialization in Finance and Operations. Built on rigorous foundational knowledge of accounting, financial reporting, and operational efficiency through hands-on corporate internships.
                </p>
                <p>
                  Practical exposure with <span className="text-white font-medium">SAP FICO</span>, <span className="text-white font-medium">Tally Prime</span>, and <span className="text-white font-medium">Microsoft Excel</span>, executing accounts payable workflows, invoice reconciliation, and management reporting with accuracy.
                </p>
              </div>

              {/* 4 Apple VisionOS Specification Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.08] mb-8 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <AcademicCapIcon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>MBA Candidate (Finance &amp; Ops)</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <BriefcaseIcon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>Visomax (Finance Intern)</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <SparklesIcon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>SAP FICO · Tally Prime · Excel</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <BuildingOffice2Icon className="w-4 h-4 text-[#A8FF3E] shrink-0" />
                  <span>Universal Eng (Operations Intern)</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
              >
                <span>View Full Career Experience</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="apple-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl apple-glass flex items-center justify-center mb-4 text-[#A8FF3E]">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h4 className="text-white text-base font-semibold tracking-tight mb-2">
                  {pillar.title}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase mt-5 block tracking-wider">
                Module 0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Apple Metrics Horizon (Animated Numbers in Frosted Glass) */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-px bg-white/[0.08] rounded-3xl overflow-hidden border border-white/[0.08] apple-glass"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0A0B0E]/80 backdrop-blur-md px-6 py-8 text-center group hover:bg-[#111218]/80 transition-colors">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tightest">
                <AnimatedCounter target={s.target} suffix={s.suffix} inView={isStatsInView} />
              </p>
              <p className="mt-2 text-white text-xs sm:text-sm font-semibold tracking-tight">
                {s.label}
              </p>
              <p className="mt-1 text-zinc-500 text-[11px] sm:text-xs font-light">
                {s.sub}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
