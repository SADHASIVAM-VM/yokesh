import React from 'react';
import { motion } from 'framer-motion';
import { CornerDownRight, ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Heights for the 11 vertical equalizer pillars (recessed amphitheater curve matching Topflow reference)
const pillars = [
  { height: '66%', delay: 0.0 },
  { height: '58%', delay: 0.1 },
  { height: '48%', delay: 0.2 },
  { height: '38%', delay: 0.3 },
  { height: '30%', delay: 0.4 },
  { height: '24%', delay: 0.5 }, // center lowest
  { height: '30%', delay: 0.4 },
  { height: '38%', delay: 0.3 },
  { height: '48%', delay: 0.2 },
  { height: '58%', delay: 0.1 },
  { height: '66%', delay: 0.0 },
];

// Enterprise logos in clean monochrome style
const toolBrands = [
  {
    name: 'SAP FICO',
    render: (
      <span className="font-bold tracking-tight text-white/90 text-sm sm:text-base flex items-center gap-1">
        <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-white">SAP</span>
        <span className="text-white/70 font-light">FICO</span>
      </span>
    ),
  },
  {
    name: 'Tally Prime',
    render: (
      <span className="font-semibold tracking-wide text-white/90 text-sm sm:text-base flex items-center gap-1">
        <span className="text-[#A8FF3E] font-bold">»</span>
        <span>Tally</span>
        <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Prime</span>
      </span>
    ),
  },
  {
    name: 'MS Excel',
    render: (
      <span className="font-semibold tracking-tight text-white/90 text-sm sm:text-base flex items-center gap-1.5">
        <span className="w-4 h-4 rounded bg-[#A8FF3E]/20 text-[#A8FF3E] border border-[#A8FF3E]/40 text-[10px] font-bold flex items-center justify-center font-mono">
          X
        </span>
        <span>MS Excel</span>
      </span>
    ),
  },
  {
    name: 'Visomax',
    render: (
      <span className="font-bold tracking-wider text-white/90 text-sm sm:text-base uppercase flex items-center gap-1">
        <span className="text-white/40">_</span>
        <span>Visomax</span>
      </span>
    ),
  },
  {
    name: 'Universal Eng',
    render: (
      <span className="font-medium tracking-tight text-white/90 text-sm sm:text-base flex items-center gap-1 font-mono">
        <span className="text-[#A8FF3E]">#</span>
        <span className="uppercase text-xs font-bold tracking-wider">Universal</span>
      </span>
    ),
  },
];

const Hero = () => {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">

      {/* SVG Noise / Grain Filter for the Velvety Editorial Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none mix-blend-overlay z-20">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" />
      </svg>

      {/* 11 Vertical Equalizer Gradient Pillars (Signature Topflow Visual) */}
      <div className="absolute inset-x-0 bottom-0 h-[65%] sm:h-[72%] flex items-end justify-center gap-2 sm:gap-3 px-3 sm:px-6 pointer-events-none z-0">
        {pillars.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: p.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 max-w-[120px] origin-bottom rounded-t-sm sm:rounded-t-md relative overflow-hidden"
            style={{
              height: p.height,
              background: 'linear-gradient(to top, #10E599 0%, #10B981 22%, #059669 42%, #047857 60%, rgba(4, 120, 87, 0.18) 82%, transparent 100%)',
            }}
          >
            {/* Subtle undulating breathing animation */}
            <motion.div
              animate={{
                opacity: [0.75, 1, 0.75],
                scaleY: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5 + idx * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 origin-bottom"
              style={{
                background: 'linear-gradient(to top, rgba(16, 229, 153, 0.4) 0%, transparent 60%)',
              }}
            />
          </motion.div>
        ))}

        {/* Ambient bottom connecting glow strip */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#10E599]/40 via-[#10B981]/15 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Center Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center my-auto">

        {/* Main Headline (Standard Pure White Font Color) */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl  md:text-[68px]  font-bold text-white tracking-tight leading-[1.08]"
        >
          {personal.heroHeadline.line1}
          <br />
          <span className="text-white">{personal.heroHeadline.line2}</span>
        </motion.h1>

        {/* Subtitle (Standard Muted Neutral Color) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[#8A8A8A] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl mx-auto font-normal font-sans"
        >
          {personal.intro}
        </motion.p>

        {/* CTAs: Primary Capsule Button + Secondary Arrow Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-5 sm:gap-6"
        >
          {/* Primary Pill Button with curved arrow in black circle */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('about')}
            className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-[#F2F2F2] transition-all shadow-xl hover:shadow-white/20 cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <CornerDownRight className="w-3.5 h-3.5" />
            </span>
            <span>Explore Journey</span>
          </motion.button>

          {/* Secondary Arrow Down Link */}
          <motion.button
            whileHover={{ x: 2, color: '#FFFFFF' }}
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-1.5 text-[#8A8A8A] hover:text-white text-sm font-medium transition-colors cursor-pointer"
          >
            <span>Learn more</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.button>

          {/* Resume Quick Action */}
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={personal.resumePath}
            download="Yokesh_D_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-black/40 text-white text-xs font-medium hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#A8FF3E]" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

      </div>

      {/* Bottom Logos / Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center mt-12 sm:mt-16"
      >
        <p className="text-[11px] sm:text-xs text-[#7A7A7A] font-medium tracking-wide mb-5">
          Verified Practical Exposure &amp; Core Systems
        </p>

        {/* 5 Enterprise Tool Logos in horizontal strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {toolBrands.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-default"
            >
              {tool.render}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
