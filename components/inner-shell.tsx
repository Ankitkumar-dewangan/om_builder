'use client'

import { ArrowUpRight, Menu, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'

export function InnerHeader() {
  return <Header isInner={true} />
}

export function InnerFooter() { return <footer><div className="footer-top"><div className="footer-brand"><Link className="brand" href="/"><span className="brand-mark"><img src="/Logo.jpeg" alt="OM SUNBUILD Logo" /></span><span>OM<br/><b>SUNBUILD</b></span></Link><p>Thoughtful solar solutions<br/>for a brighter tomorrow.</p></div><div><p className="footer-label">EXPLORE</p><Link href="/about">About us</Link><Link href="/products">Products</Link><Link href="/#solutions">Solutions</Link></div><div><p className="footer-label">GET IN TOUCH</p><a href="tel:+919109838902">+91 91098 38902</a><a href="mailto:hello@omsunbuild.com">hello@omsunbuild.com</a><span>Your city, India</span></div><div><p className="footer-label">FOLLOW ALONG</p><a href="https://wa.me/910000000000">WhatsApp <ArrowUpRight size={13}/></a></div></div><div className="footer-bottom"><span>© 2025 OM SUNBUILD. All rights reserved.</span><span>Solar solutions, thoughtfully built.</span></div></footer> }

export function PageIntro({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent: string; copy: string }) { return <section className="inner-hero"><div><p className="eyebrow light">{eyebrow}</p><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p></div></section> }
