/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Send, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Circular Portrait Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-purple-500/20 p-4 bg-white/5 backdrop-blur-md">
              <img
                src={personalInfo.images.profile}
                alt={personalInfo.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
            
            {/* Age Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-2 right-4 sm:right-12 bg-white/5 border border-white/10 backdrop-blur-xl text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 hover:border-purple-500/40 transition-colors"
            >
              <span className="font-sans text-4xl font-extrabold text-purple-400">
                {personalInfo.age}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-slate-200">
                YOSHDA
              </span>
            </motion.div>
          </motion.div>

          {/* Biography details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-sans text-xs uppercase tracking-[0.25em] font-extrabold mb-3 block">
              TARIX VA BIO
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              O'zim haqimda
            </h2>
            
            <div className="space-y-6">
              {personalInfo.bioLines.map((line, index) => (
                <p
                  key={index}
                  className="text-slate-300 font-sans text-base md:text-lg leading-relaxed font-light"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Quick stats / facts */}
            <div className="grid grid-cols-2 gap-6 mt-10 border-t border-white/5 pt-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-400/50 font-bold mb-1">
                  Tug'ilgan sana
                </span>
                <span className="text-white font-sans font-medium text-sm sm:text-base">
                  {personalInfo.birthDate}
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-400/50 font-bold mb-1">
                  Ta'lim Muassasasi
                </span>
                <span className="text-purple-400 font-sans font-medium text-sm sm:text-base">
                  {personalInfo.currentEducation}
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-10">
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all active:scale-90"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all active:scale-90"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all active:scale-90"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
