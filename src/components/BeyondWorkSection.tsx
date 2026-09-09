import { motion } from 'motion/react';
import { BEYOND_WORK_ITEMS } from '../data/portfolioData';
import { Compass, Sparkles, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ICONS = [Compass, Sparkles, Heart];

export function BeyondWorkSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="beyond-work"
      className={`relative w-full py-20 md:py-24 border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#111111] text-[#f8f6f0] border-white/10'
          : 'bg-[#f8f6f0] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Section Title without numbers */}
        <div className="mb-12 max-w-xl">
          <div
            className={`inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.25em] uppercase ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>DISCIPLINE & PERSPECTIVE</span>
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#111111]'
            }`}
          >
            Outside the work.
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-white/70' : 'text-[#55555c]'
            }`}
          >
            Mindfulness practices, culinary experimentation, and large-scale volunteer leadership that shape resilience and mental clarity.
          </p>
        </div>

        {/* 3 clean editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEYOND_WORK_ITEMS.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border shadow-xs flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white'
                    : 'bg-white border-[#e4e0d6] text-[#111111]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-emerald-400'
                          : 'bg-[#f8f6f0] border-[#e4e0d6] text-emerald-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-white/40' : 'text-[#888890]'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-white/70' : 'text-[#44444a]'
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
