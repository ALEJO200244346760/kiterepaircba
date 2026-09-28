import { Star } from './Icons'

// Cinta que se desliza. Se duplica el contenido para que el loop no tenga salto.
export default function Marquee({ items, className = '', reverse = false, star = false, textClass = '' }) {
  const row = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className={`whitespace-nowrap px-5 ${textClass}`}>{it}</span>
          {star ? <Star className="h-4 w-4 shrink-0 opacity-80" /> : <span className="opacity-60">·</span>}
        </span>
      ))}
    </div>
  )
  return (
    <div className={`relative overflow-hidden py-4 ${className}`}>
      <div className={`flex w-max ${reverse ? 'marquee-rev' : 'marquee'}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
