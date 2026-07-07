/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full py-16 bg-[#0f172a]/60 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand logo */}
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="font-sans text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-transform duration-200 hover:scale-105"
        >
          Sardorbek Sherqulov
        </a>

        {/* Copyright notice */}
        <p className="font-sans text-xs sm:text-sm text-slate-400/60 text-center md:text-left font-light">
          © {currentYear} {personalInfo.fullName}. Barcha huquqlar himoyalangan.
        </p>

        {/* Social Link text blocks */}
        <div className="flex gap-8">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-purple-400 transition-colors font-sans text-xs uppercase tracking-widest font-extrabold active:translate-y-[-2px] duration-200"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-purple-400 transition-colors font-sans text-xs uppercase tracking-widest font-extrabold active:translate-y-[-2px] duration-200"
          >
            Instagram
          </a>
          <a
            href={personalInfo.socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-purple-400 transition-colors font-sans text-xs uppercase tracking-widest font-extrabold active:translate-y-[-2px] duration-200"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
