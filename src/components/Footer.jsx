import { INSTAGRAM, INSTAGRAM_HANDLE, WHATSAPP } from '../constants'

export default function Footer() {
  return (
    <footer className="grain grain-light relative overflow-hidden bg-ink-dark px-4 pb-8 pt-16 text-paper sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-display text-[clamp(3.2rem,14vw,11rem)] leading-[0.85] text-paper/90">Rompé tranquilo.</p>
        <p className="kicker mt-6 text-paper/50">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-sun">{INSTAGRAM_HANDLE}</a>
          <span className="mx-3">·</span>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-sun">WhatsApp 351 398-7830</a>
        </p>
        <div className="seam mx-auto mt-10 max-w-6xl text-paper/15" />
        <p className="mt-6 font-condensed text-xs uppercase tracking-[0.2em] text-paper/35">
          © {new Date().getFullYear()} Kiterepair CBA · Kites · Wings · Foils · Tablas · Córdoba, Argentina
        </p>
      </div>
    </footer>
  )
}
