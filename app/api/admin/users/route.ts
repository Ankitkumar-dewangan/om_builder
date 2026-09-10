import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken, COOKIE_NAME, hashPassword } from '@/lib/auth'
import { listAdminUsers, createOrUpdateAdminUser, deleteAdminUser } from '@/lib/supabase'

async function checkAdminAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export async function GET() {
  const session = await checkAdminAuth()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const users = await listAdminUsers()
    return NextResponse.json({ success: true, data: users })
  } catch (error: any) {
    console.error('[API /api/admin/users GET] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to list users.' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const session = await checkAdminAuth()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { username, password, name, role } = body

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required.' },
        { status: 400 }
      )
    }

    if (String(password).length < 4) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 4 characters long.' },
        { status: 400 }
      )
    }

    // Hash password with bcrypt (10 rounds)
    const passwordHash = await hashPassword(String(password).trim())

    // Save to Supabase
    await createOrUpdateAdminUser({
      username: String(username).trim(),
      password_hash: passwordHash,
      name: name ? String(name).trim() : 'Admin',
      role: role ? String(role).trim() : 'admin',
    })

    return NextResponse.json({
      success: true,
      message: `Admin user '${username}' created successfully!`,
    })
  } catch (error: any) {
    console.error('[API /api/admin/users POST] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to create user.' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  const session = await checkAdminAuth()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    const targetUsername = url.searchParams.get('username')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'User ID is required.' },
        { status: 400 }
      )
    }

    if (targetUsername && targetUsername === session.username) {
      return NextResponse.json(
        { success: false, error: 'You cannot delete your own active admin account.' },
        { status: 400 }
      )
    }

    await deleteAdminUser(id)
    return NextResponse.json({ success: true, message: 'Admin user deleted successfully.' })
  } catch (error: any) {
    console.error('[API /api/admin/users DELETE] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to delete user.' },
      { status: 500 }
    )
  }
}
