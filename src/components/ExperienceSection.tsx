import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { TIMELINE_EXPERIENCES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export function ExperienceSection() {
  const { isDark } = useTheme();
  // All collapsed by default as requested
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(TIMELINE_EXPERIENCES.map((e) => e.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const allExpanded = expandedIds.size === TIMELINE_EXPERIENCES.length;

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            label="EXPERIENCE & INTERNSHIPS"
            title={`A journey of building,\nlearning and contributing.`}
            subtitle="Hands-on 0→1 business launches, supply chain optimization, EdTech operations, and search intent research."
          />

          {/* Quick Expand/Collapse Toolbar */}
          <div className="flex items-center gap-2 self-start md:self-end mb-2">
            <button
              onClick={allExpanded ? collapseAll : expandAll}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border-white/15 text-white/80 hover:text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-black/80 hover:text-black'
              }`}
              data-cursor="CLICK"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>

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

          <div className="space-y-6 sm:space-y-8">
            {TIMELINE_EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedIds.has(exp.id);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative flex flex-col md:flex-row md:items-start group"
                >
                  {/* Milestone Node on Timeline Spine */}
                  <div
                    className={`absolute left-4 md:left-[220px] lg:left-[260px] -translate-x-1/2 top-4 w-3.5 h-3.5 rounded-full border-2 z-10 transition-all duration-300 ${
                      isExpanded
                        ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] scale-125'
                        : exp.isPrimary
                        ? 'bg-emerald-500/80 border-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                        : isDark
                        ? 'bg-[#181818] border-white/40 group-hover:border-emerald-400 group-hover:bg-emerald-400'
                        : 'bg-white border-black/30 group-hover:border-emerald-600 group-hover:bg-emerald-600'
                    }`}
                  />

                  {/* Left Column: Timestamp & Location (Desktop/Tablet) */}
                  <div className="pl-10 md:pl-0 md:w-[200px] lg:w-[240px] md:pr-8 flex-shrink-0 mb-2 md:mb-0 md:pt-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border mb-1.5 backdrop-blur-sm">
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

                  {/* Right Column: Expandable Experience Card */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpand(exp.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(exp.id);
                      }
                    }}
                    data-cursor={isExpanded ? 'COLLAPSE' : 'EXPAND'}
                    className={`pl-10 md:pl-7 lg:pl-8 flex-1 min-w-0 rounded-2xl p-5 sm:p-6 md:p-7 border cursor-pointer select-none transition-all duration-300 ${
                      isExpanded
                        ? isDark
                          ? 'bg-[#181818] border-emerald-500/40 shadow-xl shadow-black/40 ring-1 ring-emerald-500/20'
                          : 'bg-white border-emerald-600/40 shadow-lg shadow-black/5 ring-1 ring-emerald-600/20'
                        : isDark
                        ? 'bg-[#181818]/60 hover:bg-[#181818] border-white/10 hover:border-white/20'
                        : 'bg-white/80 hover:bg-white border-[#e4e0d6] hover:border-black/20 shadow-sm'
                    }`}
                  >
                    {/* Header Row: Company, Role & Expand Indicator */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Company & Category */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
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
                              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                                isDark
                                  ? 'bg-white/5 border-white/10 text-white/60'
                                  : 'bg-[#ede8dc] border-[#ded8cb] text-[#6b6b72]'
                              }`}
                            >
                              {exp.category}
                            </span>
                          )}
                        </div>

                        {/* Role Title */}
                        <h3
                          className={`font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight ${
                            isDark ? 'text-white' : 'text-[#111111]'
                          }`}
                        >
                          {exp.role}
                        </h3>

                        {/* Collapsed Preview Teaser (Key metric chips when collapsed) */}
                        {!isExpanded && exp.metrics && exp.metrics.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            {exp.metrics.slice(0, 3).map((metric, mIdx) => (
                              <span
                                key={mIdx}
                                className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border ${
                                  isDark
                                    ? 'bg-white/[0.03] border-white/10 text-white/80'
                                    : 'bg-[#f4f2ee] border-[#e4e0d6] text-[#222222]'
                                }`}
                              >
                                <span className="font-bold text-emerald-500">
                                  {metric.value}
                                </span>
                                <span className="text-[11px] opacity-60">
                                  {metric.label}
                                </span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Expand / Collapse Chevron Button */}
                      <div className="flex-shrink-0 pt-1">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                            isExpanded
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 rotate-180'
                              : isDark
                              ? 'bg-white/5 text-white/60 border-white/10 group-hover:border-white/30 group-hover:text-white'
                              : 'bg-black/5 text-black/60 border-black/10 group-hover:border-black/30 group-hover:text-black'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    {/* Smooth Expandable Body (Highlights, Metrics, Tags) */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="expanded-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 mt-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
                            {/* Bullet Highlights */}
                            <ul className="space-y-2.5 mb-6">
                              {exp.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className={`text-sm sm:text-base leading-relaxed flex items-start gap-2.5 ${
                                    isDark ? 'text-white/85' : 'text-[#37373f]'
                                  }`}
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Impact Metrics Grid */}
                            {exp.metrics && exp.metrics.length > 0 && (
                              <div
                                className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border mb-5 ${
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

                            {/* Tags */}
                            {exp.tags && exp.tags.length > 0 && (
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
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

