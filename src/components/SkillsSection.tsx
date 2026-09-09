import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { SKILLS_DATA } from '../data/portfolioData';
import { Briefcase, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function SkillsSection() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'technical'>('all');

  const businessSkills = SKILLS_DATA.business;
  const technicalSkills = SKILLS_DATA.technical;

  return (
    <section
      id="skills"
      className={`relative w-full py-24 md:py-32 border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#111111] text-[#f8f6f0] border-white/10'
          : 'bg-[#f8f6f0] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeader
          label="SKILLS"
          title={`A mix of skills\nfor a multidimensional journey.`}
          subtitle="Applied commercial execution capabilities coupled with quantitative analytics tools."
        />

        {/* Filter toggle */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeCategory === 'all'
                ? isDark
                  ? 'bg-white text-[#111111] shadow-md'
                  : 'bg-[#111111] text-white shadow-md'
                : isDark
                ? 'bg-[#1a1a1a] text-white/70 hover:text-white border border-white/10'
                : 'bg-white text-[#6b6b72] hover:text-[#111111] border border-[#e4e0d6]'
            }`}
          >
            All Competencies ({businessSkills.length + technicalSkills.length})
          </button>
          <button
            onClick={() => setActiveCategory('business')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeCategory === 'business'
                ? isDark
                  ? 'bg-white text-[#111111] shadow-md'
                  : 'bg-[#111111] text-white shadow-md'
                : isDark
                ? 'bg-[#1a1a1a] text-white/70 hover:text-white border border-white/10'
                : 'bg-white text-[#6b6b72] hover:text-[#111111] border border-[#e4e0d6]'
            }`}
          >
            Business & Strategy ({businessSkills.length})
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeCategory === 'technical'
                ? isDark
                  ? 'bg-white text-[#111111] shadow-md'
                  : 'bg-[#111111] text-white shadow-md'
                : isDark
                ? 'bg-[#1a1a1a] text-white/70 hover:text-white border border-white/10'
                : 'bg-white text-[#6b6b72] hover:text-[#111111] border border-[#e4e0d6]'
            }`}
          >
            Technical & Analytics ({technicalSkills.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Business Skills Column */}
          {(activeCategory === 'all' || activeCategory === 'business') && (
            <div
              className={`${
                activeCategory === 'business' ? 'lg:col-span-12' : 'lg:col-span-6'
              } p-5 sm:p-8 rounded-2xl border shadow-sm flex flex-col justify-between ${
                isDark
                  ? 'bg-[#171717] border-white/10 text-white'
                  : 'bg-white border-[#e4e0d6] text-[#111111]'
              }`}
            >
              <div>
                <div
                  className={`flex items-center gap-2.5 mb-6 pb-4 border-b ${
                    isDark ? 'border-white/10' : 'border-[#f0ece2]'
                  }`}
                >
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    Business & Commercial Operations
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {businessSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide cursor-default transition-colors duration-200 shadow-xs ${
                        isDark
                          ? 'bg-white/[0.04] border-white/10 text-white/90 hover:bg-white hover:text-[#111111]'
                          : 'bg-[#f8f6f0] border-[#e4e0d6] text-[#222228] hover:bg-[#111111] hover:text-white'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div
                className={`mt-8 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                  isDark ? 'border-white/10 text-white/50' : 'border-[#f0ece2] text-[#888890]'
                }`}
              >
                <span>PRACTICAL IMPLEMENTATION</span>
                <span>0→1 GTM • STAKEHOLDER MGMT</span>
              </div>
            </div>
          )}

          {/* Technical Skills Column */}
          {(activeCategory === 'all' || activeCategory === 'technical') && (
            <div
              className={`${
                activeCategory === 'technical' ? 'lg:col-span-12' : 'lg:col-span-6'
              } p-5 sm:p-8 rounded-2xl border shadow-sm flex flex-col justify-between ${
                isDark
                  ? 'bg-[#171717] border-white/10 text-white'
                  : 'bg-white border-[#e4e0d6] text-[#111111]'
              }`}
            >
              <div>
                <div
                  className={`flex items-center gap-2.5 mb-6 pb-4 border-b ${
                    isDark ? 'border-white/10' : 'border-[#f0ece2]'
                  }`}
                >
                  <Code className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    Technical Tools & Analytics
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {technicalSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide cursor-default transition-colors duration-200 shadow-xs ${
                        isDark
                          ? 'bg-white/[0.04] border-white/10 text-white/90 hover:bg-white hover:text-[#111111]'
                          : 'bg-[#f8f6f0] border-[#e4e0d6] text-[#222228] hover:bg-[#111111] hover:text-white'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div
                className={`mt-8 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                  isDark ? 'border-white/10 text-white/50' : 'border-[#f0ece2] text-[#888890]'
                }`}
              >
                <span>SYSTEMS & QUERYING</span>
                <span>QUANTITATIVE DATA STACK</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
