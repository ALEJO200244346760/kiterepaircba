const steps = [
  { title: 'Mandanos fotos', desc: 'Por WhatsApp, mostrándonos el daño. Te respondemos en el momento.' },
  { title: 'Traé o enviá el equipo', desc: 'Pasás por el taller en Córdoba o lo mandás desde cualquier punto del país.' },
  { title: 'Reparamos y te avisamos', desc: 'Materiales de primera calidad. Te notificamos cuando está listo.' },
  { title: 'De vuelta al agua', desc: 'Retirás en el taller o te lo mandamos. A disfrutar.' },
]

export default function Proceso() {
  return (
    <section id="como" className="grain grain-light relative overflow-hidden bg-ink px-4 py-20 text-paper sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="kicker reveal mb-3 text-sun">Cómo funciona</p>
            <h2 className="reveal font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9]">
              Simple
              <br />y sin vueltas.
            </h2>
          </div>
          <p className="reveal max-w-md text-paper/70 md:justify-self-end">
            Te pasamos presupuesto y tiempos por WhatsApp antes de tocar nada. Envíos a todo el país con número
            de seguimiento; en Córdoba podés traerlo al taller.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal" style={{ '--d': `${i * 100}ms` }}>
              <div className="seam mb-5 text-sun/40" />
              <span className="font-display text-6xl leading-none text-transparent [-webkit-text-stroke:1.5px_#f5a020]">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-condensed text-lg font-bold uppercase tracking-[0.12em]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
