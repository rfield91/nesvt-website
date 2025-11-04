import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/results/')({ component: Results })

function Results() {
  const resultsForm = [
    {
      title: 'Raw',
      link: 'raw.htm',
    },
    {
      title: 'Class',
      link: 'fin.htm',
    },
    {
      title: 'Summary',
      link: 'sum.htm',
    },
  ]
  return (
    <div className="w-3/4 mx-auto mt-10 text-center flex flex-col gap-2">
      <p>View results from the most recent event.</p>
      <div className="flex gap-2 justify-center">
        {resultsForm.map((file) => (
          <a
            key={file.link}
            href={`/data/results/11_1_2025/${file.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-2 rounded text-white"
          >
            {file.title}
          </a>
        ))}
      </div>
    </div>
  )
}
