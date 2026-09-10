import { ArrowUpRight, Check, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { InnerFooter, InnerHeader, PageIntro } from '@/components/inner-shell'
import { EnquiryForm } from '@/components/enquiry-form'
import { ScrollReveal } from '@/components/ScrollReveal'
import { contact, emailUrl, whatsappUrl } from '@/lib/contact'

export const metadata = {
  title: 'Contact | OM SUNBUILD',
  description: 'Talk to OM SUNBUILD about thoughtful solar solutions for your home, business or site.',
}

export default function ContactPage() {
  return (
    <main>
      <InnerHeader />
      <PageIntro
        eyebrow="OM SUNBUILD · GET IN TOUCH"
        title="Let&apos;s talk"
        accent="solar."
        copy="Tell us about your home, business or site. We&apos;ll help you understand the right next step, clearly and without pressure."
      />

      {/* Main Contact Grid */}
      <section className="section contact contact-page-grid">
        <ScrollReveal animation="slide-right" delay={100}>
          <div className="contact-info">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>
              Good energy
              <br />
              <em>starts here.</em>
            </h2>
            <p>
              From a first question to a complete installation, our team is here to help you make a confident move toward solar.
            </p>
            <div className="contact-details">
              <a href={contact.phoneHref}>
                <small>CALL US</small>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>
                <small>EMAIL US</small>
                {contact.email}
              </a>
              <span>
                <small>VISIT US</small>
                {contact.address}
              </span>
            </div>
            <div className="contact-actions">
              <a className="button button-dark" href={contact.phoneHref}>
                <Phone size={16} /> Call now
              </a>
              <a
                className="button button-outline-dark"
                href={whatsappUrl('Hello OM SUNBUILD, I would like to discuss a solar solution.')}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={200}>
          <EnquiryForm />
        </ScrollReveal>
      </section>

      {/* Support Direct Reach Section with Staggered Grid */}
      <section className="section contact-support">
        <ScrollReveal animation="fade-up">
          <div>
            <p className="eyebrow">REACH US DIRECTLY</p>
            <h2>
              We&apos;re close
              <br />
              <em>when you need us.</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="support-grid">
          <ScrollReveal animation="fade-up" delay={80}>
            <a href={contact.phoneHref}>
              <Phone />
              <span>
                <b>Call the team</b>
                <small>
                  {contact.phone} · {contact.alternatePhone}
                </small>
              </span>
              <ArrowUpRight />
            </a>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={160}>
            <a href={`mailto:${contact.email}`}>
              <Mail />
              <span>
                <b>Send an email</b>
                <small>{contact.email}</small>
              </span>
              <ArrowUpRight />
            </a>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={240}>
            <a href={whatsappUrl('Hello OM SUNBUILD, I would like to enquire about solar.')}>
              <MessageCircle />
              <span>
                <b>Message on WhatsApp</b>
                <small>We&apos;ll help you get started</small>
              </span>
              <ArrowUpRight />
            </a>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={320}>
            <div>
              <MapPin />
              <span>
                <b>Our office</b>
                <small>{contact.address}</small>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Location Section */}
      <section className="contact-location">
        <ScrollReveal animation="slide-right" delay={100} className="w-full">
          <div className="location-copy">
            <p className="eyebrow light">FIND OM SUNBUILD</p>
            <h2>
              Local knowledge.
              <br />
              <em>Thoughtful work.</em>
            </h2>
            <p>
              Based in Durg, Chhattisgarh, we support homes, businesses and industrial sites with complete solar solutions.
            </p>
            <div className="location-note">
              <Clock3 size={18} />
              <span>For a site visit, call or send an enquiry and we&apos;ll arrange a convenient time.</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={200} className="w-full h-full">
          <div className="location-map h-full" aria-label={`OM SUNBUILD office location: ${contact.address}`}>
            <MapPin size={34} />
            <p>
              Padmanabhpur
              <br />
              <small>Durg, Chhattisgarh</small>
            </p>
          </div>
        </ScrollReveal>
      </section>

      <InnerFooter />
    </main>
  )
}
