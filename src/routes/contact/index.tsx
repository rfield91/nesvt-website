import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({ component: Contact })

export function Contact() {
  return (
    <div className="w-3/4 mx-auto text-center mt-10">
      Contact form coming soon.
    </div>
  )
}
