const steps = [
  {
    num: '1',
    title: 'Mandanos fotos por WhatsApp',
    desc: 'Nos mostrás el daño y te respondemos en el momento.',
  },
  {
    num: '2',
    title: 'Traé o enviá el equipo',
    desc: 'Pasás por el taller en Córdoba o lo mandás desde cualquier punto del país.',
  },
  {
    num: '3',
    title: 'Reparamos y te avisamos',
    desc: 'Trabajamos con materiales de primera calidad. Te notificamos cuando está listo.',
  },
  {
    num: '4',
    title: 'De vuelta al agua',
    desc: 'Retirás en el taller o te lo mandamos. A disfrutar.',
  },
]

export default function Proceso() {
  return (
    <section className="bg-navy px-6 py-16">
      <p className="mb-1 text-center font-condensed text-xs font-bold uppercase tracking-[3px] text-orange">
        Cómo funciona
      </p>
      <h2 className="mb-10 text-center font-bebas text-4xl tracking-wide text-white">
        Simple y sin vueltas
      </h2>

      <div className="mx-auto flex max-w-md flex-col">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-5 py-5 border-b border-white/6 last:border-0">
            {/* número + línea conectora */}
            <div className="flex flex-col items-center">
              <span className="font-bebas text-4xl leading-none text-orange min-w-[36px] text-center">
                {step.num}
              </span>
              {i < steps.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-orange/20" />
              )}
            </div>

            {/* contenido */}
            <div className="pb-2 pt-0.5">
              <h4 className="mb-1 font-condensed text-base font-bold tracking-wide text-white">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}