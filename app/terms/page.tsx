import type { Metadata } from 'next'
import { InnerHeader, PageIntro, InnerFooter } from '@/components/inner-shell'
import { ScrollReveal } from '@/components/ScrollReveal'
import { contact } from '@/lib/contact'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions | OM SUNBUILD — Solar Solutions',
  description: 'Terms and conditions governing enquiries, solar system design, and contracting with OM SUNBUILD.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4]">
      <InnerHeader />
      <PageIntro
        eyebrow="LEGAL & TERMS"
        title="Terms &"
        accent="Conditions."
        copy="Clear, fair guidelines defining our solar design, quoting, and installation commitments."
      />

      <section className="section py-16 px-[9vw] max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up" delay={80}>
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#d9e0d8] shadow-sm text-[#17251d] space-y-8">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#287a4b] uppercase">Last Updated: January 1, 2026</span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">1. Scope of Website & Quotations</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              The content provided on this website is for informational and preliminary estimation purposes. Formal proposals, system capacity specifications, and installation contracts are confirmed following on-site engineering assessment and mutual sign-off.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">2. System Performance & Warranties</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base mb-3">
              Solar generation estimates are calculated using industry standards and historical solar irradiance data. Actual system generation may fluctuate based on seasonal weather patterns, shading, roof angle, and regular panel cleaning maintenance.
            </p>
            <ul className="list-disc pl-5 text-[#68746b] text-sm md:text-base space-y-2">
              <li>PV Module manufacturer warranties are backed by Tier-1 OEM standards.</li>
              <li>Inverter warranties are subject to manufacturer terms and operational guidelines.</li>
              <li>Workmanship and installation guarantees are defined in your specific customer agreement.</li>
            </ul>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Subsidies & Approvals</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              OM SUNBUILD facilitates documentation and liaison with DISCOMs and government portal approvals (such as PM Surya Ghar Muft Bijli Yojana). Final subsidy sanction and disbursement remain under the purview of competent government authorities.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Queries & Clarifications</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base mb-4">
              Need clarification regarding your solar project terms? Speak directly with our advisory team:
            </p>
            <div className="p-4 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">OM SUNBUILD — Engineering & Contracts</p>
                <p className="text-xs text-[#68746b]">{contact.address}</p>
                <p className="text-xs text-[#287a4b] font-medium mt-1">{contact.email} · {contact.phone}</p>
              </div>
              <Link href="/contact" className="button button-green text-xs">
                Get in Touch <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <InnerFooter />
    </main>
  )
}
