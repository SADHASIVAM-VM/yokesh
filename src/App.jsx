import React, { useState } from 'react';

import InteractiveBackground from './Components/InteractiveBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Interests from './Components/Interests';
import Languages from './Components/Languages';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumeModal from './Components/ResumeModal';

export const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#A8FF3E]/30 selection:text-[#A8FF3E] relative overflow-x-hidden font-sans">
      {/* Global Interactive Background: Mouse Spotlight + Particle Network */}
      <InteractiveBackground />

      {/* Sticky Editorial Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Page Editorial Flow */}
      <main id="main-content" className="relative z-10 pb-24 md:pb-0">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Interests />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
