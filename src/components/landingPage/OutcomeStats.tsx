"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Stat Data ───────────────────────────────────────────────────── */
const STATS = [
  { value: "93%",  label: "Placements Rate",   icon: "workspace_premium" },
  { value: "700+", label: "Hiring Partners",   icon: "handshake"         },
  { value: "40%",  label: "Avg Salary Hike",   icon: "trending_up"       },
];

/* ─── Animated counter hook ───────────────────────────────────────── */
function useCountUp(target: string, started: boolean) {
  const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix  = target.replace(/[0-9.]/g, "");
  const DURATION = 1600; // ms — well under the 2s requirement

  // Always show suffix from the very first frame ("0%", "0+", etc.)
  const [display, setDisplay] = useState(`0${suffix}`);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset whenever component re-mounts or target changes
    setDisplay(`0${suffix}`);
  }, [target, suffix]);

  useEffect(() => {
    if (!started || isNaN(numeric)) return;

    // Cancel any in-flight animation
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      // ease-out cubic for a natural deceleration
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric) + suffix);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(target); // guarantee exact final value
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [started, numeric, suffix, target]);

  return display;
}

/* ─── Single Stat Card ────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  icon,
  started,
  index,
}: {
  value: string;
  label: string;
  icon: string;
  started: boolean;
  index: number;
}) {
  const count = useCountUp(value, started);

  return (
    <div
      className="outcome-stat-card group relative flex flex-col items-center justify-center gap-3 md:gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm px-6 py-8 md:px-10 md:py-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Hover glow accent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(20,57,159,0.06) 0%, transparent 70%)" }}
      />

      {/* Icon badge */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-fixed/10 group-hover:bg-primary-fixed/20 transition-colors duration-300">
        <span
          className="material-symbols-outlined text-primary text-xl"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
        >
          {icon}
        </span>
      </div>

      {/* Animated Number */}
      <div className="font-headline text-[2.6rem] md:text-[3.2rem] font-extrabold text-primary leading-none tracking-tight">
        {count}
      </div>

      {/* Label */}
      <div className="font-label text-xs md:text-sm font-medium uppercase tracking-widest text-outline text-center">
        {label}
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-secondary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-3/4" />
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */
export function OutcomeStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted]   = useState(false);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStarted(true); // fire immediately — no delay needed
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="outcome-stats"
      className="w-full py-16 md:py-20 bg-surface-container-low"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────── */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-label text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-3">
            Whatever your career goal in digital, we&apos;ve got your back
          </p>
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-extrabold text-on-surface leading-tight">
            Outcomes That Speak Louder Than{" "}
            <span className="text-secondary-fixed-dim">Certificates</span>
          </h2>
        </div>

        {/* ── Stat Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                started={started}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
