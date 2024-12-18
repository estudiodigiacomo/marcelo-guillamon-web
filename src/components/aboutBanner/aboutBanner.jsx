import React from 'react'
import { FaShieldAlt, FaAward, FaHandshake, FaCar } from "react-icons/fa";
import './aboutBanner.scss'

const aboutBanner = () => {
  return (
    <>
        <div className="content-header-about">
            <h2 className='title-about'>Marcelo Guillamón Automotores</h2>
            <img className='banner-about' src="https://storage.googleapis.com/guillamon-img/frente-comercio.jpg" alt="banner-frente-comercio"/>
        </div>
        <div className="first-text">
            <p className='subtile-about'>¿Quienes Somos?</p>
            <p className='text-content'>En Marcelo Guillamón Automotores, somos más que una concesionaria de autos en Tres Arroyos; somos un equipo que comparte con nuestros clientes la pasión y la confianza que representa Ford. Nos dedicamos a ofrecer una experiencia completa y personalizada en la adquisición de vehículos, brindando asesoramiento profesional y una atención cálida y cercana. Nuestra meta es que cada cliente se sienta parte de nuestra historia y encuentre en nosotros el respaldo que necesita para elegir el vehículo ideal.</p>
        </div>
        <div className="column-text">
            <div className="first-text">
                <p className='subtile-about'>Nuestra Historia</p>
                <p className='text-content'>Con décadas de trayectoria en la industria automotriz, Marcelo Guillamón Automotores ha recorrido un camino lleno de compromiso y dedicación hacia la comunidad. En cada uno de nuestros años de servicio, hemos llevado adelante el legado de excelencia y calidad que caracteriza a Ford, creciendo y evolucionando para satisfacer las necesidades de nuestros clientes. Nuestra historia está marcada por la confianza y el respeto mutuo, siendo siempre un punto de referencia en Tres Arroyos y la región.</p>
            </div>
            <div className="first-text">
                <p className='subtile-about'>Nuestra Misión</p>
                <p className='text-content'>Nos impulsa el compromiso de acercar a cada cliente un vehículo que represente seguridad, innovación y estilo. Nuestra misión es ofrecer una atención personalizada que no solo se centre en la venta, sino en crear una relación duradera basada en la satisfacción y la confianza. Queremos ser parte de cada historia, de cada viaje, y de cada aventura que nuestros clientes emprenden, acompañándolos en cada kilómetro recorrido.</p>
            </div>
        </div>
        <div class="image-gallery">
            <img src="https://storage.googleapis.com/guillamon-img/IMG_20241024_110518243_HDR.jpg" alt="Imagen 1" class="gallery-image" />
            <img src="https://storage.googleapis.com/guillamon-img/IMG_20241024_110948076_HDR.jpg" alt="Imagen 2" class="gallery-image" />
            <img src="https://storage.googleapis.com/guillamon-img/entrega.jpg" alt="Imagen 3" class="gallery-image" />
        </div>
        <div className="about-cards-container">
            <div className="about-card">
                <div className="about-icon-box">
                <FaShieldAlt className="about-icon" />
                </div>
                <div className="about-card-content">
                <h3 className="about-card-title">Confianza</h3>
                <p className="about-card-text">
                    Creemos en relaciones honestas y decisiones respaldadas por calidad.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon-box">
                <FaAward className="about-icon" />
                </div>
                <div className="about-card-content">
                <h3 className="about-card-title">Excelencia</h3>
                <p className="about-card-text">
                    Reflejamos los altos estándares de Ford en cada detalle.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon-box">
                <FaCar className="about-icon" />
                </div>
                <div className="about-card-content">
                <h3 className="about-card-title">Pasión por Ford</h3>
                <p className="about-card-text">
                    Nuestro lema: "Una vida con Ford", expresa nuestra dedicación y entusiasmo.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon-box">
                <FaHandshake className="about-icon" />
                </div>
                <div className="about-card-content">
                <h3 className="about-card-title">Cercanía y Compromiso</h3>
                <p className="about-card-text">
                    Valoramos cada interacción y nos esforzamos por ofrecer siempre lo mejor.
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default aboutBanner