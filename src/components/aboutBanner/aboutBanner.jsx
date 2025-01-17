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
            <p className='text-content'>Marcelo Guillamón Automotores (MGA) es un apéndice, de una gran empresa, Vicente Guillamón S.A. (VGSA) concesionaria Ford por 50 años en Tres Arroyos. También representamos a John Deere y Volkswagen.</p>
            <p className='text-content'>Soy Marcelo Guillamón, nieto del fundador y titular de MGA.</p>
            <p className='text-content'>Me formé laboralmente en VGSA, bajo sus principios y valores.</p>
            <p className='text-content'>En 2013 comenzó la etapa de MGA.</p>
            <p className='text-content'>Son los mismos principios y valores quienes guían nuestra empresa y a las personas que la formamos.</p>
            <p className='text-content'>El Propósito y Compromiso es generar Bienestar para todos los involucrados en nuestra actividad: Directivos, Personal, Clientes y Proveedores.</p>
            <p className='text-content'><b>Generar, mantener y recuperar clientes</b>, en caso de pérdida, <b>es nuestro norte.</b></p>
            <p className='text-content'>Generar la Confianza de cumplir con lo prometido es el instrumento para lograrlo.</p>
            <p className='text-content'>Una buena cartera de clientes nos asegura crecer y ofrecerles más valor.</p>
            <p className='text-content'>Contar con clientes que nos valoren, contribuye a nuestro propósito de bienestar.</p>
            <p className='text-content'>Eleva nuestra autoestima si nos sentimos miembros de una organización Prestigiosa.</p>
            <p className='text-content'>Igual que mis antecesores, yo también elegí:</p>
        </div>
        <h2 className='lema-text'>"Una Vida con Ford"</h2>
        <div className="first-text">
            <p className='text-content'>Atentamente,</p>
            <p className='text-content'>Marcelo Gullamón</p>
        </div>
        <div class="image-gallery">
            <img src="https://storage.googleapis.com/guillamon-img/IMG_20241024_110518243_HDR.jpg" alt="Imagen 1" className="gallery-image" />
            <img src="https://storage.googleapis.com/guillamon-img/IMG_20241024_110948076_HDR.jpg" alt="Imagen 2" className="gallery-image" />
            <img src="https://storage.googleapis.com/guillamon-img/IMG_20241220_094544045_HDR.jpg" alt="Imagen 3" className="gallery-image" />
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