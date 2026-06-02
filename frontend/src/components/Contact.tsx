import { useState } from 'react'
import Reveal from './Reveal'
import { SendIcon } from './icons'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!emailRe.test(form.email.trim())) next.email = 'Enter a valid email'
    if (form.message.trim().length < 10) next.message = 'Tell me a little more (10+ chars)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal className="sec-head">
          <div style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="eyebrow">
              <span className="idx">04</span> / Contact
            </span>
            <h2 className="sec-title">Let's build something</h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Open to software engineering internships and collaboration. Drop a message and I'll
              get back to you.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-card" onSubmit={handleSubmit} noValidate>
            <div className="form-row" style={{ marginBottom: 18 }}>
              <div className={`field ${errors.name ? 'err' : ''}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <span className="msg">{errors.name}</span>
              </div>
              <div className={`field ${errors.email ? 'err' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <span className="msg">{errors.email}</span>
              </div>
            </div>
            <div className={`field ${errors.message ? 'err' : ''}`} style={{ marginBottom: 22 }}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="What would you like to build or talk about?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <span className="msg">{errors.message}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <span className="form-note">
                <span className="dot" />
                {status === 'sent'
                  ? "Message sent — thanks! I'll be in touch."
                  : status === 'error'
                    ? 'Something went wrong. Please try again.'
                    : 'Usually replies within a day'}
              </span>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  'Sending…'
                ) : status === 'sent' ? (
                  '✓ Sent'
                ) : (
                  <>
                    <SendIcon />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
