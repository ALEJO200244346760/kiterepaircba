export default function Banner({ top, bottom, kicker }) {
  return (
    <section
      className="grain grain-light relative overflow-hidden bg-ink px-4 py-24 text-center md:py-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(239,230,216,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239,230,216,.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <p className="reveal font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] text-paper">{top}</p>
      <p className="reveal font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] text-sun" style={{ '--d': '120ms' }}>
        {bottom}
      </p>
      {kicker && <p className="kicker reveal mt-6 text-paper/50" style={{ '--d': '200ms' }}>{kicker}</p>}
    </section>
  )
}
