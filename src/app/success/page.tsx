export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-sm w-full text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold mb-2">You're subscribed!</h1>
        <p className="text-white/60">
          Thanks for subscribing. Your Pro Plan is now active.
        </p>
      </div>
    </div>
  )
}