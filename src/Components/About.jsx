import React, { useRef } from 'react';
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
import profileImg from '../assets/images/profile.png';

// Animated Number Counter Component
const AnimatedCounter = ({ target, suffix = '', inView }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
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
    <section id="about" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Apple Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {about.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight max-w-3xl mb-6 sm:mb-10"
        >
          Beyond numbers.<br />
          <span className="text-neutral-500 font-medium">Understanding how businesses create sustainable value.</span>
        </motion.h2>

        {/* ========================================================
            APPLE BENTO ARCHITECTURE (Executive Matrix - Light Mode)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 mb-6 sm:mb-10 items-stretch">

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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Available
              </span>
              <span className="text-[11px] font-semibold text-neutral-500 flex items-center gap-1">
                <MapPinIcon className="w-3.5 h-3.5 text-amber-600" />
                Chennai, India
              </span>
            </div>

            {/* FULL PORTRAIT CONTAINER (Uncropped Full Specular Frame) */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100/60 shadow-lg relative group my-2">
              <img
                src={profileImg}
                alt="Yokesh D - Finance & Operations Professional"
                className="w-full h-auto object-contain block mx-auto filter brightness-[1.01] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
              />


            </div>

            {/* Candidate Identity Details */}
            <div className="mt-4 mb-5 z-10">
              <h3 className="text-neutral-950 font-bold text-2xl tracking-tight mb-1">
                {personal.name}
              </h3>
              <p className="text-amber-700 text-xs font-bold tracking-wide uppercase mb-1">
                MBA Candidate · Finance &amp; Operations
              </p>
              <p className="text-neutral-500 text-xs font-normal">
                S.A Engineering College (2025–2026)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="w-full pt-4 border-t border-neutral-200 flex items-center gap-3 z-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Yokesh_D_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-850 transition-all cursor-pointer shadow-sm"
              >
                <DocumentArrowDownIcon className="w-4 h-4 text-white" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 shadow-sm transition-colors"
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
              <blockquote className="text-[13px] sm:text-xl xl:text-2xl text-neutral-950 font-semibold leading-relaxed mb-6">
                "I'm Yokesh D, an MBA candidate specializing in Finance and Operations, with a background in Commerce and practical exposure to financial transactions, accounting systems, business operations and financial research."
              </blockquote>

              {/* Narrative Statements */}
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed  mb-8">
                <p>
                  With foundational knowledge of accounting, financial reporting and business operations, I have developed practical exposure through internships and corporate projects.
                </p>
                <p>
                  Practical exposure with <span className="text-neutral-950 font-bold">SAP FICO</span>, <span className="text-neutral-950 font-bold">Tally Prime</span>, and <span className="text-neutral-950 font-bold">Microsoft Excel</span>, executing accounts payable workflows, invoice reconciliation, and management reporting with accuracy.
                </p>
              </div>

              {/* 4 Specification Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-200 mb-8 text-xs">
                <div className="flex items-center gap-2.5 text-neutral-700 font-medium">
                  <AcademicCapIcon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>MBA Candidate (Finance &amp; Ops)</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 font-medium">
                  <BriefcaseIcon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Visomax (Finance Intern)</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 font-medium">
                  <SparklesIcon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>SAP FICO · Tally Prime · Excel</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 font-medium">
                  <BuildingOffice2Icon className="w-4 h-4 text-amber-600 shrink-0" />
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
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-850 transition-all cursor-pointer shadow-sm"
              >
                <span>View Full Career Experience</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-10">
          {about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="apple-card p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl premium-icon-box flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-neutral-950 text-base font-bold tracking-tight mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase mt-4 block tracking-wider font-semibold">
                Module 0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Apple Metrics Horizon (Animated Numbers) */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-px bg-amber-200/50 rounded-3xl overflow-hidden border border-amber-300/40 shadow-sm"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md px-3 py-5 sm:px-6 sm:py-8 text-center group hover:bg-white transition-colors">
              <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-amber-700 tracking-tight">
                <AnimatedCounter target={s.target} suffix={s.suffix} inView={isStatsInView} />
              </p>
              <p className="mt-1 sm:mt-2 text-neutral-950 text-xs sm:text-sm font-bold tracking-tight">
                {s.label}
              </p>
              <p className="mt-0.5 sm:mt-1 text-neutral-500 text-[10px] sm:text-xs font-normal">
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
