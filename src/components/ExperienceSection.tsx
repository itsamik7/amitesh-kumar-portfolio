import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { TIMELINE_EXPERIENCES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export function ExperienceSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`relative w-full py-20 sm:py-24 md:py-32 border-b transition-colors duration-300 overflow-hidden ${
        isDark
          ? 'bg-[#111111] text-[#f8f6f0] border-white/10'
          : 'bg-[#f8f6f0] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeader
          label="EXPERIENCE"
          title={`A journey of building,\nlearning and contributing.`}
          subtitle="Direct operational accountability, 0→1 market pilots, and revenue growth initiatives."
        />

        {/* Vertical Timestamp Timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Continuous vertical timeline spine line */}
          <div
            className={`absolute top-4 bottom-8 left-4 md:left-[220px] lg:left-[260px] w-px ${
              isDark
                ? 'bg-gradient-to-b from-emerald-500 via-white/20 to-transparent'
                : 'bg-gradient-to-b from-emerald-600 via-black/15 to-transparent'
            }`}
          />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row md:items-start group"
              >
                {/* Milestone Node on Timeline Spine */}
                <div
                  className={`absolute left-4 md:left-[220px] lg:left-[260px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10 transition-transform duration-300 group-hover:scale-125 ${
                    exp.isPrimary
                      ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : isDark
                      ? 'bg-[#181818] border-white/40 group-hover:border-emerald-400 group-hover:bg-emerald-400'
                      : 'bg-white border-black/30 group-hover:border-emerald-600 group-hover:bg-emerald-600'
                  }`}
                />

                {/* Left Column: Timestamp & Location (Desktop/Tablet) */}
                <div className="pl-10 md:pl-0 md:w-[200px] lg:w-[240px] md:pr-8 flex-shrink-0 mb-3 md:mb-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border mb-2 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className={isDark ? 'text-white/90' : 'text-[#111111]'}>
                      {exp.period}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 text-xs font-mono ${
                      isDark ? 'text-white/50' : 'text-[#6b6b72]'
                    }`}
                  >
                    <MapPin className="w-3 h-3 opacity-60 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>

                  {exp.category && (
                    <div className="mt-2 hidden md:block">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border inline-block ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white/60'
                            : 'bg-[#ede8dc] border-[#ded8cb] text-[#6b6b72]'
                        }`}
                      >
                        {exp.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column: Experience Details & Metrics */}
                <div
                  className={`pl-10 md:pl-8 lg:pl-10 flex-1 min-w-0 rounded-2xl p-6 sm:p-7 md:p-8 border transition-all duration-300 ${
                    isDark
                      ? 'bg-[#181818]/60 hover:bg-[#181818] border-white/10 hover:border-white/20'
                      : 'bg-white/80 hover:bg-white border-[#e4e0d6] hover:border-black/20 shadow-sm'
                  }`}
                >
                  {/* Top Bar: Company & Role */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300 uppercase transition-colors group/company focus:outline-none focus:ring-1 focus:ring-emerald-400/50 rounded"
                        data-cursor="VISIT"
                        title={`Visit ${exp.company}`}
                      >
                        <span className="underline decoration-emerald-500/40 underline-offset-4 group-hover/company:decoration-emerald-400">
                          {exp.company}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-500/70 group-hover/company:text-emerald-400 transition-transform duration-200 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-emerald-500 uppercase">
                        {exp.company}
                      </span>
                    )}
                    {exp.category && (
                      <span
                        className={`md:hidden text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border self-start sm:self-auto mt-1 sm:mt-0 ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white/60'
                            : 'bg-[#ede8dc] border-[#ded8cb] text-[#6b6b72]'
                        }`}
                      >
                        {exp.category}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-4 ${
                      isDark ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {exp.role}
                  </h3>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className={`text-sm sm:text-base leading-relaxed flex items-start gap-2.5 ${
                          isDark ? 'text-white/80' : 'text-[#37373f]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Metrics Strip */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border mb-6 ${
                        isDark
                          ? 'bg-white/[0.03] border-white/10'
                          : 'bg-[#f8f6f0] border-[#e4e0d6]'
                      }`}
                    >
                      {exp.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span
                            className={`font-display text-lg sm:text-xl font-black ${
                              isDark ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {metric.value}
                          </span>
                          <span
                            className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider mt-0.5 ${
                              isDark ? 'text-white/50' : 'text-[#6b6b72]'
                            }`}
                          >
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md border ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white/70'
                            : 'bg-black/5 border-black/10 text-black/70'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
