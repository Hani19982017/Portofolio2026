/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerObjective } from './components/CareerObjective';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertificatesSection } from './components/EducationCertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CodeExportModal } from './components/CodeExportModal';
import { ResumeModal } from './components/ResumeModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function PortfolioApp() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col relative transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <CareerObjective />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationCertificatesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Code Export (HTML/CSS/JS) Modal */}
      <CodeExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* CV & Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
