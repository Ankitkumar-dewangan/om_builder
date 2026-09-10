import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken, COOKIE_NAME } from '@/lib/auth'
import {
  fetchEnquiriesFromSupabase,
  updateEnquiryStatusInSupabase,
  deleteEnquiryFromSupabase,
} from '@/lib/supabase'

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
    const enquiries = await fetchEnquiriesFromSupabase()
    return NextResponse.json({ success: true, data: enquiries })
  } catch (error: any) {
    console.error('[API /api/admin/enquiries GET] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to fetch enquiries.' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: Request) {
  const session = await checkAdminAuth()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'Enquiry ID and status are required.' },
        { status: 400 }
      )
    }

    await updateEnquiryStatusInSupabase(id, status)
    return NextResponse.json({ success: true, message: 'Status updated successfully' })
  } catch (error: any) {
    console.error('[API /api/admin/enquiries PATCH] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to update enquiry status.' },
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

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Enquiry ID is required in query params.' },
        { status: 400 }
      )
    }

    await deleteEnquiryFromSupabase(id)
    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully' })
  } catch (error: any) {
    console.error('[API /api/admin/enquiries DELETE] Error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to delete enquiry.' },
      { status: 500 }
    )
  }
}
