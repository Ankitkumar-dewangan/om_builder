'use client'
import { projectTypes } from '@/lib/projects'
export function ProjectFilter({ active, onChange }: { active: string; onChange: (value: string) => void }) { return <div className="project-filter" role="tablist" aria-label="Filter projects by type">{projectTypes.map((type) => <button type="button" role="tab" aria-selected={active === type} className={active === type ? 'active' : ''} key={type} onClick={() => onChange(type)}>{type}</button>)}</div> }
