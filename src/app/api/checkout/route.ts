import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe/client'

export async function POST(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout session error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}