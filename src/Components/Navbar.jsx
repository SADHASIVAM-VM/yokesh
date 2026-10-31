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
import profileImg from '../assets/images/profile.png';

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
          1. DESKTOP & TABLET FLOATING GLASS MENU (Apple Light Mode)
         ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 md:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">

          {/* Left Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 px-2.5 sm:px-3 py-1.5 rounded-full apple-glass group hover:border-black/20 transition-all duration-300 shrink-0"
          >
            <div className="relative shrink-0">
              <img
                src={profileImg}
                alt="Yokesh D"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-neutral-200 group-hover:border-amber-500 transition-colors shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white" />
            </div>
            <div className="flex flex-col pr-1 sm:pr-2">
              <span className="font-semibold text-xs tracking-tight text-neutral-900 group-hover:text-amber-700 transition-colors leading-tight whitespace-nowrap">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-neutral-500 font-medium tracking-wide leading-tight whitespace-nowrap">
                Finance &amp; Ops
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Apple Glass Pill) - Responsive for Tablet & Desktop */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 px-2.5 lg:px-3.5 py-1.5 rounded-full apple-glass shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={`px-3 lg:px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill & Resume Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Show 'Open to Opportunities' only on desktop (lg+) to avoid crowding tablet */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-semibold text-amber-800 shadow-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
              <span className="tracking-wide">Open to Opportunities</span>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <DocumentTextIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Resume</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          2. MOBILE FLOATING DOCK (Apple iOS / visionOS Light Glass Dock)
         ======================================================== */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="md:hidden fixed bottom-5 inset-x-4 max-w-sm mx-auto z-50 bg-white/90 backdrop-blur-2xl rounded-full px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-200 flex items-center justify-between"
      >
        {/* Tab 1: Home */}
        <button
          onClick={(e) => go(e, '#hero')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'hero' ? 'text-amber-700 font-bold scale-105' : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Home</span>
        </button>

        {/* Tab 2: About */}
        <button
          onClick={(e) => go(e, '#about')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'about' ? 'text-amber-700 font-bold scale-105' : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <UserIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">About</span>
        </button>

        {/* Center Prominent Action Button: Resume */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onOpenResume}
            className="w-12 h-12 -mt-7 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:bg-neutral-850"
            title="View & Download Resume"
          >
            <DocumentTextIcon className="w-5 h-5" />
          </motion.button>
          <span className="text-[10px] font-bold text-neutral-900 mt-1 tracking-tight">Resume</span>
        </div>

        {/* Tab 4: Work */}
        <button
          onClick={(e) => go(e, '#experience')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'experience' || activeSection === 'skills'
              ? 'text-amber-700 font-bold scale-105'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <BriefcaseIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Work</span>
        </button>

        {/* Tab 5: Contact */}
        <button
          onClick={(e) => go(e, '#contact')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
            activeSection === 'contact' ? 'text-amber-700 font-bold scale-105' : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Contact</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;