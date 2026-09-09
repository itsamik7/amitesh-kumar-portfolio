/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { VentureSection } from './components/VentureSection';
import { SkillsSection } from './components/SkillsSection';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { ContactSection } from './components/ContactSection';

function PortfolioApp() {
  const { isDark } = useTheme();

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-[#111111] text-[#f8f6f0] selection:bg-[#f8f6f0] selection:text-[#111111]'
          : 'bg-[#f8f6f0] text-[#111111] selection:bg-[#111111] selection:text-[#f8f6f0]'
      }`}
    >
      {/* Interactive desktop custom cursor */}
      <CustomCursor />

      {/* Fixed editorial navigation */}
      <Navigation onContactClick={handleScrollToContact} />

      {/* Main semantic content */}
      <main>
        {/* Section: Hero */}
        <HeroSection />

        {/* Section: About */}
        <AboutSection />

        {/* Section: Experience (Card-based Layout with Deep Dive Case Studies) */}
        <ExperienceSection />

        {/* Section: Ventures (The Bowl & Beyond) */}
        <VentureSection />

        {/* Section: Skills */}
        <SkillsSection />

        {/* Section: Beyond Work */}
        <BeyondWorkSection />

        {/* Section: Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
