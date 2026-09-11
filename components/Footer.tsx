'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, MapPin, Phone, MessageCircle, Sun, ShieldCheck } from 'lucide-react'
import { contact, whatsappUrl } from '@/lib/contact'
import { ScrollReveal } from '@/components/ScrollReveal'

interface FooterProps {
  isInner?: boolean
}

export function Footer({ isInner = false }: FooterProps) {
  const ctaLink = isInner ? '/contact' : '#contact'
  const solutionsLink = isInner ? '/#solutions' : '#solutions'
  const consultationMessage = encodeURIComponent('Hello OM SUNBUILD, I would like to get a free solar consultation.')

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services / Solutions', href: solutionsLink },
    { label: 'Products', href: '/products' },
    { label: 'Our Work / Projects', href: '/projects' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const solarSolutions = [
    { label: 'Residential Solar', href: isInner ? '/#solutions' : '#solutions' },
    { label: 'Commercial Solar', href: isInner ? '/#solutions' : '#solutions' },
    { label: 'Industrial Solar', href: isInner ? '/#solutions' : '#solutions' },
    { label: 'Rooftop Solar', href: isInner ? '/#solutions' : '#solutions' },
    { label: 'Solar EPC', href: isInner ? '/contact' : '#contact' },
    { label: 'Solar Maintenance', href: isInner ? '/contact' : '#contact' },
  ]

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/${contact.whatsapp}?text=${consultationMessage}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ]

  return (
    <>
      <footer className="om-footer" aria-label="Footer">
      <div className="om-footer-container">
        {/* SECTION 6: Integrated Subtle Call-to-Action */}
        <ScrollReveal animation="fade-up">
          <section className="footer-cta-card" aria-label="Consultation Call to Action">
            <div className="footer-cta-glow" aria-hidden="true" />
            <div className="footer-cta-content">
              <div className="footer-cta-badge">
                <Sun size={13} className="text-amber-400" />
                <span>POWER YOUR ENERGY TRANSITION</span>
              </div>
              <h2 className="footer-cta-title">
                Ready to switch to solar?
              </h2>
              <p className="footer-cta-desc">
                Let&apos;s build a smarter energy future together. Consult our certified solar specialists for a tailored analysis of your site and savings potential.
              </p>
            </div>
            <div className="footer-cta-action">
              <Link href={ctaLink} className="footer-cta-btn">
                <span>Get a Free Consultation</span>
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* MAIN 4-COLUMN FOOTER CONTENT */}
        <ScrollReveal animation="fade-up" delay={120}>
          <div className="footer-main-grid">
          {/* SECTION 1: Branding Section */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-brand-header" title="OM SUNBUILD — Return to Home">
              <div className="footer-logo-ring">
                <Image
                  src="/Logo.jpeg"
                  alt="OM SUNBUILD Official Logo"
                  width={44}
                  height={44}
                  className="footer-logo-img"
                  priority
                />
              </div>
              <div className="footer-brand-titles">
                <span className="footer-brand-name">OM SUNBUILD</span>
                <span className="footer-brand-sub">SOLAR SOLUTIONS</span>
              </div>
            </Link>

            <div className="footer-tagline-box">
              <p className="footer-tagline">
                &ldquo;Thoughtful solar solutions for a brighter tomorrow.&rdquo;
              </p>
              <p className="footer-brand-copy">
                Empowering homes, commercial enterprises, and industrial facilities across Chhattisgarh with dependable, high-efficiency solar energy systems tailored for enduring performance.
              </p>
            </div>

            <div className="footer-trust-badge">
              <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
              <span>Certified Engineering · Quality Components</span>
            </div>
          </div>

          {/* SECTION 2: Explore / Quick Links */}
          <div className="footer-col">
            <h3 className="footer-section-title">
              <span className="title-dot" />
              <span>EXPLORE</span>
            </h3>
            <nav className="footer-nav-list" aria-label="Explore Navigation">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="footer-nav-link">
                  <span className="footer-link-text">{item.label}</span>
                  <span className="footer-link-line" />
                </Link>
              ))}
            </nav>
          </div>

          {/* SECTION 3: Solar Solutions */}
          <div className="footer-col">
            <h3 className="footer-section-title">
              <span className="title-dot" />
              <span>SOLAR SOLUTIONS</span>
            </h3>
            <nav className="footer-nav-list" aria-label="Solar Solutions Navigation">
              {solarSolutions.map((item) => (
                <Link key={item.label} href={item.href} className="footer-nav-link">
                  <span className="footer-link-text">{item.label}</span>
                  <span className="footer-link-line" />
                </Link>
              ))}
            </nav>
          </div>

          {/* SECTION 4 & 5: Get in Touch & Social Media */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-section-title">
              <span className="title-dot" />
              <span>GET IN TOUCH</span>
            </h3>

            <address className="footer-contact-items">
              <a href={contact.phoneHref} className="footer-contact-item group" title="Call primary phone">
                <span className="contact-icon-box">
                  <Phone size={14} />
                </span>
                <div className="contact-item-info">
                  <span className="contact-item-label">Direct Consultation</span>
                  <span className="contact-item-val">{contact.phone}</span>
                </div>
              </a>

              <a href={`mailto:${contact.email}`} className="footer-contact-item group" title="Send email">
                <span className="contact-icon-box">
                  <Mail size={14} />
                </span>
                <div className="contact-item-info">
                  <span className="contact-item-label">Email Support</span>
                  <span className="contact-item-val">{contact.email}</span>
                </div>
              </a>

              <div className="footer-contact-item location-item">
                <span className="contact-icon-box">
                  <MapPin size={14} />
                </span>
                <div className="contact-item-info">
                  <span className="contact-item-label">Head Office</span>
                  <span className="contact-item-val address-text">{contact.address}</span>
                </div>
              </div>

              <a
                href={whatsappUrl('Hello OM SUNBUILD, I would like to discuss a solar solution.')}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item whatsapp-direct group"
                title="Chat on WhatsApp"
              >
                <span className="contact-icon-box whatsapp-box">
                  <MessageCircle size={14} />
                </span>
                <div className="contact-item-info">
                  <span className="contact-item-label">Quick Message</span>
                  <span className="contact-item-val highlight">Chat on WhatsApp →</span>
                </div>
              </a>
            </address>

            {/* SECTION 5: Social Media */}
            <div className="footer-social-section">
              <p className="footer-social-label">FOLLOW ALONG</p>
              <div className="footer-social-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={`Follow OM SUNBUILD on ${social.name}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* DIVIDER */}
        <div className="footer-divider" />

        {/* SECTION 7 & 8: Legal Links and Copyright */}
        <div className="footer-bottom-row">
          <div className="footer-copyright-col">
            <span className="copyright-main">
              &copy; 2026 OM SUNBUILD. All rights reserved.
            </span>
            <span className="copyright-tagline">
              Solar solutions, thoughtfully built.
            </span>
          </div>

          <nav className="footer-legal-links" aria-label="Legal and Compliance">
            <Link href="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="legal-dot">&bull;</span>
            <Link href="/terms" className="footer-legal-link">
              Terms &amp; Conditions
            </Link>
            <span className="legal-dot">&bull;</span>
            <Link href="/disclaimer" className="footer-legal-link">
              Disclaimer
            </Link>
            <span className="legal-dot">&bull;</span>
            <Link href="/login" className="footer-legal-link hover:text-amber-400">
              Admin Portal
            </Link>
          </nav>
        </div>
      </div>
    </footer>

      {/* DISTINCT LIGHT BLUE BOTTOM BAR: Powered by AGP Empire */}
      <div className="footer-agp-bar" aria-label="Attribution">
        <div className="footer-agp-inner">
          <p className="footer-agp-text">
            <span className="agp-powered-by">Powered by</span>{' '}
            <strong className="footer-agp-brand">
              <span className="agp-letter-a">A</span>
              <span className="agp-letter-gp">GP</span>{' '}
              <span className="agp-word-empire">Empire</span>
            </strong>
          </p>
        </div>
      </div>
    </>
  )
}
