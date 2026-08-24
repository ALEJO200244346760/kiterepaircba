import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Páginas futuras (camperas, pilusos, tienda, etc.) se agregan acá
// import Tienda from './pages/Tienda'
// import Camperas from './pages/Camperas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tienda" element={<Tienda />} /> */}
        {/* <Route path="/camperas" element={<Camperas />} /> */}
      </Routes>
    </BrowserRouter>
  )
}