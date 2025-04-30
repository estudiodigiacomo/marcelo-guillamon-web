import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import OkmVehicles from './pages/okmVehicles/okmVehicles';
import PostOrEditNews from './components/PostOrEditNews/PostOrEditNews';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';
import Notices from './pages/Notices/Notices';
import { AuthProvider } from './context/AuthContext.jsx';
import DetailNew from './pages/DetailNew/DetailNew.jsx';
import Login from './components/LoginForm/LoginForm.jsx';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import LogoutButton from './components/LogoutButton/LogoutButton.jsx';
import AddVehicleForm from './components/addVehicles/addVehicles.jsx';
import ContactPage from './pages/Contact/Contact.jsx';
import About from './pages/About/About.jsx';
import GalvezPage from './pages/Galvez/Galvez.jsx';
import WhatsAppButton from './components/WhatsAppBtn/WhatsAppBtn.jsx';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <LogoutButton/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/okm" element={<OkmVehicles />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:id" element={<VehicleDetails />} />
          <Route path="/noticias" element={<Notices />} />
          <Route path="/noticias/:id" element={<DetailNew />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/rincon-de-oscar-galvez" element={<GalvezPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route
            path="/new-post"
            element={
              <PrivateRoute>
                <PostOrEditNews/>
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-post/:id"
            element={
              <PrivateRoute>
                <PostOrEditNews/>
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-vehicle"
            element={
              <PrivateRoute>
                <AddVehicleForm/>
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-vehicle/:id"
            element={
              <PrivateRoute>
                <AddVehicleForm/>
              </PrivateRoute>
            }
          />
        </Routes>
        <WhatsAppButton/>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
