'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, CheckCircle2, ExternalLink, ShieldCheck, Sun, Zap, Sparkles, PhoneCall } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function PmSuryaGharBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7f8f4] text-[#17251d]">
      
      {/* Dynamic Keyframe Animations */}
      <style jsx>{`
        @keyframes solarPulseGlow {
          0%, 100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
        @keyframes orbitSlowSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes sunbeamPulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.98);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.03);
          }
        }
        @keyframes photonFloat1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-28px) translateX(14px);
            opacity: 0.9;
          }
        }
        @keyframes photonFloat2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-38px) translateX(-18px);
            opacity: 0.85;
          }
        }
        @keyframes photonFloat3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-22px) translateX(20px);
            opacity: 0.95;
          }
        }
        @keyframes badgeShimmer {
          0% {
            transform: translateX(-150%) rotate(25deg);
          }
          20%, 100% {
            transform: translateX(250%) rotate(25deg);
          }
        }
        @keyframes leaderBreathing {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes raySpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes cgPulseNode {
          0%, 100% {
            r: 4.2;
            opacity: 1;
          }
          50% {
            r: 7;
            opacity: 0.45;
          }
        }
        .anim-solar-pulse {
          animation: solarPulseGlow 8s ease-in-out infinite;
        }
        .anim-orbit-spin {
          animation: orbitSlowSpin 90s linear infinite;
        }
        .anim-sunbeam {
          animation: sunbeamPulse 10s ease-in-out infinite;
        }
        .anim-photon-1 {
          animation: photonFloat1 13s ease-in-out infinite;
        }
        .anim-photon-2 {
          animation: photonFloat2 17s ease-in-out infinite 2s;
        }
        .anim-photon-3 {
          animation: photonFloat3 15s ease-in-out infinite 4s;
        }
        .anim-shimmer {
          animation: badgeShimmer 6s ease-in-out infinite;
        }
        .anim-leader {
          animation: leaderBreathing 8s ease-in-out infinite;
        }
        .anim-ray-spin {
          animation: raySpin 18s linear infinite;
        }
        .anim-cg-node {
          animation: cgPulseNode 2.5s ease-in-out infinite;
        }
        .portrait-organic-blend {
          mix-blend-mode: multiply;
          -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
        }
      `}</style>

      {/* AMBIENT BACKGROUND: Solar Aurora, Concentric Energy Waves & Dotted India Map */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        
        {/* Soft Sunlight Beam from Top Center */}
        <div className="anim-sunbeam absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#eef3ea] via-[#f7f8f4]/60 to-transparent" />

        {/* Central Luminous Solar Pulse behind Title */}
        <div className="anim-solar-pulse absolute left-1/2 top-1/2 w-[760px] h-[480px] rounded-full bg-gradient-to-br from-[#d9efc5]/50 via-[#fef08a]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Forest Green & Lime Ambient Side Halos */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#287a4b]/12 via-[#d9efc5]/22 to-transparent blur-3xl" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-[#287a4b]/12 via-[#d9efc5]/22 to-transparent blur-3xl" />

        {/* Concentric Clean-Energy Planetary Orbits */}
        <div className="anim-orbit-spin absolute left-1/2 top-1/2 w-[940px] h-[940px] opacity-[0.20] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 940 940" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="470" cy="470" r="440" stroke="#287a4b" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="470" cy="470" r="340" stroke="#287a4b" strokeWidth="0.9" strokeDasharray="4 6" />
            <circle cx="470" cy="470" r="240" stroke="#f59e0b" strokeWidth="0.9" strokeDasharray="3 5" />
            <circle cx="470" cy="470" r="140" stroke="#287a4b" strokeWidth="0.8" strokeDasharray="2 4" />
          </svg>
        </div>

        {/* Themed SVG Dotted Map of India with Chhattisgarh Golden Solar Pulse */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[840px] h-[500px] opacity-[0.22]"
          viewBox="0 0 500 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Northern Himalayan Region (Kashmir, Himachal, Uttarakhand) */}
          <circle cx="242" cy="48" r="2.8" fill="#287a4b" />
          <circle cx="252" cy="52" r="2.5" fill="#287a4b" />
          <circle cx="235" cy="62" r="2.8" fill="#287a4b" />
          <circle cx="248" cy="65" r="3" fill="#287a4b" />
          <circle cx="260" cy="68" r="2.6" fill="#287a4b" />
          <circle cx="230" cy="80" r="3" fill="#287a4b" />
          <circle cx="245" cy="82" r="3.2" fill="#287a4b" />
          <circle cx="258" cy="85" r="3" fill="#287a4b" />
          <circle cx="270" cy="88" r="2.8" fill="#287a4b" />

          {/* North-West Plains & Rajasthan */}
          <circle cx="215" cy="98" r="3" fill="#287a4b" />
          <circle cx="230" cy="100" r="3.2" fill="#287a4b" />
          <circle cx="245" cy="102" r="3.5" fill="#287a4b" />
          <circle cx="262" cy="105" r="3.2" fill="#287a4b" />
          <circle cx="198" cy="120" r="3" fill="#287a4b" />
          <circle cx="215" cy="120" r="3.4" fill="#287a4b" />
          <circle cx="232" cy="122" r="3.5" fill="#287a4b" />
          <circle cx="250" cy="124" r="3.5" fill="#287a4b" />
          <circle cx="268" cy="126" r="3.2" fill="#287a4b" />
          <circle cx="185" cy="142" r="3.2" fill="#287a4b" />
          <circle cx="205" cy="144" r="3.5" fill="#287a4b" />
          <circle cx="225" cy="145" r="3.8" fill="#287a4b" />
          <circle cx="246" cy="146" r="3.6" fill="#287a4b" />

          {/* Gujarat Coast */}
          <circle cx="165" cy="165" r="3.4" fill="#287a4b" />
          <circle cx="180" cy="168" r="3.6" fill="#287a4b" />
          <circle cx="152" cy="182" r="3.2" fill="#287a4b" />
          <circle cx="170" cy="185" r="3.5" fill="#287a4b" />
          <circle cx="190" cy="185" r="3.8" fill="#287a4b" />

          {/* Central India & Gangetic Plain */}
          <circle cx="282" cy="126" r="3.2" fill="#287a4b" />
          <circle cx="300" cy="130" r="3" fill="#287a4b" />
          <circle cx="268" cy="148" r="3.5" fill="#287a4b" />
          <circle cx="288" cy="150" r="3.4" fill="#287a4b" />
          <circle cx="308" cy="154" r="3" fill="#287a4b" />
          <circle cx="210" cy="168" r="3.6" fill="#287a4b" />
          <circle cx="232" cy="168" r="3.8" fill="#287a4b" />
          <circle cx="254" cy="170" r="4" fill="#287a4b" />
          <circle cx="276" cy="172" r="3.8" fill="#287a4b" />
          <circle cx="298" cy="174" r="3.5" fill="#287a4b" />
          <circle cx="318" cy="176" r="3.5" fill="#287a4b" />

          {/* CHHATTISGARH HUB: Radiating Solar Amber Node (OM SUNBUILD & CM Sai) */}
          <circle cx="268" cy="192" r="4.2" fill="#d97706" />
          <circle cx="285" cy="194" r="4.8" fill="#f59e0b" />
          <circle cx="270" cy="214" r="4.2" fill="#d97706" />
          <circle cx="288" cy="216" r="4.8" fill="#f59e0b" />
          <circle cx="280" cy="236" r="4" fill="#d97706" />
          <circle className="anim-cg-node" cx="285" cy="194" r="7" stroke="#f59e0b" strokeWidth="1.5" fill="none" />

          {/* East & North-East */}
          <circle cx="338" cy="155" r="2.8" fill="#287a4b" />
          <circle cx="358" cy="150" r="2.6" fill="#287a4b" />
          <circle cx="380" cy="142" r="2.6" fill="#287a4b" />
          <circle cx="400" cy="136" r="2.4" fill="#287a4b" />
          <circle cx="340" cy="175" r="3" fill="#287a4b" />
          <circle cx="362" cy="172" r="2.8" fill="#287a4b" />

          {/* Deccan Plateau & Coastal South */}
          <circle cx="205" cy="208" r="3.5" fill="#287a4b" />
          <circle cx="225" cy="210" r="3.6" fill="#287a4b" />
          <circle cx="246" cy="212" r="3.8" fill="#287a4b" />
          <circle cx="215" cy="235" r="3.5" fill="#287a4b" />
          <circle cx="236" cy="238" r="3.6" fill="#287a4b" />
          <circle cx="258" cy="240" r="3.6" fill="#287a4b" />
          <circle cx="305" cy="232" r="3.2" fill="#287a4b" />
          <circle cx="320" cy="225" r="3" fill="#287a4b" />
          <circle cx="225" cy="265" r="3.4" fill="#287a4b" />
          <circle cx="245" cy="268" r="3.5" fill="#287a4b" />
          <circle cx="265" cy="268" r="3.4" fill="#287a4b" />
          <circle cx="232" cy="295" r="3.2" fill="#287a4b" />
          <circle cx="250" cy="298" r="3.4" fill="#287a4b" />
          <circle cx="240" cy="325" r="3.2" fill="#287a4b" />
          <circle cx="252" cy="330" r="3.2" fill="#287a4b" />
          <circle cx="245" cy="355" r="3" fill="#287a4b" />
          <circle cx="248" cy="380" r="2.8" fill="#287a4b" />
        </svg>

        {/* Floating Solar Photons / Sparkling Light Particles */}
        <div className="anim-photon-1 absolute left-[20%] top-[28%] w-3 h-3 rounded-full bg-[#f59e0b]/40 blur-[0.5px] shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
        <div className="anim-photon-2 absolute right-[22%] top-[36%] w-3.5 h-3.5 rounded-full bg-[#287a4b]/35 blur-[0.5px] shadow-[0_0_10px_rgba(40,122,75,0.4)]" />
        <div className="anim-photon-3 absolute left-[46%] top-[68%] w-2.5 h-2.5 rounded-full bg-[#f59e0b]/45 blur-[0.5px]" />
        <div className="anim-photon-1 absolute right-[32%] top-[74%] w-3 h-3 rounded-full bg-[#d9efc5]/60 blur-[0.5px]" />
      </div>

      {/* FULL-WIDTH CONTENT SECTION */}
      <div className="relative z-10 w-full pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10">

        {/* Section Top Eyebrow Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-[#d9e0d8]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287a4b] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#287a4b]" />
                </span>
                <p className="eyebrow" style={{ color: 'var(--primary, #287a4b)', margin: 0, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 700 }}>
                  CENTRAL &amp; CHHATTISGARH STATE SOLAR MISSION
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-[#526055] font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#123b28] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#287a4b]" />
                  MNRE &amp; CREDA Approved Partner
                </span>
                <span>•</span>
                <span>OM SUNBUILD Rooftop EPC</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 
          RESPONSIVE GRID LAYOUT:
          - MOBILE ORDER (Exact Requirement):
              1st: Shri Narendra Modi (order-1)
              2nd: Center Content (order-2)
              3rd: Shri Vishnu Deo Sai (order-3)
          - DESKTOP (lg):
              Left: Modi (lg:order-1, lg:col-span-3)
              Center: Hero Content (lg:order-2, lg:col-span-6)
              Right: Vishnu Deo Sai (lg:order-3, lg:col-span-3)
        */}
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-2">

            {/* 1. MODI PORTRAIT (MOBILE: 1ST, DESKTOP: LEFT) */}
            <div className="order-1 lg:order-1 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-end">
              <ScrollReveal animation="fade-up" duration={700} delay={100}>
                <div className="relative group w-full flex flex-col items-center lg:items-start">
                  
                  {/* Subtle Radiant Aura Halo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#287a4b]/20 via-[#d9efc5]/25 to-transparent blur-2xl scale-95 pointer-events-none" />

                  {/* Modi Portrait with organic multiply blend */}
                  <div className="anim-leader relative w-44 h-52 sm:w-56 sm:h-64 md:w-64 md:h-76 lg:w-72 lg:h-[350px] flex items-end justify-center lg:justify-start mx-auto lg:mx-0">
                    <Image
                      src="/pm-surya-ghar/modi-portrait.png"
                      alt="Shri Narendra Modi - Hon'ble Prime Minister of India"
                      width={255}
                      height={308}
                      className="portrait-organic-blend w-auto h-full max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>

                  {/* Identification Tag */}
                  <div className="mt-2 text-center lg:text-left w-full pl-0 lg:pl-3">
                    <span className="inline-block text-[10.5px] uppercase tracking-wider font-bold text-[#287a4b] mb-0.5">
                      Government of India
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#123b28] tracking-tight leading-tight">
                      Shri Narendra Modi
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#4d5e53] font-medium leading-snug mt-0.5">
                      Hon’ble Prime Minister of India
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 2. CENTER CONTENT (MOBILE: 2ND, DESKTOP: CENTER) */}
            <div className="order-2 lg:order-2 lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6 pb-2 lg:pb-4">
              
              {/* Mission Pill Badge with Animated Shimmer */}
              <ScrollReveal animation="fade-up" duration={600} delay={50}>
                <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef3ea] border border-[#d2e0d3] shadow-xs mb-3.5 sm:mb-4 overflow-hidden">
                  <div className="anim-shimmer absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
                  <Sun className="anim-ray-spin w-4 h-4 text-[#d97706] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#123b28]">
                    PM Surya Ghar: Muft Bijli Yojana
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#287a4b]" />
                  <span className="text-[11px] font-medium text-[#3b4c40]">
                    National Rooftop Mission
                  </span>
                </div>
              </ScrollReveal>

              {/* Main Headline: OM SUNBUILD Signature Styling (Deep Green + Radiant Italic Accent) */}
              <ScrollReveal animation="fade-up" duration={700} delay={140}>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight text-[#123b28] leading-[1.08] font-medium"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  PM Surya Ghar:<br />
                  <em className="italic font-normal bg-gradient-to-r from-[#1b5e39] via-[#287a4b] to-[#c27803] bg-clip-text text-transparent block mt-0.5">
                    Muft Bijli Yojana
                  </em>
                </h2>
              </ScrollReveal>

              {/* Authoritative Quote / Scheme Description */}
              <ScrollReveal animation="fade-up" duration={700} delay={220}>
                <div className="mt-4 sm:mt-5 max-w-xl mx-auto">
                  <p className="text-xs sm:text-sm md:text-[14.5px] text-[#3e4f44] leading-relaxed font-normal">
                    &ldquo;In order to further sustainable development and people&apos;s well-being, we are launching the{' '}
                    <strong className="font-semibold text-[#123b28]">PM Surya Ghar: Muft Bijli Yojana</strong>. This project, with an investment of over{' '}
                    <strong className="font-semibold text-[#1e4832]">Rs. 75,000 crores</strong>, aims to light up{' '}
                    <strong className="font-semibold text-[#123b28]">1 crore households</strong> by providing up to{' '}
                    <strong className="font-semibold text-[#1e4832]">300 units of free electricity</strong> every month.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              {/* Center Solar Panel Motif & Horizontal Energy Grid Lines */}
              <ScrollReveal animation="fade-up" duration={700} delay={300}>
                <div className="flex items-center justify-center gap-3 sm:gap-4 my-5 sm:my-6 w-full max-w-xl">
                  <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#287a4b]/40 to-[#287a4b]" />
                  
                  {/* Glowing Solar Panel Crest */}
                  <div className="relative flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-[#eef3ea] border border-[#d2e0d3] shadow-xs">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Radiating Sun Rays */}
                      <path d="M18 4V1" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 7L8 5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M26 7L28 5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M6 14H3" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M33 14H30" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="18" cy="14" r="5" fill="#f59e0b" />
                      {/* Solar Panel Cells in Forest Green & Lime Grid */}
                      <path d="M6 22L10 32H26L30 22H6Z" fill="#123b28" stroke="#0e291c" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M18 22V32" stroke="#d9efc5" strokeWidth="1.5" />
                      <path d="M12 27H24" stroke="#d9efc5" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#287a4b]/40 to-[#287a4b]" />
                </div>
              </ScrollReveal>

              {/* Symmetrical Dual Leader Designation Bar */}
              <ScrollReveal animation="fade-up" duration={700} delay={360}>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-xl pb-4 border-b border-[#d9e0d8]">
                  <div className="text-center sm:text-right pr-1 sm:pr-4">
                    <p className="text-xs sm:text-sm font-bold text-[#123b28] leading-tight">Shri Narendra Modi</p>
                    <p className="text-[11px] sm:text-xs text-[#287a4b] font-semibold leading-tight mt-0.5">Hon’ble Prime Minister of India</p>
                  </div>
                  <div className="text-center sm:text-left pl-1 sm:pl-4">
                    <p className="text-xs sm:text-sm font-bold text-[#123b28] leading-tight">Shri Vishnu Deo Sai</p>
                    <p className="text-[11px] sm:text-xs text-[#287a4b] font-semibold leading-tight mt-0.5">Hon’ble Chief Minister of Chhattisgarh</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Key Scheme Benefits - Matching OM SUNBUILD Card Styling with Hover Glow */}
              <ScrollReveal animation="fade-up" duration={700} delay={420}>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xl">
                  <div className="p-3 rounded-xl bg-white border border-[#d9e0d8] shadow-xs text-left transition-all duration-300 hover:border-[#287a4b] hover:shadow-sm">
                    <div className="flex items-center gap-1.5 text-[#287a4b]">
                      <Zap className="w-3.5 h-3.5 fill-[#287a4b] text-[#287a4b]" />
                      <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider">Free Electricity</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#123b28] mt-1 leading-tight">
                      Up to 300 Units<span className="text-[11px] font-normal text-[#68746b] block">every month</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#d9e0d8] shadow-xs text-left transition-all duration-300 hover:border-[#d97706] hover:shadow-sm">
                    <div className="flex items-center gap-1.5 text-[#d97706]">
                      <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                      <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider">Direct Subsidy</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#123b28] mt-1 leading-tight">
                      Up to ₹78,000<span className="text-[11px] font-normal text-[#68746b] block">DBT bank transfer</span>
                    </p>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-[#d9e0d8] shadow-xs text-left transition-all duration-300 hover:border-[#287a4b] hover:shadow-sm">
                    <div className="flex items-center gap-1.5 text-[#123b28]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#287a4b]" />
                      <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider">Approved EPC</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#123b28] mt-1 leading-tight">
                      OM SUNBUILD<span className="text-[11px] font-normal text-[#68746b] block">CREDA / C.G. Liaison</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons - Matching OM SUNBUILD Dark Green Button Style */}
              <ScrollReveal animation="fade-up" duration={700} delay={480}>
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
                 <a
  href="#contact"
  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#123b28] hover:bg-[#1a4f36] !text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
>
  <span className="!text-white">Check Subsidy &amp; Apply</span>
  <ArrowUpRight className="w-4 h-4 !text-white" />
</a>

                  <a
                    href="https://pmsuryaghar.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-[#eef3ea] border border-[#d9e0d8] text-[#123b28] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                  >
                    <span>pmsuryaghar.gov.in</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#287a4b]" />
                  </a>
                </div>
              </ScrollReveal>

            </div>

            {/* 3. VISHNU DEO SAI PORTRAIT (MOBILE: 3RD, DESKTOP: RIGHT) */}
            <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right h-full justify-end">
              <ScrollReveal animation="fade-up" duration={700} delay={100}>
                <div className="relative group w-full flex flex-col items-center lg:items-end">
                  
                  {/* Subtle Radiant Aura Halo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[#287a4b]/20 via-[#d9efc5]/25 to-transparent blur-2xl scale-95 pointer-events-none" />

                  {/* Sai Portrait with organic multiply blend */}
                  <div className="anim-leader relative w-44 h-52 sm:w-56 sm:h-64 md:w-64 md:h-76 lg:w-72 lg:h-[350px] flex items-end justify-center lg:justify-end mx-auto lg:mx-0">
                    <Image
                      src="/pm-surya-ghar/sai-portrait.png"
                      alt="Shri Vishnu Deo Sai - Hon'ble Chief Minister of Chhattisgarh"
                      width={255}
                      height={308}
                      className="portrait-organic-blend w-auto h-full max-h-[350px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>

                  {/* Leader Identification Tag */}
                  <div className="mt-2 text-center lg:text-right w-full pr-0 lg:pr-3">
                    <span className="inline-block text-[10.5px] uppercase tracking-wider font-bold text-[#287a4b] mb-0.5">
                      Govt. of Chhattisgarh
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#123b28] tracking-tight leading-tight">
                      Shri Vishnu Deo Sai
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#4d5e53] font-medium leading-snug mt-0.5">
                      Hon’ble Chief Minister of Chhattisgarh
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
