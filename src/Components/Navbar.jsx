import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.jpeg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['about', 'education', 'experience', 'skills', 'certifications', 'interests', 'contact'];
      const pos = window.scrollY + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          return;
        }
      }
      if (window.scrollY < 300) setActive('hero');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================
          1. TOP NAVBAR (Desktop: full navigation; Mobile: clean header)
         ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.07] py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo with Real Profile Avatar */}
          <a href="#hero" onClick={(e) => go(e, '#hero')} className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={profileImg}
                alt="Yokesh D"
                className="w-9 h-9 rounded-full object-cover border border-[#A8FF3E]/40 group-hover:border-[#A8FF3E] transition-all duration-300 shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#A8FF3E] border-2 border-[#0A0A0A]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-white group-hover:text-[#A8FF3E] transition-colors leading-tight">
                Yokesh D
              </span>
              <span className="text-[10px] text-[#8A8A8A] font-mono leading-tight">
                Finance &amp; Operations
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#141414] border border-white/[0.07] rounded-full px-2 py-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive ? 'bg-[#A8FF3E] text-[#0A0A0A] font-semibold' : 'text-[#8A8A8A] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Available Badge & Resume Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141414] border border-white/[0.07]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-widest text-[#A8FF3E] uppercase font-mono">
                Available
              </span>
            </div>

            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A8FF3E] text-[#0A0A0A] text-xs font-bold tracking-wide hover:bg-[#BEF566] transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          2. FLOATING BOTTOM NAVBAR (Mobile view only)
         ======================================================== */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-4 inset-x-4 max-w-sm mx-auto z-50 bg-[#161616]/95 backdrop-blur-2xl rounded-full px-3 py-2 shadow-[0_12px_45px_rgba(0,0,0,0.7)] border border-white/10 flex items-center justify-between"
      >
        {/* Tab 1: Home */}
        <button
          onClick={(e) => go(e, '#hero')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
            activeSection === 'hero' ? 'text-[#A8FF3E] font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Home</span>
        </button>

        {/* Tab 2: About */}
        <button
          onClick={(e) => go(e, '#about')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
            activeSection === 'about' ? 'text-[#A8FF3E] font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">About</span>
        </button>

        {/* Center Raised Action Button: Resume in Signature LIME */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onOpenResume}
            className="w-12 h-12 -mt-7 rounded-full bg-[#A8FF3E] text-[#0A0A0A] flex items-center justify-center shadow-lg shadow-[#A8FF3E]/40 border-2 border-[#0A0A0A] cursor-pointer"
            title="View & Download Resume"
          >
            <FileText className="w-5 h-5" />
          </motion.button>
          <span className="text-[10px] font-semibold text-[#A8FF3E] mt-1">Resume</span>
        </div>

        {/* Tab 4: Work / Experience */}
        <button
          onClick={(e) => go(e, '#experience')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
            activeSection === 'experience' || activeSection === 'skills'
              ? 'text-[#A8FF3E] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Work</span>
        </button>

        {/* Tab 5: Contact */}
        <button
          onClick={(e) => go(e, '#contact')}
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
            activeSection === 'contact' ? 'text-[#A8FF3E] font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Contact</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
