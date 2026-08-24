import { INSTAGRAM, INSTAGRAM_HANDLE } from '../constants'

// Para agregar fotos reales: reemplazá los objetos con { src: '/fotos/foto1.jpg', alt: 'descripción' }
// Poné las fotos en la carpeta public/fotos/
const photos = [
  { src: null, alt: 'Trabajo 1', featured: true },
  { src: null, alt: 'Trabajo 2' },
  { src: null, alt: 'Trabajo 3' },
  { src: null, alt: 'Trabajo 4' },
  { src: null, alt: 'Trabajo 5' },
  { src: null, alt: 'Trabajo 6' },
]

function PhotoPlaceholder({ featured = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 rounded-xl border border-[#243f58] bg-[#1c3347] ${
        featured ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
      }`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2e5070"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="text-[10px] uppercase tracking-widest text-[#3a6080]">Foto</span>
    </div>
  )
}

function PhotoItem({ photo }) {
  if (!photo.src) {
    return <PhotoPlaceholder featured={photo.featured} />
  }

  return (
    <div
      className={`overflow-hidden rounded-xl ${
        photo.featured ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
      }`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="bg-[#142333] px-6 py-16">
      <p className="mb-1 text-center font-condensed text-xs font-bold uppercase tracking-[3px] text-orange">
        Trabajos realizados
      </p>
      <h2 className="mb-8 text-center font-bebas text-4xl tracking-wide text-white">
        Antes y después
      </h2>

      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <PhotoItem key={i} photo={photo} />
        ))}
      </div>

      <p className="mt-5 text-center text-sm text-muted">
        Seguí el día a día en{' '}
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:underline"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </p>
    </section>
  )
}