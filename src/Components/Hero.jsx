import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

// 11 Monolithic Equalizer Pillars (Bars)
const pillars = [
  { height: '64%', delay: 0.0 },
  { height: '56%', delay: 0.1 },
  { height: '46%', delay: 0.2 },
  { height: '36%', delay: 0.3 },
  { height: '28%', delay: 0.4 },
  { height: '22%', delay: 0.5 },
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
      <div className="flex items-center gap-1.5 text-neutral-900">
        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[11px] font-bold tracking-wider">SAP</span>
        <span className="font-bold text-xs tracking-tight">FICO</span>
      </div>
    ),
  },
  {
    name: 'Tally Prime',
    tag: 'Accounting & AP/AR',
    render: (
      <div className="flex items-center gap-1.5 text-neutral-900">
        <span className="text-amber-600 font-bold text-xs">»</span>
        <span className="font-bold text-xs tracking-tight">Tally</span>
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Prime</span>
      </div>
    ),
  },
  {
    name: 'MS Excel',
    tag: 'Financial Modeling',
    render: (
      <div className="flex items-center gap-1.5 text-neutral-900">
        <span className="w-4 h-4 rounded bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-bold flex items-center justify-center font-mono">
          X
        </span>
        <span className="font-bold text-xs tracking-tight">MS Excel</span>
      </div>
    ),
  },
  {
    name: 'Visomax',
    tag: 'Corporate Finance',
    render: (
      <div className="flex items-center gap-1 text-neutral-900 font-bold text-xs tracking-wider uppercase font-mono">
        <span className="text-amber-600">_</span>
        <span>Visomax</span>
      </div>
    ),
  },
  {
    name: 'Universal Eng',
    tag: 'Operations & Workflow',
    render: (
      <div className="flex items-center gap-1 text-neutral-900 font-bold text-xs tracking-tight font-mono">
        <span className="text-amber-600">#</span>
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
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-transparent pt-24 pb-8 sm:pt-36 sm:pb-16">

      {/* ========================================================
          WARM SUNLIT AMBIENT GRADIENT BACKGROUND (Current Background)
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left Golden Amber Radiant Glow */}
        <div
          className="absolute -top-12 -left-20 w-[550px] sm:w-[700px] h-[650px] sm:h-[800px] rounded-full blur-[110px] opacity-75"
          style={{
            background: 'radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, rgba(254, 243, 199, 0.45) 45%, transparent 75%)',
          }}
        />

        {/* Right Warm Golden Sunlight Glow */}
        <div
          className="absolute -top-12 -right-20 w-[550px] sm:w-[700px] h-[650px] sm:h-[800px] rounded-full blur-[110px] opacity-75"
          style={{
            background: 'radial-gradient(circle, rgba(254, 240, 138, 0.75) 0%, rgba(254, 243, 199, 0.5) 45%, transparent 75%)',
          }}
        />

        {/* Center Warm Sunburst Ambient Vignette */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1050px] h-[550px] sm:h-[700px] rounded-full blur-[130px] opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 251, 235, 0.95) 0%, rgba(254, 243, 199, 0.4) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* ========================================================
          EQUALIZER BARS (Matching Warm Golden-Amber Background)
         ======================================================== */}
      <div className="absolute inset-x-0 bottom-0 h-[52%] sm:h-[62%] flex items-end justify-center gap-2 sm:gap-3 px-3 sm:px-6 pointer-events-none z-0">
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
            className="flex-1 max-w-[110px] origin-bottom rounded-t-lg relative overflow-hidden"
            style={{
              height: p.height,
              background: 'linear-gradient(to top, rgba(245, 158, 11, 0.32) 0%, rgba(251, 191, 36, 0.20) 30%, rgba(254, 243, 199, 0.35) 65%, transparent 100%)',
            }}
          >
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
                scaleY: [1, 1.02, 1],
              }}
              transition={{
                duration: 5 + idx * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 origin-bottom"
              style={{
                background: 'linear-gradient(to top, rgba(245, 158, 11, 0.18) 0%, transparent 60%)',
              }}
            />
          </motion.div>
        ))}

        {/* Ambient bottom connecting glow strip in warm amber */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-200/50 via-yellow-100/30 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* ========================================================
          MAIN HERO STAGE (Previous Layout)
         ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center my-auto">


        {/* Hero Title (Natural, Warm & Authoritative) */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[68px] lg:text-[76px]  text-neutral-950 tracking-tight leading-[1.08]"
        >
          <span className="font-serif italic font-normal text-neutral-800 ">Hey there,</span> <span className='font-bold text-neutral-900'>I'm Yokesh.</span> 
          <br />
          <span className="text-neutral-900 text-2xl sm:text-4xl md:text-[62px] lg:text-[68px] ">Bridging Finance &amp; Operations.</span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
        >
          {personal.intro}
        </motion.p>

        {/* Action Buttons: 1 Single Compact Row on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-9 flex items-center justify-center gap-1.5 sm:gap-3 max-w-lg mx-auto flex-nowrap"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-neutral-950 text-white font-bold text-xs sm:text-sm hover:bg-neutral-850 transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Explore</span>
            <ArrowDownIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </motion.button>

          {/* Secondary Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={personal.resumePath}
            download="Yokesh_D_Resume.pdf"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 font-semibold text-xs sm:text-sm hover:bg-neutral-50 transition-all cursor-pointer shadow-sm border border-neutral-300 whitespace-nowrap"
          >
            <DocumentArrowDownIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
            <span>Download</span>
            <span className="hidden sm:inline">&nbsp;CV</span>
          </motion.a>

          {/* Social Channels in the Same Single Row */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 sm:p-3 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-300 shadow-sm transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2 sm:p-3 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-300 shadow-sm transition-colors"
            >
              <EnvelopeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* ========================================================
          VERIFIED SYSTEMS & PRACTICAL EXPOSURE BAR
          Infinite Horizontal Marquee Loop
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 w-full max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6 text-center mt-6 sm:mt-10 overflow-hidden"
      >
        <div className="w-full flex items-center justify-center mb-3">
          <p className="text-[10px] sm:text-[11px] text-neutral-500 font-bold tracking-wider uppercase font-mono text-center">
            Verified Systems &amp; Practical Exposure
          </p>
        </div>

        {/* Infinite Horizontal Marquee Container (No white edge overlays) */}
        <div className="w-full overflow-hidden py-1">
          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-2.5 sm:gap-3 w-max shrink-0"
            >
              {[...toolBrands, ...toolBrands, ...toolBrands, ...toolBrands].map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 text-center flex flex-col items-center justify-center gap-0.5 shrink-0 min-w-[130px] sm:min-w-[145px] rounded-full bg-white/90 backdrop-blur-md border border-amber-500/25 shadow-none hover:border-amber-500/50 transition-colors cursor-default"
                >
                  {tool.render}
                  <span className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 whitespace-nowrap">
                    {tool.tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
