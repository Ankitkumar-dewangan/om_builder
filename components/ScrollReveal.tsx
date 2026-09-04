'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'zoom-in'
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY + 2) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY - 2) {
        setScrollDirection('up')
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset animation so it reverses when user scrolls back up/down!
          setIsVisible(false)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Generate animation classes based on visibility and scroll direction (for reversing)
  const getAnimationClass = () => {
    if (!isVisible) {
      if (scrollDirection === 'up') {
        // Reverse exit direction when scrolling UP
        switch (animation) {
          case 'fade-up':
            return 'opacity-0 -translate-y-12 transition-all duration-700 ease-out'
          case 'fade-down':
            return 'opacity-0 translate-y-12 transition-all duration-700 ease-out'
          case 'slide-left':
            return 'opacity-0 translate-x-12 transition-all duration-700 ease-out'
          case 'slide-right':
            return 'opacity-0 -translate-x-12 transition-all duration-700 ease-out'
          case 'zoom-in':
            return 'opacity-0 scale-90 transition-all duration-700 ease-out'
          default:
            return 'opacity-0 -translate-y-12 transition-all duration-700 ease-out'
        }
      } else {
        // Default hidden state when scrolling DOWN
        switch (animation) {
          case 'fade-up':
            return 'opacity-0 translate-y-12 transition-all duration-700 ease-out'
          case 'fade-down':
            return 'opacity-0 -translate-y-12 transition-all duration-700 ease-out'
          case 'slide-left':
            return 'opacity-0 -translate-x-12 transition-all duration-700 ease-out'
          case 'slide-right':
            return 'opacity-0 translate-x-12 transition-all duration-700 ease-out'
          case 'zoom-in':
            return 'opacity-0 scale-90 transition-all duration-700 ease-out'
          default:
            return 'opacity-0 translate-y-12 transition-all duration-700 ease-out'
        }
      }
    }

    // Visible state: full opacity, centered scale
    return 'opacity-100 translate-y-0 translate-x-0 scale-100 transition-all duration-700 ease-out'
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal-box ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
