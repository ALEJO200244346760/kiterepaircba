import { useMemo, useState } from 'react'
import { whatsappWith } from '../constants'
import { WaIcon } from './Icons'

// ---------------------------------------------------------------------------
// Dibujos de cada equipo (viewBox 0 0 400 300) + zonas que se pueden marcar.
// Para agregar una zona: sumala a `zones` con su posición x/y en el dibujo.
// ---------------------------------------------------------------------------

const INK = '#0b2433'
const SUN = '#f5a020'
const PAPER = '#efe6d8'

function KiteDrawing() {
  const le = 'M40 200 C70 40 330 40 360 200'
  const te = 'M72 208 C120 120 280 120 328 208'
  const struts = [
    [104, 114, 125, 158],
    [132, 92, 151, 149],
    [200, 80, 200, 142],
    [268, 92, 249, 149],
    [296, 114, 275, 158],
  ]
  return (
    <g>
      {[[72, 208, 175, 285], [152, 148, 190, 285], [248, 148, 210, 285], [328, 208, 225, 285]].map(([a, b, c, d], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={INK} strokeOpacity=".45" strokeWidth="1" />
      ))}
      <rect x="160" y="282" width="80" height="7" rx="3.5" fill={INK} />
      <path d={`${le} L328 208 C280 120 120 120 72 208 Z`} fill={SUN} />
      <path d={te} fill="none" stroke={INK} strokeWidth="2" />
      {struts.map(([a, b, c, d], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={INK} strokeWidth="6" strokeLinecap="round" />
      ))}
      <path d={le} fill="none" stroke={INK} strokeWidth="14" strokeLinecap="round" />
      <rect x="194" y="66" width="12" height="10" rx="2" fill={PAPER} stroke={INK} strokeWidth="2" />
    </g>
  )
}

function WingDrawing() {
  return (
    <g>
      <path d="M30 150 C110 40 290 40 370 150 Q280 200 200 250 Q120 200 30 150 Z" fill={SUN} />
      <path d="M118 122 L166 112 L170 168 L124 172 Z" fill="#bfe0e6" stroke={INK} strokeWidth="2" opacity=".9" />
      <line x1="200" y1="70" x2="200" y2="248" stroke={INK} strokeWidth="9" strokeLinecap="round" />
      <rect x="208" y="135" width="9" height="34" rx="4" fill="none" stroke={INK} strokeWidth="3" />
      <rect x="208" y="190" width="9" height="34" rx="4" fill="none" stroke={INK} strokeWidth="3" />
      <path d="M30 150 C110 40 290 40 370 150" fill="none" stroke={INK} strokeWidth="14" strokeLinecap="round" />
      <rect x="194" y="52" width="12" height="10" rx="2" fill={PAPER} stroke={INK} strokeWidth="2" />
    </g>
  )
}

function FoilDrawing() {
  return (
    <g>
      <rect x="160" y="28" width="80" height="12" rx="3" fill={INK} />
      <rect x="191" y="40" width="18" height="168" rx="6" fill={INK} />
      <rect x="80" y="204" width="260" height="12" rx="6" fill="#33505f" />
      <path d="M16 246 C50 160 160 172 196 210 C150 200 70 206 16 246 Z" fill={SUN} stroke={INK} strokeWidth="2.5" />
      <path d="M286 228 C300 190 350 190 376 206 C344 204 312 210 286 228 Z" fill={SUN} stroke={INK} strokeWidth="2.5" />
      {[172, 186, 214, 228].map((x) => (
        <circle key={x} cx={x} cy="34" r="2.5" fill={PAPER} />
      ))}
      <circle cx="200" cy="210" r="3" fill={PAPER} />
    </g>
  )
}

function BoardDrawing() {
  return (
    <g>
      <path
        d="M48 112 L48 188 C120 214 200 218 270 212 C330 206 368 180 378 150 C368 120 330 94 270 88 C200 82 120 86 48 112 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
      />
      <path d="M60 150 L360 150" stroke={INK} strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="6 5" />
      <rect x="60" y="116" width="90" height="68" rx="14" fill="#33505f" />
      {[126, 138, 150, 162, 174].map((y) => (
        <line key={y} x1="70" y1={y} x2="140" y2={y} stroke={PAPER} strokeOpacity=".25" strokeWidth="2" />
      ))}
      <rect x="165" y="136" width="70" height="5" rx="2" fill={INK} />
      <rect x="165" y="159" width="70" height="5" rx="2" fill={INK} />
      <path d="M270 128 Q292 150 270 172" fill="none" stroke={SUN} strokeWidth="7" strokeLinecap="round" />
    </g>
  )
}

const EQUIPOS = {
  kite: {
    label: 'Kite',
    Drawing: KiteDrawing,
    zones: [
      { id: 'le', label: 'Leading edge', x: 98, y: 108 },
      { id: 'valve', label: 'Válvula', x: 200, y: 60 },
      { id: 'strut', label: 'Strut', x: 142, y: 120 },
      { id: 'canopy', label: 'Canopy (tela)', x: 228, y: 113 },
      { id: 'bladder', label: 'Bladder (pierde aire)', x: 312, y: 116 },
      { id: 'te', label: 'Trailing edge', x: 272, y: 160 },
      { id: 'tip', label: 'Puntas', x: 44, y: 196 },
      { id: 'lines', label: 'Líneas / bridas', x: 171, y: 218 },
    ],
  },
  wing: {
    label: 'Wing',
    Drawing: WingDrawing,
    zones: [
      { id: 'le', label: 'Leading edge', x: 88, y: 97 },
      { id: 'valve', label: 'Válvula', x: 200, y: 42 },
      { id: 'window', label: 'Ventana', x: 144, y: 142 },
      { id: 'canopy', label: 'Canopy (tela)', x: 290, y: 132 },
      { id: 'strut', label: 'Strut central', x: 200, y: 110 },
      { id: 'handles', label: 'Handles', x: 236, y: 206 },
      { id: 'bladder', label: 'Bladder (pierde aire)', x: 322, y: 100 },
    ],
  },
  foil: {
    label: 'Foil',
    Drawing: FoilDrawing,
    zones: [
      { id: 'front', label: 'Ala delantera', x: 92, y: 198 },
      { id: 'stab', label: 'Estabilizador', x: 334, y: 204 },
      { id: 'mast', label: 'Mástil', x: 200, y: 120 },
      { id: 'fuse', label: 'Fuselaje', x: 262, y: 210 },
      { id: 'plate', label: 'Placa / tornillería', x: 200, y: 20 },
    ],
  },
  tabla: {
    label: 'Tabla',
    Drawing: BoardDrawing,
    zones: [
      { id: 'nose', label: 'Nariz', x: 356, y: 150 },
      { id: 'tail', label: 'Cola', x: 50, y: 150 },
      { id: 'rail', label: 'Rieles', x: 210, y: 86 },
      { id: 'deck', label: 'Deck / pad', x: 105, y: 150 },
      { id: 'box', label: 'Caja de foil / quillas', x: 200, y: 150 },
      { id: 'inserts', label: 'Insertos / straps', x: 290, y: 150 },
    ],
  },
}

const DANOS = ['Rasguño o pinchadura', 'Rotura chica (< 10 cm)', 'Rotura grande', 'No sé, te mando fotos']
const APUROS = ['Sin apuro', 'Tengo viaje pronto']

function Hotspot({ zone, active, onToggle }) {
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }
  return (
    <g
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={zone.label}
      onClick={onToggle}
      onKeyDown={onKey}
      className="cursor-pointer outline-none [&:focus-visible>circle.main]:stroke-rust"
    >
      <title>{zone.label}</title>
      <circle cx={zone.x} cy={zone.y} r="22" fill="transparent" />
      {!active && <circle className="hotspot-ring" cx={zone.x} cy={zone.y} r="7" fill="none" stroke={INK} strokeWidth="2" />}
      <circle
        className="main transition-all"
        cx={zone.x}
        cy={zone.y}
        r={active ? 11 : 7}
        fill={active ? '#c9542a' : PAPER}
        stroke={active ? PAPER : INK}
        strokeWidth="2.5"
      />
      {active && (
        // cruz de puntada
        <path
          d={`M${zone.x - 4} ${zone.y - 4} L${zone.x + 4} ${zone.y + 4} M${zone.x + 4} ${zone.y - 4} L${zone.x - 4} ${zone.y + 4}`}
          stroke={PAPER}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
    </g>
  )
}

function Option({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border-[1.5px] px-3.5 py-1.5 font-condensed text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
        active ? 'border-sun bg-sun text-ink' : 'border-paper/30 text-paper/80 hover:border-paper/70 hover:text-paper'
      }`}
    >
      {children}
    </button>
  )
}

function Row({ label, children }) {
  return (
    <div className="flex items-baseline gap-2 py-1.5 text-sm">
      <span className="kicker shrink-0 text-[10px] text-ink/55">{label}</span>
      <span className="mb-1 flex-1 border-b border-dotted border-ink/30" />
      <span className="max-w-[62%] text-right font-semibold text-ink">{children}</span>
    </div>
  )
}

export default function Diagnostico() {
  const [equipo, setEquipo] = useState('kite')
  const [zonas, setZonas] = useState(['le'])
  const [dano, setDano] = useState(DANOS[1])
  const [apuro, setApuro] = useState(APUROS[0])
  const [modelo, setModelo] = useState('')
  const [ficha] = useState(() => String(Math.floor(1000 + Math.random() * 9000)))

  const eq = EQUIPOS[equipo]
  const zonasSel = eq.zones.filter((z) => zonas.includes(z.id))

  const toggle = (id) => setZonas((zs) => (zs.includes(id) ? zs.filter((z) => z !== id) : [...zs, id]))
  const cambiarEquipo = (k) => {
    setEquipo(k)
    setZonas([])
  }

  const mensaje = useMemo(() => {
    const lineas = [
      `Hola Kiterepair! 🪁 Ficha Nº ${ficha}`,
      `Equipo: ${eq.label}${modelo.trim() ? ` (${modelo.trim()})` : ''}`,
      `Zonas: ${zonasSel.length ? zonasSel.map((z) => z.label).join(', ') : 'a definir'}`,
      `Daño: ${dano}`,
      `Apuro: ${apuro}`,
      '',
      'Te mando fotos 👇',
    ]
    return lineas.join('\n')
  }, [ficha, eq, modelo, zonasSel, dano, apuro])

  const { Drawing } = eq

  return (
    <section id="diagnostico" className="grain grain-light relative overflow-hidden bg-sea px-4 py-20 text-paper sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* encabezado estilo catálogo */}
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="kicker reveal mb-3 text-paper/60">Ficha 01</p>
            <h2 className="reveal font-display text-[clamp(3.4rem,12vw,8rem)] leading-[0.85]">Diagnóstico</h2>
          </div>
          <div className="reveal max-w-sm md:pb-3" style={{ '--d': '120ms' }}>
            <p className="font-serif text-3xl leading-tight">¿Qué se rompió?</p>
            <p className="font-serif text-3xl italic leading-tight text-sun">Tocá donde duele.</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Marcá el equipo y las zonas dañadas. Armamos la ficha y nos la mandás por WhatsApp junto con las fotos.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* ---- mesa de trabajo ---- */}
          <div className="reveal">
            <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Tipo de equipo">
              {Object.entries(EQUIPOS).map(([k, v]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={equipo === k}
                  onClick={() => cambiarEquipo(k)}
                  className={`rounded-full px-5 py-2 font-display text-lg transition-colors ${
                    equipo === k ? 'bg-paper text-ink' : 'bg-paper/10 text-paper hover:bg-paper/20'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div
              className="relative overflow-hidden rounded-2xl bg-paper p-3 sm:p-5"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(11,36,51,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(11,36,51,.07) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <span className="kicker absolute left-4 top-3 text-[10px] text-ink/50">Mesa de trabajo · {eq.label}</span>
              <span className="kicker absolute right-4 top-3 text-[10px] text-ink/50">
                {zonasSel.length} {zonasSel.length === 1 ? 'zona' : 'zonas'}
              </span>
              <svg viewBox="0 0 400 300" className="mt-4 w-full" key={equipo}>
                <Drawing />
                {eq.zones.map((z) => (
                  <Hotspot key={z.id} zone={z} active={zonas.includes(z.id)} onToggle={() => toggle(z.id)} />
                ))}
              </svg>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {eq.zones.map((z) => (
                <Option key={z.id} active={zonas.includes(z.id)} onClick={() => toggle(z.id)}>
                  {z.label}
                </Option>
              ))}
            </div>
          </div>

          {/* ---- controles + ficha ---- */}
          <div className="reveal flex flex-col gap-6" style={{ '--d': '120ms' }}>
            <div>
              <p className="kicker mb-2.5 text-paper/60">Tamaño del daño</p>
              <div className="flex flex-wrap gap-2">
                {DANOS.map((d) => (
                  <Option key={d} active={dano === d} onClick={() => setDano(d)}>
                    {d}
                  </Option>
                ))}
              </div>
            </div>
            <div>
              <p className="kicker mb-2.5 text-paper/60">¿Apuro?</p>
              <div className="flex flex-wrap gap-2">
                {APUROS.map((a) => (
                  <Option key={a} active={apuro === a} onClick={() => setApuro(a)}>
                    {a}
                  </Option>
                ))}
              </div>
            </div>
            <label className="block">
              <span className="kicker mb-2.5 block text-paper/60">Marca y modelo (opcional)</span>
              <input
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Ej: Duotone Rebel 12m 2021"
                maxLength={60}
                className="w-full rounded-xl border-[1.5px] border-paper/25 bg-paper/5 px-4 py-2.5 text-paper placeholder:text-paper/35 focus:border-sun focus:outline-none"
              />
            </label>

            {/* ficha */}
            <div className="ticket relative rotate-[-1deg] bg-[#f7f1e6] px-7 py-6 text-ink shadow-[0_20px_40px_-15px_rgba(0,0,0,.5)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="kicker text-[10px] text-ink/55">Ficha de reparación</p>
                  <p className="font-display text-3xl leading-tight">Nº {ficha}</p>
                </div>
                <img src="/logo.png" alt="" className="h-12 w-12" />
              </div>
              <div className="seam my-3 text-ink/25" />
              <Row label="Equipo">{eq.label}{modelo.trim() && <span className="font-normal text-ink/60"> · {modelo.trim()}</span>}</Row>
              <Row label="Zonas">{zonasSel.length ? zonasSel.map((z) => z.label).join(', ') : <span className="text-ink/40">Marcá en el dibujo</span>}</Row>
              <Row label="Daño">{dano}</Row>
              <Row label="Apuro">{apuro}</Row>
              <div className="mt-4 inline-block rotate-[-4deg] rounded border-2 border-rust px-2 py-0.5 font-condensed text-xs font-bold uppercase tracking-[0.2em] text-rust opacity-80">
                En espera de fotos
              </div>
              <a
                href={whatsappWith(mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 w-full bg-[#25D366] text-white hover:brightness-95"
              >
                <WaIcon size={16} />
                Mandar ficha por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
