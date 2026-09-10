'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { categories, products } from '@/lib/products'
import { InnerFooter, InnerHeader, PageIntro } from '@/components/inner-shell'
import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function ProductsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main>
      <InnerHeader />
      <PageIntro
        eyebrow="THE PRODUCT CATALOGUE"
        title="Built on"
        accent="quality."
        copy="Explore the components we can specify for your project. Enquiry-based catalogue only — no cart, checkout or payment."
      />

      <section className="section catalogue">
        {/* Category Navigation with Subtle Entrance */}
        <ScrollReveal animation="fade-up" delay={50}>
          <div className="category-nav" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category}
                className={active === category ? 'active' : ''}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Catalogue Heading & Counter */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="catalogue-heading">
            <p className="eyebrow">{active === 'All' ? 'ALL COMPONENTS' : active.toUpperCase()}</p>
            <p>
              <AnimatedCounter target={filtered.length} /> products
            </p>
          </div>
        </ScrollReveal>

        {/* Staggered Catalogue Grid */}
        <div className="catalogue-grid">
          {filtered.map((product, idx) => (
            <ScrollReveal key={product.slug} animation="fade-up" delay={idx * 70}>
              <article className="catalogue-card">
                <img src={product.image} alt={product.name} />
                <div>
                  <p className="eyebrow">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="brand-line">{product.brand}</p>
                  <p className="body-copy">{product.description}</p>
                  <div className="card-actions">
                    <Link className="text-link dark" href={`/products/${product.slug}`}>
                      View details <ArrowUpRight size={15} />
                    </Link>
                    <Link className="button button-green" href="/#contact">
                      Enquire now
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <InnerFooter />
    </main>
  )
}
