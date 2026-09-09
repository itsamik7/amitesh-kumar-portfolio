import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Instagram, ArrowUpRight, Copy, Check, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ContactSection() {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className={`relative w-full pt-28 pb-14 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#111111] text-[#f8f6f0]' : 'bg-[#f8f6f0] text-[#111111]'
      }`}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-12 pb-20 border-b ${
            isDark ? 'border-white/10' : 'border-[#e4e0d6]'
          }`}
        >
          {/* Headline & Supporting Copy */}
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] ${
                isDark ? 'text-emerald-400' : 'text-emerald-700 font-semibold'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>INQUIRIES & COLLABORATIONS</span>
            </div>

            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}
            >
              Let’s
              <br />
              Connect.
            </h2>

            <p
              className={`text-lg sm:text-xl font-light leading-relaxed mb-8 ${
                isDark ? 'text-white/80' : 'text-[#333338]'
              }`}
            >
              “Always open for a good conversation — about opportunities, ideas, or interesting problems to solve.”
            </p>

            {/* Direct contact symbols */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Email Symbol with copy trigger */}
              <div className="relative group">
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  aria-label="Copy direct email address"
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-200 active:scale-95 shadow-sm ${
                    isDark
                      ? 'bg-[#181818] border-white/15 text-white hover:bg-white hover:text-[#111111] hover:border-white'
                      : 'bg-white border-[#e4e0d6] text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                  title="Click to copy email address"
                >
                  {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Mail className="w-5 h-5" />}
                </a>
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                    isDark ? 'text-white/60' : 'text-black/60'
                  }`}
                >
                  {copied ? 'Copied!' : 'Email'}
                </span>
              </div>

              {/* LinkedIn Symbol */}
              <div className="relative group">
                <a
                  href={PERSONAL_INFO.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LINKEDIN"
                  aria-label="LinkedIn profile"
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-200 active:scale-95 shadow-sm ${
                    isDark
                      ? 'bg-[#181818] border-white/15 text-white hover:bg-white hover:text-[#111111] hover:border-white'
                      : 'bg-white border-[#e4e0d6] text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                  title="Visit LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                    isDark ? 'text-white/60' : 'text-black/60'
                  }`}
                >
                  LinkedIn
                </span>
              </div>

              {/* Instagram Symbol */}
              <div className="relative group">
                <a
                  href="https://www.instagram.com/itsamik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="INSTAGRAM"
                  aria-label="Instagram profile"
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-200 active:scale-95 shadow-sm ${
                    isDark
                      ? 'bg-[#181818] border-white/15 text-white hover:bg-white hover:text-[#111111] hover:border-white'
                      : 'bg-white border-[#e4e0d6] text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                  title="Visit Instagram @itsamik"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                    isDark ? 'text-white/60' : 'text-black/60'
                  }`}
                >
                  Instagram
                </span>
              </div>
            </div>
          </div>

          {/* Back to top button on right side */}
          <div className="flex sm:justify-end pb-2">
            <button
              onClick={handleScrollToTop}
              data-cursor="TOP"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-mono uppercase tracking-widest transition-colors ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                  : 'bg-black/5 border-black/10 text-black/70 hover:text-black hover:bg-black/10'
              }`}
              aria-label="Back to top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Final Footer */}
        <div
          className={`pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono ${
            isDark ? 'text-white/50' : 'text-black/50'
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`font-display text-base font-black tracking-wider ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}
            >
              {PERSONAL_INFO.name}
            </span>
            <span>•</span>
            <span className={isDark ? 'text-white/70' : 'text-black/70'}>
              Strategy • Growth • Operations
            </span>
          </div>

          {/* Footer Navigation & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className={`transition-colors hover:text-emerald-500 underline-offset-4 hover:underline ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}
            >
              {PERSONAL_INFO.contact.email}
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-emerald-500 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-emerald-500 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              Instagram
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
