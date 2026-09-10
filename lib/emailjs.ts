/**
 * EmailJS is deprecated and disabled in favor of direct Supabase enquiry storage.
 */
export interface EmailJSEnquiryParams {
  name: string
  phone: string
  email: string
  help_with: string
  message: string
}

export interface EmailJSResult {
  success: boolean
  message?: string
  error?: string
}

export async function sendEnquiryEmailJS(_data: EmailJSEnquiryParams): Promise<EmailJSResult> {
  // Disabled as per system design: enquiries are saved directly to database
  return { success: true, message: 'Email logic disabled' }
}
