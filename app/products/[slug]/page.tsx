import { ArrowUpRight, Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProduct, getRelatedProducts, products } from '@/lib/products'
import { InnerFooter, InnerHeader } from '@/components/inner-shell'
import { ScrollReveal } from '@/components/ScrollReveal'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  const related = getRelatedProducts(product)

  return (
    <main>
      <InnerHeader />
      <section className="detail-page">
        {/* Breadcrumb Entrance */}
        <ScrollReveal animation="fade-up" delay={40}>
          <div className="breadcrumbs">
            <Link href="/products">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>
        </ScrollReveal>

        {/* 2-Col Detail Showcase (Image Left, Copy Right) */}
        <div className="detail-grid">
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="detail-image">
              <img src={product.image} alt={product.name} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={180}>
            <div className="detail-copy">
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="brand-line">{product.brand}</p>
              <p className="body-copy">{product.description}</p>
              <div className="detail-actions">
                <Link className="button button-green" href="/#contact">
                  Enquire now <ArrowUpRight size={16} />
                </Link>
                <a
                  className="button button-outline-dark"
                  href="https://wa.me/919109838902?text=Hello%20OM%20SUNBUILD%2C%20I%20am%20enquiring%20about%20the%20following%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a className="text-link dark" href="mailto:hello@omsunbuild.com">
                  Email us <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Staggered Specs & Info Section */}
        <div className="detail-info">
          <ScrollReveal animation="fade-up" delay={80}>
            <div>
              <p className="eyebrow">FEATURES</p>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={160}>
            <div>
              <p className="eyebrow">APPLICATIONS</p>
              <ul>
                {product.applications.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {product.specifications && (
            <ScrollReveal animation="fade-up" delay={240}>
              <div>
                <p className="eyebrow">SPECIFICATIONS</p>
                <dl>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Related Products Showcase */}
        <section className="related">
          <ScrollReveal animation="fade-up">
            <div className="section-heading">
              <div>
                <p className="eyebrow">KEEP EXPLORING</p>
                <h2>
                  Related
                  <br />
                  <em>products.</em>
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="catalogue-grid">
            {related.map((item, idx) => (
              <ScrollReveal key={item.slug} animation="fade-up" delay={idx * 80}>
                <article className="catalogue-card">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="eyebrow">{item.category}</p>
                    <h3>{item.name}</h3>
                    <Link className="text-link dark" href={`/products/${item.slug}`}>
                      View details <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </section>

      <InnerFooter />
    </main>
  )
}
