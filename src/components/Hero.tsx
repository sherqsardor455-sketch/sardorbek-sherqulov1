/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Send, FileDown } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onDownloadResume: () => void;
}

export default function Hero({ onDownloadResume }: HeroProps) {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={personalInfo.images.heroBg}
          alt={personalInfo.fullName}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-[#0f172a]/20" />
        <div className="absolute inset-0 bg-[#0f172a]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-purple-400 mb-4 bg-purple-500/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/20">
            Shaxsiy Portfolioga Xush Kelibsiz
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="font-sans text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-none"
        >
          {personalInfo.fullName} <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-extrabold relative inline-block">
            {personalInfo.patronymic}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button
            onClick={onDownloadResume}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(147,51,234,0.3)] active:scale-95"
          >
            <FileDown className="w-4 h-4" />
            Resume yuklash
          </button>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 backdrop-blur-md bg-white/5 text-white hover:text-purple-400 px-8 py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:translate-y-[-2px] active:scale-95"
          >
            <Send className="w-4 h-4" />
            Men bilan bog'lanish
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-slate-400/50 font-bold">
          Pastga
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('about');
            if (nextSec) {
              window.scrollTo({ top: nextSec.offsetTop - 80, behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="text-purple-400 w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
