'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  target,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated.current) {
            hasAnimated.current = true

            // Respect prefers-reduced-motion
            if (typeof window !== 'undefined') {
              const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
              if (prefersReduced) {
                setCount(target)
                return
              }
            }

            const startTime = performance.now()
            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Premium cubic deceleration curve
              const easedProgress = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(easedProgress * target))

              if (progress < 1) {
                requestAnimationFrame(step)
              } else {
                setCount(target)
              }
            }

            requestAnimationFrame(step)
          }
        } else {
          hasAnimated.current = false
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {prefix}{count}{suffix}
    </span>
  )
}
