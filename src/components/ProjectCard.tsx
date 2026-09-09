import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenCaseStudy(project)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      data-cursor="CASE STUDY"
      className={`group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${
        isDark
          ? 'bg-[#181818] border-white/10 hover:border-white/30 text-white'
          : 'bg-white border-[#e4e0d6] hover:border-black/30 text-[#111111]'
      }`}
    >
      {/* Top Media Container with subtle zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#202020]">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover filter brightness-[0.92] group-hover:brightness-100 transition-all duration-500"
        />

        {/* Gradient Scrim */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isDark
              ? 'from-[#181818] via-[#181818]/30 to-transparent'
              : 'from-black/40 via-transparent to-transparent'
          }`}
        />

        {/* Hover Arrow indicator */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isDark
                ? 'bg-white/10 group-hover:bg-white border-white/20 text-white group-hover:text-[#111111]'
                : 'bg-black/20 group-hover:bg-black border-black/20 text-white group-hover:text-white'
            }`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-semibold">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white group-hover:text-white/90' : 'text-[#111111] group-hover:text-[#222228]'
            }`}
          >
            {project.title}
          </h3>

          {/* Subtitle / Description */}
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed line-clamp-3 ${
              isDark ? 'text-white/70' : 'text-[#55555c]'
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div
          className={`grid grid-cols-3 gap-2 pt-5 border-t ${
            isDark ? 'border-white/10' : 'border-[#e4e0d6]'
          }`}
        >
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span
                className={`font-display text-base sm:text-lg font-black transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-emerald-300'
                    : 'text-[#111111] group-hover:text-emerald-700'
                }`}
              >
                {metric.value}
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-mono tracking-wider truncate ${
                  isDark ? 'text-white/50' : 'text-[#77777e]'
                }`}
              >
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* View Case Study CTA link */}
        <div
          className={`pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
            isDark ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'
          }`}
        >
          <span>Read Full Case Study</span>
          <span className="text-emerald-500 font-mono text-[11px]">01 → 05</span>
        </div>
      </div>
    </motion.div>
  );
}
