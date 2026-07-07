/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Lightbulb, Clock, Languages } from 'lucide-react';
import { technicalSkills, softSkills } from '../data';

const iconMap = {
  Users: Users,
  Lightbulb: Lightbulb,
  Clock: Clock,
  Languages: Languages,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Technical Skills Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-sans text-xs uppercase tracking-[0.25em] font-extrabold mb-3 block">
              KOMPETENTSIYA
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
              Texnik Ko'nikmalar
            </h2>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-sans text-xs uppercase tracking-wider font-extrabold text-white">
                      {skill.name}
                    </span>
                    <span className="text-purple-400 font-sans font-extrabold text-sm">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="h-[4px] w-full bg-white/10 overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName];
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-extrabold text-white mb-3">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
