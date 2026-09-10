'use client'

import { ArrowUpRight, Check, Play } from 'lucide-react'
import Link from 'next/link'
import { InnerFooter, InnerHeader, PageIntro } from '@/components/inner-shell'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function AboutPage() {
  return (
    <main>
      <InnerHeader />
      <PageIntro
        eyebrow="THE OM SUNBUILD STORY"
        title="Energy with"
        accent="intention."
        copy="We make the move to solar feel clear, considered and genuinely worthwhile — from the first conversation to the final connection."
      />

      {/* Section 1: Who We Are (Image from Left, Copy from Right) */}
      <section className="section inner-two-col">
        <ScrollReveal animation="slide-right" delay={100}>
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=85"
              alt="Solar panels on a rooftop"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={180}>
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2>
              Building a brighter
              <br />
              <em>way forward.</em>
            </h2>
            <p className="body-copy">
              OM SUNBUILD is a solar solutions company focused on thoughtful design, quality components and professional installation. We work with homes, businesses and larger sites to create systems that fit the way energy is actually used.
            </p>
            <p className="body-copy">
              Company details, history and team information can be added here as the business grows.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 2: Values Section (Staggered Cards) */}
      <section className="values-section">
        <ScrollReveal animation="slide-right" delay={100}>
          <div>
            <p className="eyebrow light">WHAT GUIDES US</p>
            <h2>
              Good energy
              <br />
              <em>is personal.</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="value-grid">
          {[
            ['Mission', 'Make solar easier to understand and better to live with.'],
            ['Vision', 'A future where clean energy is a considered everyday choice.'],
            ['Values', 'Clarity, care and craftsmanship in every project.'],
          ].map(([title, text], idx) => (
            <ScrollReveal key={title} animation="fade-up" delay={150 + idx * 110}>
              <article>
                <span>
                  <Check size={16} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section 3: What We Do (Multi-directional Reveal) */}
      <section className="section inner-two-col">
        <div>
          <ScrollReveal animation="slide-right" delay={100}>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              From roofline
              <br />
              <em>to reality.</em>
            </h2>
            <p className="body-copy">
              Our work covers the full solar journey: understanding your needs, planning the system, selecting components, installing with care and staying available after handover.
            </p>
          </ScrollReveal>

          <div className="mini-list">
            {[
              ['01', 'Solar installation'],
              ['02', 'System planning'],
              ['03', 'Ongoing support'],
            ].map(([num, text], i) => (
              <ScrollReveal key={num} animation="slide-right" delay={200 + i * 90}>
                <span>
                  <b>{num}</b> {text}
                </span>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={450}>
            <Link className="button button-dark" href="/#contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="slide-left" delay={180}>
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1509390144018-eeaf650522c8?auto=format&fit=crop&w=1400&q=85"
              alt="Solar installation team at work"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Inner Video Banner */}
      <section className="section inner-video">
        <ScrollReveal animation="zoom-in" duration={750} className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1800&q=90"
            alt="Solar panels across an industrial roof"
          />
          <div>
            <p className="eyebrow light">WATCH OUR STORY</p>
            <h2>
              More than panels.
              <br />
              <em>A partnership.</em>
            </h2>
            <button className="play-button" aria-label="Play company story">
              <Play fill="currentColor" size={24} />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: CTA Section */}
      <section className="cta-section">
        <ScrollReveal animation="slide-right" delay={100}>
          <div>
            <p className="eyebrow light">READY WHEN YOU ARE</p>
            <h2>
              Let&apos;s build your
              <br />
              <em>solar future.</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={180}>
          <Link className="button button-light" href="/#contact">
            Get a free quote <ArrowUpRight size={17} />
          </Link>
        </ScrollReveal>
      </section>

      <InnerFooter />
    </main>
  )
}
