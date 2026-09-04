export type ProjectType = 'Residential' | 'Commercial' | 'Industrial' | 'Government' | 'Other'

export type Project = {
  slug: string
  title: string
  type: ProjectType
  capacity?: string
  location?: string
  coverImage: string
  images: { src: string; alt: string }[]
  description: string
  installationDetails: string[]
  highlights: string[]
  featured?: boolean
}

const rooftop = 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1600&q=88'
const array = 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=88'
const panels = 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=88'
const blueSky = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=88'

export const projects: Project[] = [
  { slug: 'residential-rooftop-installation', title: 'Residential rooftop installation', type: 'Residential', capacity: 'As designed for the site', location: 'Durg, Chhattisgarh', coverImage: rooftop, images: [{src: rooftop, alt: 'Solar panels installed on a residential rooftop'}, {src: panels, alt: 'Close view of rooftop solar modules'}, {src: blueSky, alt: 'Solar array against a clear sky'}], description: 'A considered rooftop solar solution for a home, planned around the available roof area and the everyday needs of the household.', installationDetails: ['Site-led system planning', 'Rooftop mounting structure', 'Panel and electrical installation', 'Testing and handover'], highlights: ['Residential solar', 'Rooftop installation', 'Complete solar solution'], featured: true },
  { slug: 'commercial-solar-installation', title: 'Commercial solar installation', type: 'Commercial', capacity: 'Project capacity to be added', location: 'Chhattisgarh', coverImage: array, images: [{src: array, alt: 'Solar panels across a commercial rooftop'}, {src: rooftop, alt: 'Rows of photovoltaic panels on a roof'}, {src: panels, alt: 'Solar modules in an installed array'}], description: 'A commercial installation shaped around dependable generation, practical access and a clean, well-organised finish.', installationDetails: ['Site assessment and system planning', 'Structure and module installation', 'AC and DC-side connections', 'Final checks and commissioning'], highlights: ['Commercial solar', 'Professional installation', 'Quality components'], featured: true },
  { slug: 'industrial-solar-array', title: 'Industrial solar array', type: 'Industrial', capacity: 'Project capacity to be added', location: 'Chhattisgarh', coverImage: panels, images: [{src: panels, alt: 'Large solar array on an industrial roof'}, {src: array, alt: 'Industrial rooftop solar installation'}, {src: blueSky, alt: 'Solar panels with open sky behind them'}], description: 'An image-led example of the larger solar infrastructure OM SUNBUILD is equipped to plan, install and support.', installationDetails: ['Large-site preparation', 'Custom mounting structure', 'Module and inverter installation', 'Earthing and protection work'], highlights: ['Industrial solar', 'System design', 'Installation support'], featured: true },
  { slug: 'solar-structure-installation', title: 'Solar structure installation', type: 'Other', capacity: 'Site-specific', location: 'Durg, Chhattisgarh', coverImage: blueSky, images: [{src: blueSky, alt: 'Elevated solar structure under a clear sky'}, {src: array, alt: 'Solar panels supported by a rooftop structure'}], description: 'A closer look at the structure-led work behind a stable, serviceable solar installation.', installationDetails: ['Site-specific structure design', 'Pre-galvanised channel approach', 'Nut-and-bolt fitting', 'Additional bracing where required'], highlights: ['Solar structures', 'Maintenance access', 'Built for the site'] },
]

export const projectTypes = ['All', ...Array.from(new Set(projects.map((project) => project.type)))] as const
export function getProject(slug: string) { return projects.find((project) => project.slug === slug) }
export function getRelatedProjects(project: Project) { return projects.filter((item) => item.slug !== project.slug && item.type === project.type).concat(projects.filter((item) => item.slug !== project.slug && item.type !== project.type)).slice(0, 3) }
export const installationStory = [
  { number: '01', title: 'Site & planning', text: 'Understand the roof, the energy need and the right way forward.', image: rooftop, alt: 'Rooftop prepared for solar planning' },
  { number: '02', title: 'Structure & support', text: 'Build a secure foundation for long-term panel performance.', image: blueSky, alt: 'Solar panels on a supported structure' },
  { number: '03', title: 'Panels & electrical', text: 'Bring modules, cables, protection and connections together.', image: panels, alt: 'Installed solar panel array' },
  { number: '04', title: 'Completed installation', text: 'A finished system, checked carefully and ready for handover.', image: array, alt: 'Completed solar installation across a rooftop' },
]
