'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setState('loading')
    setTimeout(() => {
      setState('done')
      setEmail('')
      setTimeout(() => setState('idle'), 4000)
    }, 900)
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder={state === 'done' ? 'Welcome! Check your inbox.' : 'Enter your email address'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={state !== 'idle'}
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={state !== 'idle'}
        style={state === 'done' ? { background: 'var(--secondary-dk)' } : {}}
      >
        {state === 'loading' ? 'Subscribing…' : state === 'done' ? '✓ You\'re in!' : 'Subscribe Free'}
      </button>
    </form>
  )
}
