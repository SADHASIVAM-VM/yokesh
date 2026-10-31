import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  EnvelopeIcon, 
  DocumentTextIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.jpeg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = ['about', 'education', 'experience', 'skills', 'certifications', 'interests', 'contact'];
      const pos = window.scrollY + 240;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          return;
        }
      }
      if (window.scrollY < 300) setActiveSection('hero');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ========================================================
          1. DESKTOP FLOATING GLASS MENU (macOS / visionOS aesthetic)
         ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">

          {/* Left Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            className="flex items-center gap-3 px-3 py-1.5 rounded-full apple-glass group hover:border-white/20 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Yokesh D"
                className="w-8 h-8 rounded-full object-cover border border-white/20 group-hover:border-[#A8FF3E]/70 transition-colors shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#A8FF3E] border-2 border-black" />
            </div>
            <div className="flex flex-col pr-2">
              <span className="font-semibold text-xs tracking-tight text-white group-hover:text-[#A8FF3E] transition-colors leading-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wide leading-tight">
                Finance &amp; Ops
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Apple Glass Pill) */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full apple-glass">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill & Resume Button */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full apple-glass text-[11px] font-medium text-[#A8FF3E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
              <span className="tracking-wide">Open to Opportunities</span>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <DocumentTextIcon className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          2. MOBILE FLOATING DOCK (Apple iOS / visionOS Glass Dock)
         ======================================================== */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="md:hidden fixed bottom-5 inset-x-4 max-w-sm mx-auto z-50 apple-glass rounded-full px-3 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.8)] border border-white/15 flex items-center justify-between"
      >
        {/* Tab 1: Home */}
        <button
          onClick={(e) => go(e, '#hero')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'hero' ? 'text-[#A8FF3E] font-semibold scale-105' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
        </button>

        {/* Tab 2: About */}
        <button
          onClick={(e) => go(e, '#about')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'about' ? 'text-[#A8FF3E] font-semibold scale-105' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <UserIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight">About</span>
        </button>

        {/* Center Prominent Action Button: Resume */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onOpenResume}
            className="w-12 h-12 -mt-7 rounded-full bg-[#A8FF3E] text-black flex items-center justify-center shadow-lg shadow-[#A8FF3E]/35 border-2 border-black cursor-pointer"
            title="View & Download Resume"
          >
            <DocumentTextIcon className="w-5 h-5" />
          </motion.button>
          <span className="text-[10px] font-semibold text-[#A8FF3E] mt-1 tracking-tight">Resume</span>
        </div>

        {/* Tab 4: Work */}
        <button
          onClick={(e) => go(e, '#experience')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'experience' || activeSection === 'skills'
              ? 'text-[#A8FF3E] font-semibold scale-105'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <BriefcaseIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight">Work</span>
        </button>

        {/* Tab 5: Contact */}
        <button
          onClick={(e) => go(e, '#contact')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'contact' ? 'text-[#A8FF3E] font-semibold scale-105' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight">Contact</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
