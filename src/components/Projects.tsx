/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data';
import { ProjectItem } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'DATA ANALYTICS' | 'WEB DEVELOPMENT' | 'AUTOMATION'>('ALL');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'ALL') return true;
    return proj.category === filter;
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const categories = ['ALL', 'DATA ANALYTICS', 'WEB DEVELOPMENT', 'AUTOMATION'] as const;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-purple-400 font-sans text-xs uppercase tracking-[0.25em] font-extrabold mb-3 block">
              PORTFOLIO
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mening Loyihalarim
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Category quick selectors */}
            <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setActiveIndex(0);
                  }}
                  className={`px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-wider rounded-lg transition-all ${
                    filter === cat
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat === 'ALL' ? 'Barchasi' : cat}
                </button>
              ))}
            </div>

            {/* Slider arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={filteredProjects.length <= 1}
                className="p-3 border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white transition-all rounded-xl"
                title="Oldingisi"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={filteredProjects.length <= 1}
                className="p-3 border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white transition-all rounded-xl"
                title="Keyingisi"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl cursor-pointer border ${
                    isCurrent ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-white/10'
                  } hover:border-purple-500/40 transition-all duration-300`}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  </div>

                  {/* Text card content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="text-purple-400 font-sans text-[10px] uppercase tracking-widest font-extrabold mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="font-sans text-xl md:text-2xl font-extrabold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-white font-sans text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors border-b border-white/20 pb-1">
                      LOYIHANI KO'RISH <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Detailed Interactive Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
              >
                {/* Header picture */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/55" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-[#0f172a]/85 hover:bg-purple-500 hover:text-white text-white transition-colors rounded-full"
                    title="Yopish"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-6 left-8">
                    <span className="text-purple-400 font-sans text-xs uppercase tracking-widest font-extrabold mb-1.5 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Info and action panel */}
                <div className="p-8">
                  <p className="text-slate-300 font-sans text-base leading-relaxed mb-6 font-light">
                    {selectedProject.fullDetails}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <span className="block text-xs uppercase tracking-widest text-slate-400/50 font-bold mb-3">
                      Texnologiyalar:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-xs font-semibold font-sans uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3.5 rounded-xl font-sans text-xs uppercase tracking-wider font-extrabold transition-all hover:from-purple-600 hover:to-blue-600 animate-pulse-slow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demoni ko'rish (Jonli sayt)
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500/30 text-white py-3.5 rounded-xl font-sans text-xs uppercase tracking-wider font-extrabold transition-all hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      Manba kodi (GitHub)
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
