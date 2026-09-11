'use client'

import React from 'react'
import {
  MessageSquare,
  FileText,
  Settings,
  Wrench,
  ClipboardCheck,
  Headphones,
  ArrowRight
} from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Understand your needs and goals',
    color: '#059669', // Emerald
    accentHalo: 'rgba(5, 150, 105, 0.28)',
    iconColor: 'text-[#059669]',
    pillBg: 'bg-[#059669]',
    Icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Site assessment',
    desc: 'Evaluate your space and feasibility',
    color: '#f59e0b', // Amber / Solar Gold
    accentHalo: 'rgba(245, 158, 11, 0.28)',
    iconColor: 'text-[#f59e0b]',
    pillBg: 'bg-[#f59e0b]',
    Icon: FileText,
  },
  {
    num: '03',
    title: 'System planning',
    desc: 'Design the right solution for you',
    color: '#0284c7', // Sky Blue
    accentHalo: 'rgba(2, 132, 199, 0.28)',
    iconColor: 'text-[#0284c7]',
    pillBg: 'bg-[#0284c7]',
    Icon: Settings,
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Professional and safe setup',
    color: '#ea580c', // Coral / Deep Orange
    accentHalo: 'rgba(234, 88, 12, 0.28)',
    iconColor: 'text-[#ea580c]',
    pillBg: 'bg-[#ea580c]',
    Icon: Wrench,
  },
  {
    num: '05',
    title: 'Testing & handover',
    desc: 'Ensure everything works perfectly',
    color: '#6366f1', // Indigo / Purple
    accentHalo: 'rgba(99, 102, 241, 0.28)',
    iconColor: 'text-[#6366f1]',
    pillBg: 'bg-[#6366f1]',
    Icon: ClipboardCheck,
  },
  {
    num: '06',
    title: 'Support',
    desc: 'Ongoing assistance whenever you need',
    color: '#10b981', // Mint Green
    accentHalo: 'rgba(16, 185, 129, 0.28)',
    iconColor: 'text-[#10b981]',
    pillBg: 'bg-[#10b981]',
    Icon: Headphones,
  },
]

export function ProcessTimeline() {
  return (
    <section className="process-section relative w-full py-8 sm:py-10 lg:py-12 bg-[#f7f8f4] overflow-hidden">
      
      {/* Keyframe Styles */}
      <style jsx>{`
        @keyframes pulseHalo {
          0%, 100% {
            transform: scale(1);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.95;
          }
        }
        @keyframes flowDash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .anim-halo {
          animation: pulseHalo 5s ease-in-out infinite;
        }
        .anim-wave-line {
          stroke-dasharray: 8 6;
          animation: flowDash 15s linear infinite;
        }
      `}</style>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-100/30 via-amber-100/25 to-blue-100/30 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Compact, Refined, Attractive Typography */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="eyebrow" style={{ color: 'var(--primary, #287a4b)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em', margin: 0 }}>
                HOW IT WORKS
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#123b28] tracking-tight leading-[1.15] mt-1.5"
                style={{ letterSpacing: '-0.03em' }}
              >
                A clear path<br />
                <em className="italic font-normal bg-gradient-to-r from-[#1b5e39] via-[#287a4b] to-[#d97706] bg-clip-text text-transparent not-italic">
                  to clean solar energy.
                </em>
              </h2>
            </div>
            
            <p className="max-w-md text-xs sm:text-sm text-[#526357] leading-relaxed">
              No guesswork. No unnecessary complexity. Just a straightforward 6-step journey from rooftop assessment to lifetime clean energy generation.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET HORIZONTAL WAVE PROCESS (From Reference Image)            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full pt-2 pb-2">
          
          {/* Continuous Connecting Wave SVG behind the Nodes */}
          <div className="absolute top-[68px] inset-x-0 w-full h-[60px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1140 60"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="20%" stopColor="#f59e0b" />
                  <stop offset="40%" stopColor="#0284c7" />
                  <stop offset="60%" stopColor="#ea580c" />
                  <stop offset="80%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Smooth S-curve path connecting all 6 circle centers (y=30) */}
              <path
                d="M 95 30 
                   C 140 46, 170 14, 222 30 
                   C 267 46, 297 14, 349 30 
                   C 394 46, 424 14, 476 30 
                   C 521 46, 551 14, 603 30 
                   C 648 46, 678 14, 730 30 
                   C 775 46, 805 14, 857 30 
                   C 902 46, 932 14, 984 30
                   C 1029 46, 1045 20, 1060 30"
                stroke="url(#waveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="anim-wave-line"
              />

              {/* Connecting Small Nodes on the path (matching reference image) */}
              <circle cx="185" cy="30" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="375" cy="30" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="565" cy="30" r="4.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="755" cy="30" r="4.5" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="945" cy="30" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </div>

          {/* 6 Step Nodes Grid */}
          <div className="grid grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {steps.map((s, idx) => {
              const { Icon } = s
              return (
                <ScrollReveal key={s.num} animation="fade-up" delay={idx * 90}>
                  <div className="group flex flex-col items-center text-center">
                    
                    {/* Circle Node Container */}
                    <div className="relative mb-5 flex flex-col items-center">
                      
                      {/* Top Step Number Badge Pill (Matching Reference) */}
                      <span
                        className={`relative z-20 -mb-2 px-2.5 py-0.5 rounded-full text-[10.5px] font-black text-white shadow-xs ${s.pillBg} transition-transform duration-300 group-hover:scale-110`}
                      >
                        {s.num}
                      </span>

                      {/* Outer Glowing Halo Circle */}
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `radial-gradient(circle, ${s.accentHalo} 0%, rgba(255,255,255,0) 72%)`,
                        }}
                      >
                        {/* Middle Translucent Colored Ring */}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center p-1.5 shadow-sm transition-all duration-300"
                          style={{
                            border: `2px solid ${s.color}40`,
                            backgroundColor: `${s.color}10`,
                          }}
                        >
                          {/* Inner Crisp White Disc */}
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md shadow-slate-900/5 transition-transform duration-300 group-hover:rotate-6">
                            <Icon className={`w-6 h-6 ${s.iconColor} transition-transform duration-300 group-hover:scale-110`} strokeWidth={2.2} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div className="px-1">
                      <h3 className="text-sm font-bold text-[#123b28] tracking-tight mb-1.5 transition-colors group-hover:text-[#287a4b]">
                        {s.title}
                      </h3>
                      <p className="text-[11.5px] text-[#55665a] leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              )
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VERTICAL / CAROUSEL TIMELINE (< 1024px)                    */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative">
          
          {/* Continuous Vertical Timeline Line on Mobile */}
          <div className="absolute left-[34px] top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-[#059669] via-[#0284c7] to-[#10b981] rounded-full z-0" />

          <div className="space-y-3 sm:space-y-4 relative z-10">
            {steps.map((s, idx) => {
              const { Icon } = s
              return (
                <ScrollReveal key={s.num} animation="fade-up" delay={idx * 70}>
                  <div className="flex items-start gap-3.5 p-2.5 sm:p-3 rounded-2xl bg-white/70 border border-[#e5ece2] shadow-xs">
                    
                    {/* Node Circle */}
                    <div className="relative shrink-0 flex flex-col items-center">
                      <span
                        className={`-mb-1.5 z-10 px-2 py-0.2 rounded-full text-[9.5px] font-black text-white ${s.pillBg}`}
                      >
                        {s.num}
                      </span>
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center p-1"
                        style={{
                          border: `2px solid ${s.color}50`,
                          backgroundColor: `${s.color}15`,
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-xs">
                          <Icon className={`w-5 h-5 ${s.iconColor}`} strokeWidth={2.2} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5">
                      <h3 className="text-base font-bold text-[#123b28] tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#55665a] leading-relaxed mt-0.5">
                        {s.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
