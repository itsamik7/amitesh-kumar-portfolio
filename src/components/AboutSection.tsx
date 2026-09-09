import { useState, useRef, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TrendingUp, Layers, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ORBIT_STEPS = [
  { label: 'THINK', sub: 'Insight & Strategy', angle: 0 },
  { label: 'BUILD', sub: '0→1 Execution', angle: 72 },
  { label: 'TEST', sub: 'Consumer Validation', angle: 144 },
  { label: 'LEARN', sub: 'Data Analytics', angle: 216 },
  { label: 'SCALE', sub: 'Operational Rigor', angle: 288 },
];

export function AboutSection() {
  const { isDark } = useTheme();
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [radius, setRadius] = useState(155);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius adjustment so nodes never get cropped on any screen size
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(100);
      } else if (w < 768) {
        setRadius(125);
      } else if (w < 1024) {
        setRadius(140);
      } else {
        setRadius(160);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Mouse tilt effect for interactive circular system
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-150, 150], [10, -10]);
  const rotateY = useTransform(springX, [-150, 150], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className={`relative w-full py-20 sm:py-24 md:py-32 border-y overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#111111] text-[#f8f6f0] border-white/10'
          : 'bg-[#f8f6f0] text-[#111111] border-[#e4e0d6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeader
          label="ABOUT"
          title={`“A builder, operator\nand a curious learner.”`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factual Editorial Introduction & Pillar Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Introduction (Factual to resume) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 tracking-normal ${
                isDark ? 'text-white/80' : 'text-[#222226]'
              }`}
            >
              {PERSONAL_INFO.aboutBio}
            </motion.p>

            {/* Core Competencies from Resume */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t ${
                isDark ? 'border-white/10' : 'border-[#e4e0d6]'
              }`}
            >
              <div
                className={`p-4 rounded-xl border shadow-xs ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white'
                    : 'bg-white border-[#e4e0d6] text-[#111111]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">
                    0 → 1 Execution
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-[#55555c]'
                  }`}
                >
                  Pilots launched, GTM workshops executed, customer profile mapping, and strategic operations ownership.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border shadow-xs ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white'
                    : 'bg-white border-[#e4e0d6] text-[#111111]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Layers className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">
                    Operational Scale
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-[#55555c]'
                  }`}
                >
                  630+ accommodations coordinated, complaint resolution systems, and family business supply chain growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Rotating Orbit Visual System (THINK, BUILD, TEST, LEARN, SCALE) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center overflow-hidden py-4 sm:py-6">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] flex items-center justify-center select-none"
              style={{ perspective: 1000 }}
              data-cursor="ROTATE"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
              >
                {/* Orbit Decorative Background Rings */}
                <div
                  className={`absolute inset-4 sm:inset-6 rounded-full border border-dashed animate-[spin_60s_linear_infinite] pointer-events-none ${
                    isDark ? 'border-white/15' : 'border-[#111111]/20'
                  }`}
                />
                <div
                  className={`absolute inset-12 sm:inset-16 rounded-full border pointer-events-none ${
                    isDark ? 'border-white/10' : 'border-[#111111]/15'
                  }`}
                />
                <div
                  className={`absolute inset-20 sm:inset-24 rounded-full border border-dotted pointer-events-none ${
                    isDark ? 'border-white/15' : 'border-[#111111]/20'
                  }`}
                />

                {/* Central Disc Operator Hub with Amitesh's Portrait */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className={`relative z-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center shadow-xl border-4 cursor-pointer overflow-hidden group transition-all duration-300 ${
                    isDark
                      ? 'border-emerald-400/50 bg-[#1e1e1e]'
                      : 'border-[#111111] bg-white'
                  }`}
                  data-cursor="OPERATOR"
                >
                  <img
                    src={PERSONAL_INFO.portrait}
                    onError={(e) => {
                      if (PERSONAL_INFO.fallbackPortrait && e.currentTarget.src !== PERSONAL_INFO.fallbackPortrait) {
                        e.currentTarget.src = PERSONAL_INFO.fallbackPortrait;
                      }
                    }}
                    alt="Amitesh Kumar"
                    className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.92] group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center mt-auto mb-1.5 sm:mb-2">
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] font-mono text-emerald-300 font-bold drop-shadow-md">
                      OPERATOR
                    </span>
                  </div>
                </motion.div>

                {/* Rotating Container for the Orbiting Nodes (Smooth continuous rotation) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {ORBIT_STEPS.map((step, idx) => {
                    const rad = (step.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    const isHovered = activeNode === idx;

                    return (
                      <div
                        key={step.label}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        className="absolute flex items-center justify-center pointer-events-auto"
                      >
                        {/* Counter-rotation on each node keeps the text level and perfectly upright */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                          onMouseEnter={() => setActiveNode(idx)}
                          onMouseLeave={() => setActiveNode(null)}
                          className="cursor-pointer"
                          data-cursor={step.label}
                        >
                          <motion.div
                            animate={{
                              scale: isHovered ? 1.15 : 1,
                              backgroundColor: isHovered
                                ? isDark
                                  ? '#ffffff'
                                  : '#111111'
                                : isDark
                                ? '#1c1c1c'
                                : '#ffffff',
                              color: isHovered
                                ? isDark
                                  ? '#111111'
                                  : '#ffffff'
                                : isDark
                                ? '#f8f6f0'
                                : '#111111',
                              borderColor: isHovered
                                ? isDark
                                  ? '#ffffff'
                                  : '#111111'
                                : isDark
                                ? '#333333'
                                : '#dcd6c8',
                            }}
                            transition={{ duration: 0.2 }}
                            className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-4 md:py-2 rounded-full border shadow-md flex items-center gap-1.5 sm:gap-2 whitespace-nowrap select-none"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="font-display text-[11px] sm:text-xs md:text-sm font-bold tracking-wider">
                              {step.label}
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
