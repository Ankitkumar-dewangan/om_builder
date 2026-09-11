'use client'

import React, { useState } from 'react'
import {
  Zap,
  Home,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Info,
  CheckCircle2,
  Check,
  TrendingUp,
  Coins,
  ExternalLink
} from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function PmSuryaGharBenefits() {
  // Interactive tier selector state: 'tier1' | 'tier2' | 'tier3'
  const [selectedTier, setSelectedTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier2')

  const tiers = [
    {
      id: 'tier1' as const,
      units: '0 – 150 Units',
      capacity: '1 – 2 kW',
      subsidy: '₹30,000 to ₹60,000',
      subsidyShort: '₹30,000 / kW',
      savings: '₹900 – ₹1,800 / month',
      popular: false,
      desc: 'Ideal for 1-2 BHK apartments or small households with basic lighting, fans & refrigerator.'
    },
    {
      id: 'tier2' as const,
      units: '150 – 300 Units',
      capacity: '2 – 3 kW',
      subsidy: '₹60,000 to ₹78,000',
      subsidyShort: '₹78,000 Max',
      savings: '₹1,800 – ₹3,200 / month',
      popular: true,
      desc: 'Most popular for 2-3 BHK homes with 1-2 ACs, water heater, washing machine & family appliances.'
    },
    {
      id: 'tier3' as const,
      units: 'Above 300 Units',
      capacity: 'Above 3 kW',
      subsidy: '₹78,000 (Capped)',
      subsidyShort: '₹78,000 Max Cap',
      savings: '₹3,500 – ₹9,000+ / month',
      popular: false,
      desc: 'Designed for large villas, bungalows or joint families running multiple ACs, EV chargers & heavy loads.'
    }
  ]

  return (
    <div className="relative w-full overflow-hidden bg-[#f7f8f4] text-[#17251d] py-14 sm:py-20 lg:py-24 border-t border-[#e2e8df]">
      
      {/* Dynamic Keyframe Animations */}
      <style jsx>{`
        @keyframes shimmerGleam {
          0% {
            transform: translateX(-150%) rotate(25deg);
          }
          20%, 100% {
            transform: translateX(250%) rotate(25deg);
          }
        }
        @keyframes ambientPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.04);
          }
        }
        .anim-shimmer-pass {
          animation: shimmerGleam 6.5s ease-in-out infinite;
        }
        .anim-ambient-glow {
          animation: ambientPulse 9s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="anim-ambient-glow absolute left-1/4 top-20 w-[580px] h-[380px] rounded-full bg-gradient-to-br from-[#d9efc5]/40 via-[#fef08a]/20 to-transparent blur-3xl" />
        <div className="anim-ambient-glow absolute right-1/4 bottom-20 w-[580px] h-[380px] rounded-full bg-gradient-to-tl from-[#287a4b]/12 via-[#d9efc5]/25 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Consistent OM SUNBUILD Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef3ea] border border-[#d2e0d3] text-[11px] font-bold uppercase tracking-wider text-[#123b28] mb-3.5 shadow-xs">
              <Coins className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Direct Benefit Transfer (DBT) Scheme</span>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] tracking-tight text-[#123b28] leading-[1.1] font-medium"
              style={{ letterSpacing: '-0.04em' }}
            >
              PM Surya Ghar:<br />
              <em className="italic font-normal bg-gradient-to-r from-[#1b5e39] via-[#287a4b] to-[#c27803] bg-clip-text text-transparent not-italic">
                Subsidy &amp; Financial Benefits
              </em>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#4a5a4f] max-w-2xl mx-auto leading-relaxed">
              Official central government capital assistance credited directly into your bank account within 30 days of rooftop commissioning.
            </p>
          </ScrollReveal>
        </div>

        {/* TOP DUAL SUBSIDY CARDS: RESIDENTIAL VS GHS/RWA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* LEFT CARD: Residential Households (8 Cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal animation="fade-up" duration={700} delay={100}>
              <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-[#d9e0d8] p-6 sm:p-8 shadow-xs hover:border-[#287a4b]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                
                {/* Subtle Card Accent Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#d9efc5]/35 via-transparent to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#eef3ea] border border-[#d2e0d3] flex items-center justify-center text-[#287a4b] shadow-xs">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#287a4b]">Individual Homes</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#123b28] tracking-tight leading-tight">
                        Subsidy for Residential Households
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4d5e53] mb-6 leading-relaxed">
                    Designed for independent houses, villas, and private rooftops. Subsidy scales per kW up to 3 kW capacity with a flat maximum cap.
                  </p>

                  {/* 3 Tier Pills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                    
                    {/* Tier 1 */}
                    <div className="p-4 rounded-xl bg-[#f7f9f6] border border-[#e2e8df] text-left transition-transform hover:-translate-y-0.5">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#287a4b]">Up to 2 kW</span>
                      <div className="mt-1">
                        <span className="text-xs font-semibold text-[#123b28]">Rs. </span>
                        <span className="text-2xl font-black text-[#123b28] tracking-tight">30,000</span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#287a4b] mt-0.5">per kW capacity</p>
                      <p className="text-[11px] text-[#607165] mt-1.5 leading-tight">
                        Total ₹30,000 for 1kW &amp; ₹60,000 for 2kW
                      </p>
                    </div>

                    {/* Tier 2 */}
                    <div className="p-4 rounded-xl bg-[#f7f9f6] border border-[#e2e8df] text-left transition-transform hover:-translate-y-0.5">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#d97706]">Additional 3rd kW</span>
                      <div className="mt-1">
                        <span className="text-xs font-semibold text-[#123b28]">Rs. </span>
                        <span className="text-2xl font-black text-[#123b28] tracking-tight">18,000</span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#d97706] mt-0.5">for 2kW to 3kW</p>
                      <p className="text-[11px] text-[#607165] mt-1.5 leading-tight">
                        Incremental subsidy for the 3rd kW addition
                      </p>
                    </div>

                    {/* Tier 3: Capped Maximum */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#123b28] to-[#1a4f36] text-white text-left shadow-sm relative overflow-hidden transition-transform hover:-translate-y-0.5">
                      <div className="anim-shimmer-pass absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#d9efc5]">3 kW &amp; Above</span>
                      <div className="mt-1">
                        <span className="text-xs font-semibold text-white/90">Rs. </span>
                        <span className="text-2xl font-black text-white tracking-tight">78,000</span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#d9efc5] mt-0.5">Fixed Maximum Cap</p>
                      <p className="text-[11px] text-white/80 mt-1.5 leading-tight">
                        Total subsidy for systems larger than 3 kW capped at ₹78k
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Highlight Feature Strip */}
                <div className="pt-4 border-t border-[#e8eee6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#4d5e53]">
                  <span className="inline-flex items-center gap-1.5 text-[#123b28] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#287a4b]" />
                    Net Metering + Zero Monthly Power Bills
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                    DBT directly credited to Aadhaar linked account
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT CARD: GHS / RWA Group Housing (5 Cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal animation="fade-up" duration={700} delay={200}>
              <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-[#d9e0d8] p-6 sm:p-8 shadow-xs hover:border-[#287a4b]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                
                {/* Subtle Amber Accent Gradient */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-[#fef08a]/25 via-transparent to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#eef3ea] border border-[#d2e0d3] flex items-center justify-center text-[#287a4b] shadow-xs">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706]">Societies &amp; RWAs</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#123b28] tracking-tight leading-tight">
                        Subsidy for GHS / RWA
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4d5e53] mb-5 leading-relaxed">
                    For Group Housing Societies &amp; Resident Welfare Associations across Chhattisgarh powering common services, elevators &amp; EV infrastructure.
                  </p>

                  {/* Primary Subsidy Metric Callout */}
                  <div className="p-5 rounded-2xl bg-[#f7f9f6] border border-[#e2e8df] mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#287a4b]">Common Facility Subsidy</span>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold text-[#123b28]">Rs. </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#123b28] tracking-tight">18,000</span>
                      <span className="text-xs sm:text-sm font-bold text-[#287a4b]">/ per kW</span>
                    </div>
                    <p className="text-xs text-[#526357] mt-2.5 leading-relaxed">
                      Applicable for common facilities including EV charging, water pumps, lighting, up to <strong>500 kW capacity</strong> (@ 3 kW per house).
                    </p>
                  </div>
                </div>

                {/* Bottom Scope Note */}
                <div className="pt-4 border-t border-[#e8eee6] text-xs text-[#4d5e53] space-y-1">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#287a4b] shrink-0 mt-0.5" />
                    <span>Upper limit inclusive of individual rooftop systems installed by residents in the society.</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* INTERACTIVE CONSUMPTION & CAPACITY MATRIX */}
        <ScrollReveal animation="fade-up" duration={700} delay={250}>
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#d9e0d8] p-6 sm:p-8 lg:p-10 shadow-xs mb-10 relative overflow-hidden">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-[#e5ece3]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#287a4b]">Selection Guide</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123b28] tracking-tight mt-0.5">
                  Suitable Rooftop Solar Plant Capacity for Households
                </h3>
                <p className="text-xs sm:text-sm text-[#506155] mt-1">
                  Select your monthly electricity bill consumption to find the ideal solar capacity and subsidy.
                </p>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#f0f4ee] border border-[#d9e2d7] self-start sm:self-auto">
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTier(t.id)}
                    className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      selectedTier === t.id
                        ? 'bg-[#123b28] text-white shadow-xs'
                        : 'text-[#445548] hover:text-[#123b28]'
                    }`}
                  >
                    {t.capacity}
                  </button>
                ))}
              </div>
            </div>

            {/* Matrix Display: 3 Responsive Interactive Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {tiers.map((t) => {
                const isSelected = selectedTier === t.id
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTier(t.id)}
                    className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border text-left flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#f4f8f2] border-[#287a4b] shadow-md ring-2 ring-[#287a4b]/20 -translate-y-1'
                        : 'bg-[#fafbfa] border-[#e2e8df] hover:border-[#287a4b]/50 hover:bg-white'
                    }`}
                  >
                    <div>
                      {/* Top Header & Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#287a4b]">
                          {t.units}
                        </span>
                        {t.popular && (
                          <span className="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[10px] font-extrabold tracking-wide uppercase">
                            Most Common
                          </span>
                        )}
                      </div>

                      <h4 className="text-2xl font-black text-[#123b28] tracking-tight mb-2">
                        {t.capacity} <span className="text-sm font-semibold text-[#5a6c5f]">Solar Plant</span>
                      </h4>

                      <p className="text-xs text-[#4f6054] mb-5 leading-relaxed min-h-[42px]">
                        {t.desc}
                      </p>
                    </div>

                    {/* Metric Rows */}
                    <div className="space-y-3 pt-4 border-t border-[#e2e8df]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#5a6c5f] font-medium">Govt. Subsidy</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#123b28]">
                          {t.subsidy}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#5a6c5f] font-medium">Est. Monthly Savings</span>
                        <span className="text-xs sm:text-sm font-bold text-[#287a4b]">
                          {t.savings}
                        </span>
                      </div>
                    </div>

                    {/* Select indicator */}
                    <div className="mt-4 pt-3 flex items-center justify-end text-xs font-bold text-[#123b28]">
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[#287a4b]">
                          <Check className="w-3.5 h-3.5" /> Selected Plan
                        </span>
                      ) : (
                        <span className="text-[#6d7e72] hover:text-[#123b28]">
                          Click to View Details &rarr;
                        </span>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>

            {/* Special States 10% Additional Subsidy Note */}
            <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl bg-[#fef9ee] border border-[#fde68a] flex items-start gap-2.5 text-xs text-[#92400e]">
              <Info className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-[#78350f]">Special States Subsidy Provision:</strong>{' '}
                For special category states &amp; Union Territories (including North Eastern states, Uttarakhand, Himachal Pradesh, Jammu &amp; Kashmir, Ladakh, Lakshadweep and Andaman &amp; Nicobar Islands), an <strong>additional 10% subsidy</strong> is applicable per kW.
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* BOTTOM ACTION & CREDA EPC TRUST CALLOUT */}
        <ScrollReveal animation="fade-up" duration={700} delay={300}>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#123b28] via-[#1a4f36] to-[#123b28] text-white p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="anim-shimmer-pass absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#d9efc5] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Seamless Subsidy Processing By OM SUNBUILD</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                Want zero paperwork headache? We handle 100% of your subsidy claim.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cfe3d2] leading-relaxed">
                From DISCOM net-metering sanctions to CREDA site inspection and direct bank subsidy disbursement, OM SUNBUILD delivers complete end-to-end solar EPC support across Chhattisgarh.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#f7f8f4] text-[#123b28] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Calculate &amp; Claim Subsidy</span>
                <ArrowUpRight className="w-4 h-4 text-[#287a4b]" />
              </a>

              <a
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>pmsuryaghar.gov.in</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d9efc5]" />
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
