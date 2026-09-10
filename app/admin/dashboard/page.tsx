'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Inbox,
  Clock,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Phone,
  MessageCircle,
  RefreshCw,
  Award,
  CheckSquare,
  Send,
  Calendar,
  Layers,
  ChevronRight,
  UserPlus,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { EnquiryData } from '@/lib/supabase'

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([])
  const [adminCount, setAdminCount] = useState<number>(1)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')

  async function loadEnquiries(isManualRefresh = false) {
    if (isManualRefresh) setRefreshing(true)
    setError('')
    try {
      const res = await fetch('/api/admin/enquiries', { cache: 'no-store' })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.error || 'Failed to fetch dashboard data')
      }
      setEnquiries(json.data || [])

      // Also fetch admin count
      try {
        const uRes = await fetch('/api/admin/users', { cache: 'no-store' })
        const uJson = await uRes.json()
        if (uRes.ok && uJson.data) {
          setAdminCount(uJson.data.length)
        }
      } catch {
        // silently fallback
      }
    } catch (err: any) {
      setError(err.message || 'Error loading data.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadEnquiries()
  }, [])

  // Metrics
  const totalCount = enquiries.length
  const newCount = enquiries.filter((e) => !e.status || e.status === 'new').length
  const contactedCount = enquiries.filter(
    (e) => e.status === 'contacted' || e.status === 'in_progress'
  ).length
  const closedCount = enquiries.filter((e) => e.status === 'closed').length

  const completionRate = totalCount > 0 ? Math.round((closedCount / totalCount) * 100) : 0

  return (
    <div className="space-y-6">
      {/* ========================================================================= */}
      {/* EXECUTIVE WELCOME & QUICK ACTION STRIP                                    */}
      {/* ========================================================================= */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#d9e0d8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] uppercase flex items-center gap-1">
              <Sparkles size={11} />
              Operations Center
            </span>
          </div>
          <div
            style={{ fontSize: '20px', lineHeight: '26px' }}
            className="font-black text-[#17251d] tracking-tight"
          >
            Power Your Future with Solar Energy Leads Overview
          </div>
          <p className="text-xs text-[#68746b] mt-0.5 font-medium">
            Real-time pipeline monitoring, solar inquiries & team management.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/admin/register"
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#195232] hover:bg-[#123b28] text-white text-xs font-bold shadow-sm shadow-[#195232]/20 transition-all cursor-pointer"
          >
            <UserPlus size={14} />
            <span>Register Admin</span>
          </Link>

          <Link
            href="/admin/enquiries"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] text-xs font-bold transition-all cursor-pointer"
          >
            <Inbox size={14} className="text-[#287a4b]" />
            <span>Enquiries ({totalCount})</span>
          </Link>

          <button
            type="button"
            onClick={() => loadEnquiries(true)}
            disabled={refreshing || loading}
            className="p-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] text-xs font-bold transition-all cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw size={14} className={refreshing ? 'animate-spin text-[#287a4b]' : ''} />
          </button>
        </div>
      </div>

      {/* Top 3-Card Grid (AutoRocket Style with OM SUNBUILD Theme) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* CARD 1: Pipeline Score (Left Card)                                        */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{ fontSize: '16px', lineHeight: '22px' }}
                  className="font-extrabold text-[#17251d] tracking-tight block"
                >
                  Pipeline Score
                </span>
                <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                  Overall conversion & response index
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e8f5ee] text-[#287a4b] flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
            </div>

            {/* Circular Gauge / Ring Metric */}
            <div className="flex flex-col items-center justify-center my-6">
              <div className="relative w-38 h-38 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#eef0e8"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#287a4b"
                    strokeWidth="8"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (251 * (newCount > 0 ? 80 : 20)) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span
                    style={{ fontSize: '32px', lineHeight: '36px' }}
                    className="font-black text-[#17251d] tracking-tight"
                  >
                    {loading ? '—' : newCount}
                  </span>
                  <span className="text-[11px] font-bold text-[#68746b] uppercase tracking-wider">
                    out of {totalCount}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#68746b] italic mt-3 font-medium text-center">
                &ldquo;Thoughtful solar solutions for real sites.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom 3-meta row */}
          <div className="pt-4 border-t border-[#eef0e8] grid grid-cols-3 text-center">
            <div>
              <p className="text-sm font-black text-[#17251d]">#1 Solar</p>
              <p className="text-[10px] font-bold text-[#68746b] uppercase tracking-wider mt-0.5">Rank</p>
            </div>
            <div>
              <p className="text-sm font-black text-[#17251d]">General</p>
              <p className="text-[10px] font-bold text-[#68746b] uppercase tracking-wider mt-0.5">Dept</p>
            </div>
            <div>
              <p className="text-sm font-black text-[#17251d]">Sept</p>
              <p className="text-[10px] font-bold text-[#68746b] uppercase tracking-wider mt-0.5">Month</p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 2: Operations Profile (Center Card)                                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <span
                style={{ fontSize: '16px', lineHeight: '22px' }}
                className="font-extrabold text-[#17251d] tracking-tight block"
              >
                Profile & Operations
              </span>
              <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                Personal & company details
              </p>
            </div>

            {/* Profile Avatar & Name */}
            <div className="flex items-center justify-between my-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#195232] text-white font-black text-base flex items-center justify-center shadow-xs">
                  OS
                </div>
                <div>
                  <div
                    style={{ fontSize: '15px', lineHeight: '20px' }}
                    className="font-extrabold text-[#17251d]"
                  >
                    OM SUNBUILD
                  </div>
                  <p className="text-xs text-[#68746b] font-semibold mt-0.5">
                    Solar EPC Systems
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-[#e8f5ee] text-[#287a4b] tracking-wider uppercase border border-[#d9efc5]">
                SUPERADMIN
              </span>
            </div>

            {/* Metadata Pills */}
            <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8] text-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#68746b] block">JOINED</span>
                <span className="text-xs font-black text-[#17251d] block mt-0.5">Sept 2026</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#68746b] block">STATE</span>
                <span className="text-xs font-black text-[#17251d] block mt-0.5">CG India</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#68746b] block">SYSTEM ID</span>
                <span className="text-xs font-black text-[#17251d] block mt-0.5">OSB-01</span>
              </div>
            </div>

            {/* Two Action Boxes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#195232] text-xs font-bold mb-2">
                  <CheckSquare size={14} />
                  <span>New Leads</span>
                </div>
                <div className="text-lg font-black text-[#17251d]">
                  {newCount} <span className="text-xs font-bold text-[#68746b]">/ {totalCount}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#d9efc5] mt-2">
                  <div
                    className="h-full bg-[#287a4b] rounded-full"
                    style={{ width: `${(newCount / (totalCount || 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#fef6e9] border border-[#fed7aa] flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#b45309] text-xs font-bold mb-2">
                  <Send size={14} />
                  <span>In Progress</span>
                </div>
                <div className="text-lg font-black text-[#17251d]">
                  {contactedCount} <span className="text-xs font-bold text-[#68746b]">/ {totalCount}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#fed7aa] mt-2">
                  <div
                    className="h-full bg-[#d97706] rounded-full"
                    style={{ width: `${(contactedCount / (totalCount || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 3: Monthly Performance (Right Card)                                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{ fontSize: '16px', lineHeight: '22px' }}
                  className="font-extrabold text-[#17251d] tracking-tight block"
                >
                  Monthly Performance
                </span>
                <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                  Task completion & achievements
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e8f5ee] text-[#287a4b] flex items-center justify-center">
                <Award size={16} />
              </div>
            </div>

            {/* 3 Square Status Boxes (Website Palette) */}
            <div className="grid grid-cols-3 gap-2.5 my-4">
              {/* Box 1: Green Completed */}
              <div className="p-3 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={16} className="text-[#287a4b] mb-1" />
                <span className="text-base font-black text-[#17251d] leading-tight">
                  {closedCount}/{totalCount}
                </span>
                <span className="text-[9px] font-black text-[#195232] uppercase tracking-wider mt-0.5">
                  COMPLETED
                </span>
              </div>

              {/* Box 2: Amber Pending */}
              <div className="p-3 rounded-2xl bg-[#fef6e9] border border-[#fed7aa] flex flex-col items-center justify-center text-center">
                <Clock size={16} className="text-[#d97706] mb-1" />
                <span className="text-base font-black text-[#17251d] leading-tight">
                  {newCount}
                </span>
                <span className="text-[9px] font-black text-[#b45309] uppercase tracking-wider mt-0.5">
                  PENDING
                </span>
              </div>

              {/* Box 3: Solar Gold Score */}
              <div className="p-3 rounded-2xl bg-[#fefce8] border border-[#fef08a] flex flex-col items-center justify-center text-center">
                <Award size={16} className="text-[#ca8a04] mb-1" />
                <span className="text-base font-black text-[#17251d] leading-tight">
                  {completionRate > 0 ? completionRate : 100}
                </span>
                <span className="text-[9px] font-black text-[#854d0e] uppercase tracking-wider mt-0.5">
                  SCORE
                </span>
              </div>
            </div>

            {/* Progress Completion Rate */}
            <div className="my-5">
              <div className="flex items-center justify-between text-xs font-bold text-[#17251d] mb-2">
                <span>Task Completion Rate</span>
                <span className="text-[#287a4b] font-extrabold">{completionRate}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#eef0e8] overflow-hidden">
                <div
                  className="h-full bg-[#287a4b] rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(completionRate, 5)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Trendline Graphic */}
          <div className="pt-3 border-t border-[#eef0e8]">
            <span className="text-[10px] font-extrabold text-[#68746b] uppercase tracking-wider block mb-1">
              PERFORMANCE TREND
            </span>
            <div className="w-full h-10">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 40">
                <path
                  d="M0 32 Q 50 30, 100 24 T 200 18 T 300 8"
                  fill="transparent"
                  stroke="#287a4b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="300" cy="8" r="4" fill="#287a4b" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECOND ROW: LEAD OVERVIEW & RECENT SUBMISSIONS                            */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Card: Lead Intake Overview */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{ fontSize: '16px', lineHeight: '22px' }}
                  className="font-extrabold text-[#17251d] tracking-tight block"
                >
                  Lead Intake Overview
                </span>
                <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                  Monthly lead classification summary
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e8f5ee] text-[#287a4b] flex items-center justify-center">
                <Calendar size={16} />
              </div>
            </div>

            {/* 3 Colored Summary Cards */}
            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-4 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] text-center">
                <CheckCircle2 size={18} className="text-[#287a4b] mx-auto mb-1.5" />
                <span className="text-2xl font-black text-[#17251d] block leading-tight">
                  {newCount}
                </span>
                <span className="text-[10px] font-bold text-[#195232] uppercase tracking-wider block mt-1">
                  New
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#fef6e9] border border-[#fed7aa] text-center">
                <Clock size={18} className="text-[#d97706] mx-auto mb-1.5" />
                <span className="text-2xl font-black text-[#17251d] block leading-tight">
                  {contactedCount}
                </span>
                <span className="text-[10px] font-bold text-[#b45309] uppercase tracking-wider block mt-1">
                  Contacted
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8] text-center">
                <Layers size={18} className="text-[#17251d] mx-auto mb-1.5" />
                <span className="text-2xl font-black text-[#17251d] block leading-tight">
                  {closedCount}
                </span>
                <span className="text-[10px] font-bold text-[#68746b] uppercase tracking-wider block mt-1">
                  Closed
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/admin/enquiries"
            className="mt-4 py-2.5 px-4 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] text-xs font-bold border border-[#d9e0d8] flex items-center justify-between transition-colors"
          >
            <span>Open All Customer Enquiries</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Right Card: Recent Leads Feed */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span
                  style={{ fontSize: '16px', lineHeight: '22px' }}
                  className="font-extrabold text-[#17251d] tracking-tight block"
                >
                  Recent Inquiries Feed
                </span>
                <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                  Latest customer requests submitted on website
                </p>
              </div>

              <Link
                href="/admin/enquiries"
                className="text-xs font-bold text-[#287a4b] hover:text-[#195232] flex items-center gap-1 transition-colors"
              >
                View Table ({totalCount})
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {loading ? (
              <div className="py-12 text-center text-[#68746b] text-xs animate-pulse">
                Fetching submissions...
              </div>
            ) : enquiries.length === 0 ? (
              <div className="py-12 text-center text-[#68746b] text-xs border border-dashed border-[#d9e0d8] rounded-2xl">
                No customer inquiries yet.
              </div>
            ) : (
              <div className="divide-y divide-[#eef0e8]">
                {enquiries.slice(0, 4).map((item, idx) => {
                  const cleanPhone = (item.phone || '').replace(/[^0-9]/g, '')
                  const waNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

                  return (
                    <div
                      key={item.id || idx}
                      className="py-3.5 flex items-center justify-between gap-3 hover:bg-[#f7f8f4] rounded-2xl px-2 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-extrabold text-[#17251d] text-xs sm:text-sm truncate">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#e8f5ee] text-[#195232] border border-[#d9efc5]">
                            {item.help_with}
                          </span>
                        </div>

                        <div className="text-xs text-[#68746b] flex items-center gap-2">
                          <span>{item.phone}</span>
                          <span>•</span>
                          <span className="text-[#68746b]/80">
                            {item.created_at
                              ? new Date(item.created_at).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                              })
                              : 'Recent'}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.phone && (
                          <>
                            <a
                              href={`tel:${item.phone}`}
                              className="p-2 rounded-xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] transition-colors border border-[#d9e0d8]"
                              title="Phone Call"
                            >
                              <Phone size={13} />
                            </a>
                            <a
                              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                                `Hello ${item.name}, thank you for reaching out to OM SUNBUILD regarding ${item.help_with}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-[#e8f5ee] hover:bg-[#d9efc5] text-[#195232] border border-[#d9efc5] transition-colors"
                              title="WhatsApp Chat"
                            >
                              <MessageCircle size={13} />
                            </a>
                          </>
                        )}

                        <Link
                          href="/admin/enquiries"
                          className="px-3 py-1.5 rounded-xl bg-[#e8f5ee] hover:bg-[#d9efc5] text-[#195232] font-bold text-xs border border-[#d9efc5] transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-[#eef0e8] flex items-center justify-between text-xs text-[#68746b]">
            <span>Real-time sync active</span>
            <button
              onClick={() => loadEnquiries(true)}
              className="text-[#287a4b] hover:underline font-bold text-xs flex items-center gap-1"
            >
              <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* REQ 2: ADMIN REGISTRATION & ACCESS MANAGEMENT SECTION                     */}
      {/* ========================================================================= */}
      <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#d9e0d8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] flex items-center justify-center flex-shrink-0">
            <UserPlus size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#e8f5ee] text-[#195232] border border-[#d9efc5]">
                Access Control
              </span>
              <span className="text-xs text-[#68746b] font-semibold flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#287a4b]" />
                Bcrypt Hashed Security
              </span>
            </div>
            <div
              style={{ fontSize: '18px', lineHeight: '24px' }}
              className="font-black text-[#17251d] tracking-tight"
            >
              Administrator Accounts & Registration
            </div>
            <p className="text-xs text-[#68746b] mt-1 max-w-xl font-medium">
              Create new administrative users, invite solar project supervisors, or update management team credentials with full database persistence.
            </p>

            {/* Quick stats pills */}
            <div className="flex items-center gap-3 mt-3.5 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] text-xs font-bold text-[#17251d]">
                <Users size={13} className="text-[#287a4b]" />
                <span>{adminCount} Active {adminCount === 1 ? 'Admin' : 'Admins'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] text-xs font-bold text-[#68746b]">
                <span className="w-2 h-2 rounded-full bg-[#287a4b]" />
                <span>Supabase PostgreSQL Table</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/admin/register"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#195232] hover:bg-[#123b28] text-white text-xs font-bold shadow-md shadow-[#195232]/20 transition-all cursor-pointer"
          >
            <UserPlus size={15} />
            <span>+ Create New Admin User</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
