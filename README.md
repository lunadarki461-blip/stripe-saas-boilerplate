# Stripe Subscription Boilerplate

A starter template for adding subscription billing to a SaaS product, built with Next.js, Supabase, and Stripe.

## What this does

- Stripe Checkout integration for subscriptions
- Webhook handler that verifies and processes Stripe events
- Supabase client setup, ready for user and subscription data
- Dark-themed pricing page with a working Subscribe button
- Success page after payment

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Supabase
- Stripe

## Getting started

1. Install dependencies: npm install
2. Create a .env.local file with your Supabase and Stripe keys
3. Run the dev server: npm run dev
4. For local webhook testing, run: stripe listen --forward-to localhost:3000/api/webhooks/stripe

## Live demo

Live demo: https://stripe-saas-boilerplate.netlify.app/pricing