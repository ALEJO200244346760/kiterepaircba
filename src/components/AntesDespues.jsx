import { useState } from 'react'
import { INSTAGRAM, INSTAGRAM_HANDLE } from '../constants'

// Para usar fotos reales: poné los archivos en public/fotos/ y completá antes/despues.
// Mientras estén en null se muestra un dibujo de ejemplo según `textura`.
const PARES = [
  { titulo: 'Canopy rasgado', textura: 'ripstop', antes: null, despues: null },
  { titulo: 'Mástil de carbono', textura: 'carbon', antes: null, despues: null },
]

const tear = 'M125 85 L155 105 L143 120 L180 132 L166 150 L214 162 L200 175 L255 188 L244 200 L285 210'

function Ripstop({ fixed }) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="ad-rs" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill="#f5a020" />
          <path d="M0 .5H18M.5 0V18" stroke="#d9860a" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill="url(#ad-rs)" />
      {fixed ? (
        <g>
          <rect x="100" y="62" width="206" height="168" rx="18" fill="#000" opacity=".1" transform="translate(4 5)" />
          <rect x="100" y="62" width="206" height="168" rx="18" fill="#f7b347" />
          <rect x="110" y="72" width="186" height="148" rx="12" fill="none" stroke="#0b2433" strokeWidth="2" strokeDasharray="7 5" />
          <rect x="120" y="82" width="166" height="128" rx="8" fill="none" stroke="#0b2433" strokeWidth="1.5" strokeDasharray="5 5" opacity=".6" />
          <path d={tear} fill="none" stroke="#d9860a" strokeWidth="1.5" opacity=".5" />
        </g>
      ) : (
        <g>
          <path d={tear} fill="none" stroke="#0b2433" strokeWidth="16" strokeLinejoin="bevel" />
          <path d={tear} fill="none" stroke="#071923" strokeWidth="8" strokeLinejoin="bevel" />
          {[[155, 105], [180, 132], [214, 162], [255, 188]].map(([x, y]) => (
            <path key={x} d={`M${x} ${y} l8 -10 M${x} ${y} l12 -3 M${x} ${y} l-6 10`} stroke="#fff3dd" strokeWidth="1.2" />
          ))}
        </g>
      )}
    </svg>
  )
}

function Carbon({ fixed }) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="ad-cb" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#11181d" />
          <rect width="10" height="10" fill="#27333c" />
          <rect x="10" y="10" width="10" height="10" fill="#27333c" />
        </pattern>
        <linearGradient id="ad-sh" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="#0b2433" />
      <rect x="150" y="0" width="100" height="250" rx="10" fill="url(#ad-cb)" />
      {fixed ? (
        <>
          <rect x="150" y="80" width="100" height="90" fill="#000" opacity=".25" />
          <rect x="150" y="0" width="100" height="250" rx="10" fill="url(#ad-sh)" />
        </>
      ) : (
        <>
          <path d="M150 110 L175 122 L168 134 L200 128 L214 146 L250 138" fill="none" stroke="#e8e0d0" strokeWidth="2.5" />
          <path d="M175 122 L186 104 M214 146 L220 164" stroke="#e8e0d0" strokeWidth="1.5" />
          <path d="M200 128 l18 -6 l10 12 l-14 8 Z" fill="#6b7a84" />
        </>
      )}
    </svg>
  )
}

const Illus = { ripstop: Ripstop, carbon: Carbon }

function Layer({ src, textura, fixed, alt }) {
  if (src) return <img src={src} alt={alt} className="h-full w-full object-cover" draggable="false" />
  const I = Illus[textura]
  return <I fixed={fixed} />
}

export default function AntesDespues() {
  const [idx, setIdx] = useState(0)
  const [pos, setPos] = useState(50)
  const par = PARES[idx]

  return (
    <section className="grain relative bg-paper-2 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="kicker reveal mb-3 text-ink/55">Trabajos realizados</p>
          <h2 className="reveal font-display text-[clamp(3rem,9vw,6rem)] leading-[0.88] text-ink">Antes y después</h2>
          <p className="reveal mt-2 font-serif text-2xl italic text-rust">Arrastrá la costura.</p>
        </div>

        {PARES.length > 1 && (
          <div className="reveal mt-8 flex justify-center gap-2">
            {PARES.map((p, i) => (
              <button
                key={p.titulo}
                onClick={() => { setIdx(i); setPos(50) }}
                aria-pressed={idx === i}
                className={`rounded-full border-[1.5px] px-4 py-1.5 font-condensed text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                  idx === i ? 'border-ink bg-ink text-paper' : 'border-ink/30 text-ink/70 hover:border-ink'
                }`}
              >
                {p.titulo}
              </button>
            ))}
          </div>
        )}

        <div className="reveal relative mx-auto mt-6 aspect-[16/10] max-w-4xl select-none overflow-hidden rounded-2xl border-[6px] border-[#f7f1e6] shadow-[0_24px_50px_-20px_rgba(11,36,51,.55)]">
          <div className="absolute inset-0">
            <Layer src={par.despues} textura={par.textura} fixed alt={`${par.titulo}, después`} />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Layer src={par.antes} textura={par.textura} fixed={false} alt={`${par.titulo}, antes`} />
          </div>

          {/* costura divisoria */}
          <div className="pointer-events-none absolute inset-y-0 w-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -left-px w-0.5 bg-[repeating-linear-gradient(180deg,#efe6d8_0_10px,transparent_10px_16px)]" />
            <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-lg">
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 1 1 7l6 6M15 1l6 6-6 6" />
              </svg>
            </div>
          </div>

          <span className="kicker absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[10px] text-paper">Antes</span>
          <span className="kicker absolute right-3 top-3 rounded-full bg-sun px-3 py-1 text-[10px] text-ink">Después</span>

          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparar antes y después"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="reveal mt-6 text-center text-sm text-ink/70">
          Seguí el día a día del taller en{' '}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-semibold text-rust underline-offset-4 hover:underline">
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </div>
    </section>
  )
}
