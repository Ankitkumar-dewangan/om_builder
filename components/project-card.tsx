import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
export function ProjectCard({ project }: { project: Project }) { return <Link href={`/projects/${project.slug}`} className="portfolio-card"><div className="portfolio-image"><img src={project.coverImage} alt={project.images[0]?.alt ?? project.title}/><span className="portfolio-arrow"><ArrowUpRight size={18}/></span></div><div className="portfolio-card-body"><div><p className="eyebrow">{project.type} {project.capacity ? `· ${project.capacity}` : ''}</p><h3>{project.title}</h3><p className="portfolio-location">{project.location}</p></div><span className="text-link dark">View project <ArrowUpRight size={15}/></span></div></Link> }

export function ProjectMeta({ project }: { project: Project }) { return <div className="project-meta">{[['PROJECT TYPE', project.type], ['CAPACITY', project.capacity], ['LOCATION', project.location]].filter(([, value]) => value).map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div> }

export function ProjectHighlights({ highlights }: { highlights: string[] }) { return <div className="highlight-grid">{highlights.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div> }
