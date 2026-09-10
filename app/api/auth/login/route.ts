import { NextResponse } from 'next/server'
import { getAdminUserByUsername } from '@/lib/supabase'
import { verifyPassword, createSessionToken, COOKIE_NAME } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required.' },
        { status: 400 }
      )
    }

    // 1. Fetch user from Supabase admin_users table
    let user
    try {
      user = await getAdminUserByUsername(String(username).trim())
    } catch (err: any) {
      if (err?.message?.includes('TABLE_NOT_FOUND')) {
        return NextResponse.json(
          {
            success: false,
            error: "Database table 'admin_users' not found. Please run the SQL schema in your Supabase SQL Editor.",
            code: 'TABLE_NOT_FOUND',
          },
          { status: 503 }
        )
      }
      throw err
    }

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password.' },
        { status: 401 }
      )
    }

    // 2. Verify hashed password
    const isPasswordValid = await verifyPassword(String(password).trim(), user.password_hash)
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password.' },
        { status: 401 }
      )
    }

    // 3. Create signed session token
    const token = createSessionToken({
      username: user.username,
      name: user.name,
      role: user.role,
    })

    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        name: user.name,
        role: user.role,
      },
    })

    // 4. Set secure HTTP-only cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error: any) {
    console.error('[API /api/auth/login] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Authentication error.' },
      { status: 500 }
    )
  }
}
