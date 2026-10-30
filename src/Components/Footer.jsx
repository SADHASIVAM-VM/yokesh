import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.07] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-[#A8FF3E]">Y</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{personal.name}</p>
              <p className="text-[#555555] text-xs">MBA Candidate · Finance & Operations</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/[0.07] text-[#555555] hover:text-[#A8FF3E] hover:border-[rgba(168,255,62,0.3)] transition-colors">
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${personal.email}`}
              className="p-2 rounded-lg border border-white/[0.07] text-[#555555] hover:text-[#A8FF3E] hover:border-[rgba(168,255,62,0.3)] transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <button onClick={scrollTop}
              className="p-2 rounded-lg border border-white/[0.07] text-[#555555] hover:text-white hover:border-white/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.07] text-center">
          <p className="text-[#555555] text-xs">
            © {new Date().getFullYear()} {personal.name} · Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
