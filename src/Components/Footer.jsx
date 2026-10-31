import React from 'react';
import { ArrowUpIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.png';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white/70 backdrop-blur-xl border-t border-neutral-200/80 py-12 mb-12 md:mb-0">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={profileImg}
              alt={personal.name}
              className="w-9 h-9 rounded-full object-cover border border-neutral-200"
            />
            <div>
              <p className="text-neutral-900 text-sm font-bold tracking-tight">{personal.name}</p>
              <p className="text-neutral-500 text-xs font-normal">MBA Candidate · Finance &amp; Operations</p>
            </div>
          </div>

          {/* Channels & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <EnvelopeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollTop}
              className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 font-normal">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p>Designed & Developed by <span className='font-bold text-black'>SADHASIVAM</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
