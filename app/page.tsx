'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronRight, Play, Sun, Zap, MapPin, Navigation, Phone, Clock3, Star } from 'lucide-react'
import Link from 'next/link'
import { projects as projectData } from '@/lib/projects'
import { Header } from '@/components/Header'
import { HeroSlider } from '@/components/HeroSlider'
import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { TrustedBrands } from '@/components/TrustedBrands'
import { Footer } from '@/components/Footer'
import { EnquiryForm } from '@/components/enquiry-form'
import { PmSuryaGharBanner } from '@/components/PmSuryaGharBanner'
import { PmSuryaGharBenefits } from '@/components/PmSuryaGharBenefits'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { contact } from '@/lib/contact'

const solutions = [
  ['01', 'Residential solar', 'Thoughtful rooftop systems designed around the way your home uses energy.', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85'],
  ['02', 'Commercial solar', 'Practical, high-performing systems for workplaces, facilities and growing businesses.', 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85'],
  ['03', 'Industrial & government', 'End-to-end project support for larger sites that need dependable solar infrastructure.', 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85'],
]
const products = [
  ['Solar panels', 'Efficient modules for dependable generation', 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=85'],
  ['Solar inverters', 'The intelligent heart of your solar system', 'https://images.unsplash.com/photo-1509390874181-6c7dbf7f5a31?auto=format&fit=crop&w=800&q=85'],
  ['Structures & balance of system', 'Every detail engineered to work together', 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=85'],
]
const steps = ['Consultation', 'Site assessment', 'System planning', 'Installation', 'Testing & handover', 'Support']

const reviews = [
  {
    name: 'Rajesh Agrawal',
    initials: 'RA',
    role: '10kW On-Grid Rooftop',
    location: 'Bhilai, C.G.',
    badge: 'Residential',
    rating: 5,
    content:
      'OM SUNBUILD handled everything from solar subsidy paperwork to rooftop installation seamlessly. Our monthly electricity bill dropped from ₹9,500 to almost zero. Truly professional work!',
  },
  {
    name: 'Dr. Sunita Verma',
    initials: 'SV',
    role: '5kW Home Solar',
    location: 'Padmanabhpur, Durg',
    badge: 'Residential',
    rating: 5,
    content:
      'Very satisfied with the installation quality and transparent pricing. The engineering team in Durg answered every query patiently and completed the setup in just 3 days.',
  },
  {
    name: 'Mahesh Deshmukh',
    initials: 'MD',
    role: '50kW Commercial Plant',
    location: 'Industrial Area, Raipur',
    badge: 'Commercial',
    rating: 5,
    content:
      'We installed a 50kW commercial solar system for our manufacturing unit. Generation performance has exceeded our expectations. The return on investment is fantastic.',
  },
  {
    name: 'Virendra Singh',
    initials: 'VS',
    role: '8kW Hybrid Solar System',
    location: 'Nehru Nagar, Bhilai',
    badge: 'Hybrid EPC',
    rating: 5,
    content:
      'Even during peak summer power cuts, our battery backup runs smoothly. OM SUNBUILD provides genuine tier-1 solar panels and top-notch inverters. Highly recommended!',
  },
  {
    name: 'Anita Dewangan',
    initials: 'AD',
    role: '3kW Rooftop System',
    location: 'Durg, C.G.',
    badge: 'Residential',
    rating: 5,
    content:
      'Great local support! Whenever we had questions regarding net-metering and state subsidy approval, their team was just a call away. Clean rooftop wiring and mounting.',
  },
  {
    name: 'Praveen Sharma',
    initials: 'PS',
    role: '15kW Commercial Solar',
    location: 'Smriti Nagar, Bhilai',
    badge: 'Commercial',
    rating: 5,
    content:
      'Their after-sales service is commendable. Real-time solar app monitoring allows us to track daily generation effortlessly. Best solar EPC company in Chhattisgarh.',
  },
  {
    name: 'Arun Kumar Jha',
    initials: 'AJ',
    role: '20kW Solar Water Pump',
    location: 'Bemetara, C.G.',
    badge: 'Agriculture',
    rating: 5,
    content:
      'Reliable solar power for our agricultural farm. The solar pump runs flawlessly from sunrise to sunset. Huge savings on diesel and electricity costs every month.',
  },
]

export default function Page() {

  return (
    <main>
      {/* Requirement 1 & 2: Fixed Header on Scroll (Dark Green + White Text) with Attractive Logo */}
      <Header />

      {/* Requirement 3: 4 to 5 Image Carousel / Image Slider in the Hero Section */}
      <HeroSlider />      {/* Trust Strip with Staggered Check Items */}
      <section className="trust-strip">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow">SOLAR, DONE RIGHT</p>
        </ScrollReveal>
        <div className="trust-items">
          {[
            'Complete solar solutions',
            'Quality components',
            'Professional installation',
            'Service you can count on',
          ].map((text, i) => (
            <ScrollReveal key={text} animation="fade-up" delay={100 + i * 80}>
              <span><Check /> {text}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Section: Image & Text reveal from opposite directions with staggered points */}
      <section id="about" className="section about">
        <ScrollReveal animation="slide-right" delay={100}>
          <div className="about-photo image-frame">
            <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=85" alt="Solar panels on a rooftop in warm sunlight" />
            <span className="image-caption">Energy is a choice<br /><b>Choose better.</b></span>
          </div>
        </ScrollReveal>
        <div className="about-copy">
          <ScrollReveal animation="slide-left" delay={150}>
            <p className="eyebrow">A BETTER WAY FORWARD</p>
            <h2>Solar that works<br /><em>for you.</em></h2>
            <p>At OM SUNBUILD, we make the shift to solar feel clear, considered and genuinely worthwhile. From the first conversation to the final connection, our focus is simple: quality work, honest guidance and a system made for your needs.</p>
          </ScrollReveal>
          <div className="mini-list">
            {[
              ['01', 'Understand your energy'],
              ['02', 'Design the right solution'],
              ['03', 'Install it properly'],
            ].map(([num, label], i) => (
              <ScrollReveal key={num} animation="slide-left" delay={220 + i * 80}>
                <span><b>{num}</b> {label}</span>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="fade-up" delay={460}>
            <a className="text-link dark" href="#contact">Know more about us <ArrowUpRight size={16} /></a>
          </ScrollReveal>
        </div>
      </section>

      {/* Watch Our Story Video Section */}
      <section className="video-section section">
        <ScrollReveal animation="zoom-in" duration={750}>
          <div className="video-card">
            <img src="https://images.unsplash.com/photo-1509390144018-eeaf650522c8?auto=format&fit=crop&w=1800&q=90" alt="Solar installation team working on a rooftop" />
            <div className="video-shade" />
            <button className="play-button" aria-label="Play company introduction">
              <Play fill="currentColor" size={24} />
            </button>
            <div className="video-label">
              <p className="eyebrow light">WATCH OUR STORY</p>
              <h2>More than panels.<br /><em>A partnership.</em></h2>
            </div>
            <span className="video-duration">02:14 <span>min</span></span>
          </div>
        </ScrollReveal>
      </section>

      {/* PM Surya Ghar Muft Bijli Yojana Section */}
      <section id="pm-surya-ghar" className="pm-solar-section relative w-full overflow-hidden">
        <PmSuryaGharBanner />
      </section>
      

      {/* PM Surya Ghar Subsidy Benefits Section */}
      <section id="subsidy-benefits" className="benefits-section relative w-full overflow-hidden">
        <PmSuryaGharBenefits />
      </section>

      {/* Solutions Section: Staggered Cards Reveal */}
      <section id="solutions" className="section solutions">
        <ScrollReveal animation="fade-up">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Solutions for<br /><em>every ambition.</em></h2>
            </div>
            <p className="heading-intro">Whether you are powering a home, a business or a larger operation, we bring the same care and clarity to every project.</p>
          </div>
        </ScrollReveal>
        <div className="solution-grid">
          {solutions.map(([num, title, desc, img], idx) => (
            <ScrollReveal key={title} animation="fade-up" delay={idx * 120}>
              <article className="solution-card">
                <img src={img} alt={title} />
                <div className="solution-body">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a className="arrow-link" href="#contact">View details <ArrowUpRight size={16} /></a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Section: Staggered Why Points */}
      <section className="why-section">
        <div className="why-inner">
          <ScrollReveal animation="slide-right" delay={100}>
            <div>
              <p className="eyebrow light">WHY OM SUNBUILD</p>
              <h2>Good energy<br /><em>is personal.</em></h2>
              <p className="why-copy">The best solar system is one that feels like it was made for you. That means listening first, getting the details right and staying close throughout.</p>
              <a className="button button-outline" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
          </ScrollReveal>
          <div className="why-points">
            {['Professional from first call to final connection', 'Quality components, selected with care', 'A complete solution, not a quick fix', 'Here when you need us, after installation'].map((x, i) => (
              <ScrollReveal key={x} animation="fade-up" delay={120 + i * 90}>
                <div className="why-point">
                  <span>0{i + 1}</span>
                  <p>{x}</p>
                  <Check size={18} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section: Staggered Product Cards */}
      <section id="products" className="section products">
        <ScrollReveal animation="fade-up">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE RIGHT COMPONENTS</p>
              <h2>Built on<br /><em>quality.</em></h2>
            </div>
            <a className="text-link dark" href="#contact">View all products <ArrowUpRight size={16} /></a>
          </div>
        </ScrollReveal>
        <div className="product-grid">
          {products.map(([title, desc, img], idx) => (
            <ScrollReveal key={title} animation="fade-up" delay={idx * 120}>
              <article className="product-card">
                <img src={img} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#contact">Enquire now <ArrowUpRight size={15} /></a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Installation Work / Projects: Staggered Portfolio Grid */}
      <section id="our-work" className="section work">
        <ScrollReveal animation="fade-up">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR INSTALLATION WORK</p>
              <h2>Made to be<br /><em>seen.</em></h2>
            </div>
            <div className="work-intro">
              <p>Every completed project is a story of thoughtful planning, careful installation and energy that keeps giving back.</p>
              <a className="text-link dark" href="#contact">View all projects <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </ScrollReveal>
        <div className="project-grid">
          {projectData.filter((project) => project.featured).map((project, i) => (
            <ScrollReveal key={project.slug} animation="fade-up" delay={i * 120} className={i === 0 ? 'first-project-box' : ''}>
              <Link className={'project-card project-' + i} href={`/projects/${project.slug}`}>
                <img src={project.coverImage} alt={project.images[0]?.alt ?? project.title} />
                <div className="project-overlay">
                  <p>{project.type}{project.location ? ` · ${project.location}` : ''}</p>
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* The OM SUNBUILD Standard / Story Section */}
      <section className="story-section">
        <ScrollReveal animation="slide-right" delay={100}>
          <div className="story-large">
            <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1400&q=85" alt="Solar panels installed across an industrial rooftop" />
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={180}>
          <div className="story-copy">
            <p className="eyebrow">THE OM SUNBUILD STANDARD</p>
            <h2>From roofline<br /><em>to reality.</em></h2>
            <p>Real work. Real sites. Real attention to every cable, structure and connection. This is installation as it should be: considered, precise and built to last.</p>
            <a className="button button-dark" href="#contact">See how we work <ArrowUpRight size={16} /></a>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={260}>
          <div className="story-small">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&q=85" alt="Solar array under a clear sky" />
          </div>
        </ScrollReveal>
      </section>

      {/* How It Works Process: Modern Connecting Wave Timeline */}
      <ProcessTimeline />

      {/* ========================================================================= */}
      {/* QUALITY COMPONENTS · TRUSTED BRANDS (From Reference Image)                */}
      {/* ========================================================================= */}
      <ScrollReveal animation="fade-up">
        <TrustedBrands />
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* PREMIUM EXECUTIVE LOCATION & GOOGLE MAP SECTION                           */}
      {/* ========================================================================= */}
      <section className="section py-16 sm:py-24 px-4 sm:px-8 md:px-[6vw] lg:px-[9vw] bg-[#f7f8f4] border-t border-b border-[#d9e0d8]">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="eyebrow mb-2">OUR LOCATION · DURG (C.G.)</p>
            <h2
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
              className="font-extrabold text-[#17251d] tracking-tight leading-tight"
            >
              Visit our headquarters.<br />
              <em className="text-[#287a4b] not-italic">We&apos;re right here in Durg.</em>
            </h2>
            <p className="mt-4 text-[#68746b] text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Based locally in Chhattisgarh, our engineering and consultation team is always available to discuss rooftop solar, site plans, and power requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Split: Corporate Info Card (Left) + Google Map Frame (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Office Details */}
          <ScrollReveal animation="slide-right" delay={100} className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e0d8] shadow-sm flex flex-col justify-between">
              <div>
                {/* Red Pin Location Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-tight mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                  </span>
                  <span>Pinned Office Location</span>
                </div>

                {/* Office Title */}
                <h3 className="text-2xl font-extrabold text-[#17251d] tracking-tight mb-3">
                  OM SUNBUILD Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#68746b] font-medium leading-relaxed mb-6">
                  Central engineering, system sizing and customer consultation center for Chhattisgarh.
                </p>

                {/* Address Card with Red Pin */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f8f4] border border-[#e4eae2] mb-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <MapPin size={20} className="fill-white text-red-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-extrabold text-[#68746b] uppercase tracking-wider">
                        Office Address
                      </p>
                      <p className="text-sm sm:text-base font-black text-[#17251d] mt-1 leading-snug">
                        Janta Market, Beside Of Biji Office, Padmanabhpur, Durg (C.G.)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operational Details */}
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#17251d] font-semibold">
                    <div className="w-8 h-8 rounded-xl bg-[#e8f5ee] text-[#195232] flex items-center justify-center flex-shrink-0">
                      <Clock3 size={16} />
                    </div>
                    <span>Mon – Sat: 9:30 AM to 7:00 PM</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#17251d] font-semibold">
                    <div className="w-8 h-8 rounded-xl bg-[#e8f5ee] text-[#195232] flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <a href={contact.phoneHref} className="hover:text-[#287a4b] transition-colors">
                      {contact.phone} · {contact.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#eef0e8] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Janta+Market,+Beside+Of+Bijli+Office,+Padmanabhpur,+Durg,+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#195232] hover:bg-[#123b28] text-white text-xs font-bold shadow-md shadow-[#195232]/20 transition-all cursor-pointer"
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={contact.phoneHref}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] text-xs font-bold transition-all cursor-pointer"
                >
                  <Phone size={14} />
                  <span>Call Office</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card: Google Map Showcase */}
          <ScrollReveal animation="slide-left" delay={200} className="lg:col-span-7 flex flex-col">
            <div className="relative h-full min-h-[420px] sm:min-h-[500px] rounded-3xl overflow-hidden border border-[#d9e0d8] shadow-sm bg-[#eef0e8]">
              {/* Floating Bottom Card Over Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#d9e0d8] shadow-xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin size={22} className="fill-white text-red-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-[#17251d] truncate">
                      OM SUNBUILD
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 uppercase tracking-wider">
                      Location
                    </span>
                  </div>
                  <p className="text-xs text-[#68746b] font-medium truncate mt-0.5">
                    Janta Market, Beside Of Biji Office, Padmanabhpur, Durg (C.G.)
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Janta+Market,+Beside+Of+Bijli+Office,+Padmanabhpur,+Durg,+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] flex-shrink-0 transition-colors"
                  title="Open in Google Maps"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Native Google Map Iframe with accurate search pinpoint */}
              <iframe
                title="OM SUNBUILD Location - Janta Market, Padmanabhpur, Durg"
                src="https://maps.google.com/maps?q=Janta+Market,+Padmanabhpur,+Durg,+Chhattisgarh&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] sm:min-h-[500px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section: Opposite Direction Reveals */}
      <section className="cta-section">
        <ScrollReveal animation="slide-right" delay={100}>
          <div>
            <p className="eyebrow light">READY WHEN YOU ARE</p>
            <h2>Let&apos;s build your<br /><em>solar future.</em></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={200}>
          <div className="cta-actions">
            <p>Tell us a little about what you need. We&apos;ll take it from there.</p>
            <a className="button button-light" href="#contact">Get a free quote <ArrowUpRight size={17} /></a>
            <a className="text-link light" href="https://wa.me/919109838902?text=Hello%20OM%20SUNBUILD%2C%20I%20would%20like%20to%20discuss%20a%20solar%20solution.">WhatsApp us <ArrowUpRight size={16} /></a>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section: Two Column Reveal */}
      <section id="contact" className="section contact">
        <ScrollReveal animation="slide-right" delay={100}>
          <div className="contact-info">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>Let&apos;s talk<br /><em>solar.</em></h2>
            <p>Have a question, a project in mind or just want to understand your options? We&apos;d love to hear from you.</p>
            <div className="contact-details">
              <a href={contact.phoneHref}><small>CALL US</small>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}><small>EMAIL US</small>{contact.email}</a>
              <span><small>FIND US</small>{contact.address}</span>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={200}>
          <EnquiryForm />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* CLIENT REVIEWS MARQUEE (Right to Left Smooth Auto-Scroll)                 */}
      {/* ========================================================================= */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 sm:py-28 bg-[#f7f8f4] overflow-hidden border-t border-[#d9e0d8] relative">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[6vw] lg:px-[9vw] mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] text-xs font-bold uppercase tracking-wider mb-3.5">
              <Star size={13} className="fill-[#287a4b] text-[#287a4b]" />
              <span>Customer Testimonials</span>
            </div>
            <h2
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
              className="font-extrabold text-[#17251d] tracking-tight leading-tight"
            >
              What our clients say.<br />
              <em className="text-[#287a4b] not-italic">Trusted across Chhattisgarh.</em>
            </h2>
            <p className="mt-3.5 text-[#68746b] text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Over <AnimatedCounter target={250} suffix="+" className="font-extrabold text-[#287a4b]" /> rooftop solar installations delivered with dependable engineering, honest pricing, and complete subsidy support.
            </p>
          </div>

          {/* Marquee Wrapper with soft edge fades */}
          <div className="relative w-full overflow-hidden">
            {/* Left Gradient Fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#f7f8f4] to-transparent z-10" />

            {/* Right Gradient Fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#f7f8f4] to-transparent z-10" />

            {/* Marquee Track (Double array for seamless infinite right-to-left loop) */}
            <div className="marquee-track flex gap-6 select-none py-3">
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={idx}
                  className="w-[330px] sm:w-[390px] flex-shrink-0 bg-white rounded-3xl p-6 sm:p-7 border border-[#d9e0d8] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#287a4b]/30 transition-all duration-300 flex flex-col justify-between cursor-default group"
                >
                  <div>
                    {/* Rating + Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] uppercase tracking-wider">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-sm text-[#17251d] font-semibold leading-relaxed mb-6 italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Customer Details */}
                  <div className="pt-4 border-t border-[#eef0e8] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#195232] group-hover:bg-[#287a4b] text-white font-black text-xs flex items-center justify-center shadow-xs flex-shrink-0 transition-colors">
                      {review.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-black text-[#17251d] truncate">
                        {review.name}
                      </div>
                      <p className="text-[11px] text-[#68746b] font-medium truncate mt-0.5">
                        {review.role} · <span className="text-[#195232] font-semibold">{review.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer isInner={false} />

      {/* Floating WhatsApp Quick Action Widget */}
      <a
        className="floating-whatsapp group"
        href="https://wa.me/919109838902?text=Hello%20OM%20SUNBUILD%2C%20I%20would%20like%20to%20discuss%20a%20solar%20solution."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with OM SUNBUILD on WhatsApp"
      >
        <span className="wa-radar-ring" aria-hidden="true" />
        <svg
          className="w-6 h-6 fill-current relative z-10 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </main>
  )
}
