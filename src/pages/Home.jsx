import useReveal from '../lib/useReveal'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Taller from '../components/Taller'
import Banner from '../components/Banner'
import Diagnostico from '../components/Diagnostico'
import Arreglos from '../components/Arreglos'
import AntesDespues from '../components/AntesDespues'
import Proceso from '../components/Proceso'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const MARCAS = ['Duotone', 'Cabrinha', 'North', 'F-One', 'Core', 'Ozone', 'Naish', 'Slingshot', 'Airush', 'Eleveight']
const LEMAS = ['Costuras reforzadas', 'Tela ripstop', 'Envíos a todo el país', 'Carbono', 'Hecho a mano', 'Bladders y válvulas']

export default function Home() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={MARCAS}
          className="bg-sun text-ink"
          textClass="font-display text-2xl uppercase tracking-wide"
        />
        <Taller />
        <Banner top="Tu kite roto." bottom="Listo para el próximo viento." kicker="Kiterepair · Córdoba, Argentina" />
        <Diagnostico />
        <Marquee
          items={LEMAS}
          reverse
          star
          className="bg-rust text-paper"
          textClass="font-condensed text-base font-bold uppercase tracking-[0.2em]"
        />
        <Arreglos />
        {/* <AntesDespues /> */}
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
