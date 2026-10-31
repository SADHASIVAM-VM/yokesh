import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  DocumentArrowDownIcon, 
  DocumentTextIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/images/profile.png';

const ResumeModal = ({ isOpen, onClose }) => {
  const { personal } = portfolioData;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            className="apple-card w-full max-w-2xl max-h-[88vh] overflow-y-auto border border-neutral-200 shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <p className="text-neutral-900 font-bold text-sm tracking-tight">{personal.name}</p>
                  <p className="text-neutral-500 text-xs font-normal">MBA Candidate · Finance &amp; Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personal.resumePath}
                  download="Yokesh_D_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-850 transition-colors shadow-sm"
                >
                  <DocumentArrowDownIcon className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="p-8 space-y-8 text-sm">
              {/* Header Info */}
              <div className="text-center border-b border-neutral-200 pb-6">
                <h1 className="text-neutral-950 text-2xl font-extrabold tracking-tight">{personal.name}</h1>
                <p className="text-amber-700 text-xs font-bold uppercase tracking-wider mt-1">
                  MBA Candidate · Finance &amp; Operations
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-neutral-500 text-xs">
                  <span>{personal.email}</span>
                  <span>·</span>
                  <span>{personal.phone}</span>
                  <span>·</span>
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Resume Sections */}
              {[
                {
                  title: 'Education',
                  content: [
                    'Master of Business Administration (MBA) – Finance & Operations | S.A Engineering College | 2025–2026',
                    'Bachelor of Commerce (B.Com) – Commerce & Accounting | D.R.B.C.C.C Hindu College | 2021–2024',
                  ],
                },
                {
                  title: 'Professional Experience',
                  content: [
                    'Finance Intern – VISOMAX PVT LTD: Handled day-to-day transaction records, utility invoice reconciliation, and basic accounts using SAP FICO and Tally Prime.',
                    'Operations Intern – UNIVERSAL ENGINEERING PVT LTD: Supported daily operations, workflow tracking, and production coordination using MS Excel.',
                  ],
                },
                {
                  title: 'Core Technical & Financial Skills',
                  content: [
                    'Financial Analysis: Ratio Analysis, Financial Statements, Profitability Analysis, Company & Industry Research',
                    'Software & ERP: SAP FICO (Procure-to-Pay, End-to-End process), Tally Prime, Tally ERP, Advanced MS Excel',
                    'Operational Competencies: Accounts Payable, Invoice Processing, Data Tracking, Workflow Efficiency',
                  ],
                },
                {
                  title: 'Accredited Certifications',
                  content: [
                    'Tally Prime – G-TEC Computer Education (Certified 10/09/2023)',
                    'SAP (FICO) – Company KAP (Certified 15/12/2023)',
                  ],
                },
              ].map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-neutral-900 font-bold text-xs uppercase tracking-wider font-mono">
                      {section.title}
                    </h3>
                    <div className="flex-1 h-px bg-neutral-200" />
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span className="text-neutral-700 leading-relaxed font-normal text-xs sm:text-sm">
                          {item}
                        </span>
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
