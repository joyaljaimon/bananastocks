import { useState } from 'react'

function InfoTooltip({ text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <span className="relative inline-block group ml-1 align-middle">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        aria-label="More info"
        className="w-4 h-4 rounded-full bg-banana text-jungle-dark text-[10px]
                   font-bold flex items-center justify-center
                   hover:bg-banana-dark transition-colors cursor-help"
      >
        i
      </button>

      <span
        className={`absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2
                    w-48 px-3 py-2 rounded-lg bg-jungle-dark text-banana-light
                    text-xs leading-relaxed shadow-lg pointer-events-none
                    transition-opacity duration-150
                    ${isOpen ? 'opacity-100' : 'opacity-0'}
                    group-hover:opacity-100`}
      >
        {text}
      </span>
    </span>
  )
}

export default InfoTooltip