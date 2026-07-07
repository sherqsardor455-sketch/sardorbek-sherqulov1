/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Printer, Download, Eye } from 'lucide-react';
import { personalInfo, timelineData, technicalSkills, softSkills } from '../data';

interface ResumeViewerModalProps {
  onClose: () => void;
}

export default function ResumeViewerModal({ onClose }: ResumeViewerModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-white text-black max-w-4xl w-full my-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Controls header - not shown during browser printing */}
        <div className="bg-[#0f172a] text-white p-4 flex justify-between items-center print:hidden border-b border-white/10">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-400" />
            <span className="font-sans font-bold text-sm uppercase tracking-wider text-slate-100">
              Sardorbek Resume Prevyusi (Print & PDF eksport)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider font-extrabold transition-all hover:opacity-90 shadow-lg shadow-purple-500/20"
            >
              <Printer className="w-4 h-4" />
              Chop etish / PDF yuklash
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
              title="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV area */}
        <div className="p-12 print:p-0 font-sans text-gray-800" id="printable-cv">
          {/* Header section with contact details */}
          <div className="border-b-4 border-[#1e1b4b] pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
                {personalInfo.fullName}
              </h1>
              <h2 className="text-lg font-bold text-purple-700 uppercase tracking-widest mt-1">
                {personalInfo.title}
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 space-y-1">
              <p><strong>Telefon:</strong> {personalInfo.phone}</p>
              <p><strong>Email:</strong> {personalInfo.email}</p>
              <p><strong>Manzil:</strong> {personalInfo.location}</p>
              <p><strong>Tug'ilgan sana:</strong> {personalInfo.birthDate}</p>
            </div>
          </div>

          {/* Core Bio info */}
          <div className="mb-8">
            <h3 className="text-sm font-extrabold text-purple-700 uppercase tracking-widest border-b border-gray-200 pb-2 mb-3">
              Qisqacha ma'lumot
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {personalInfo.bioLines.join(' ')}
            </p>
          </div>

          {/* Education & Experience in 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Education column */}
            <div>
              <h3 className="text-sm font-extrabold text-purple-700 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">
                Ta'lim
              </h3>
              <div className="space-y-4">
                {timelineData
                  .filter((item) => item.type === 'education')
                  .map((item) => (
                    <div key={item.id} className="text-sm">
                      <span className="font-extrabold text-gray-900 block">{item.title}</span>
                      <span className="text-xs text-gray-500 block font-medium uppercase tracking-wider">
                        {item.year} | {item.subtitle}
                      </span>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Experience column */}
            <div>
              <h3 className="text-sm font-extrabold text-purple-700 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">
                Ish Tajribasi
              </h3>
              <div className="space-y-4">
                {timelineData
                  .filter((item) => item.type === 'experience')
                  .map((item) => (
                    <div key={item.id} className="text-sm">
                      <span className="font-extrabold text-gray-900 block">{item.title}</span>
                      <span className="text-xs text-gray-500 block font-medium uppercase tracking-wider">
                        {item.year} | {item.subtitle}
                      </span>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>

          </div>

          {/* Skills and languages section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Technical skills list */}
            <div>
              <h3 className="text-sm font-extrabold text-purple-700 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">
                Texnik ko'nikmalar
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center bg-gray-50 p-2 border border-gray-100 rounded">
                    <span className="font-bold text-gray-700">{skill.name.split(' / ')[0]}</span>
                    <span className="text-purple-700 font-extrabold">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills list */}
            <div>
              <h3 className="text-sm font-extrabold text-purple-700 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">
                Shaxsiy sifatlar
              </h3>
              <ul className="list-disc list-inside text-xs space-y-2 text-gray-700">
                {softSkills.map((skill) => (
                  <li key={skill.id}>
                    <strong>{skill.title}:</strong> {skill.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer signature line */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-[10px] text-gray-400">
            Hujjat Sherqulov Sardorbek Shoqosim O'g'li tomonidan shaxsiy portfeli orqali avtomatik ravishda tayyorlandi.
          </div>
        </div>

        {/* Footer controls - not printed */}
        <div className="bg-slate-50 p-4 flex justify-end gap-3 print:hidden border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-sans font-bold text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
          >
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
}
