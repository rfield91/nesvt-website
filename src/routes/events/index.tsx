import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/')({ component: Events })

function Events() {
  const events = []

  return (
    <div className="mt-10 mx-auto w-3/4 text-center">
      {events.length > 0 ? (
        <div></div>
      ) : (
        <div>No upcoming events. Check back soon.</div>
      )}
    </div>
  )
}
