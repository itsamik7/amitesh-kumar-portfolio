import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export function HeroSection() {
  const { isDark } = useTheme();

  const handleScrollToWork = (e: MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#111111] text-[#f8f6f0]' : 'bg-[#f8f6f0] text-[#111111]'
      }`}
    >
      {/* Subtle architectural grid lines */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? 'opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'
            : 'opacity-[0.04] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]'
        } bg-[size:4rem_4rem]`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography & Statements */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Massive Name: AMITESH KUMAR line by line */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display text-[40px] font-black tracking-tight leading-[0.9] uppercase ${
                  isDark ? 'text-white' : 'text-[#111111]'
                }`}
              >
                AMITESH
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display text-[40px] font-black tracking-tight leading-[0.9] uppercase ${
                  isDark ? 'text-white/90' : 'text-[#222228]'
                }`}
              >
                KUMAR
              </motion.h1>
            </div>

            {/* Positioning Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <p
                className={`text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase font-mono border-l-2 pl-4 py-1 ${
                  isDark
                    ? 'text-white/80 border-white/40'
                    : 'text-[#44444a] border-[#111111]/40'
                }`}
              >
                {PERSONAL_INFO.role}
              </p>
            </motion.div>

            {/* Main Statement */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-3xl font-light leading-snug max-w-xl mb-10 tracking-tight ${
                isDark ? 'text-white/90' : 'text-[#222228]'
              }`}
            >
              {PERSONAL_INFO.heroStatement}
            </motion.blockquote>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="#experience"
                onClick={handleScrollToWork}
                data-cursor="EXPLORE"
                className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase active:scale-95 transition-all shadow-lg focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-white text-[#111111] hover:bg-[#eae6dd] focus:ring-white/50'
                    : 'bg-[#111111] text-white hover:bg-[#2a2a2a] focus:ring-black/50'
                }`}
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
              </a>

              <a
                href="#contact"
                data-cursor="CONNECT"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border text-sm font-medium tracking-wider uppercase transition-all focus:outline-none ${
                  isDark
                    ? 'bg-white/[0.05] border-white/[0.12] text-white/90 hover:bg-white/[0.1] hover:text-white'
                    : 'bg-white border-[#e4e0d6] text-[#222228] hover:bg-[#f2ede4]'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait with Handwritten Annotations */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Thin geometric frame overlay */}
              <div
                className={`absolute -inset-3 border rounded-2xl pointer-events-none ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              />
              <div
                className={`absolute -bottom-4 -right-4 w-28 h-28 border-r border-b rounded-br-2xl pointer-events-none ${
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}
              />

              {/* Portrait Container */}
              <div
                className={`relative overflow-hidden rounded-xl aspect-[3/4] shadow-2xl group border ${
                  isDark
                    ? 'bg-[#181818] border-white/15'
                    : 'bg-white border-[#e4e0d6]'
                }`}
                data-cursor="AMITESH"
              >
                <img
                  src={PERSONAL_INFO.portrait}
                  onError={(e) => {
                    if (PERSONAL_INFO.fallbackPortrait && e.currentTarget.src !== PERSONAL_INFO.fallbackPortrait) {
                      e.currentTarget.src = PERSONAL_INFO.fallbackPortrait;
                    }
                  }}
                  alt="Amitesh Kumar — Strategy & Growth"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle gradient scrim at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-70" />

                {/* Bottom portrait pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#111111]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      Amitesh Kumar
                    </p>
                    <p className="text-[11px] text-white/60 font-mono">
                      Strategy • Growth • Operations
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              {/* Handwritten Annotations around the portrait: Build, Solve, Learn, Repeat */}
              {/* Annotation 01: BUILD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -top-4 -left-2 sm:-top-8 sm:-left-8 z-20"
              >
                <div
                  className={`relative px-2.5 py-0.5 sm:px-3 sm:py-1 border rounded-lg shadow-xl backdrop-blur-sm ${
                    isDark
                      ? 'bg-[#111111]/90 border-white/20'
                      : 'bg-white/95 border-black/15'
                  }`}
                >
                  <span className="font-handwriting text-xl sm:text-2xl md:text-3xl text-amber-500 dark:text-amber-300 font-bold tracking-wide">
                    Build ↵
                  </span>
                </div>
              </motion.div>

              {/* Annotation 02: SOLVE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute top-1/4 -right-2 sm:-right-8 z-20"
              >
                <div
                  className={`relative px-2.5 py-0.5 sm:px-3 sm:py-1 border rounded-lg shadow-xl backdrop-blur-sm ${
                    isDark
                      ? 'bg-[#111111]/90 border-white/20'
                      : 'bg-white/95 border-black/15'
                  }`}
                >
                  <span className="font-handwriting text-xl sm:text-2xl md:text-3xl text-emerald-600 dark:text-emerald-300 font-bold tracking-wide">
                    ↳ Solve
                  </span>
                </div>
              </motion.div>

              {/* Annotation 03: LEARN */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -4 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="absolute bottom-28 -left-2 sm:-left-8 z-20"
              >
                <div
                  className={`relative px-2.5 py-0.5 sm:px-3 sm:py-1 border rounded-lg shadow-xl backdrop-blur-sm ${
                    isDark
                      ? 'bg-[#111111]/90 border-white/20'
                      : 'bg-white/95 border-black/15'
                  }`}
                >
                  <span className="font-handwriting text-xl sm:text-2xl md:text-3xl text-sky-600 dark:text-sky-300 font-bold tracking-wide">
                    ~ Learn
                  </span>
                </div>
              </motion.div>

              {/* Annotation 04: REPEAT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 0.7, delay: 1.15 }}
                className="absolute -bottom-4 right-4 sm:right-12 z-20"
              >
                <div
                  className={`relative px-2.5 py-0.5 sm:px-3 sm:py-1 border rounded-lg shadow-xl backdrop-blur-sm ${
                    isDark
                      ? 'bg-[#111111]/90 border-white/20'
                      : 'bg-white/95 border-black/15'
                  }`}
                >
                  <span className="font-handwriting text-xl sm:text-2xl md:text-3xl text-rose-600 dark:text-rose-300 font-bold tracking-wide">
                    Repeat ↺
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs border-t ${
          isDark
            ? 'text-white/40 border-white/5'
            : 'text-black/40 border-black/5'
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-white/40' : 'bg-black/40'
            }`}
          />
          <span className="uppercase tracking-widest font-mono text-[11px]">
            SCROLL TO EXPLORE
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span>GURUGRAM, IN</span>
          <span>•</span>
          <span>2026</span>
        </div>
      </motion.div>
    </section>
  );
}
