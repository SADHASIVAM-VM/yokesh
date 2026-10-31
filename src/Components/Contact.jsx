import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClipboardDocumentIcon, 
  CheckIcon, 
  DocumentArrowDownIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import { LinkedInIcon } from './Icons';

const Contact = () => {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactItems = [
    { key: 'email', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: EnvelopeIcon },
    { key: 'phone', label: 'Phone', value: contact.phone, href: `tel:${contact.phoneClean}`, Icon: PhoneIcon },
    { key: 'loc', label: 'Location', value: contact.location, href: null, Icon: MapPinIcon },
  ];

  return (
    <section id="contact" className="relative bg-transparent py-12 sm:py-20 md:py-28 hairline-t">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="apple-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {contact.label}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4"
        >
          Let's connect and{' '}
          <span className="text-neutral-500 font-medium">build meaningful value.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 text-sm sm:text-base mb-6 sm:mb-10 max-w-xl font-normal leading-relaxed"
        >
          {contact.description}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* Left: Interactive Communication Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 flex flex-col justify-between"
          >
            {contactItems.map(({ key, label, value, href, Icon }) => (
              <div
                key={key}
                className="apple-card p-4 sm:p-6 flex items-center gap-4 transition-all"
              >
                <div className="w-11 h-11 rounded-2xl premium-icon-box flex items-center justify-center shrink-0 text-white">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5 font-mono">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-neutral-900 text-sm sm:text-[15px] font-bold hover:text-amber-700 transition-colors truncate block tracking-tight"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-neutral-900 text-sm sm:text-[15px] font-bold tracking-tight">{value}</p>
                  )}
                </div>
                {key !== 'loc' && (
                  <button
                    onClick={() => copyToClipboard(value, key)}
                    className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 hover:text-neutral-950 transition-colors shrink-0 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied === key ? (
                      <CheckIcon className="w-4 h-4 text-amber-600" />
                    ) : (
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}

            {/* LinkedIn Card */}
            <a
              href={contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card p-4 sm:p-6 flex items-center gap-4 group transition-all"
            >
              <div className="w-11 h-11 rounded-2xl premium-icon-box flex items-center justify-center shrink-0 text-white">
                <LinkedInIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5 font-mono">
                  LinkedIn Network
                </p>
                <p className="text-neutral-900 text-sm sm:text-[15px] font-bold group-hover:text-amber-700 transition-colors tracking-tight flex items-center gap-1.5">
                  <span>Connect with Yokesh D</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-700 transition-colors" />
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right: Apple Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="apple-card p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl premium-icon-box flex items-center justify-center mb-6 text-white shrink-0">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-neutral-950 font-extrabold text-2xl sm:text-3xl tracking-tight mb-3 leading-tight">
                Elevate your<br />
                <span className="text-neutral-500 font-medium">financial operations.</span>
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                Seeking a dedicated finance or operations candidate with commerce foundation, analytical inquiry, and practical SAP FICO / Tally proficiency? Let's discuss immediate contributions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.directInquirySubject)}`}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-neutral-950 text-white font-bold text-xs sm:text-sm hover:bg-neutral-850 transition-all cursor-pointer shadow-md"
              >
                <EnvelopeIcon className="w-4 h-4 text-white" />
                <span>Send Direct Email</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personal.resumePath}
                download="Yokesh_D_Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white border border-neutral-300 text-neutral-900 text-xs sm:text-sm font-bold hover:bg-neutral-50 transition-all cursor-pointer shadow-sm"
              >
                <DocumentArrowDownIcon className="w-4 h-4 text-amber-600" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
