'use client'

import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function EnquiryForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 650)
  }
  if (status === 'success') return <div className="form-success enquiry-success"><Check size={30}/><h3>Thank you.</h3><p>Your enquiry is ready. We&apos;ll be in touch soon.</p><button type="button" className="text-link dark" onClick={() => setStatus('idle')}>Send another enquiry</button></div>
  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="form-title"><span>01</span><h3>{context ? `Enquire about ${context}` : 'Tell us about your project'}</h3></div>
    <label>Name<input name="name" required placeholder="Your name" autoComplete="name"/></label>
    <label>Mobile number<input name="phone" required type="tel" placeholder="+91 00000 00000" autoComplete="tel"/></label>
    <label>Email address<input name="email" required type="email" placeholder="you@email.com" autoComplete="email"/></label>
    <label>Enquiry type<select name="type" defaultValue="" required><option value="" disabled>Select an option</option><option>Residential solar</option><option>Commercial solar</option><option>Industrial solar</option><option>Product enquiry</option><option>Project enquiry</option><option>Something else</option></select></label>
    {context && <input type="hidden" name="context" value={context}/>} 
    <label>Solar requirement<textarea name="requirement" required placeholder="Tell us what you need..." rows={3}/></label>
    <label>Message<textarea name="message" placeholder="Anything else we should know?" rows={3}/></label>
    <button className="button button-green form-submit" type="submit" disabled={status === 'loading'}>{status === 'loading' ? <>Sending <LoaderCircle className="spin" size={17}/></> : <>Send enquiry <ArrowUpRight size={17}/></>}</button>
  </form>
}
