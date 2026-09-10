'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Download, Eye, Menu, Sparkles, X, LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  isInner?: boolean
}

export function Header({ isInner = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoModalOpen, setLogoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLogoModalOpen(false)
    }
    if (logoModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [logoModalOpen])

  const navItems = isInner
    ? [
        ['About', '/about'],
        ['Solutions', '/#solutions'],
        ['Products', '/products'],
        ['Our work', '/#our-work'],
        ['Contact', '/#contact'],
      ]
    : [
        ['About', '#about'],
        ['Solutions', '#solutions'],
        ['Products', '#products'],
        ['Our work', '#our-work'],
        ['Contact', '#contact'],
      ]

  return (
    <>
      <header
        className={`site-header-fixed transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'fixed-header-scrolled'
            : 'fixed-header-top'
        }`}
      >
        <div className="header-inner">
          {/* Attractive Logo with Click-to-View Modal */}
          <div
            className="brand-logo-container group cursor-pointer"
            onClick={() => setLogoModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setLogoModalOpen(true)
              }
            }}
            title="Click to view full Logo"
          >
            <div className="logo-badge-wrapper">
              <div className="logo-badge-glow" />
              <div className="logo-image-box">
                <Image
                  src="/Logo.jpeg"
                  alt="OM SUNBUILD Logo"
                  width={28}
                  height={28}
                  className="logo-img"
                  priority
                />
                <span className="logo-hover-zoom-badge" aria-hidden="true">
                  <Eye size={13} />
                </span>
              </div>
            </div>
            <div className="logo-text-box">
              <div className="logo-title-row">
                <span className="logo-om-text">OM SUNBUILD</span>
              </div>
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-emerald-100">
                SOLAR SOLUTIONS
              </span>
            </div>
          </div>

        {/* Navigation */}
        <nav className={`main-nav-menu ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="main-nav-link"
            >
              {label}
              <span className="link-hover-bar" />
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="nav-cta-button"
            title="Admin Login Portal"
          >
            <LogIn size={15} />
            <span>Login</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

    {/* Logo Preview Lightbox Modal */}
    {logoModalOpen && (
      <div
        className="logo-modal-overlay"
        onClick={() => setLogoModalOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="OM SUNBUILD Logo Preview"
      >
        <div
          className="logo-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="logo-modal-close-btn"
            onClick={() => setLogoModalOpen(false)}
            aria-label="Close logo preview"
          >
            <X size={20} />
          </button>

          {/* Logo Circular Glowing Showcase */}
          <div className="logo-modal-image-wrapper">
            <div className="logo-modal-glow" />
            <Image
              src="/Logo.jpeg"
              alt="OM SUNBUILD Official Logo"
              width={260}
              height={260}
              className="logo-modal-img"
              priority
            />
          </div>

          <div className="logo-modal-text">
            <h3 className="logo-modal-title">OM SUNBUILD</h3>
            <p className="logo-modal-tagline">
              Power Your Future with Solar Energy
            </p>
            <p className="logo-modal-sub">
              Official Brand Mark · Solar & Renewable Solutions
            </p>
          </div>

          <div className="logo-modal-actions">
            <a
              href="/Logo.jpeg"
              download="OM-SUNBUILD-Logo.jpeg"
              className="button button-green logo-modal-download-btn"
            >
              <Download size={15} />
              <span>Download Logo</span>
            </a>
            <Link
              href="/"
              onClick={() => setLogoModalOpen(false)}
              className="button button-light logo-modal-home-btn"
            >
              <span>Go to Home</span>
            </Link>
          </div>
        </div>
      </div>
    )}
  </>
  )
}
