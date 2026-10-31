import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownIcon, 
  DocumentArrowDownIcon, 
  EnvelopeIcon, 
  SparklesIcon, 
  CheckBadgeIcon 
} from '@heroicons/react/24/outline';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

// Monolithic pillars at the base
const pillars = [
  { height: '64%', delay: 0.0 },
  { height: '56%', delay: 0.1 },
  { height: '46%', delay: 0.2 },
  { height: '36%', delay: 0.3 },
  { height: '28%', delay: 0.4 },
  { height: '22%', delay: 0.5 }, // lowest center
  { height: '28%', delay: 0.4 },
  { height: '36%', delay: 0.3 },
  { height: '46%', delay: 0.2 },
  { height: '56%', delay: 0.1 },
  { height: '64%', delay: 0.0 },
];

const toolBrands = [
  {
    name: 'SAP FICO',
    tag: 'Enterprise ERP',
    render: (
      <div className="flex items-center gap-1.5 text-white/90">
        <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[11px] font-bold tracking-wider">SAP</span>
        <span className="font-semibold text-xs tracking-tight">FICO</span>
      </div>
    ),
  },
  {
    name: 'Tally Prime',
    tag: 'Accounting & AP/AR',
    render: (
      <div className="flex items-center gap-1.5 text-white/90">
        <span className="text-[#A8FF3E] font-bold text-xs">»</span>
        <span className="font-semibold text-xs tracking-tight">Tally</span>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Prime</span>
      </div>
    ),
  },
  {
    name: 'MS Excel',
    tag: 'Financial Modeling',
    render: (
      <div className="flex items-center gap-1.5 text-white/90">
        <span className="w-4 h-4 rounded bg-[#A8FF3E]/15 text-[#A8FF3E] border border-[#A8FF3E]/30 text-[10px] font-bold flex items-center justify-center font-mono">
          X
        </span>
        <span className="font-semibold text-xs tracking-tight">MS Excel</span>
      </div>
    ),
  },
  {
    name: 'Visomax',
    tag: 'Corporate Finance',
    render: (
      <div className="flex items-center gap-1 text-white/90 font-medium text-xs tracking-wider uppercase font-mono">
        <span className="text-zinc-600">_</span>
        <span>Visomax</span>
      </div>
    ),
  },
  {
    name: 'Universal Eng',
    tag: 'Operations & Workflow',
    render: (
      <div className="flex items-center gap-1 text-white/90 font-medium text-xs tracking-tight font-mono">
        <span className="text-[#A8FF3E]">#</span>
        <span className="uppercase text-[11px] font-bold tracking-wider">Universal</span>
      </div>
    ),
  },
];

const Hero = () => {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[94vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-[#000000] pt-32 pb-16 sm:pt-40 sm:pb-20">

      {/* Tactile Noise Filter (Apple Matte Paper Overlay) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none mix-blend-overlay z-20">
        <filter id="appleNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#appleNoise)" />
      </svg>

      {/* Apple Subtle Monolithic Pillars (Bottom Ambient Horizon) */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] sm:h-[68%] flex items-end justify-center gap-2 sm:gap-3 px-3 sm:px-6 pointer-events-none z-0">
        {pillars.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: p.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 max-w-[110px] origin-bottom rounded-t-sm relative overflow-hidden"
            style={{
              height: p.height,
              background: 'linear-gradient(to top, rgba(168,255,62,0.85) 0%, rgba(168,255,62,0.3) 25%, rgba(122,204,42,0.1) 55%, transparent 100%)',
            }}
          >
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scaleY: [1, 1.02, 1],
              }}
              transition={{
                duration: 5 + idx * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 origin-bottom"
              style={{
                background: 'linear-gradient(to top, rgba(168,255,62,0.35) 0%, transparent 60%)',
              }}
            />
          </motion.div>
        ))}

        {/* Ambient bottom connecting glow strip */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#A8FF3E]/25 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center my-auto">

        {/* Apple Dynamic Island Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full apple-glass mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#A8FF3E] animate-pulse" />
          <span className="text-xs font-semibold tracking-tight text-white">
            {personal.name}
          </span>
          <span className="text-zinc-600 text-xs">/</span>
          <span className="text-xs font-medium text-zinc-300">
            MBA Candidate · Finance &amp; Operations
          </span>
        </motion.div>

        {/* Hero Title (Pure High-Contrast Apple Typography in Onest) */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[72px] lg:text-[80px] font-bold text-white tracking-tightest leading-[1.05]"
        >
          {personal.heroHeadline.line1}
          <br />
          <span className="text-white">{personal.heroHeadline.line2}</span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
        >
          {personal.intro}
        </motion.p>

        {/* Apple Flagship Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            <span>Explore Experience</span>
            <ArrowDownIcon className="w-4 h-4" />
          </motion.button>

          {/* Secondary Apple Glass Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={personal.resumePath}
            download="Yokesh_D_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full apple-glass text-white font-medium text-sm hover:bg-white/[0.08] transition-all cursor-pointer shadow-md"
          >
            <DocumentArrowDownIcon className="w-4 h-4 text-[#A8FF3E]" />
            <span>Download CV</span>
          </motion.a>

          {/* Social Channels */}
          <div className="flex items-center gap-2 pl-2">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full apple-glass text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-3 rounded-full apple-glass text-zinc-400 hover:text-white transition-colors"
            >
              <EnvelopeIcon className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Apple Enterprise Specification Bar (Bottom Grid of Frosted Tiles) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center mt-12 sm:mt-16"
      >
        <p className="text-[11px] text-zinc-500 font-semibold tracking-wide uppercase mb-4">
          Verified Systems &amp; Practical Exposure
        </p>

        {/* 5 Spec Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {toolBrands.map((tool) => (
            <div
              key={tool.name}
              className="apple-glass rounded-xl px-3 py-2.5 text-center flex flex-col items-center justify-center gap-0.5 hover:border-white/20 transition-all cursor-default"
            >
              {tool.render}
              <span className="text-[10px] text-zinc-500 tracking-tight font-medium mt-0.5">
                {tool.tag}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
