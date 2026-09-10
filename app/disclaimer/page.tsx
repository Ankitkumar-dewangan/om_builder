import type { Metadata } from 'next'
import { InnerHeader, PageIntro, InnerFooter } from '@/components/inner-shell'
import { contact } from '@/lib/contact'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer | OM SUNBUILD — Solar Solutions',
  description: 'Website and engineering estimate disclaimer for OM SUNBUILD — Solar Solutions.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4]">
      <InnerHeader />
      <PageIntro
        eyebrow="LEGAL & COMPLIANCE"
        title="Official"
        accent="Disclaimer."
        copy="Important information regarding estimates, technical representations, and external links."
      />

      <section className="section py-16 px-[9vw] max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#d9e0d8] shadow-sm text-[#17251d] space-y-8">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#287a4b] uppercase">Last Updated: January 1, 2026</span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">1. General Information Only</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              The solar project statistics, case studies, savings projections, and photographs featured on this website illustrate typical results achieved across residential, commercial, and industrial sites. Actual electrical generation and bill reductions depend on individual site characteristics, grid availability, and tariff structures.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Subsidy & Policy Changes</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              Central and State renewable energy guidelines, feed-in tariffs, net metering regulations, and capital subsidy schemes are set by regulatory agencies and are subject to change. While OM SUNBUILD maintains up-to-date guidance, official regulatory notifications take precedence.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Intellectual Property</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              The OM SUNBUILD brand, logo, project photographs, site media, and custom layout are intellectual property protected by applicable copyright and trademark laws. Unauthorized reproduction is strictly prohibited.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Request a Certified Assessment</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base mb-4">
              For an exact, site-specific engineering survey and financial return projection:
            </p>
            <div className="p-4 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">OM SUNBUILD — Engineering Team</p>
                <p className="text-xs text-[#68746b]">{contact.address}</p>
                <p className="text-xs text-[#287a4b] font-medium mt-1">{contact.email} · {contact.phone}</p>
              </div>
              <Link href="/contact" className="button button-green text-xs">
                Request Survey <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InnerFooter />
    </main>
  )
}
