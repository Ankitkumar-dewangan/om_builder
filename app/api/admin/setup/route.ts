import { NextResponse } from 'next/server'
import { hashPassword } from '@/lib/auth'
import { createOrUpdateAdminUser } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { username, password, name } = body

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required.' },
        { status: 400 }
      )
    }

    if (String(password).length < 4) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 4 characters.' },
        { status: 400 }
      )
    }

    // Hash password with bcrypt
    const passwordHash = await hashPassword(String(password).trim())

    // Insert or update admin in Supabase
    await createOrUpdateAdminUser({
      username: String(username).trim(),
      password_hash: passwordHash,
      name: name ? String(name).trim() : 'Admin',
      role: 'admin',
    })

    return NextResponse.json({
      success: true,
      message: `Admin user '${username}' created/updated successfully with hashed password!`,
    })
  } catch (err: any) {
    console.error('[API /api/admin/setup] Error:', err)
    return NextResponse.json(
      {
        success: false,
        error: err?.message || 'Failed to create admin user.',
      },
      { status: 500 }
    )
  }
}
