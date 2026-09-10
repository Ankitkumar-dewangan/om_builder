'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please enter both your username and password.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials. Please try again.')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/admin/dashboard')
        router.refresh()
      }, 700)
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#f7f8f4] text-[#17251d] font-sans p-4 sm:p-6">
      {/* Background Soft Green Glow Accents (Website Solar Theme) */}
      <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-[#e8f5ee] via-[#f7f8f4] to-transparent pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#d9efc5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#287a4b]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Professional Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white border border-[#d9e0d8] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#17251d]/5 transition-all">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link href="/" className="group mb-3 relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#287a4b] to-[#195232] p-0.5 shadow-md shadow-[#287a4b]/20 transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/Logo.jpeg"
                  alt="OM SUNBUILD"
                  width={52}
                  height={52}
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#287a4b] rounded-full flex items-center justify-center text-white shadow-xs">
              <ShieldCheck size={12} strokeWidth={2.5} />
            </div>
          </Link>

          <div className="flex items-center justify-center gap-2">
            <span
              style={{ fontSize: '22px', lineHeight: '28px' }}
              className="font-extrabold tracking-tight text-[#17251d]"
            >
              OM SUNBUILD
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#e8f5ee] text-[#287a4b] border border-[#d9efc5]">
              Admin
            </span>
          </div>
         
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in">
            <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">{error}</span>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] text-xs flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 size={16} className="text-[#287a4b] flex-shrink-0" />
            <span className="font-semibold">Login successful! Opening Dashboard...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#17251d] mb-1.5">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
                <User size={16} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                autoComplete="username"
                placeholder="Enter admin username"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f4]/60 border border-[#d9e0d8] rounded-xl text-sm text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-[#17251d]">
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
                <Lock size={16} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full pl-10 pr-11 py-2.5 bg-[#f7f8f4]/60 border border-[#d9e0d8] rounded-xl text-sm text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#68746b] hover:text-[#17251d] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#287a4b] hover:bg-[#195232] active:bg-[#123b28] text-white font-bold text-sm shadow-md shadow-[#287a4b]/20 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle2 size={17} />
                <span>Authenticated</span>
              </>
            ) : (
              <>
                <span>Sign in to Dashboard</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>

        {/* Back to Website Link */}
        <div className="mt-6 pt-4 border-t border-[#d9e0d8] flex items-center justify-between text-xs text-[#68746b]">
          <Link
            href="/"
            style={{ color: '#dc2626' }}
            className="flex items-center gap-1.5 font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft size={13} style={{ color: '#dc2626' }} className="text-red-600" />
            Back to Website
          </Link>
          <span className="text-[11px] text-[#68746b]">OM SUNBUILD © 2026</span>
        </div>
      </div>
    </div>
  )
}
