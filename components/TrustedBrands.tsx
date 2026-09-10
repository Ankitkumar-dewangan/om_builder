'use client'

import React from 'react'
import { ShieldCheck } from 'lucide-react'

interface BrandItem {
  id: string
  name: string
  category: string
  description: string
  renderIcon: () => React.ReactNode
}

const brands: BrandItem[] = [
  {
    id: 'tata-solar',
    name: 'TATA SOLAR',
    category: 'Solar Module',
    description: 'High-efficiency solar panels with superior performance and long-term reliability.',
    renderIcon: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" aria-label="Tata Solar">
        <circle cx="50" cy="38" r="23" fill="#0b4e8c" />
        <path
          d="M37 27 C43 31, 44 44, 44 47 C44 47, 47 37, 50 30 C53 37, 56 47, 56 47 C56 44, 57 31, 63 27 C58 29, 53 34, 50 39 C47 34, 42 29, 37 27 Z"
          fill="#ffffff"
        />
        <path d="M50 40 L50 48" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        <text
          x="50"
          y="74"
          textAnchor="middle"
          fill="#0b4e8c"
          fontWeight="900"
          fontSize="16"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TATA
        </text>
        <text
          x="50"
          y="86"
          textAnchor="middle"
          fill="#287a4b"
          fontWeight="800"
          fontSize="8"
          letterSpacing="0.18em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          SOLAR
        </text>
      </svg>
    ),
  },
  {
    id: 'waaree',
    name: 'WAAREE',
    category: 'Solar Module',
    description: 'Trusted solar panels known for high efficiency and excellent durability.',
    renderIcon: () => (
      <svg viewBox="0 0 120 100" className="w-full h-full" fill="none" aria-label="Waaree">
        <text
          x="60"
          y="47"
          textAnchor="middle"
          fill="#00873d"
          fontWeight="900"
          fontStyle="italic"
          fontSize="22"
          letterSpacing="-0.03em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          WAAREE
        </text>
        <rect x="102" y="32" width="3.5" height="3.5" fill="#00873d" />
        <path d="M22 53 C45 59, 75 59, 98 53" stroke="#00873d" strokeWidth="2" strokeLinecap="round" />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fill="#dc2626"
          fontStyle="italic"
          fontWeight="700"
          fontSize="8.5"
          letterSpacing="0.01em"
          fontFamily="Georgia, serif"
        >
          One with the Sun
        </text>
      </svg>
    ),
  },
  {
    id: 'adani-solar',
    name: 'ADANI SOLAR',
    category: 'Solar Module',
    description: 'Advanced solar technology delivering reliable and sustainable energy solutions.',
    renderIcon: () => (
      <svg viewBox="0 0 110 100" className="w-full h-full" fill="none" aria-label="Adani Solar">
        <defs>
          <linearGradient id="adaniGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0275d8" />
            <stop offset="50%" stopColor="#6f42c1" />
            <stop offset="100%" stopColor="#e83e8c" />
          </linearGradient>
        </defs>
        <text
          x="55"
          y="50"
          textAnchor="middle"
          fill="url(#adaniGrad)"
          fontWeight="800"
          fontSize="28"
          letterSpacing="-0.03em"
          fontFamily="'Segoe UI', Roboto, sans-serif"
        >
          adani
        </text>
        <text
          x="55"
          y="72"
          textAnchor="middle"
          fill="#17251d"
          fontWeight="700"
          fontSize="14"
          letterSpacing="0.02em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Solar
        </text>
      </svg>
    ),
  },
  {
    id: 'vikram-solar',
    name: 'VIKRAM SOLAR',
    category: 'Solar Module',
    description: 'High-performance solar modules designed for a cleaner, greener future.',
    renderIcon: () => (
      <svg viewBox="0 0 110 100" className="w-full h-full" fill="none" aria-label="Vikram Solar">
        <g transform="translate(55, 30)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={i}
              d="M0 -3 C4 -8, 9 -9, 8 -16 C4 -14, 1 -9, 0 -3 Z"
              fill="#c8102e"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="3.2" fill="#c8102e" />
        </g>
        <text
          x="55"
          y="65"
          textAnchor="middle"
          fill="#17251d"
          fontWeight="900"
          fontSize="17"
          letterSpacing="-0.03em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          vikram
        </text>
        <text
          x="55"
          y="81"
          textAnchor="middle"
          fill="#c8102e"
          fontWeight="900"
          fontSize="17"
          letterSpacing="-0.03em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          solar
        </text>
      </svg>
    ),
  },
  {
    id: 'waaree-inverter',
    name: 'WAAREE INVERTER',
    category: 'Solar Inverter',
    description: 'Smart MPPT technology for higher energy yield and reliable performance.',
    renderIcon: () => (
      <svg viewBox="0 0 110 110" className="w-full h-full" fill="none" aria-label="Waaree Inverter">
        {/* White inverter enclosure with drop shadow */}
        <rect x="28" y="15" width="54" height="70" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        {/* Brand label */}
        <text
          x="55"
          y="27"
          textAnchor="middle"
          fill="#00873d"
          fontWeight="900"
          fontStyle="italic"
          fontSize="8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          WAAREE
        </text>
        {/* Dark Smart LCD Display */}
        <rect x="42" y="38" width="26" height="26" rx="5" fill="#0f172a" />
        <circle cx="55" cy="51" r="5" fill="#22c55e" opacity="0.9" />
        {/* Side Vents */}
        <line x1="33" y1="42" x2="33" y2="58" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="77" y1="42" x2="77" y2="58" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        {/* Bottom Connectors */}
        <rect x="34" y="85" width="8" height="6" rx="1.5" fill="#334155" />
        <rect x="46" y="85" width="8" height="6" rx="1.5" fill="#dc2626" />
        <rect x="58" y="85" width="8" height="6" rx="1.5" fill="#334155" />
        <rect x="68" y="85" width="8" height="6" rx="1.5" fill="#334155" />
      </svg>
    ),
  },
  {
    id: 'polycab-inverter',
    name: 'POLYCAB INVERTER',
    category: 'Solar Inverter',
    description: 'Advanced inverters with multi-protection features and stable performance.',
    renderIcon: () => (
      <svg viewBox="0 0 110 110" className="w-full h-full" fill="none" aria-label="Polycab Inverter">
        {/* White inverter housing */}
        <rect x="26" y="17" width="58" height="68" rx="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        {/* Red Polycab Badge */}
        <rect x="39" y="24" width="32" height="7" rx="2" fill="#d9251c" />
        <text
          x="55"
          y="29.5"
          textAnchor="middle"
          fill="#ffffff"
          fontWeight="900"
          fontSize="5.5"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          POLYCAB
        </text>
        {/* Center Display / Indicator Strip */}
        <rect x="35" y="39" width="40" height="18" rx="4" fill="#1e293b" />
        <circle cx="45" cy="48" r="2.5" fill="#22c55e" />
        <line x1="52" y1="48" x2="68" y2="48" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        {/* Bottom brand imprint */}
        <text
          x="55"
          y="74"
          textAnchor="middle"
          fill="#64748b"
          fontWeight="800"
          fontSize="5.5"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          POLYCAB
        </text>
        {/* Base Connectors */}
        <rect x="36" y="85" width="10" height="5" rx="1.5" fill="#475569" />
        <rect x="50" y="85" width="10" height="5" rx="1.5" fill="#475569" />
        <rect x="64" y="85" width="10" height="5" rx="1.5" fill="#475569" />
      </svg>
    ),
  },
  {
    id: 'deye-inverter',
    name: 'DEYE INVERTER',
    category: 'Solar Inverter',
    description: 'High efficiency, smart monitoring and reliable performance for long-term use.',
    renderIcon: () => (
      <svg viewBox="0 0 110 110" className="w-full h-full" fill="none" aria-label="Deye Inverter">
        {/* Inverter Box */}
        <rect x="26" y="14" width="58" height="72" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        {/* Deye Top Logo */}
        <text
          x="55"
          y="27"
          textAnchor="middle"
          fill="#1e40af"
          fontWeight="900"
          fontSize="12.5"
          letterSpacing="-0.02em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Deye
        </text>
        <circle cx="69" cy="20" r="1.5" fill="#dc2626" />
        {/* Circular Touchscreen Center Display */}
        <circle cx="55" cy="51" r="16" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx="55" cy="51" r="11" fill="#1e293b" />
        <circle cx="55" cy="51" r="5" fill="#3b82f6" opacity="0.85" />
        {/* Fasteners */}
        <circle cx="29" cy="22" r="1.5" fill="#64748b" />
        <circle cx="81" cy="22" r="1.5" fill="#64748b" />
        <circle cx="29" cy="78" r="1.5" fill="#64748b" />
        <circle cx="81" cy="78" r="1.5" fill="#64748b" />
        {/* Bottom Glands */}
        <rect x="33" y="86" width="8" height="7" rx="2" fill="#334155" />
        <rect x="45" y="86" width="8" height="7" rx="2" fill="#334155" />
        <rect x="57" y="86" width="8" height="7" rx="2" fill="#334155" />
        <rect x="69" y="86" width="8" height="7" rx="2" fill="#334155" />
      </svg>
    ),
  },
  {
    id: 'havells-box',
    name: 'HAVELLS ACDB/DCDB',
    category: 'Protection Device',
    description: 'Safe and reliable ACDB & DCDB for complete protection and system safety.',
    renderIcon: () => (
      <svg viewBox="0 0 110 110" className="w-full h-full" fill="none" aria-label="Havells ACDB/DCDB">
        {/* Top Havells Logo */}
        <g transform="translate(55, 17)">
          <circle cx="0" cy="0" r="6" fill="#dc2626" />
          <path d="M-3 -3 L-3 3 M3 -3 L3 3 M-3 0 L3 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <text
          x="55"
          y="30"
          textAnchor="middle"
          fill="#dc2626"
          fontWeight="900"
          fontSize="7.5"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          HAVELLS
        </text>
        {/* ACDB / DCDB Weatherproof Box */}
        <rect x="19" y="34" width="72" height="48" rx="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        {/* Smoked Transparent Door */}
        <rect
          x="24"
          y="39"
          width="62"
          height="38"
          rx="4"
          fill="#0f172a"
          fillOpacity="0.75"
          stroke="#94a3b8"
          strokeWidth="1"
        />
        {/* Internal MCBs & SPDs */}
        <rect x="29" y="47" width="10" height="22" rx="1" fill="#f8fafc" stroke="#dc2626" strokeWidth="1" />
        <rect x="41" y="47" width="10" height="22" rx="1" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
        <rect x="53" y="47" width="14" height="22" rx="1" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        <rect x="69" y="52" width="12" height="12" rx="2" fill="#dc2626" />
        {/* Side Latches */}
        <rect x="17" y="48" width="2" height="6" fill="#475569" />
        <rect x="17" y="66" width="2" height="6" fill="#475569" />
      </svg>
    ),
  },
]

export function TrustedBrands() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const el = sectionRef.current
    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#fbfcf9] border-t border-b border-[#d9e0d8] relative"
    >
      {/* Full-width container that uses almost the entire screen width on desktop */}
      <div className="w-full max-w-[1740px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3 text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#287a4b] uppercase">
            <span className="w-8 sm:w-14 h-[2px] bg-[#287a4b]/35 rounded-full" />
            <span>QUALITY COMPONENTS · TRUSTED BRANDS</span>
            <span className="w-8 sm:w-14 h-[2px] bg-[#287a4b]/35 rounded-full" />
          </div>

          <h2
            style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)' }}
            className="font-extrabold text-[#17251d] tracking-tight leading-[1.12] mt-1"
          >
            Powering a Brighter Tomorrow
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#5e6c61] font-medium leading-relaxed max-w-2xl mx-auto">
            We use high-quality solar components from trusted global brands to ensure maximum performance, durability
            and long-term savings.
          </p>
        </div>

        {/* 8 Circular Brand Cards Grid: 8 columns on desktop (spread across full width), 4 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 items-start w-full">
          {brands.map((brand, idx) => (
            <div
              key={brand.id}
              style={{
                transitionDelay: `${idx * 70}ms`,
              }}
              className={`group flex flex-col items-center text-center cursor-default transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`}
            >
              {/* Circular Logo / Device Frame with double border & hover elevation */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-34 xl:h-34 2xl:w-38 2xl:h-38 rounded-full bg-white border-2 border-[#d9efc5] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-center p-3.5 sm:p-4 lg:p-3 xl:p-4 transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2 group-hover:border-[#287a4b] group-hover:shadow-[0_16px_32px_-8px_rgba(25,82,50,0.18)] ring-4 ring-transparent group-hover:ring-[#287a4b]/10">
                <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                  {brand.renderIcon()}
                </div>
              </div>

              {/* Brand Title */}
              <h3 className="text-xs sm:text-[13px] xl:text-[14px] font-black tracking-wider text-[#17251d] uppercase mt-4 sm:mt-5 mb-1.5 sm:mb-2 transition-colors duration-300 group-hover:text-[#195232]">
                {brand.name}
              </h3>

              {/* Brand Description matching Reference Image */}
              <p className="text-[11px] sm:text-xs xl:text-[12.5px] text-[#556358] font-normal leading-relaxed max-w-[210px] mx-auto transition-colors duration-300 group-hover:text-[#17251d]">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Pill Badge: Trusted Brands | Better Performance | A Greener Tomorrow */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 rounded-full bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] text-xs sm:text-sm font-semibold shadow-xs transition-all duration-300 hover:shadow-sm hover:scale-[1.02] cursor-default">
            <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#287a4b] flex-shrink-0" />
            <span>Trusted Brands</span>
            <span className="text-[#287a4b]/40">|</span>
            <span>Better Performance</span>
            <span className="text-[#287a4b]/40">|</span>
            <span>A Greener Tomorrow</span>
          </div>
        </div>
      </div>
    </section>
  )
}
