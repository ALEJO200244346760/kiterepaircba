import { WHATSAPP } from '../constants'
import { WaIcon } from './Icons'

// ola que se repite: 16 tramos de 180px, se corre -50% para que sea infinita
const wave = (amp) =>
  `M0 60 q90 ${-amp} 180 0 ${Array.from({ length: 15 }, () => 't180 0').join(' ')} V140 H0 Z`

function Waves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22vh] min-h-[130px] overflow-hidden">
      <svg className="wave-drift-slow absolute bottom-[38%] h-[70%] w-[200%]" viewBox="0 0 2880 140" preserveAspectRatio="none" aria-hidden="true">
        <path d={wave(26)} fill="#1d5463" />
      </svg>
      <svg className="wave-drift absolute bottom-[14%] h-[70%] w-[200%]" viewBox="0 0 2880 140" preserveAspectRatio="none" aria-hidden="true">
        <path d={wave(34)} fill="#12384b" />
      </svg>
      <svg className="wave-drift-slow absolute -bottom-2 h-[60%] w-[200%]" viewBox="0 0 2880 140" preserveAspectRatio="none" aria-hidden="true">
        <path d={wave(22)} fill="#efe6d8" />
      </svg>
    </div>
  )
}

function FlyingKite() {
  return (
    <svg viewBox="0 0 200 220" className="float h-full w-full" aria-hidden="true">
      <path d="M100 150 C 90 180, 60 200, 20 220 M100 150 C 110 185, 120 200, 140 220" stroke="#efe6d8" strokeOpacity=".35" strokeWidth="1" fill="none" />
      <path d="M22 96 C 40 20, 160 20, 178 96 L 160 104 C 140 66, 60 66, 40 104 Z" fill="#0b2433" />
      <path d="M22 96 C 40 20, 160 20, 178 96" stroke="#f5a020" strokeWidth="7" fill="none" strokeLinecap="round" />
      {[62, 100, 138].map((x) => (
        <line key={x} x1={x} y1={x === 100 ? 40 : 46} x2={x} y2={x === 100 ? 64 : 72} stroke="#f5a020" strokeWidth="3" strokeLinecap="round" />
      ))}
      <path d="M40 104 L100 150 L160 104" stroke="#efe6d8" strokeOpacity=".5" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="grain grain-light relative flex min-h-[100svh] items-center overflow-hidden text-paper"
      style={{
        background:
          'linear-gradient(180deg, #071923 0%, #0b2433 22%, #12384b 42%, #1d5463 58%, #c9542a 80%, #f5a020 100%)',
      }}
    >
      {/* resplandor del sol */}
      <div
        className="pointer-events-none absolute bottom-[8%] right-[-10%] h-[80vmin] w-[80vmin] rounded-full md:right-[4%]"
        style={{ background: 'radial-gradient(circle, rgba(245,160,32,.55) 0%, rgba(245,160,32,0) 65%)' }}
      />

      {/* gaviotas */}
      <svg className="pointer-events-none absolute left-[12%] top-[20%] hidden w-16 opacity-60 md:block" viewBox="0 0 60 20" aria-hidden="true">
        <path d="M2 10 q8 -8 14 0 q6 -8 14 0 M34 16 q5 -5 9 0 q4 -5 9 0" stroke="#efe6d8" strokeWidth="1.6" fill="none" />
      </svg>

      {/* kite volando */}
      <div className="pointer-events-none absolute right-[5%] top-[7%] w-20 opacity-90 sm:w-28 md:hidden">
        <FlyingKite />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-40 pt-28 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-44">
        <div>
          <p className="kicker reveal mb-5 text-sun">Taller de reparación · Córdoba, Argentina</p>
          <h1 className="reveal font-display text-[clamp(3.6rem,13vw,8.5rem)] leading-[0.86] tracking-tight [text-shadow:0_4px_0_rgba(7,25,35,.35)]" style={{ '--d': '80ms' }}>
            Rompé
            <br />
            tranquilo.
          </h1>
          <p className="reveal mt-4 font-serif text-[clamp(1.9rem,5vw,3rem)] italic leading-none text-sun" style={{ '--d': '160ms' }}>
            Nosotros lo cosemos.
          </p>
          <p className="reveal mt-6 max-w-md text-base leading-relaxed text-paper/80" style={{ '--d': '240ms' }}>
            Kites, wings, foils y tablas. Tela ripstop, bladders, carbono y fibra.
            Trabajo artesanal para que vuelvas al agua cuanto antes.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ '--d': '320ms' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-sun">
              <WaIcon size={16} />
              Mandanos fotos
            </a>
            <a href="#diagnostico" className="btn-ghost text-paper">
              Armá tu ficha
            </a>
          </div>
        </div>

        {/* logo = el sol */}
        <div className="reveal relative mx-auto hidden w-full max-w-[420px] md:block" style={{ '--d': '200ms' }}>
          <svg viewBox="0 0 200 200" className="spin-slow absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]" aria-hidden="true">
            <defs>
              <path id="ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
            </defs>
            <text className="font-condensed" fontSize="9.5" letterSpacing="4.2" fill="#efe6d8" fillOpacity=".75">
              <textPath href="#ring">HECHO A MANO · CÓRDOBA · KITES · WINGS · FOILS · TABLAS ·</textPath>
            </text>
          </svg>
          <img src="/logo.png" alt="Logo Kiterepair" className="relative w-full drop-shadow-[0_20px_40px_rgba(7,25,35,.5)]" />
          <span className="absolute -bottom-2 left-0 -rotate-[8deg] rounded-full bg-rust px-4 py-2 font-condensed text-[11px] font-bold uppercase tracking-[0.2em] text-paper shadow-lg">
            Envíos a todo el país
          </span>
        </div>
      </div>

      <div className="absolute bottom-[24vh] left-0 right-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 md:bottom-[25vh]">
        <span />
        <a href="#taller" className="kicker flex items-center gap-2 text-paper/80 hover:text-paper">
          Bajá
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 0v15M1 10l5 5 5-5" />
          </svg>
        </a>
      </div>

      <Waves />
    </section>
  )
}
