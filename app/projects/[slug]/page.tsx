import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { InnerFooter, InnerHeader } from '@/components/inner-shell'
import { ProjectCard, ProjectHighlights, ProjectMeta } from '@/components/project-card'
import { ProjectGallery } from '@/components/project-gallery'
import { getProject, getRelatedProjects, projects } from '@/lib/projects'
import { ScrollReveal } from '@/components/ScrollReveal'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  return {
    title: project ? `${project.title} | OM SUNBUILD` : 'Project | OM SUNBUILD',
    description: project?.description,
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  const related = getRelatedProjects(project)

  return (
    <main>
      <InnerHeader />
      <div className="detail-page">
        {/* Breadcrumb Navigation */}
        <ScrollReveal animation="fade-up" delay={40}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/projects">Our work</Link>
            <span>/</span>
            <strong>{project.title}</strong>
          </nav>
        </ScrollReveal>

        {/* Hero Showcase Banner */}
        <ScrollReveal animation="fade-in" duration={650}>
          <section className="detail-hero">
            <img src={project.coverImage} alt={project.images[0]?.alt ?? project.title} />
            <div>
              <p className="eyebrow light">
                {project.type} {project.location ? `· ${project.location}` : ''}
              </p>
              <h1>{project.title}</h1>
            </div>
          </section>
        </ScrollReveal>

        {/* Project Overview (2-Column Split) */}
        <section className="detail-overview">
          <ScrollReveal animation="slide-right" delay={100}>
            <div>
              <p className="eyebrow">PROJECT OVERVIEW</p>
              <h2>
                Thoughtful work.
                <br />
                <em>Built for the site.</em>
              </h2>
              <p className="body-copy">{project.description}</p>
              <div className="detail-actions">
                <Link className="button button-green" href="/#contact">
                  Enquire now <ArrowUpRight size={16} />
                </Link>
                <a className="text-link dark" href="tel:+919109838902">
                  Call us <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={180}>
            <ProjectMeta project={project} />
          </ScrollReveal>
        </section>

        {/* Interactive Gallery Section */}
        <section className="section detail-gallery-section">
          <ScrollReveal animation="fade-up">
            <div className="section-heading">
              <div>
                <p className="eyebrow">INSTALLATION GALLERY</p>
                <h2>
                  See the
                  <br />
                  <em>details.</em>
                </h2>
              </div>
              <p className="heading-intro">
                A visual record of the work. Select an image to move through the installation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <ProjectGallery project={project} />
          </ScrollReveal>
        </section>

        {/* Installation Details (Opposite Entrance) */}
        <section className="detail-installation">
          <ScrollReveal animation="slide-right" delay={100}>
            <div>
              <p className="eyebrow light">INSTALLATION DETAILS</p>
              <h2>
                What went
                <br />
                <em>into it.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="detail-list">
            {project.installationDetails.map((detail, i) => (
              <ScrollReveal key={detail} animation="fade-up" delay={120 + i * 80}>
                <div>
                  <span>0{i + 1}</span>
                  <p>{detail}</p>
                  <Check size={17} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section highlights-section">
          <ScrollReveal animation="fade-up">
            <p className="eyebrow">PROJECT HIGHLIGHTS</p>
            <ProjectHighlights highlights={project.highlights} />
          </ScrollReveal>
        </section>

        {/* Related Projects Catalogue */}
        <section className="section related-projects">
          <ScrollReveal animation="fade-up">
            <div className="section-heading">
              <div>
                <p className="eyebrow">KEEP EXPLORING</p>
                <h2>
                  Related
                  <br />
                  <em>projects.</em>
                </h2>
              </div>
              <Link className="text-link dark" href="/projects">
                View all work <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="portfolio-grid related-grid">
            {related.map((item, idx) => (
              <ScrollReveal key={item.slug} animation="fade-up" delay={idx * 80}>
                <ProjectCard project={item} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
      <InnerFooter />
    </main>
  )
}
