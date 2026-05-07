import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FormData {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400 mb-4 text-center">
            Contact
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12">
            Have a project in mind or want to connect? Send me a message.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#111827] border border-blue-900/50 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-[#111827] border border-blue-900/50 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
              />
            </div>
            <textarea
              placeholder="Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-[#111827] border border-blue-900/50 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors resize-none text-sm md:text-base"
            />
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'sent' && (
              <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
