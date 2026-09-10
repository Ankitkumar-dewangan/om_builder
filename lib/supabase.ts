export interface EnquiryData {
  id?: string | number
  name: string
  phone: string
  email?: string
  help_with: string
  message: string
  status?: string
  created_at?: string
}

export interface AdminUserRecord {
  id: string
  username: string
  password_hash: string
  name: string
  role: string
  created_at?: string
  updated_at?: string
}

// Extract and sanitize URL & Key with automatic fallbacks to provided credentials
const rawUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  'https://ufkdpkpukwutoqmhrvdb.supabase.co'

const rawKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON ||
  process.env['VITE_SUPABASE_ANON '] ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVma2Rwa3B1a3d1dG9xbWhydmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NzI4ODcsImV4cCI6MjEwNDQ0ODg4N30.BApdIYky3nK0HvULCLp5P8z_J_5zRFo77hVsNUU-dVk'

export const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '')
export const SUPABASE_ANON_KEY = rawKey.trim()

const defaultHeaders = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
}

/**
 * Inserts enquiry directly into Supabase 'enquiries' table
 */
export async function insertEnquiryToSupabase(data: EnquiryData) {
  const endpoint = `${SUPABASE_URL}/rest/v1/enquiries`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      help_with: data.help_with,
      message: data.message,
      status: 'new',
      created_at: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Supabase insert failed (${response.status}): ${errorMsg}`)
  }

  return true
}

/**
 * Fetches all enquiries from Supabase ordered by newest first
 */
export async function fetchEnquiriesFromSupabase(): Promise<EnquiryData[]> {
  const endpoint = `${SUPABASE_URL}/rest/v1/enquiries?select=*&order=created_at.desc`

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: defaultHeaders,
    cache: 'no-store',
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Supabase fetch enquiries failed (${response.status}): ${errorMsg}`)
  }

  return response.json()
}

/**
 * Updates the status of an enquiry (e.g. 'new', 'contacted', 'in_progress', 'closed')
 */
export async function updateEnquiryStatusInSupabase(id: string | number, status: string) {
  const endpoint = `${SUPABASE_URL}/rest/v1/enquiries?id=eq.${encodeURIComponent(id)}`

  const response = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      ...defaultHeaders,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ status }),
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Supabase status update failed (${response.status}): ${errorMsg}`)
  }

  return true
}

/**
 * Deletes an enquiry from Supabase by ID
 */
export async function deleteEnquiryFromSupabase(id: string | number) {
  const endpoint = `${SUPABASE_URL}/rest/v1/enquiries?id=eq.${encodeURIComponent(id)}`

  const response = await fetch(endpoint, {
    method: 'DELETE',
    headers: defaultHeaders,
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Supabase delete failed (${response.status}): ${errorMsg}`)
  }

  return true
}

/**
 * Fetches an admin record by username
 */
export async function getAdminUserByUsername(username: string): Promise<AdminUserRecord | null> {
  const cleanUsername = username.trim()
  const endpoint = `${SUPABASE_URL}/rest/v1/admin_users?username=eq.${encodeURIComponent(cleanUsername)}&select=*&limit=1`

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: defaultHeaders,
    cache: 'no-store',
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    // If table doesn't exist yet (404 or relation does not exist)
    if (response.status === 404 || errorMsg.includes('does not exist')) {
      throw new Error("TABLE_NOT_FOUND: The 'admin_users' table does not exist in your Supabase project. Please run supabase-schema.sql.")
    }
    throw new Error(`Supabase query failed (${response.status}): ${errorMsg}`)
  }

  const results: AdminUserRecord[] = await response.json()
  return results.length > 0 ? results[0] : null
}

/**
 * Creates or updates an admin user record
 */
export async function createOrUpdateAdminUser(user: {
  username: string
  password_hash: string
  name?: string
  role?: string
}) {
  const endpoint = `${SUPABASE_URL}/rest/v1/admin_users`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify({
      username: user.username.trim(),
      password_hash: user.password_hash,
      name: user.name || 'Admin',
      role: user.role || 'admin',
      updated_at: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Supabase admin insert failed (${response.status}): ${errorMsg}`)
  }

  return true
}

/**
 * Fetches all admin users (omits password_hash)
 */
export async function listAdminUsers(): Promise<Omit<AdminUserRecord, 'password_hash'>[]> {
  const endpoint = `${SUPABASE_URL}/rest/v1/admin_users?select=id,username,name,role,created_at,updated_at&order=created_at.desc`

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: defaultHeaders,
    cache: 'no-store',
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Failed to list admin users (${response.status}): ${errorMsg}`)
  }

  return response.json()
}

/**
 * Deletes an admin user by ID
 */
export async function deleteAdminUser(id: string) {
  const endpoint = `${SUPABASE_URL}/rest/v1/admin_users?id=eq.${encodeURIComponent(id)}`

  const response = await fetch(endpoint, {
    method: 'DELETE',
    headers: defaultHeaders,
  })

  if (!response.ok) {
    const errorMsg = await response.text()
    throw new Error(`Failed to delete admin user (${response.status}): ${errorMsg}`)
  }

  return true
}

