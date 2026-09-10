'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronRight, Play, Sun, Zap } from 'lucide-react'
import Link from 'next/link'
import { projects as projectData } from '@/lib/projects'
import { Header } from '@/components/Header'
import { HeroSlider } from '@/components/HeroSlider'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Footer } from '@/components/Footer'
import { EnquiryForm } from '@/components/enquiry-form'
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

export default function Page() {

  return (
    <main>
      {/* Requirement 1 & 2: Fixed Header on Scroll (Dark Green + White Text) with Attractive Logo */}
      <Header />

      {/* Requirement 3: 4 to 5 Image Carousel / Image Slider in the Hero Section */}
      <HeroSlider />

      {/* Requirement 4: Scroll Down Animation with Reverse on Scroll Up */}
      <ScrollReveal animation="fade-up">
        <section className="trust-strip">
          <p className="eyebrow">SOLAR, DONE RIGHT</p>
          <div className="trust-items">
            <span><Check /> Complete solar solutions</span>
            <span><Check /> Quality components</span>
            <span><Check /> Professional installation</span>
            <span><Check /> Service you can count on</span>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section id="about" className="section about">
          <div className="about-photo image-frame">
            <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=85" alt="Solar panels on a rooftop in warm sunlight" />
            <span className="image-caption">Energy is a choice<br /><b>Choose better.</b></span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A BETTER WAY FORWARD</p>
            <h2>Solar that works<br /><em>for you.</em></h2>
            <p>At OM SUNBUILD, we make the shift to solar feel clear, considered and genuinely worthwhile. From the first conversation to the final connection, our focus is simple: quality work, honest guidance and a system made for your needs.</p>
            <div className="mini-list">
              <span><b>01</b> Understand your energy</span>
              <span><b>02</b> Design the right solution</span>
              <span><b>03</b> Install it properly</span>
            </div>
            <a className="text-link dark" href="#contact">Know more about us <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="zoom-in">
        <section className="video-section section">
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
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section id="solutions" className="section solutions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Solutions for<br /><em>every ambition.</em></h2>
            </div>
            <p className="heading-intro">Whether you are powering a home, a business or a larger operation, we bring the same care and clarity to every project.</p>
          </div>
          <div className="solution-grid">
            {solutions.map(([num, title, desc, img]) => (
              <article className="solution-card" key={title}>
                <img src={img} alt={title} />
                <div className="solution-body">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a className="arrow-link" href="#contact">View details <ArrowUpRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="why-section">
          <div className="why-inner">
            <div>
              <p className="eyebrow light">WHY OM SUNBUILD</p>
              <h2>Good energy<br /><em>is personal.</em></h2>
              <p className="why-copy">The best solar system is one that feels like it was made for you. That means listening first, getting the details right and staying close throughout.</p>
              <a className="button button-outline" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
            <div className="why-points">
              {['Professional from first call to final connection', 'Quality components, selected with care', 'A complete solution, not a quick fix', 'Here when you need us, after installation'].map((x, i) => (
                <div className="why-point" key={x}>
                  <span>0{i + 1}</span>
                  <p>{x}</p>
                  <Check size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section id="products" className="section products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE RIGHT COMPONENTS</p>
              <h2>Built on<br /><em>quality.</em></h2>
            </div>
            <a className="text-link dark" href="#contact">View all products <ArrowUpRight size={16} /></a>
          </div>
          <div className="product-grid">
            {products.map(([title, desc, img]) => (
              <article className="product-card" key={title}>
                <img src={img} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#contact">Enquire now <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section id="our-work" className="section work">
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
          <div className="project-grid">
            {projectData.filter((project) => project.featured).map((project, i) => (
              <Link className={'project-card project-' + i} href={`/projects/${project.slug}`} key={project.slug}>
                <img src={project.coverImage} alt={project.images[0]?.alt ?? project.title} />
                <div className="project-overlay">
                  <p>{project.type}{project.location ? ` · ${project.location}` : ''}</p>
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="story-section">
          <div className="story-large">
            <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1400&q=85" alt="Solar panels installed across an industrial rooftop" />
          </div>
          <div className="story-copy">
            <p className="eyebrow">THE OM SUNBUILD STANDARD</p>
            <h2>From roofline<br /><em>to reality.</em></h2>
            <p>Real work. Real sites. Real attention to every cable, structure and connection. This is installation as it should be: considered, precise and built to last.</p>
            <a className="button button-dark" href="#contact">See how we work <ArrowUpRight size={16} /></a>
          </div>
          <div className="story-small">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&q=85" alt="Solar array under a clear sky" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="section process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>A clear path<br /><em>to solar.</em></h2>
            </div>
            <p className="heading-intro">No guesswork. No unnecessary complexity. Just a straightforward process, guided by people who know what they are doing.</p>
          </div>
          <div className="process-line">
            {steps.map((step, i) => (
              <div className="process-step" key={step}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <Zap size={18} />
                  <h3>{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="zoom-in">
        <section className="brands">
          <p className="eyebrow">QUALITY COMPONENTS · TRUSTED BRANDS</p>
          <div className="brand-list">
            <span>YOUR BRAND</span>
            <span className="brand-serif">partner logo</span>
            <span>BRAND NAME</span>
            <span className="brand-serif">solar co.</span>
            <span>BRAND NAME</span>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="section testimonials">
          <p className="eyebrow">FROM OUR CUSTOMERS</p>
          <div className="testimonial-wrap">
            <blockquote>“The whole process felt refreshingly simple. The team understood what we needed, explained every step and delivered exactly what they promised.”</blockquote>
            <div className="testimonial-by">
              <span className="avatar">R</span>
              <div>
                <b>Customer name</b>
                <small>Residential solar · Project type</small>
              </div>
            </div>
            <div className="quote-mark">“</div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="cta-section">
          <div>
            <p className="eyebrow light">READY WHEN YOU ARE</p>
            <h2>Let&apos;s build your<br /><em>solar future.</em></h2>
          </div>
          <div className="cta-actions">
            <p>Tell us a little about what you need. We&apos;ll take it from there.</p>
            <a className="button button-light" href="#contact">Get a free quote <ArrowUpRight size={17} /></a>
            <a className="text-link light" href="https://wa.me/919109838902?text=Hello%20OM%20SUNBUILD%2C%20I%20would%20like%20to%20discuss%20a%20solar%20solution.">WhatsApp us <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section id="contact" className="section contact">
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
          <EnquiryForm />
        </section>
      </ScrollReveal>

      <Footer isInner={false} />

      <a className="floating-whatsapp" href="https://wa.me/919109838902?text=Hello%20OM%20SUNBUILD%2C%20I%20would%20like%20to%20discuss%20a%20solar%20solution." aria-label="Chat on WhatsApp">WA</a>
    </main>
  )
}
