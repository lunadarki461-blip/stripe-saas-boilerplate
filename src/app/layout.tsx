import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe SaaS Boilerplate',
  description: 'Subscription boilerplate built with Next.js, Supabase, and Stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}