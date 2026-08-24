const services = [
  {
    icon: '🪁',
    title: 'Kites',
    desc: 'Parches en canopy, struts, leading edge y bladders. Costuras reforzadas.',
    badge: 'Tela ripstop',
  },
  {
    icon: '🏄',
    title: 'Wings',
    desc: 'Reparación de tela, handles, costuras y estructuras inflables.',
    badge: 'Cualquier marca',
  },
  {
    icon: '⚡',
    title: 'Foils',
    desc: 'Reparación de fibra de carbono en mástiles, fuselajes y alas.',
    badge: 'Carbono · Aluminio',
  },
  {
    icon: '🎿',
    title: 'Tablas',
    desc: 'Golpes, delaminaciones y reparaciones en fibra de vidrio y carbono.',
    badge: 'Surf · Wing · Foil',
  },
]

export default function Services() {
  return (
    <section className="bg-sand px-6 py-16 text-navy">
      <p className="mb-1 text-center font-condensed text-xs font-bold uppercase tracking-[3px] text-orange-dark">
        Servicios
      </p>
      <h2 className="mb-10 text-center font-bebas text-4xl tracking-wide text-navy">
        ¿Qué reparamos?
      </h2>

      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border-[1.5px] border-[#ede5d0] bg-white p-5 transition-colors hover:border-orange-dark"
          >
            {/* borde top naranja */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-orange" />

            <span className="mb-3 block text-3xl">{s.icon}</span>
            <h3 className="mb-1 font-condensed text-lg font-bold tracking-wide text-navy">
              {s.title}
            </h3>
            <p className="mb-2 text-xs leading-snug text-[#7a6e5f]">{s.desc}</p>
            <span className="inline-block rounded bg-orange/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-orange-dark">
              {s.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}