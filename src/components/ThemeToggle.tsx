import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-cursor={isDark ? 'LIGHT' : 'DARK'}
      className={`group relative flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
        isDark
          ? 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
          : 'bg-black/5 hover:bg-black/10 border-black/10 text-[#111111]'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-300" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-mono uppercase tracking-wider font-semibold">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
