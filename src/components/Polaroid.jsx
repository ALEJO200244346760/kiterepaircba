// Foto con marco de polaroid. Si no hay foto (src null) dibuja una textura de taller.
// Para usar fotos reales: poné los archivos en public/fotos/ y pasá src="/fotos/archivo.jpg"

function Ripstop() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="rs" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#f5a020" />
          <path d="M0 .5H14M.5 0V14" stroke="#d9860a" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#rs)" />
      <rect x="55" y="60" width="95" height="75" rx="8" fill="#efe6d8" transform="rotate(-6 100 100)" />
      <rect x="63" y="68" width="79" height="59" rx="5" fill="none" stroke="#0b2433" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-6 100 100)" />
    </svg>
  )
}

function Carbon() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="cb" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#121a1f" />
          <rect width="8" height="8" fill="#2a3640" />
          <rect x="8" y="8" width="8" height="8" fill="#2a3640" />
          <path d="M0 4h8M8 12h8" stroke="#3b4a56" strokeWidth="1" />
        </pattern>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".18" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#cb)" />
      <rect width="200" height="200" fill="url(#sheen)" />
      <path d="M30 150 L170 40" stroke="#f5a020" strokeWidth="4" strokeLinecap="round" opacity=".9" />
    </svg>
  )
}

function Needle() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="200" fill="#12384b" />
      <path d="M-10 150 C 40 110, 80 170, 120 120 S 180 80, 210 100" stroke="#f5a020" strokeWidth="2.5" strokeDasharray="10 7" fill="none" />
      <g transform="rotate(35 100 90)">
        <rect x="96" y="20" width="8" height="130" rx="4" fill="#efe6d8" />
        <path d="M96 140 L100 170 L104 140 Z" fill="#efe6d8" />
        <rect x="98.5" y="30" width="3" height="18" rx="1.5" fill="#12384b" />
      </g>
    </svg>
  )
}

const fallbacks = { ripstop: Ripstop, carbon: Carbon, needle: Needle }

export default function Polaroid({ src, alt = '', caption, texture = 'ripstop', className = '', style }) {
  const Fallback = fallbacks[texture] || Ripstop
  return (
    <figure
      className={`bg-[#f7f1e6] p-3 pb-2 shadow-[0_18px_40px_-12px_rgba(11,36,51,.45)] ${className}`}
      style={style}
    >
      <div className="aspect-[4/5] overflow-hidden bg-ink">
        {src ? <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" /> : <Fallback />}
      </div>
      {caption && (
        <figcaption className="kicker py-2.5 text-center text-[10px] text-ink/60">{caption}</figcaption>
      )}
    </figure>
  )
}
