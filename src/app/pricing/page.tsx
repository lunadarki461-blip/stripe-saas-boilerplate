'use client'

import { useState } from 'react'

export default function PricingPage() {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
      })
      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-sm w-full border border-white/10 rounded-2xl p-8 bg-white/5">
        <h1 className="text-2xl font-semibold mb-2">Pro Plan</h1>
        <p className="text-white/60 mb-6">
          Full access to premium features, unlimited usage, priority support.
        </p>
        <div className="text-4xl font-bold mb-6">
          $10<span className="text-lg font-normal text-white/60">/month</span>
        </div>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition disabled:opacity-50"
        >
          {loading ? 'Redirecting...' : 'Subscribe Now'}
        </button>
      </div>
    </div>
  )
}