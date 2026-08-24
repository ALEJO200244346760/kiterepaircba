import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Proceso from '../components/Proceso'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Proceso />
      <Contacto />
      <Footer />
    </>
  )
}