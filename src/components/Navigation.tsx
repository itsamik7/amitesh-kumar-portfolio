import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation({ onContactClick }: NavigationProps) {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ['hero', 'about', 'experience', 'ventures', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'py-3.5 bg-[#111111]/85 backdrop-blur-md border-b border-white/10 shadow-2xl text-[#f8f6f0]'
              : 'py-3.5 bg-[#f8f6f0]/90 backdrop-blur-md border-b border-black/10 shadow-lg text-[#111111]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Name with Avatar */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-1 focus:ring-emerald-400/40 rounded px-1"
            data-cursor="HOME"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-xs flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <img
                src={PERSONAL_INFO.portrait}
                onError={(e) => {
                  if (PERSONAL_INFO.fallbackPortrait && e.currentTarget.src !== PERSONAL_INFO.fallbackPortrait) {
                    e.currentTarget.src = PERSONAL_INFO.fallbackPortrait;
                  }
                }}
                alt="Amitesh Kumar"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <span
              className={`font-display text-base sm:text-lg tracking-wider font-extrabold uppercase transition-colors ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}
            >
              AMITESH KUMAR
            </span>
          </a>

          {/* Desktop Navigation Links (WORK removed) */}
          <nav
            className={`hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border ${
              isDark
                ? 'bg-white/[0.04] border-white/[0.08] text-white'
                : 'bg-black/[0.04] border-black/[0.08] text-[#111111]'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? isDark
                        ? 'text-white font-bold'
                        : 'text-[#111111] font-bold'
                      : isDark
                      ? 'text-white/60 hover:text-white'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-full ${
                        isDark ? 'bg-white/10' : 'bg-black/10'
                      }`}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg border focus:outline-none ${
                isDark
                  ? 'text-white/80 hover:text-white bg-white/5 border-white/10'
                  : 'text-black/80 hover:text-black bg-black/5 border-black/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-x-0 top-[60px] z-40 backdrop-blur-xl border-b px-6 py-8 md:hidden shadow-2xl ${
              isDark
                ? 'bg-[#111111]/95 border-white/10 text-white'
                : 'bg-[#f8f6f0]/95 border-black/10 text-[#111111]'
            }`}
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-display tracking-wider uppercase py-2 border-b flex items-center justify-between ${
                    isDark
                      ? 'text-white/80 hover:text-white border-white/5'
                      : 'text-black/80 hover:text-black border-black/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <div className="pt-4 mt-2 flex flex-col gap-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs uppercase tracking-wider font-mono opacity-70">
                    Appearance
                  </span>
                  <ThemeToggle showLabel />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
