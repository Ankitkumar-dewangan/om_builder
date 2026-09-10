'use client'

import { useState, useEffect, FormEvent } from 'react'
import {
  UserPlus,
  Users,
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  Trash2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  KeyRound,
} from 'lucide-react'

interface AdminUserItem {
  id: string
  username: string
  name: string
  role: string
  created_at?: string
}

export default function AdminRegisterPage() {
  const [users, setUsers] = useState<AdminUserItem[]>([])
  const [loadingUsers, setLoadingUsers] = useState(true)
  const [formLoading, setFormLoading] = useState(false)
  const [error, setError] = useState('')
  const [successNotice, setSuccessNotice] = useState('')

  // Form State
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const [showPassword, setShowPassword] = useState(false)

  async function loadUsers(manual = false) {
    if (manual) setLoadingUsers(true)
    try {
      const res = await fetch('/api/admin/users', { cache: 'no-store' })
      const json = await res.json()
      if (res.ok) {
        setUsers(json.data || [])
      }
    } catch {
      // silently handle
    } finally {
      setLoadingUsers(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  async function handleRegister(e: FormEvent) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please provide both username and password.')
      return
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters long.')
      return
    }

    setFormLoading(true)
    setError('')
    setSuccessNotice('')

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.trim(),
          name: name.trim() || 'Admin',
          password: password.trim(),
          role,
        }),
      })

      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.error || 'Failed to create user')
      }

      setSuccessNotice(`Admin user "${username}" created successfully! Password hashed with bcrypt.`)
      setUsername('')
      setName('')
      setPassword('')
      loadUsers()
      setTimeout(() => setSuccessNotice(''), 4000)
    } catch (err: any) {
      setError(err.message || 'Error creating admin user.')
    } finally {
      setFormLoading(false)
    }
  }

  async function handleDelete(userItem: AdminUserItem) {
    if (!confirm(`Are you sure you want to remove admin access for "${userItem.username}"?`)) {
      return
    }

    try {
      const res = await fetch(`/api/admin/users?id=${userItem.id}&username=${encodeURIComponent(userItem.username)}`, {
        method: 'DELETE',
      })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.error || 'Failed to delete user')
      }
      setUsers((prev) => prev.filter((u) => u.id !== userItem.id))
      setSuccessNotice(`Admin account "${userItem.username}" removed.`)
      setTimeout(() => setSuccessNotice(''), 3000)
    } catch (err: any) {
      setError(err.message || 'Failed to delete user.')
    }
  }

  return (
    <div className="space-y-6">
      {/* Top Banner (Website Theme) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#d9e0d8] shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#e8f5ee] text-[#195232] border border-[#d9efc5] uppercase">
              Access Control
            </span>
          </div>
          <div
            style={{ fontSize: '20px', lineHeight: '26px' }}
            className="font-black text-[#17251d] tracking-tight flex items-center gap-2.5"
          >
            <UserPlus size={22} className="text-[#287a4b]" />
            Register Admin User
          </div>
          <p className="text-xs text-[#68746b] mt-0.5 font-medium">
            Create new administrators or management staff with secure bcrypt password hashing.
          </p>
        </div>

        <button
          type="button"
          onClick={() => loadUsers(true)}
          disabled={loadingUsers}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#f7f8f4] hover:bg-[#eef0e8] text-[#17251d] border border-[#d9e0d8] text-xs font-bold shadow-2xs transition-all cursor-pointer disabled:opacity-50 self-start sm:self-auto"
        >
          <RefreshCw size={13} className={loadingUsers ? 'animate-spin text-[#287a4b]' : ''} />
          <span>Refresh Team</span>
        </button>
      </div>

      {/* Notifications */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-in fade-in">
          <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {successNotice && (
        <div className="p-4 rounded-2xl bg-[#e8f5ee] border border-[#d9efc5] text-[#195232] text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 size={16} className="text-[#287a4b] flex-shrink-0" />
          <span>{successNotice}</span>
        </div>
      )}

      {/* Grid: Registration Form (Left) & Existing Team (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* FORM: Create New Admin Account                                            */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#eef0e8]">
              <div className="w-8 h-8 rounded-xl bg-[#e8f5ee] text-[#287a4b] flex items-center justify-center">
                <KeyRound size={16} />
              </div>
              <div>
                <div style={{ fontSize: '15px' }} className="font-extrabold text-[#17251d]">
                  New Account Form
                </div>
                <p className="text-xs text-[#68746b]">Enter credentials for new admin</p>
              </div>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#17251d] mb-1.5">
                  Display Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ankit Dewangan"
                    className="w-full pl-9 pr-4 py-2.5 bg-[#f7f8f4] border border-[#d9e0d8] rounded-2xl text-xs text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17251d] mb-1.5">
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
                    <span className="font-mono text-xs">@</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. ankit_admin"
                    className="w-full pl-9 pr-4 py-2.5 bg-[#f7f8f4] border border-[#d9e0d8] rounded-2xl text-xs text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17251d] mb-1.5">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#68746b]">
                    <Lock size={15} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Choose password (min. 4 characters)"
                    className="w-full pl-9 pr-10 py-2.5 bg-[#f7f8f4] border border-[#d9e0d8] rounded-2xl text-xs text-[#17251d] placeholder-[#68746b]/60 focus:bg-white focus:outline-none focus:border-[#287a4b] focus:ring-2 focus:ring-[#287a4b]/15 transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#68746b] hover:text-[#17251d]"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                <p className="text-[11px] text-[#68746b] mt-1 flex items-center gap-1">
                  <Sparkles size={11} className="text-[#287a4b]" />
                  Password will be hashed with bcrypt before storing in database.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17251d] mb-1.5">
                  Role / Permissions
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#f7f8f4] border border-[#d9e0d8] rounded-2xl text-xs text-[#17251d] focus:bg-white focus:outline-none focus:border-[#287a4b] font-medium cursor-pointer"
                >
                  <option value="admin">Administrator (Full Access)</option>
                  <option value="manager">Solar Lead Manager</option>
                  <option value="support">Customer Support Executive</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full mt-3 py-3 px-4 rounded-2xl bg-[#287a4b] hover:bg-[#195232] active:bg-[#123b28] text-white font-bold text-xs shadow-sm shadow-[#287a4b]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {formLoading ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={15} />
                    <span>Create Admin User</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIST: Existing Registered Admins                                          */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#d9e0d8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#eef0e8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#e8f5ee] text-[#287a4b] flex items-center justify-center">
                  <Users size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '15px' }} className="font-extrabold text-[#17251d]">
                    Authorized Team Accounts
                  </div>
                  <p className="text-xs text-[#68746b]">
                    Users who can log in and manage customer enquiries
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8f5ee] text-[#195232] border border-[#d9efc5]">
                {users.length} Active Users
              </span>
            </div>

            {loadingUsers ? (
              <div className="py-16 text-center text-[#68746b] text-xs animate-pulse">
                Loading team members...
              </div>
            ) : users.length === 0 ? (
              <div className="py-16 text-center text-[#68746b] text-xs border border-dashed border-[#d9e0d8] rounded-2xl">
                No users found. Create your first admin account on the left.
              </div>
            ) : (
              <div className="divide-y divide-[#eef0e8]">
                {users.map((item) => {
                  const itemInitials = (item.name || item.username || 'AD')
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase()

                  return (
                    <div
                      key={item.id || item.username}
                      className="py-3.5 flex items-center justify-between gap-3 hover:bg-[#f7f8f4]/60 px-2 rounded-2xl transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#195232] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                          {itemInitials}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#17251d] text-sm truncate">
                              {item.name || item.username}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.2 rounded-full uppercase tracking-wider bg-[#e8f5ee] text-[#195232] border border-[#d9efc5]">
                              {item.role || 'admin'}
                            </span>
                          </div>
                          <p className="text-xs text-[#68746b] mt-0.5">
                            @{item.username} • Added{' '}
                            {item.created_at
                              ? new Date(item.created_at).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })
                              : 'Recently'}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item)}
                        className="p-2 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100 cursor-pointer"
                        title="Delete User"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="mt-6 pt-3 border-t border-[#eef0e8] flex items-center justify-between text-xs text-[#68746b]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#287a4b]" />
              Role-Based Access Control
            </span>
            <span className="text-[11px] text-[#68746b]">
              Stored in Supabase admin_users table
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
