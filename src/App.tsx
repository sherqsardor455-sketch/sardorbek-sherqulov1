/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewerModal from './components/ResumeViewerModal';

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownloadResume = () => {
    setShowResumeModal(true);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-100 selection:bg-purple-500/30 selection:text-white relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-100px] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[65%] right-[5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <Header onDownloadResume={handleDownloadResume} />

      {/* Hero Section */}
      <Hero onDownloadResume={handleDownloadResume} />

      {/* About Section */}
      <About />

      {/* Interactive Resume Timeline Section */}
      <Resume onDownloadResume={handleDownloadResume} />

      {/* Tech and Soft Skills Section */}
      <Skills />

      {/* Portfolio Projects Section */}
      <Projects />

      {/* Contact Section with local mock database */}
      <Contact />

      {/* Elegant Footer */}
      <Footer />

      {/* Printable Resume Viewer Modal Overlay */}
      {showResumeModal && (
        <ResumeViewerModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

