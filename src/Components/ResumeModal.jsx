import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.jpeg';

const ResumeModal = ({ isOpen, onClose }) => {
  const { personal } = portfolioData;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={onClose}>
          <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.95, opacity:0 }}
            transition={{ type:'spring', stiffness:400, damping:30 }}
            className="card w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#A8FF3E]/40"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{personal.name}</p>
                  <p className="text-[#8A8A8A] text-xs">MBA Candidate · Finance &amp; Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href={personal.resumePath} download="Yokesh_D_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A8FF3E] text-[#0A0A0A] text-xs font-bold hover:bg-[#BEF566] transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button onClick={onClose}
                  className="p-2 rounded-xl border border-white/[0.07] text-[#555555] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume content */}
            <div className="p-8 space-y-8 text-sm">
              {/* Header */}
              <div className="text-center border-b border-white/[0.07] pb-6">
                <h1 className="text-white text-2xl font-bold">{personal.name}</h1>
                <p className="text-[#A8FF3E] text-sm mt-1">MBA Candidate · Finance &amp; Operations</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-[#8A8A8A] text-xs">
                  <span>{personal.email}</span>
                  <span>{personal.phone}</span>
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Sections */}
              {[
                { title: 'Education', content: [
                  'MBA – Finance & Operations | S.A Engineering College | 2025–2026',
                  'B.Com – Commerce | D.R.B.C.C.C Hindu College | 2021–2024',
                ]},
                { title: 'Professional Experience', content: [
                  'Finance Intern – VISOMAX PVT LTD: Recorded daily financial transactions using SAP FICO and Tally Prime; processed invoices; supported month-end closing.',
                  'Operations Intern – UNIVERSAL ENGINEERING PVT LTD: Assisted in daily operations and production workflow tracking using Excel.',
                ]},
                { title: 'Skills', content: [
                  'Finance: Financial Statement Analysis, Ratio Analysis, Company Research, Investment Analysis',
                  'Software: SAP FICO, Tally Prime, Tally ERP, MS Excel',
                  'Professional: Analytical Thinking, Problem Solving, Communication, Teamwork',
                ]},
                { title: 'Certifications', content: [
                  'Tally Prime – G-TEC Computer Education (10/09/2023)',
                  'SAP FICO – Company KAP (15/12/2023)',
                ]},
              ].map(section => (
                <div key={section.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider">{section.title}</h3>
                    <div className="flex-1 h-px bg-white/[0.07]" />
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A8FF3E] shrink-0" />
                        <span className="text-[#8A8A8A] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
