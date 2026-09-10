'use client'

import { ArrowUpRight, Check, LoaderCircle, AlertCircle, MessageCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { whatsappUrl } from '@/lib/contact'

interface EnquiryFormProps {
  context?: string
}

export function EnquiryForm({ context }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    help_with: context ? `Product/Project: ${context}` : '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.')
      }

      setStatus('success')
    } catch (err: any) {
      console.error('Submission error:', err)
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success enquiry-success">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#17251d] mb-1">Thank You!</h3>
        <p className="text-[#68746b] text-sm max-w-sm mx-auto mb-4">
          Your enquiry has been successfully recorded. Our solar specialists will contact you shortly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
          <a
            href={whatsappUrl(`Hello OM SUNBUILD, I just submitted an enquiry for ${formData.help_with || 'solar solution'}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-green text-xs"
          >
            <MessageCircle size={15} /> Instant WhatsApp Chat
          </a>
          <button
            type="button"
            className="text-link dark text-xs"
            onClick={() => {
              setFormData({
                name: '',
                phone: '',
                email: '',
                help_with: '',
                message: '',
              })
              setStatus('idle')
            }}
          >
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>01</span>
        <h3>{context ? `Enquire about ${context}` : 'Tell us about your project'}</h3>
      </div>

      {status === 'error' && (
        <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Name (Required) */}
      <label>
        Name <span className="text-red-500">*</span>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          autoComplete="name"
        />
      </label>

      {/* 2. Mobile number (Required) */}
      <label>
        Mobile number <span className="text-red-500">*</span>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          type="tel"
          placeholder="+91 91098 38902"
          autoComplete="tel"
        />
      </label>

      {/* 3. Email address (Required) */}
      <label>
        Email address <span className="text-red-500">*</span>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="yourname@gmail.com"
          autoComplete="email"
        />
      </label>

      {/* 4. What can we help with? (Required) */}
      <label>
        What can we help with? <span className="text-red-500">*</span>
        <select
          name="help_with"
          value={formData.help_with}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a solution or service
          </option>
          <option value="Residential Solar">Residential Solar (Home Rooftop)</option>
          <option value="Commercial Solar">Commercial Solar (Offices & Shops)</option>
          <option value="Industrial Solar">Industrial Solar (Factory & Plants)</option>
          <option value="Rooftop Solar">Rooftop Solar EPC</option>
          <option value="Solar Maintenance">Solar AMC & Maintenance</option>
          <option value="Product Enquiry">Solar Products & Inverters</option>
          <option value="Something Else">Something else</option>
        </select>
      </label>

      {/* 5. Message (Required) */}
      <label>
        Message <span className="text-red-500">*</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your rooftop area, monthly electricity bill, or specific requirements..."
          rows={3}
        />
      </label>

      <button
        className="button button-green form-submit"
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            Submitting to Database <LoaderCircle className="spin ml-2" size={17} />
          </>
        ) : (
          <>
            Send enquiry <ArrowUpRight size={17} />
          </>
        )}
      </button>
    </form>
  )
}
