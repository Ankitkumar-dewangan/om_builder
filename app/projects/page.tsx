'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { InnerFooter, InnerHeader, PageIntro } from '@/components/inner-shell'
import { ProjectCard } from '@/components/project-card'
import { ProjectFilter } from '@/components/project-filter'
import { InstallationStory } from '@/components/installation-story'
import { ScrollReveal } from '@/components/ScrollReveal'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((project) => project.type === active)

  return (
    <main>
      <InnerHeader />
      <PageIntro
        eyebrow="OM SUNBUILD · OUR WORK"
        title="Solar work"
        accent="with purpose."
        copy="A selection of installation work, structure and solar solutions created with care for real sites and real energy needs."
      />

      {/* Intro Split Section */}
      <section className="section portfolio-intro">
        <ScrollReveal animation="slide-right" delay={100}>
          <div>
            <p className="eyebrow">THE WORK BEHIND THE PROMISE</p>
            <h2>
              Made to be
              <br />
              <em>seen.</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={180}>
          <div>
            <p className="body-copy">
              From residential rooftops to larger solar infrastructure, every project starts with understanding the site and ends with a system that is ready to work.
            </p>
            <Link className="button button-green" href="/#contact">
              Get a free quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Catalogue Section */}
      <section className="section projects-catalogue">
        <ScrollReveal animation="fade-up">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROJECT CATALOGUE</p>
              <h2>
                Our installation
                <br />
                <em>stories.</em>
              </h2>
            </div>
            <p className="heading-intro">
              Browse the work by project type. Project details remain editable as the OM SUNBUILD portfolio grows.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <ProjectFilter active={active} onChange={setActive} />
        </ScrollReveal>

        <div className="portfolio-grid">
          {visible.map((project, idx) => (
            <ScrollReveal key={project.slug} animation="fade-up" delay={idx * 80}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <InstallationStory />

      {/* CTA Section */}
      <section className="cta-section">
        <ScrollReveal animation="slide-right" delay={100}>
          <div>
            <p className="eyebrow light">YOUR SITE COULD BE NEXT</p>
            <h2>
              Let&apos;s plan your
              <br />
              <em>solar future.</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={180}>
          <div className="cta-actions">
            <p>Tell us about your home, business or site and we&apos;ll help you understand the next step.</p>
            <Link className="button button-light" href="/#contact">
              Enquire now <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <InnerFooter />
    </main>
  )
}
