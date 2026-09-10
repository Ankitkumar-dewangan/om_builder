import { NextResponse } from 'next/server'
import { insertEnquiryToSupabase, EnquiryData } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, help_with, message } = body

    console.log('\n=================== NEW ENQUIRY SUBMISSION ===================')
    console.log('[API /api/enquiry] Timestamp:', new Date().toISOString())
    console.log('[API /api/enquiry] Payload received:', { name, phone, email, help_with, messageLength: message?.length })

    // 1. Validate required fields
    if (!name || !phone || !help_with || !message) {
      console.warn('[API /api/enquiry] Validation failed: Missing required fields')
      return NextResponse.json(
        {
          success: false,
          error: 'Name, Mobile number, Solution requirement, and Message are required.',
        },
        { status: 400 }
      )
    }

    const enquiryData: EnquiryData = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      help_with: String(help_with).trim(),
      message: String(message).trim(),
    }

    // 2. Insert into Supabase Database
    console.log('[API /api/enquiry] Inserting into Supabase table "enquiries"...')
    await insertEnquiryToSupabase(enquiryData)
    console.log('[API /api/enquiry] ✅ Supabase insertion successful!')
    console.log('===============================================================\n')

    return NextResponse.json({
      success: true,
      dbSaved: true,
      message: 'Enquiry successfully recorded in the database.',
    })
  } catch (error: any) {
    console.error('[API /api/enquiry] 💥 Error saving enquiry:', error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Unexpected server error while processing enquiry.',
      },
      { status: 500 }
    )
  }
}

