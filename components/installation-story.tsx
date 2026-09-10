'use client'

import { installationStory } from '@/lib/projects'
import { ScrollReveal } from '@/components/ScrollReveal'

export function InstallationStory() {
  return (
    <section className="installation-story">
      <ScrollReveal animation="fade-up">
        <div className="section-heading story-heading">
          <div>
            <p className="eyebrow light">THE INSTALLATION JOURNEY</p>
            <h2>
              From site visit
              <br />
              <em>to switched on.</em>
            </h2>
          </div>
          <p className="heading-intro">
            The details matter. Our work follows a clear path from understanding the site to delivering a finished solar solution.
          </p>
        </div>
      </ScrollReveal>

      <div className="story-steps">
        {installationStory.map((step, idx) => (
          <ScrollReveal key={step.number} animation="fade-up" delay={idx * 90}>
            <article>
              <div className="story-step-image">
                <img src={step.image} alt={step.alt} />
                <span>{step.number}</span>
              </div>
              <p className="eyebrow light">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
