/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Download, ArrowUpRight } from 'lucide-react';
import { timelineData } from '../data';

interface ResumeProps {
  onDownloadResume: () => void;
}

export default function Resume({ onDownloadResume }: ResumeProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'experience'>('all');

  const filteredTimeline = timelineData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section
      id="resume"
      className="py-24 md:py-32 bg-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-sans text-xs uppercase tracking-[0.25em] font-extrabold mb-3 block">
            TAJRIBA VA TA'LIM
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Interaktiv Resume
          </h2>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center gap-4 mb-16">
          {(['all', 'education', 'experience'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-extrabold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {tab === 'all' && 'Barchasi'}
              {tab === 'education' && "Ta'lim"}
              {tab === 'experience' && 'Ish tajribasi'}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education list */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                Ta'lim
              </h3>
              <div className="space-y-12 border-l border-purple-500/20 pl-8 ml-4">
                {timelineData
                  .filter((item) => item.type === 'education')
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative group"
                    >
                      {/* Timeline circle indicator */}
                      <div className="absolute -left-[41px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#0f172a] border-2 border-purple-500 group-hover:scale-125 transition-transform" />
                      
                      <span className="font-sans text-xs font-bold text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2.5 py-1 rounded-full inline-block mb-3">
                        {item.year}
                      </span>
                      <h4 className="font-sans text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h4>
                      <h5 className="font-sans text-xs text-slate-300 font-medium uppercase tracking-wider mb-3">
                        {item.subtitle}
                      </h5>
                      <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* Experience list */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                  <Briefcase className="w-5 h-5" />
                </span>
                Ish Tajribasi
              </h3>
              <div className="space-y-12 border-l border-purple-500/20 pl-8 ml-4">
                {timelineData
                  .filter((item) => item.type === 'experience')
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative group"
                    >
                      {/* Timeline circle indicator */}
                      <div className="absolute -left-[41px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#0f172a] border-2 border-purple-500 group-hover:scale-125 transition-transform" />
                      
                      <span className="font-sans text-xs font-bold text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2.5 py-1 rounded-full inline-block mb-3">
                        {item.year}
                      </span>
                      <h4 className="font-sans text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h4>
                      <h5 className="font-sans text-xs text-slate-300 font-medium uppercase tracking-wider mb-3">
                        {item.subtitle}
                      </h5>
                      <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Complete PDF / Document Downloader */}
        <div className="mt-20 text-center">
          <button
            onClick={onDownloadResume}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_20px_rgba(147,51,234,0.3)] active:scale-95"
          >
            <Download className="w-4.5 h-4.5" />
            TO'LIQ RESUMENI YUKLASH (.DOCX / PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
