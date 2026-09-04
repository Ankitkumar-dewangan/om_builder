'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, Sun, X } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  isInner?: boolean
}

export function Header({ isInner = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header
      className={`site-header-fixed transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'fixed-header-scrolled'
          : 'fixed-header-top'
      }`}
    >
      <div className="header-inner">
        {/* Attractive Logo */}
        <Link className="brand-logo-container group" href="/">
          <div className="logo-badge-wrapper">
            <div className="logo-badge-glow" />
            <div className="logo-icon-box">
              <Sun className="logo-sun-icon" size={22} />
            </div>
          </div>
          <div className="logo-text-box">
            <div className="logo-title-row">
              <span className="logo-om-text">OM</span>
              <span className="logo-badge-tag">SOLAR</span>
            </div>
            <span className="logo-[#ffffff] text-[11px] font-bold tracking-[0.24em] uppercase text-emerald-100">
              SUNBUILD
            </span>
          </div>
        </Link>

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
            className="nav-cta-button"
            href={isInner ? '/#contact' : '#contact'}
            onClick={() => setMenuOpen(false)}
          >
            <span>Get a free quote</span>
            <ArrowUpRight size={15} />
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
  )
}
