/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  onDownloadResume: () => void;
}

export default function Header({ onDownloadResume }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'resume', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Bosh sahifa' },
    { id: 'about', label: 'Men haqimda' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: "Ko'nikmalar" },
    { id: 'projects', label: 'Loyihalar' },
    { id: 'contact', label: 'Aloqa' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed navbar
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
    <nav
      id="top-nav-bar"
      className={`fixed top-0 w-full z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/40 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-sans text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-transform duration-200 hover:scale-105"
        >
          Sardorbek Sherqulov
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all duration-200 relative py-2 ${
                activeSection === link.id
                  ? 'text-purple-400'
                  : 'text-slate-300 hover:text-purple-400'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Resume yuklash
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={onDownloadResume}
            className="p-2 text-purple-400 border border-purple-500/20 rounded-xl bg-purple-500/5 active:scale-95"
            title="Resume yuklash"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-purple-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`font-sans text-sm uppercase tracking-wider font-bold py-2 ${
                activeSection === link.id ? 'text-purple-400' : 'text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
