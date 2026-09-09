import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { VENTURE_DATA } from '../data/portfolioData';
import { HeartHandshake, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function VentureSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="ventures"
      className={`relative w-full py-28 md:py-36 border-b overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#0d0d0d] text-[#f8f6f0] border-white/10'
          : 'bg-[#f8f6f0] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      {/* Cinematic ambient glow */}
      <div
        className={`absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-amber-600/10' : 'bg-amber-400/10'
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
          isDark ? 'bg-emerald-600/10' : 'bg-emerald-400/10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          label="VENTURES"
          title={`Some things\nI built.`}
          subtitle="Direct entrepreneurial ownership, consumer brand development, and community impact."
        />

        {/* Feature Container: The Bowl & Beyond */}
        <div
          className={`relative rounded-3xl border overflow-hidden shadow-2xl ${
            isDark
              ? 'bg-[#141414] border-white/15'
              : 'bg-white border-[#e4e0d6]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div>
                {/* Micro Badge */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
                    VENTURE
                  </span>
                  <span className="opacity-30">•</span>
                  <span
                    className={`text-xs font-mono uppercase tracking-widest ${
                      isDark ? 'text-white/60' : 'text-[#6b6b72]'
                    }`}
                  >
                    CO-FOUNDER
                  </span>
                </div>

                {/* Venture Name */}
                <h3
                  className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
                    isDark ? 'text-white' : 'text-[#111111]'
                  }`}
                >
                  {VENTURE_DATA.title}
                </h3>

                {/* Meta details */}
                <div
                  className={`flex flex-wrap items-center gap-4 mt-3 text-xs font-mono ${
                    isDark ? 'text-white/50' : 'text-[#6b6b72]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {VENTURE_DATA.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {VENTURE_DATA.location}
                  </span>
                </div>

                {/* Narrative Description from Resume */}
                <p
                  className={`mt-6 text-base sm:text-lg leading-relaxed font-light ${
                    isDark ? 'text-white/80' : 'text-[#333338]'
                  }`}
                >
                  {VENTURE_DATA.description}
                </p>

                <div
                  className={`mt-6 p-4 rounded-xl border space-y-2 text-xs sm:text-sm ${
                    isDark
                      ? 'bg-white/[0.03] border-white/10 text-white/70'
                      : 'bg-[#f8f6f0] border-[#e4e0d6] text-[#44444a]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-medium">
                    <HeartHandshake className="w-4 h-4 text-rose-500" />
                    <span>1:5 Community Meal Giving Initiative</span>
                  </div>
                  <p className="text-xs opacity-70">
                    Built social impact directly into unit economics, funding nutritious community meals alongside commercial orders.
                  </p>
                </div>
              </div>

              {/* 3 Metrics from Resume */}
              <div
                className={`grid grid-cols-3 gap-4 pt-8 border-t ${
                  isDark ? 'border-white/10' : 'border-[#e4e0d6]'
                }`}
              >
                {VENTURE_DATA.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display text-2xl sm:text-3xl font-black text-amber-500 dark:text-amber-400">
                      {metric.value}
                    </span>
                    <span
                      className={`text-[11px] font-mono tracking-wider mt-1 uppercase ${
                        isDark ? 'text-white/60' : 'text-[#6b6b72]'
                      }`}
                    >
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Immersive Culinary Media Column with Handwritten Annotation */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-[#1a1a1a]">
              <img
                src={VENTURE_DATA.image}
                alt="The Bowl & Beyond culinary creations"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />

              {/* Gradient vignette */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-[#141414] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#141414] lg:via-transparent lg:to-transparent'
                    : 'bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent'
                }`}
              />

              {/* Handwritten Annotation: "More than just a meal." */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-8 right-8 z-20"
              >
                <div
                  className={`px-5 py-2.5 rounded-xl border shadow-2xl backdrop-blur-md ${
                    isDark
                      ? 'bg-[#111111]/90 border-amber-400/40'
                      : 'bg-white/95 border-amber-500/50'
                  }`}
                >
                  <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-amber-600 dark:text-amber-300 font-bold tracking-wide">
                    {VENTURE_DATA.handwrittenNote}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
