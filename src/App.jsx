import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import OkmVehicles from './pages/okmVehicles/okmVehicles';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/okm" element={<OkmVehicles />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
