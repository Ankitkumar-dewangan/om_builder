export type Product = { slug: string; name: string; brand: string; category: string; description: string; image: string; features: string[]; applications: string[]; specifications?: Record<string, string> }

export const categories = ['All', 'Solar Panels', 'Inverters', 'ACDB/DCDB', 'Cables & Wires', 'Solar Structures', 'Earthing', 'Power Backup', 'Other Components']

export const products: Product[] = [
  { slug: 'mono-perc-solar-panel', name: 'Mono PERC Solar Panel', brand: 'Brand name', category: 'Solar Panels', description: 'High-efficiency photovoltaic modules for dependable rooftop generation.', image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=85', features: ['Monocrystalline cell technology', 'Weather-resistant construction', 'Suitable for residential and commercial systems'], applications: ['Rooftop solar', 'Commercial installations'] },
  { slug: 'hybrid-solar-inverter', name: 'Hybrid Solar Inverter', brand: 'Brand name', category: 'Inverters', description: 'Intelligent power conversion for solar, grid and backup integration.', image: 'https://images.unsplash.com/photo-1509390874181-6c7dbf7f5a31?auto=format&fit=crop&w=1200&q=85', features: ['Solar and battery ready', 'Clear system monitoring', 'Designed for reliable operation'], applications: ['Homes', 'Small businesses'] },
  { slug: 'acdc-protection-box', name: 'ACDB / DCDB Protection Box', brand: 'Brand name', category: 'ACDB/DCDB', description: 'System protection and isolation components for balanced solar installations.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85', features: ['AC and DC protection options', 'Installation-ready enclosure', 'Configured to project requirements'], applications: ['Rooftop systems', 'Solar plants'] },
  { slug: 'solar-cable-set', name: 'Solar Cable Set', brand: 'Brand name', category: 'Cables & Wires', description: 'Purpose-built cabling for safe and efficient solar connections.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85', features: ['Solar-rated cable construction', 'Flexible routing', 'Available by project requirement'], applications: ['Panel interconnection', 'Array wiring'] },
  { slug: 'rooftop-mounting-structure', name: 'Rooftop Mounting Structure', brand: 'Brand name', category: 'Solar Structures', description: 'Engineered mounting solutions that keep every module aligned and secure.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85', features: ['Designed for rooftop installation', 'Durable structural materials', 'Adaptable to site conditions'], applications: ['Metal roofs', 'Concrete rooftops'] },
  { slug: 'solar-earthing-kit', name: 'Solar Earthing Kit', brand: 'Brand name', category: 'Earthing', description: 'Essential earthing components for safer solar infrastructure.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85', features: ['System safety focused', 'Suitable for solar installations', 'Project-specific selection'], applications: ['Residential solar', 'Industrial solar'] },
]

export function getProduct(slug: string) { return products.find((product) => product.slug === slug) }

export function getRelatedProducts(product: Product) { return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3) }

export function productImage(product: Product) { return product.image }

