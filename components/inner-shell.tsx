'use client'

import { ArrowUpRight, Menu, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function InnerHeader() {
  return <Header isInner={true} />
}

export function InnerFooter() {
  return <Footer isInner={true} />
}

export function PageIntro({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent: string; copy: string }) { return <section className="inner-hero"><div><p className="eyebrow light">{eyebrow}</p><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p></div></section> }
