'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  UserPlus,
  Inbox,
  LogOut,
  Menu,
  X,
  Globe,
  Bell,
  ChevronDown,
  Layers,
} from 'lucide-react'

interface AdminShellProps {
  children: React.ReactNode
  user: {
    username: string
    name: string
    role: string
  }
}

export function AdminShell({ children, user }: AdminShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  // Auto close mobile drawer on navigation change
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Lock body scroll on mobile when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  // Navigation Items: Dashboard -> Register -> Enquiry
  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Register',
      href: '/admin/register',
      icon: UserPlus,
    },
    {
      name: 'Enquiry',
      href: '/admin/enquiries',
      icon: Inbox,
    },
  ]

  async function handleLogout() {
    try {
      setLoggingOut(true)
      await fetch('/api/auth/logout', { method: 'POST' })
      window.location.href = '/'
    } catch {
      window.location.href = '/'
    }
  }

  let pageTitle = 'Dashboard'
  if (pathname.includes('/admin/register')) {
    pageTitle = 'Admin Register'
  } else if (pathname.includes('/admin/enquiries')) {
    pageTitle = 'Enquiry Management'
  }

  // User initials
  const initials = (user.name || user.username || 'AD')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden flex flex-row bg-[#f7f8f4] text-[#17251d] antialiased font-sans select-none">
      {/* Mobile Dark Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 md:hidden transition-opacity duration-200"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ========================================================================= */}
      {/* STRICTLY FIXED SIDEBAR (Desktop Fixed + Mobile Slide Drawer)              */}
      {/* ========================================================================= */}
      <aside
        className={`fixed md:sticky top-0 left-0 bottom-0 z-50 w-72 md:w-64 h-[100dvh] md:h-screen max-h-screen flex-shrink-0 bg-white border-r border-[#d9e0d8] flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } shadow-2xl md:shadow-none select-none`}
      >
        {/* Top: Brand Logo + Nav Menu (Internally scrollable if viewport height is compact) */}
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
          {/* Brand Header */}
          <div className="h-20 px-5 flex items-center justify-between border-b border-[#eef0e8] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#287a4b] to-[#195232] p-0.5 shadow-sm flex-shrink-0">
                <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center overflow-hidden p-0.5">
                  <Image src="/Logo.jpeg" alt="OM SUNBUILD" width={34} height={34} className="rounded object-contain" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div
                  style={{ fontSize: '14px', lineHeight: '18px' }}
                  className="font-extrabold text-[#17251d] tracking-tight truncate"
                >
                  OM SUNBUILD
                </div>
                <p className="text-[11px] text-[red] uppercase font-medium truncate mt-0.5">
                  solar solution
                </p>
              </div>
            </div>

            {/* Close button on mobile drawer */}
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1.5 rounded-xl bg-[#f7f8f4] text-[#68746b] hover:text-[#17251d] border border-[#d9e0d8] cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="px-3.5 py-6">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#68746b] px-3 mb-3">
              MAIN MENU
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={isActive ? { backgroundColor: '#195232', color: '#ffffff' } : undefined}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-150 ${
                      isActive
                        ? 'bg-[#195232] !text-white text-white shadow-sm shadow-[#195232]/20'
                        : 'text-[#17251d] hover:bg-[#eef0e8] hover:text-[#195232]'
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={isActive ? '!text-white text-white' : 'text-[#68746b]'}
                      style={isActive ? { color: '#ffffff' } : undefined}
                    />
                    <span
                      style={isActive ? { color: '#ffffff' } : undefined}
                      className={`truncate font-bold ${isActive ? '!text-white text-white' : 'text-[#17251d]'}`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Bottom: Logout & User Profile */}
        <div className="flex-shrink-0 p-3.5 border-t border-[#eef0e8] flex flex-col gap-2.5 bg-white">
          {/* Logout Action */}
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer w-full"
          >
            <LogOut size={15} className="text-red-500" />
            <span>{loggingOut ? 'Logging out...' : 'Logout'}</span>
          </button>

          {/* User Profile Tile */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#195232] text-white font-black text-xs flex items-center justify-center shadow-xs">
                {initials}
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#34d399] border-2 border-white rounded-full" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-[#17251d] truncate">
                {user.name || user.username}
              </p>
              <p className="text-[10px] font-bold text-[#68746b] uppercase tracking-wider truncate">
                {user.role || 'ADMIN'}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT: FIXED TOPBAR + INDEPENDENT SCROLLING                       */}
      {/* ========================================================================= */}
      <div className="flex-1 h-[100dvh] flex flex-col min-w-0 overflow-hidden bg-[#f7f8f4]">
        {/* Top Header Bar - strictly sticky & fixed on mobile and desktop */}
        <header className="h-16 md:h-18 bg-white border-b border-[#d9e0d8] px-4 sm:px-6 md:px-8 flex items-center justify-between flex-shrink-0 z-30 shadow-2xs">
          {/* Left Title */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl bg-[#f7f8f4] text-[#17251d] hover:bg-[#eef0e8] border border-[#d9e0d8] flex items-center justify-center cursor-pointer"
              aria-label="Open Sidebar Menu"
            >
              <Menu size={18} />
            </button>
            <div
              style={{ fontSize: '18px', lineHeight: '24px' }}
              className="font-extrabold text-[#17251d] tracking-tight"
            >
              {pageTitle}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Filter Pill */}
           

            {/* Notification Bell */}
            <div className="relative p-2 rounded-full hover:bg-[#eef0e8] text-[#17251d] cursor-pointer transition-colors">
              <Bell size={17} />
              <span className="absolute top-1 right-1 w-3 h-3 bg-[#287a4b] text-white rounded-full text-[8px] font-black flex items-center justify-center">
                !
              </span>
            </div>

            

            {/* User Pill */}
            <div className="flex items-center gap-2 pl-2 sm:pl-3 sm:border-l border-[#d9e0d8]">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#17251d] leading-none">
                  {user.name || user.username}
                </p>
                <span className="text-[10px] font-extrabold text-[#68746b] uppercase tracking-wider block mt-1 leading-none">
                  {user.role || 'ADMIN'}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#195232] text-white font-black text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                {initials}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Body - ONLY THIS CONTAINER SCROLLS */}
        <main className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>

        {/* ========================================================================= */}
        {/* COMPACT AUTHENTICATED BRANDING BAR (Beside sidebar on desktop, footer on mobile) */}
        {/* ========================================================================= */}
        <div
          style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
          className="h-10 border-t flex items-center justify-center flex-shrink-0 z-30 px-4 select-none shadow-[0_-1px_3px_rgba(0,0,0,0.02)]"
        >
          {/* Centered "Powered by AGP Empire" Branding */}
          <div className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] hover:border-[#cbd5e1] transition-all duration-200 cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/80 group-hover:bg-[#ea580c] transition-colors" />
            <span className="text-[10px] font-semibold tracking-wider text-[#64748b] uppercase">
              Powered by
            </span>
            <span className="h-3 w-px bg-[#cbd5e1]" />
            <span className="font-extrabold text-[12px] tracking-[0.09em] uppercase">
              <span className="text-[#ea580c] group-hover:brightness-110 transition-all">A</span>
              <span className="text-[#64748b] group-hover:text-[#475569] transition-colors">GP</span>{' '}
              <span className="text-[#ea580c] group-hover:brightness-110 transition-all">Empire</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
