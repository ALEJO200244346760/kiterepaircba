const items = [
  {
    title: 'Kites',
    list: ['Parches en canopy', 'Leading edge y struts', 'Bladders y válvulas', 'Costuras reforzadas'],
    badge: 'Tela ripstop',
  },
  {
    title: 'Wings',
    list: ['Tela y costuras', 'Handles y strut central', 'Estructuras inflables'],
    badge: 'Cualquier marca',
  },
  {
    title: 'Foils',
    list: ['Mástiles y fuselajes', 'Ala delantera y estabilizador', 'Golpes y fisuras en carbono'],
    badge: 'Carbono · Aluminio',
  },
  {
    title: 'Tablas',
    list: ['Golpes y delaminaciones', 'Fibra de vidrio y carbono', 'Rieles, nariz y cola'],
    badge: 'Surf · Wing · Foil',
  },
]

// Etiqueta de taller colgada con hilo
function Tag({ item, i }) {
  return (
    <div className="reveal group relative pt-10" style={{ '--d': `${i * 90}ms` }}>
      {/* hilo */}
      <svg className="absolute left-1/2 top-0 h-12 w-10 -translate-x-1/2" viewBox="0 0 40 48" aria-hidden="true">
        <path d="M20 0 C 8 14, 32 26, 20 46" stroke="#c9542a" strokeWidth="1.5" fill="none" />
      </svg>
      <div
        className="relative origin-top bg-paper-2 px-6 pb-7 pt-12 transition-transform duration-500 ease-out group-hover:rotate-[-2.5deg] group-odd:rotate-1"
        style={{ clipPath: 'polygon(22% 0, 78% 0, 100% 12%, 100% 100%, 0 100%, 0 12%)' }}
      >
        {/* ojal */}
        <span className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-ink/70 bg-paper" />
        <p className="kicker text-[10px] text-ink/50">Nº 0{i + 1}</p>
        <h3 className="mt-1 font-display text-4xl text-ink">{item.title}</h3>
        <div className="seam my-4 text-ink/25" />
        <ul className="space-y-2 text-sm text-ink/80">
          {item.list.map((l) => (
            <li key={l} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
              {l}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-block rounded-sm bg-ink px-2 py-1 font-condensed text-[11px] font-bold uppercase tracking-[0.16em] text-sun">
          {item.badge}
        </span>
      </div>
    </div>
  )
}

export default function Arreglos() {
  return (
    <section id="arreglos" className="grain relative bg-paper px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="kicker reveal mb-3 text-ink/55">Catálogo 02 · Arreglos</p>
            <h2 className="reveal font-display text-[clamp(3rem,9vw,6rem)] leading-[0.88] text-ink">¿Qué reparamos?</h2>
          </div>
          <p className="reveal max-w-xs font-serif text-2xl italic leading-tight text-rust md:text-right">
            De cualquier marca, con materiales de primera.
          </p>
        </div>

        <div className="mt-10 grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Tag key={it.title} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
