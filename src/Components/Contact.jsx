import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, FileText, Copy, Check, ArrowRight } from 'lucide-react';
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
    { key: 'email', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
    { key: 'phone', label: 'Phone', value: contact.phone, href: `tel:${contact.phoneClean}`, Icon: Phone },
    { key: 'loc', label: 'Location', value: contact.location, href: null, Icon: MapPin },
  ];

  return (
    <section id="contact" className="relative  py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          {contact.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight tracking-tight mb-6"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8A8A8A] text-base mb-16 max-w-xl font-light"
        >
          {contact.description}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column: Interactive Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 flex flex-col justify-between"
          >
            {contactItems.map(({ key, label, value, href, Icon }) => (
              <motion.div
                key={key}
                whileHover={{
                  x: 4,
                  borderColor: 'rgba(168,255,62,0.3)',
                  boxShadow: '0 8px 25px -10px rgba(168,255,62,0.1)',
                }}
                className="card p-5 flex items-center gap-4 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 text-[#A8FF3E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-[#555555] uppercase tracking-wider mb-0.5 font-mono">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm font-medium hover:text-[#A8FF3E] transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
                {key !== 'loc' && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(value, key)}
                    className="p-2 rounded-lg border border-white/[0.07] text-[#555555] hover:text-white hover:border-white/20 transition-colors shrink-0 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied === key ? (
                      <Check className="w-3.5 h-3.5 text-[#A8FF3E]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </motion.button>
                )}
              </motion.div>
            ))}

            {/* LinkedIn Card */}
            <motion.a
              whileHover={{
                x: 4,
                borderColor: 'rgba(168,255,62,0.35)',
                boxShadow: '0 8px 25px -10px rgba(168,255,62,0.12)',
              }}
              href={contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#A8FF3E]/10 border border-[#A8FF3E]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-4 h-4 text-[#A8FF3E]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-[#555555] uppercase tracking-wider mb-0.5 font-mono">
                  LinkedIn Network
                </p>
                <p className="text-white text-sm font-medium group-hover:text-[#A8FF3E] transition-colors">
                  View Professional Profile →
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column: High-Impact Glowing Lime CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              boxShadow: '0 0 50px rgba(168,255,62,0.18)',
              borderColor: 'rgba(168,255,62,0.4)',
            }}
            className="rounded-2xl overflow-hidden relative group transition-all duration-500"
            style={{
              background: 'linear-gradient(145deg, rgba(168,255,62,0.12), rgba(168,255,62,0.04))',
              border: '1px solid rgba(168,255,62,0.28)',
            }}
          >
            {/* Ambient Radial Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.25) 0%, transparent 70%)' }}
            />

            <div className="p-8 sm:p-10 h-full flex flex-col justify-between relative z-10">

              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-[#A8FF3E] flex items-center justify-center mb-6 shadow-lg shadow-[#A8FF3E]/20 transition-transform"
                >
                  <Mail className="w-5 h-5 text-[#0A0A0A]" />
                </motion.div>
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 leading-tight tracking-tight">
                  Elevate your<br />
                  <span className="text-[#A8FF3E]">finance team.</span>
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed font-light">
                  Looking for a detail-oriented finance or business operations intern with hands-on SAP FICO and Tally experience? Let's discuss how I can contribute to your team.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 0 25px rgba(168,255,62,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.directInquirySubject)}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#A8FF3E] text-[#0A0A0A] font-bold text-sm hover:bg-[#BEF566] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2, borderColor: 'rgba(255,255,255,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href={personal.resumePath}
                  download="Yokesh_D_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-black/40 text-white text-sm font-medium hover:bg-black/60 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#A8FF3E]" />
                  <span>Download CV</span>
                </motion.a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
