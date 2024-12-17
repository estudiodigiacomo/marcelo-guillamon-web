import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Logo */}
        <img src='https://storage.googleapis.com/guillamon-img/MG%20Marcelo%20Guillam%C3%B3n.png' alt="Ford Logo" className="footer__logo" />

        {/* Información */}
        <div className="footer__info">
          <p>
            <FaMapMarkerAlt /> 
            <a
                href="https://maps.app.goo.gl/eYqgCCyxw1FMws2j8"
                className="data-location"
                target="_blank"
                rel="noopener noreferrer">
                Julio Argentino Roca 145, B7500 Tres Arroyos,
            Provincia de Buenos Aires
            </a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:marceloguillamon@gmail.com">
            marceloguillamon@gmail.com
            </a>
          </p>
          <p>
            <FaPhone /> 02983 43-1644
          </p>
          <p>
            <FaWhatsapp />
            <a
            href="https://wa.me/542983646897"
            className="number-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            + 54 2983 646897
        </a>
          </p>
          <p>
            <FaWhatsapp />
            <a
            href="https://wa.me/542983610977"
            className="number-link"
            target="_blank"
            rel="noopener noreferrer">
            + 54 2983 610977
        </a>
          </p>
        </div>

        {/* Créditos */}
        <div className="footer__credits">
          <p>Copyright 2024 © Marcelo Guillamón Automotores</p>
          <p>Realizado por Di Giacomo Estudio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
