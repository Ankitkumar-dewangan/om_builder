'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'fade-in'
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [exitDirection, setExitDirection] = useState<'above' | 'below'>('below')

  useEffect(() => {
    // Check user preference for reduced motion
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        setIsVisible(true)
        return
      }
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          // Record exit direction relative to viewport
          if (entry.boundingClientRect.top < 0) {
            setExitDirection('above')
          } else {
            setExitDirection('below')
          }
          setIsVisible(false)
        }
      },
      {
        threshold: 0.08,
        rootMargin: '10px 0px -20px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once])

  // Generate animation classes based on visibility and relative position
  const getAnimationClass = () => {
    // Ultra-smooth easing curve (Apple/Linear deceleration physics curve)
    const smoothEase = 'transition-all ease-[cubic-bezier(0.16,1,0.3,1)]'

    if (!isVisible) {
      if (exitDirection === 'above') {
        // Element is positioned above the viewport (exited top or re-entering from top on scroll UP)
        switch (animation) {
          case 'fade-up':
            return `opacity-0 -translate-y-8 ${smoothEase}`
          case 'fade-down':
            return `opacity-0 translate-y-8 ${smoothEase}`
          case 'fade-in':
            return `opacity-0 ${smoothEase}`
          case 'slide-left':
            return `opacity-0 -translate-x-8 ${smoothEase}`
          case 'slide-right':
            return `opacity-0 translate-x-8 ${smoothEase}`
          case 'zoom-in':
            return `opacity-0 scale-[0.96] ${smoothEase}`
          default:
            return `opacity-0 -translate-y-8 ${smoothEase}`
        }
      } else {
        // Element is positioned below the viewport (enters on scroll DOWN, reverses out on scroll UP)
        switch (animation) {
          case 'fade-up':
            return `opacity-0 translate-y-8 ${smoothEase}`
          case 'fade-down':
            return `opacity-0 -translate-y-8 ${smoothEase}`
          case 'fade-in':
            return `opacity-0 ${smoothEase}`
          case 'slide-left':
            return `opacity-0 translate-x-8 ${smoothEase}`
          case 'slide-right':
            return `opacity-0 -translate-x-8 ${smoothEase}`
          case 'zoom-in':
            return `opacity-0 scale-[0.96] ${smoothEase}`
          default:
            return `opacity-0 translate-y-8 ${smoothEase}`
        }
      }
    }

    // Visible state: full opacity, natural scale and translation
    return `opacity-100 translate-y-0 translate-x-0 scale-100 ${smoothEase}`
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal-box will-change-[transform,opacity] ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
