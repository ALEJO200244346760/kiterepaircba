import { WHATSAPP, INSTAGRAM, INSTAGRAM_HANDLE, GOOGLE_MAPS } from '../constants'
import { WaIcon, IgIcon, PinIcon } from './Icons'

export default function Contacto() {
  return (
    <section id="contacto" className="grain relative overflow-hidden bg-sun px-4 py-20 text-ink sm:px-6 md:py-28">
      {/* sol de fondo */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-ink/[0.06]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="kicker reveal mb-4 text-ink/60">Contacto</p>
        <h2 className="reveal font-display text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.86]">¿Rompiste algo?</h2>
        <p className="reveal mt-2 font-serif text-[clamp(2rem,5vw,3.2rem)] italic leading-none text-rust">Escribinos.</p>
        <p className="reveal mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/75">
          Mandanos fotos y te respondemos en minutos. Envíos a toda Argentina; en Córdoba capital podés pasar por el taller.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ink w-full max-w-[260px] py-3.5">
            <WaIcon size={16} /> WhatsApp
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full max-w-[260px] py-3.5 text-ink">
            <IgIcon size={16} /> {INSTAGRAM_HANDLE}
          </a>
          <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full max-w-[260px] py-3.5 text-ink">
            <PinIcon size={16} /> Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
