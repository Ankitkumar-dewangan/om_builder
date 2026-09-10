'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon, Sun } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90',
    eyebrow: 'OM SUNBUILD · SOLAR SOLUTIONS',
    title: 'Power your',
    accent: 'future.',
    copy: 'Good energy starts with a considered solution. We design and install solar systems that help homes, businesses and communities move forward.',
    tag: 'Rooftop Solar'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=90',
    eyebrow: 'COMMERCIAL & BUSINESS SOLAR',
    title: 'Smart energy for',
    accent: 'business.',
    copy: 'High-performing solar arrays for workplaces, factories and growing businesses. Lower overheads and maximize sustainability.',
    tag: 'Commercial'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=90',
    eyebrow: 'INDUSTRIAL & UTILITY SCALE',
    title: 'Engineered for',
    accent: 'scale.',
    copy: 'End-to-end project support and high yield solar installations for large sites demanding reliable clean power.',
    tag: 'Industrial'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2200&q=90',
    eyebrow: 'ADVANCED SOLAR TECH',
    title: 'Built on trusted',
    accent: 'quality.',
    copy: 'Tier-1 solar modules paired with intelligent smart inverters for maximum energy efficiency and long-term yield.',
    tag: 'Technology'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2200&q=90',
    eyebrow: 'GREEN ENERGY MISSION',
    title: 'Zero carbon.',
    accent: 'Pure power.',
    copy: 'Join the renewable transition with confidence. Professional assessment, precise installation and lifetime service.',
    tag: 'Sustainable'
  }
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  return (
    <section
      id="top"
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide-item ${index === current ? 'active' : ''}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-overlay-gradient" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="hero-content">
        {/* Animated Brand Tagline Banner */}
        <div className="hero-tagline-pill" aria-label="Brand Tagline">
          <span className="tagline-icon-wrap">
            <Sun size={13} className="tagline-sun-spin" />
          </span>
          <span className="animated-tagline-text">
            Power Your Future with Solar Energy
          </span>
          <span className="tagline-pill-glow" />
        </div>

        {/* Slide Text Content with smooth transition */}
        <div key={current} className="hero-slide-text-wrapper">
          <p className="eyebrow light hero-eyebrow">
            <span className="hero-tag-badge">{slides[current].tag}</span>
            <span className="hero-eyebrow-divider" aria-hidden="true">·</span>
            <span className="hero-eyebrow-label">{slides[current].eyebrow}</span>
          </p>
          <h1 className="hero-title">
            <span className="hero-title-main">{slides[current].title}</span>
            <br className="hero-title-break" />
            <em className="hero-title-accent">{slides[current].accent}</em>
          </h1>
          <p className="hero-copy">{slides[current].copy}</p>
        </div>

        <div className="hero-actions">
          <a className="button button-green hero-cta-btn" href="#contact">
            <span>Get a free quote</span>
            <ArrowUpRight size={17} />
          </a>
          <a className="text-link light" href="#our-work">
            Explore our work <ChevronRightIcon size={16} />
          </a>
        </div>
      </div>

      {/* Floating Side Badge */}
      <div className="hero-note">
        <span className="sun-dot">
          <Sun size={16} />
        </span>
        <span>
          Clean energy,
          <br />
          built for tomorrow.
        </span>
      </div>

      {/* Slider Controls (Arrows & Pagination) */}
      <div className="carousel-controls">
        <button
          className="carousel-btn carousel-prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="dot-number">0{i + 1}</span>
              <span className="dot-line" />
            </button>
          ))}
        </div>

        <button
          className="carousel-btn carousel-next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Slide Counter & Progress Bar */}
      <div className="slider-bottom-bar">
        <div className="slide-counter">
          <span className="current-num">0{current + 1}</span>
          <span className="counter-divider">/</span>
          <span className="total-num">0{slides.length}</span>
        </div>
        <div className="progress-bar-track">
          <div
            key={current}
            className={`progress-bar-fill ${!isPaused ? 'animating' : ''}`}
          />
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="scroll-cue">
        Scroll to explore <span />
      </a>
    </section>
  )
}
