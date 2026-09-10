'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  Inbox,
  Search,
  Filter,
  Download,
  RefreshCw,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  Trash2,
  Eye,
  X,
  Copy,
  AlertCircle,
  ChevronDown,
} from 'lucide-react'
import { EnquiryData } from '@/lib/supabase'

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [successNotice, setSuccessNotice] = useState('')

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'in_progress' | 'closed'>('all')

  // Modals
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryData | null>(null)
  const [enquiryToDelete, setEnquiryToDelete] = useState<EnquiryData | null>(null)
  const [actionLoading, setActionLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  async function fetchEnquiries(manual = false) {
    if (manual) setRefreshing(true)
    setError('')
    try {
      const res = await fetch('/api/admin/enquiries', { cache: 'no-store' })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.error || 'Failed to load enquiries')
      }
      setEnquiries(json.data || [])
    } catch (err: any) {
      setError(err.message || 'Error loading enquiries.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchEnquiries()
  }, [])

  // Status Change
  async function handleStatusChange(id: string | number, newStatus: string) {
    try {
      setActionLoading(true)
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to update status')

      setEnquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      )
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus })
      }
      setSuccessNotice('Status updated successfully')
      setTimeout(() => setSuccessNotice(''), 3000)
    } catch (err: any) {
      setError(err.message || 'Failed to update status')
    } finally {
      setActionLoading(false)
    }
  }

  // Delete Enquiry
  async function handleDeleteEnquiry() {
    if (!enquiryToDelete || !enquiryToDelete.id) return
    try {
      setActionLoading(true)
      const res = await fetch(`/api/admin/enquiries?id=${enquiryToDelete.id}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to delete enquiry')

      setEnquiries((prev) => prev.filter((item) => item.id !== enquiryToDelete.id))
      if (selectedEnquiry && selectedEnquiry.id === enquiryToDelete.id) {
        setSelectedEnquiry(null)
      }
      setEnquiryToDelete(null)
      setSuccessNotice('Enquiry record deleted successfully.')
      setTimeout(() => setSuccessNotice(''), 3000)
    } catch (err: any) {
      setError(err.message || 'Failed to delete enquiry')
    } finally {
      setActionLoading(false)
    }
  }

  // Export to CSV
  function exportToCSV() {
    if (filteredEnquiries.length === 0) return

    const headers = ['ID', 'Name', 'Phone', 'Email', 'Requirement / Solution', 'Message', 'Status', 'Date']
    const rows = filteredEnquiries.map((e) => [
      `"${e.id || ''}"`,
      `"${(e.name || '').replace(/"/g, '""')}"`,
      `"${(e.phone || '').replace(/"/g, '""')}"`,
      `"${(e.email || '').replace(/"/g, '""')}"`,
      `"${(e.help_with || '').replace(/"/g, '""')}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`,
      `"${e.status || 'new'}"`,
      `"${e.created_at ? new Date(e.created_at).toLocaleString('en-IN') : ''}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `om_sunbuild_enquiries_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Copy details
  function copyDetails(enquiry: EnquiryData) {
    const text = `OM SUNBUILD Customer Lead:\nName: ${enquiry.name}\nPhone: ${enquiry.phone}\nEmail: ${enquiry.email || 'N/A'}\nRequirement: ${enquiry.help_with}\nMessage: ${enquiry.message}\nDate: ${enquiry.created_at || 'N/A'}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Filter & Search
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      if (statusFilter !== 'all') {
        const itemStatus = item.status || 'new'
        if (statusFilter !== itemStatus) return false
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchName = (item.name || '').toLowerCase().includes(query)
        const matchPhone = (item.phone || '').toLowerCase().includes(query)
        const matchEmail = (item.email || '').toLowerCase().includes(query)
        const matchHelp = (item.help_with || '').toLowerCase().includes(query)
        const matchMessage = (item.message || '').toLowerCase().includes(query)
        return matchName || matchPhone || matchEmail || matchHelp || matchMessage
      }

      return true
    })
  }, [enquiries, statusFilter, searchQuery])

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* ========================================================================= */}
      {/* REQ 5: TOP BANNER HIDE ON MOBILE (hidden on mobile, flex on md and above) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#d9e0d8] shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] uppercase">
              Lead Management
            </span>
          </div>
          <div
            style={{ fontSize: '20px', lineHeight: '26px' }}
            className="font-black text-[#17251d] tracking-tight flex items-center gap-2.5"
          >
            <Inbox size={22} className="text-[#287a4b]" />
            Customer Leads & Inquiries
          </div>
          <p className="text-xs text-[#68746b] mt-0.5 font-medium">
            Manage incoming solar requirements, status updates and follow-ups.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => fetchEnquiries(true)}
            disabled={refreshing || loading}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] text-xs font-bold shadow-2xs transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw size={13} className={refreshing ? 'animate-spin text-[#287a4b]' : ''} />
            <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          <button
            type="button"
            onClick={exportToCSV}
            disabled={filteredEnquiries.length === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#287a4b] hover:bg-[#195232] active:bg-[#123b28] text-white text-xs font-bold shadow-sm shadow-[#287a4b]/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={14} />
            <span>Export CSV ({filteredEnquiries.length})</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
          <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {successNotice && (
        <div className="p-3.5 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] text-xs flex items-center gap-2.5">
          <CheckCircle2 size={16} className="text-[#287a4b] flex-shrink-0" />
          <span>{successNotice}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* REQ 6: FILTER BAR FIXED/STICKY ON MOBILE (sticky top-0 z-30)              */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#d9e0d8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4">
        {/* Search Row + Mobile Quick Actions */}
        <div className="flex items-center gap-2 flex-1 w-full">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
              <Search size={15} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search leads by name, phone, requirement..."
              className="w-full pl-9 pr-8 py-2 bg-[#f7f8f4] border border-[#d9e0d8] rounded-xl sm:rounded-2xl text-xs text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#68746b] hover:text-[#17251d] text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Mobile only Quick Refresh & CSV buttons */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => fetchEnquiries(true)}
              disabled={refreshing || loading}
              className="p-2 rounded-xl bg-[#f7f8f4] border border-[#d9e0d8] text-[#17251d] hover:bg-[#eef0e8] cursor-pointer"
              title="Refresh"
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin text-[#287a4b]' : ''} />
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              disabled={filteredEnquiries.length === 0}
              className="p-2 rounded-xl bg-[#287a4b] text-white border border-[#195232] cursor-pointer disabled:opacity-50"
              title="Export CSV"
            >
              <Download size={14} />
            </button>
          </div>
        </div>

        {/* Status Filter Tabs (Sticky horizontally on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
          <span className="text-xs text-[#68746b] font-bold mr-1 flex items-center gap-1 flex-shrink-0">
            <Filter size={13} />
            Filter:
          </span>
          {(
            [
              ['all', 'All'],
              ['new', 'New'],
              ['contacted', 'Contacted'],
              ['in_progress', 'In Progress'],
              ['closed', 'Closed'],
            ] as const
          ).map(([key, label]) => {
            const count =
              key === 'all'
                ? enquiries.length
                : enquiries.filter((e) => (e.status || 'new') === key).length
            const active = statusFilter === key

            return (
              <button
                key={key}
                type="button"
                onClick={() => setStatusFilter(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                  active
                    ? 'bg-[#195232] text-white shadow-xs'
                    : 'bg-[#f7f8f4] text-[#17251d] hover:bg-[#eef0e8] border border-[#d9e0d8]'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    active ? 'bg-white/20 text-white' : 'bg-white text-[#68746b] border border-[#d9e0d8]'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* REQ 4: MOBILE VIEW AS CARDS (md:hidden) & DESKTOP AS TABLE (hidden md:block)*/}
      {/* ========================================================================= */}
      {loading ? (
        <div className="py-24 bg-white rounded-3xl border border-[#d9e0d8] flex flex-col items-center justify-center text-center text-[#68746b]">
          <RefreshCw size={26} className="animate-spin text-[#287a4b] mb-3" />
          <p className="text-sm font-bold text-[#17251d]">Loading Customer Enquiries...</p>
          <p className="text-xs text-[#68746b] mt-1">Connecting to Supabase Database</p>
        </div>
      ) : filteredEnquiries.length === 0 ? (
        <div className="py-20 bg-white rounded-3xl border border-[#d9e0d8] text-center text-[#68746b] px-4">
          <div className="w-14 h-14 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8] flex items-center justify-center mx-auto mb-3 text-[#68746b]">
            <Inbox size={24} />
          </div>
          <div style={{ fontSize: '15px' }} className="font-bold text-[#17251d] mb-1">
            No enquiries found
          </div>
          <p className="text-xs text-[#68746b] max-w-sm mx-auto">
            {searchQuery || statusFilter !== 'all'
              ? 'Try adjusting your search query or status filter.'
              : 'Customer enquiries will appear here as soon as they submit on the website.'}
          </p>
        </div>
      ) : (
        <>
          {/* 1. MOBILE CARD VIEW (Visible only on screens < md) */}
          <div className="block md:hidden space-y-3">
            {filteredEnquiries.map((enquiry) => {
              const status = enquiry.status || 'new'
              const cleanPhone = (enquiry.phone || '').replace(/[^0-9]/g, '')
              const waNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

              return (
                <div
                  key={enquiry.id}
                  className="bg-white rounded-2xl p-4 border border-[#d9e0d8] shadow-xs space-y-3"
                >
                  {/* Top Customer row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-[#e8f5ee] text-[#195232] font-black text-xs flex items-center justify-center border border-[#d9efc5] flex-shrink-0">
                        {(enquiry.name || 'U').charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <span className="font-bold text-sm text-[#17251d] block truncate">
                          {enquiry.name}
                        </span>
                        <span className="text-[11px] text-[#68746b] block">
                          {enquiry.created_at
                            ? new Date(enquiry.created_at).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              })
                            : 'Recent'}
                        </span>
                      </div>
                    </div>

                    {/* Status Select on Mobile */}
                    <div className="relative flex-shrink-0">
                      <select
                        value={status}
                        disabled={actionLoading}
                        onChange={(e) =>
                          enquiry.id && handleStatusChange(enquiry.id, e.target.value)
                        }
                        className={`text-xs font-bold rounded-xl px-2.5 py-1.5 pr-6 border focus:outline-none appearance-none cursor-pointer ${
                          status === 'new'
                            ? 'bg-[#e8f5ee] text-[#195232] border-[#d9efc5]'
                            : status === 'contacted'
                            ? 'bg-[#fef6e9] text-[#b45309] border-[#fed7aa]'
                            : status === 'in_progress'
                            ? 'bg-[#fefce8] text-[#854d0e] border-[#fef08a]'
                            : 'bg-[#f7f8f4] text-[#17251d] border-[#d9e0d8]'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Progress</option>
                        <option value="closed">Closed</option>
                      </select>
                      <ChevronDown
                        size={12}
                        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#68746b]"
                      />
                    </div>
                  </div>

                  {/* Requirement Badge */}
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] font-bold text-xs">
                      {enquiry.help_with}
                    </span>
                  </div>

                  {/* Message Preview */}
                  <div
                    onClick={() => setSelectedEnquiry(enquiry)}
                    className="p-2.5 rounded-xl bg-[#f7f8f4] text-xs text-[#68746b] italic line-clamp-2 cursor-pointer border border-[#eef0e8]"
                  >
                    &ldquo;{enquiry.message}&rdquo;
                  </div>

                  {/* Contact row & Action buttons */}
                  <div className="pt-2 border-t border-[#eef0e8] flex items-center justify-between gap-2">
                    <div className="text-xs">
                      <a
                        href={`tel:${enquiry.phone}`}
                        className="font-bold text-[#17251d] hover:text-[#287a4b] flex items-center gap-1.5"
                      >
                        <Phone size={12} className="text-[#287a4b]" />
                        {enquiry.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {enquiry.phone && (
                        <>
                          <a
                            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                              `Hello ${enquiry.name}, greetings from OM SUNBUILD regarding ${enquiry.help_with}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-[#e8f5ee] text-[#195232] border border-[#d9efc5]"
                            title="WhatsApp"
                          >
                            <MessageCircle size={14} />
                          </a>
                          <a
                            href={`tel:${enquiry.phone}`}
                            className="p-2 rounded-xl bg-[#f7f8f4] text-[#17251d] border border-[#d9e0d8]"
                            title="Call"
                          >
                            <Phone size={14} />
                          </a>
                        </>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="p-2 rounded-xl bg-[#f7f8f4] text-[#17251d] border border-[#d9e0d8]"
                        title="View"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setEnquiryToDelete(enquiry)}
                        className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-100"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 2. DESKTOP TABLE VIEW (Visible only on screens md and above) */}
          <div className="hidden md:block rounded-3xl bg-white border border-[#d9e0d8] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#eef0e8] bg-[#f7f8f4] text-[11px] uppercase tracking-wider font-extrabold text-[#68746b]">
                    <th className="py-4 px-5">Customer</th>
                    <th className="py-4 px-5">Contact</th>
                    <th className="py-4 px-5">Requirement</th>
                    <th className="py-4 px-5 max-w-xs">Message</th>
                    <th className="py-4 px-5">Status</th>
                    <th className="py-4 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eef0e8] text-xs">
                  {filteredEnquiries.map((enquiry) => {
                    const status = enquiry.status || 'new'
                    const cleanPhone = (enquiry.phone || '').replace(/[^0-9]/g, '')
                    const waNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

                    return (
                      <tr key={enquiry.id} className="hover:bg-[#f7f8f4]/60 transition-colors">
                        {/* Customer */}
                        <td className="py-4 px-5 align-top">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#e8f5ee] text-[#195232] font-black flex items-center justify-center border border-[#d9efc5] flex-shrink-0 text-xs">
                              {(enquiry.name || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <span className="font-bold text-[#17251d] text-sm block">
                                {enquiry.name}
                              </span>
                              <span className="text-[11px] text-[#68746b] block mt-0.5">
                                {enquiry.created_at
                                  ? new Date(enquiry.created_at).toLocaleString('en-IN', {
                                      day: 'numeric',
                                      month: 'short',
                                      year: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    })
                                  : 'Recent'}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Contact */}
                        <td className="py-4 px-5 align-top">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-[#17251d]">
                              <Phone size={12} className="text-[#287a4b] flex-shrink-0" />
                              <a
                                href={`tel:${enquiry.phone}`}
                                className="hover:text-[#287a4b] hover:underline transition-colors"
                              >
                                {enquiry.phone}
                              </a>
                            </div>
                            {enquiry.email ? (
                              <div className="flex items-center gap-1.5 text-[#68746b]">
                                <Mail size={12} className="text-[#68746b]/80 flex-shrink-0" />
                                <a
                                  href={`mailto:${enquiry.email}`}
                                  className="hover:text-[#287a4b] truncate max-w-[150px] inline-block"
                                >
                                  {enquiry.email}
                                </a>
                              </div>
                            ) : (
                              <span className="text-[#68746b]/60 italic text-[11px]">No email</span>
                            )}
                          </div>
                        </td>

                        {/* Requirement */}
                        <td className="py-4 px-5 align-top">
                          <span className="inline-block px-3 py-1 rounded-xl bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] font-bold text-xs">
                            {enquiry.help_with}
                          </span>
                        </td>

                        {/* Message preview */}
                        <td className="py-4 px-5 align-top max-w-xs">
                          <p
                            onClick={() => setSelectedEnquiry(enquiry)}
                            className="text-[#68746b] line-clamp-2 cursor-pointer hover:text-[#17251d] transition-colors"
                            title="Click to view full message"
                          >
                            &ldquo;{enquiry.message}&rdquo;
                          </p>
                        </td>

                        {/* Status Dropdown */}
                        <td className="py-4 px-5 align-top">
                          <div className="relative inline-block">
                            <select
                              value={status}
                              disabled={actionLoading}
                              onChange={(e) =>
                                enquiry.id && handleStatusChange(enquiry.id, e.target.value)
                              }
                              className={`text-xs font-bold rounded-xl px-3 py-1.5 pr-7 border focus:outline-none appearance-none cursor-pointer transition-colors ${
                                status === 'new'
                                  ? 'bg-[#e8f5ee] text-[#195232] border-[#d9efc5]'
                                  : status === 'contacted'
                                  ? 'bg-[#fef6e9] text-[#b45309] border-[#fed7aa]'
                                  : status === 'in_progress'
                                  ? 'bg-[#fefce8] text-[#854d0e] border-[#fef08a]'
                                  : 'bg-[#f7f8f4] text-[#17251d] border-[#d9e0d8]'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_progress">In Progress</option>
                              <option value="closed">Closed</option>
                            </select>
                            <ChevronDown
                              size={12}
                              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#68746b]"
                            />
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-5 align-top text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {enquiry.phone && (
                              <a
                                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                                  `Hello ${enquiry.name}, greetings from OM SUNBUILD regarding ${enquiry.help_with}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-[#e8f5ee] hover:bg-[#d9efc5] text-[#195232] border border-[#d9efc5] transition-colors"
                                title="WhatsApp"
                              >
                                <MessageCircle size={14} />
                              </a>
                            )}

                            <button
                              type="button"
                              onClick={() => setSelectedEnquiry(enquiry)}
                              className="p-2 rounded-xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] transition-colors"
                              title="View Full Details"
                            >
                              <Eye size={14} />
                            </button>

                            <button
                              type="button"
                              onClick={() => setEnquiryToDelete(enquiry)}
                              className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 transition-colors"
                              title="Delete Enquiry"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Desktop Footer info */}
            <div className="p-4 border-t border-[#eef0e8] bg-[#f7f8f4] flex flex-col sm:flex-row items-center justify-between text-xs text-[#68746b] gap-2">
              <span>
                Displaying <strong className="text-[#17251d]">{filteredEnquiries.length}</strong> of{' '}
                <strong className="text-[#17251d]">{enquiries.length}</strong> records
              </span>
              <span className="text-[11px] text-[#68746b]">
                Powered by Supabase PostgreSQL Database
              </span>
            </div>
          </div>
        </>
      )}

      {/* DETAIL MODAL */}
      {selectedEnquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="w-full max-w-lg bg-white border border-[#d9e0d8] rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#f7f8f4] text-[#68746b] hover:text-[#17251d] hover:bg-[#eef0e8] transition-colors"
            >
              <X size={17} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#eef0e8]">
              <div className="w-12 h-12 rounded-full bg-[#195232] text-white font-black text-lg flex items-center justify-center shadow-xs">
                {(selectedEnquiry.name || 'U').charAt(0).toUpperCase()}
              </div>
              <div>
                <div
                  style={{ fontSize: '18px', lineHeight: '24px' }}
                  className="font-black text-[#17251d]"
                >
                  {selectedEnquiry.name}
                </div>
                <p className="text-xs text-[#68746b] mt-0.5 font-medium">
                  Submitted on{' '}
                  {selectedEnquiry.created_at
                    ? new Date(selectedEnquiry.created_at).toLocaleString('en-IN')
                    : 'Recent'}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
                  <span className="text-[10px] uppercase font-bold text-[#68746b] block mb-1">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="text-[#17251d] font-bold hover:text-[#287a4b] text-sm flex items-center gap-1.5"
                  >
                    <Phone size={13} className="text-[#287a4b]" />
                    {selectedEnquiry.phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
                  <span className="text-[10px] uppercase font-bold text-[#68746b] block mb-1">
                    Email Address
                  </span>
                  <span className="text-[#17251d] font-semibold truncate block">
                    {selectedEnquiry.email || 'None'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#68746b] block mb-1">
                  Requested Solution
                </span>
                <span className="inline-block px-3 py-1 rounded-xl bg-[#e8f5ee] text-[#195232] font-bold text-xs border border-[#d9efc5]">
                  {selectedEnquiry.help_with}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#68746b] block mb-1">
                  Full Message
                </span>
                <div className="text-[#17251d] text-sm leading-relaxed p-3 rounded-xl bg-white border border-[#d9e0d8] max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </div>
              </div>

              {/* Status Selector */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f7f8f4] border border-[#d9e0d8]">
                <span className="font-bold text-[#17251d]">Update Status:</span>
                <div className="flex items-center gap-1.5">
                  {(['new', 'contacted', 'in_progress', 'closed'] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() =>
                        selectedEnquiry.id && handleStatusChange(selectedEnquiry.id, st)
                      }
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold capitalize transition-colors ${
                        (selectedEnquiry.status || 'new') === st
                          ? 'bg-[#195232] text-white shadow-xs'
                          : 'bg-white text-[#17251d] hover:bg-[#eef0e8] border border-[#d9e0d8]'
                      }`}
                    >
                      {st.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="mt-6 pt-4 border-t border-[#eef0e8] flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => copyDetails(selectedEnquiry)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] text-xs font-bold transition-colors border border-[#d9e0d8]"
              >
                <Copy size={13} />
                <span>{copied ? 'Copied' : 'Copy Details'}</span>
              </button>

              <div className="flex items-center gap-2">
                {selectedEnquiry.phone && (
                  <a
                    href={`https://wa.me/${(selectedEnquiry.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello ${selectedEnquiry.name}, greetings from OM SUNBUILD Solar. We received your enquiry regarding ${selectedEnquiry.help_with}. How can we assist you?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-[#e8f5ee] hover:bg-[#d9efc5] text-[#195232] font-bold text-xs border border-[#d9efc5] transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                )}

                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#287a4b] hover:bg-[#195232] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Phone size={13} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {enquiryToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in"
          onClick={() => setEnquiryToDelete(null)}
        >
          <div
            className="w-full max-w-sm bg-white border border-[#d9e0d8] rounded-3xl p-6 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3 border border-red-100">
              <Trash2 size={20} />
            </div>
            <div style={{ fontSize: '16px' }} className="font-black text-[#17251d] mb-1">
              Delete Enquiry?
            </div>
            <p className="text-xs text-[#68746b] mb-5 font-medium">
              Are you sure you want to remove the enquiry from{' '}
              <strong className="text-[#17251d]">&ldquo;{enquiryToDelete.name}&rdquo;</strong>?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setEnquiryToDelete(null)}
                className="py-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] text-xs font-bold transition-colors border border-[#d9e0d8]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteEnquiry}
                disabled={actionLoading}
                className="py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors disabled:opacity-50"
              >
                {actionLoading ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
