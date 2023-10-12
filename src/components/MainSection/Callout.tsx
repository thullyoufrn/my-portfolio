import { ArrowSquareOut } from '@phosphor-icons/react'

export default function Callout() {
  return (
    <a
      href="https://youtu.be/n5cV5N3xpXA?si=anzWP5uDRITl2tx5"
      target="_blank"
      className="flex items-center gap-2 border border-transparent cursor-pointer hover:border-gray-300 px-4 py-3 rounded-xl underline transition-all duration-75"
      rel="noreferrer"
    >
      <ArrowSquareOut size={20} />

      <p>
        Click here to check out my online{' '}
        <span className="font-semibold">JavaScript</span> course
      </p>
    </a>
  )
}
