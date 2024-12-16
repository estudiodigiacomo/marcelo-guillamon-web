import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import OkmVehicles from './pages/okmVehicles/okmVehicles';
import PostOrEditNews from './components/PostOrEditNews/PostOrEditNews';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/okm" element={<OkmVehicles />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:id" element={<VehicleDetails />} />
          <Route path="/postnews" element={<PostOrEditNews />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
