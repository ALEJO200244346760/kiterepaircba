import Polaroid from './Polaroid'

export default function Taller() {
  return (
    <section id="taller" className="grain relative overflow-hidden bg-paper px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="kicker reveal mb-5 text-ink/60">Día sin viento · Córdoba, Argentina</p>
          <h2 className="reveal font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.92] text-ink">
            No tiramos
            <br />
            nada.
          </h2>
          <p className="reveal mt-2 font-serif text-[clamp(2.4rem,6vw,4.2rem)] italic leading-[0.95] text-rust" style={{ '--d': '100ms' }}>
            Lo remendamos.
          </p>

          <div className="reveal mt-8 max-w-lg space-y-5 text-[15px] leading-relaxed text-ink/80" style={{ '--d': '180ms' }}>
            <p>
              <span className="float-left mr-2 mt-1 font-display text-6xl leading-[0.8] text-rust">K</span>
              iterepair nace en Córdoba con una idea fija: que un tajo en la tela no te deje en la orilla.
              Reparamos kites, wings, foils y tablas de cualquier marca, con materiales profesionales
              (ripstop, dacron, carbono, resinas) y a mano, puntada por puntada.
            </p>
            <p>
              Nada de parches con cinta ni arreglos que duran una sesión. Cada reparación se hace para
              aguantar el próximo borde, el próximo salto y el próximo revolcón.
            </p>
          </div>

          <div className="seam reveal mt-10 max-w-lg text-ink/25" />
          <div className="reveal mt-5 flex items-center gap-3">
            <span className="font-display text-2xl text-ink">AR</span>
            <span className="kicker text-[10px] text-ink/60">Envíos a todo el país</span>
          </div>
        </div>

        <div className="relative mx-auto h-[460px] w-full max-w-[420px] sm:h-[520px]">
          <Polaroid
            texture="ripstop"
            caption="Parche en canopy"
            className="reveal absolute left-0 top-0 w-[62%] -rotate-6"
          />
          <Polaroid
            texture="carbon"
            caption="Carbono, capa por capa"
            className="reveal absolute right-0 top-[18%] w-[56%] rotate-[5deg]"
            style={{ '--d': '120ms' }}
          />
          <Polaroid
            texture="needle"
            caption="Costura reforzada"
            className="reveal absolute bottom-0 left-[14%] w-[52%] rotate-2"
            style={{ '--d': '240ms' }}
          />
          {/* sello */}
          <div className="absolute right-2 top-0 z-10 grid h-24 w-24 rotate-12 place-items-center rounded-full border-2 border-rust text-center text-rust">
            <span className="font-condensed text-[10px] font-bold uppercase leading-tight tracking-[0.2em]">
              Hecho
              <br />
              <span className="font-display text-lg normal-case tracking-normal">a mano</span>
              <br />
              en CBA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
