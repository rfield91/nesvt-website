import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-2 mt-10">
      <h1 className="text-2xl">About</h1>
      <p>
        NE-SVT is a non-profit club that was founded in 1998. We are run
        exclusively by volunteers with the goal of maximizing seat time and fun
        in a safe environment.
      </p>

      <div>
        <a
          href="/faq"
          className="inline-block bg-blue-600 p-2 rounded text-white"
        >
          Learn more about autocross
        </a>
      </div>
    </div>
  )
}
