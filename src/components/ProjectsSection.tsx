import { motion } from 'motion/react';
import {
  Sparkles,
  Utensils,
  Zap,
  Target,
  Smile,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { CRAVEE_PROJECT } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export function ProjectsSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className={`relative w-full py-24 sm:py-28 md:py-36 border-b transition-colors duration-300 overflow-hidden ${
        isDark
          ? 'bg-[#0e0e0e] text-[#f8f6f0] border-white/10'
          : 'bg-[#faf8f4] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      {/* Ambient background glow accents */}
      <div
        className={`absolute top-10 right-1/4 w-[480px] h-[480px] rounded-full blur-[130px] pointer-events-none ${
          isDark ? 'bg-orange-600/10' : 'bg-orange-400/15'
        }`}
      />
      <div
        className={`absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-rose-600/10' : 'bg-amber-400/15'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="AI PROJECTS & INNOVATION"
          title={`Smart food decisions\npowered by applied AI.`}
          subtitle="Built as part of AI in Business Applications — solving culinary decision fatigue by matching mood, energy, and goals."
        />

        {/* Primary Showcase Card for Cravee */}
        <div
          className={`relative rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
            isDark
              ? 'bg-[#141414] border-white/15'
              : 'bg-white border-[#e4e0d6]'
          }`}
        >
          {/* Top Banner Accent Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600" />

          <div className="p-6 sm:p-10 lg:p-14">
            {/* Top Bar: App Identity & Clickable App Logo */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-inherit">
              {/* App Logo + Title Block */}
              <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                {/* Clickable App Logo */}
                <motion.a
                  href={CRAVEE_PROJECT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN APP"
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group shrink-0"
                  aria-label="Launch Cravee web application"
                >
                  {/* Outer glowing halo on hover */}
                  <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />

                  {/* App Icon Body (iOS / macOS inspired squircle) */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#FF6B4A] via-[#FF3B30] to-[#C91A09] p-0.5 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Subtle top-down specular gloss */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-[22px]" />

                    {/* App Glyph Icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform duration-300">
                        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-[11px] font-black tracking-wider uppercase mt-1 font-display drop-shadow-md">
                        CRAVEE
                      </span>
                    </div>

                    {/* Subtle bottom-right sparkle */}
                    <div className="absolute top-2 right-2 text-amber-200/90">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  </div>

                  {/* Hover tooltip hint */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-white shadow-lg">
                      Click to open app ↗
                    </span>
                  </div>
                </motion.a>

                {/* App Name & Credentials */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                      {CRAVEE_PROJECT.course}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <h3
                      className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                        isDark ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {CRAVEE_PROJECT.name}
                    </h3>
                    {/* Live indicator badge */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live App
                    </span>
                  </div>

                  <p
                    className={`mt-1.5 text-sm sm:text-base font-medium ${
                      isDark ? 'text-white/70' : 'text-[#55555c]'
                    }`}
                  >
                    {CRAVEE_PROJECT.tagline}
                  </p>
                </div>
              </div>

              {/* Direct Launch Button */}
              <div className="flex items-center gap-3">
                <a
                  href={CRAVEE_PROJECT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Cravee App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Narrative & Value Proposition Content */}
            <div className="pt-10 space-y-10">
              {/* Problem Statement */}
              <div className="max-w-4xl">
                <h4
                  className={`text-xs font-mono font-bold uppercase tracking-[0.2em] mb-3 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}
                >
                  THE CORE HUMAN PROBLEM
                </h4>
                <p
                  className={`text-base sm:text-lg lg:text-xl leading-relaxed ${
                    isDark ? 'text-white/80' : 'text-[#333338]'
                  }`}
                >
                  {CRAVEE_PROJECT.description}
                </p>
              </div>

              {/* 3 Input Dimensions */}
              <div>
                <h4
                  className={`text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4 ${
                    isDark ? 'text-white/50' : 'text-[#77777e]'
                  }`}
                >
                  THE 3-DIMENSION RECOMMENDATION VECTORS
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Vector 1: Mood */}
                  <div
                    className={`p-5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-orange-500/40'
                        : 'bg-[#f6f4ee] border-[#e4e0d6] hover:border-orange-500/50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-500 flex items-center justify-center mb-3.5">
                      <Smile className="w-5 h-5" />
                    </div>
                    <h5 className="font-display font-bold text-base mb-1.5">1. Mood</h5>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-[#66666e]'}`}>
                      Matches emotional appetite — comfort food when stressed, light fuel for deep focus, or vibrant flavors for celebration.
                    </p>
                  </div>

                  {/* Vector 2: Energy */}
                  <div
                    className={`p-5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-amber-500/40'
                        : 'bg-[#f6f4ee] border-[#e4e0d6] hover:border-amber-500/50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center mb-3.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h5 className="font-display font-bold text-base mb-1.5">2. Energy</h5>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-[#66666e]'}`}>
                      Calibrates digestion load against fatigue, slump, or active stamina needs to prevent post-meal sluggishness.
                    </p>
                  </div>

                  {/* Vector 3: Goal */}
                  <div
                    className={`p-5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-rose-500/40'
                        : 'bg-[#f6f4ee] border-[#e4e0d6] hover:border-rose-500/50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center mb-3.5">
                      <Target className="w-5 h-5" />
                    </div>
                    <h5 className="font-display font-bold text-base mb-1.5">3. Goal</h5>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-[#66666e]'}`}>
                      Aligns with personal nutritional targets: high protein recovery, quick &lt;15-minute prep, or clean gut health.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
