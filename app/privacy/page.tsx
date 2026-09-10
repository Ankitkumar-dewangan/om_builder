import type { Metadata } from 'next'
import { InnerHeader, PageIntro, InnerFooter } from '@/components/inner-shell'
import { contact } from '@/lib/contact'
import Link from 'next/link'
import { ShieldCheck, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | OM SUNBUILD — Solar Solutions',
  description: 'Learn how OM SUNBUILD protects your personal data and privacy when inquiring about our solar energy solutions.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4]">
      <InnerHeader />
      <PageIntro
        eyebrow="LEGAL & PRIVACY"
        title="Privacy"
        accent="Policy."
        copy="OM SUNBUILD is committed to transparent data practices and respecting your privacy across every interaction."
      />

      <section className="section py-16 px-[9vw] max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#d9e0d8] shadow-sm text-[#17251d] space-y-8">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#287a4b] uppercase">Effective Date: January 1, 2026</span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">1. Information We Collect</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              When you enquire about solar solutions through our forms, direct calls, or WhatsApp, we may collect your name, phone number, email address, property type, and city or address in order to provide an accurate site evaluation and estimate.
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base mb-3">
              We collect this information strictly to:
            </p>
            <ul className="list-disc pl-5 text-[#68746b] text-sm md:text-base space-y-2">
              <li>Coordinate solar feasibility assessments and roof inspections.</li>
              <li>Provide tailored solar system proposals and pricing breakdowns.</li>
              <li>Communicate updates regarding government subsidies, net metering, and installation schedules.</li>
              <li>Provide ongoing post-installation maintenance and warranty support.</li>
            </ul>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Data Confidentiality & Sharing</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base">
              OM SUNBUILD does not sell, rent, or trade your personal data to third parties. Information is only shared with authorized partners (such as state electricity boards and DISCOMs for net-metering applications or certified financial lenders upon your explicit request).
            </p>
          </div>

          <div className="border-t border-[#e9eee8] pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Contact Our Privacy Lead</h2>
            <p className="text-[#68746b] leading-relaxed text-sm md:text-base mb-4">
              If you have any questions or would like to request updates or deletion of your information, please reach out directly:
            </p>
            <div className="p-4 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">OM SUNBUILD — Compliance Team</p>
                <p className="text-xs text-[#68746b]">{contact.address}</p>
                <p className="text-xs text-[#287a4b] font-medium mt-1">{contact.email} · {contact.phone}</p>
              </div>
              <Link href="/contact" className="button button-green text-xs">
                Contact Us <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InnerFooter />
    </main>
  )
}
