import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const { isDark } = useTheme();

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {/* Micro Eyebrow with no numbers */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.25em] uppercase ${
          isDark ? 'text-emerald-400' : 'text-emerald-700'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>{label}</span>
      </motion.div>

      {/* Primary Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] ${
          isDark ? 'text-[#f8f6f0]' : 'text-[#111111]'
        } whitespace-pre-line`}
      >
        {title}
      </motion.h2>

      {/* Subtitle / context if any */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            isDark ? 'text-white/70' : 'text-[#55555c]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
