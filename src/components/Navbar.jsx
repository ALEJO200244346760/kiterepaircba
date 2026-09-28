import { useEffect, useState } from 'react'
import { WHATSAPP } from '../constants'

const links = [
  { href: '#taller', label: 'Taller' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#arreglos', label: 'Arreglos' },
  { href: '#como', label: 'Cómo funciona' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open ? 'bg-ink/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Kiterepair CBA, inicio">
          <img src="/logo.png" alt="" className="h-10 w-10 drop-shadow" />
          <span className="font-display text-xl leading-none tracking-wide text-paper">
            Kite<span className="text-sun">repair</span>
            <span className="ml-1 font-condensed text-xs tracking-[0.3em] text-paper/60">CBA</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 transition-colors hover:text-sun"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-paper/40 px-4 py-2 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:border-sun hover:text-sun"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            Contacto
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-paper transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-paper transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-paper/10 py-4 font-display text-2xl text-paper"
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-sun mt-6 w-full">
            Escribinos
          </a>
        </div>
      )}
    </header>
  )
}
