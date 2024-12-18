import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import "./Contact.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contáctanos</h2>
      <div className="contact-container">
        {/* Sección de Información de Contacto */}
        <div className="contact-info">
          <div className="contact-item">
            <MdPerson className="icon whatsapp" />
            <div>
              <p className="contact-name">Marcelo</p>
              <p className="contact-detail">
                <a
                href="https://wa.me/542983646897"
                className="number-link"
                target="_blank"
                rel="noopener noreferrer">+ 54 2983 646897</a></p>
              <p className="contact-detail">{" "}
              <a href="mailto:marceloguillamon@gmail.com">
              marceloguillamon@gmail.com
              </a></p>
            </div>
          </div>
          <div className="contact-item">
            <MdPerson className="icon whatsapp" />
            <div>
              <p className="contact-name">Stefan</p>
              <p>
                <a
                href="https://wa.me/542983610977"
                className="number-link"
                target="_blank"
                rel="noopener noreferrer">+ 54 2983 610977</a></p>
            <p className="contact-detail">{" "}
              <a href="mailto:marceloguillamon@gmail.com">
              guillamon.autos@gmail.com
              </a></p>
            </div>
          </div>
          <div className="contact-item">
            <MdPerson className="icon whatsapp" />
            <div>
              <p className="contact-name">Patricio</p>
              <p>
                <a
                href="https://wa.me/542983381339"
                className="number-link"
                target="_blank"
                rel="noopener noreferrer">+ 54 2983 381339</a></p>
            <p className="contact-detail">{" "}
              <a href="mailto:marceloguillamon@gmail.com">
              guillamon.usados@gmail.com
              </a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <p className="contact-detail">02983 43-1644</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <a
                href="https://maps.app.goo.gl/eYqgCCyxw1FMws2j8"
                className="data-location"
                target="_blank"
                rel="noopener noreferrer">
                Julio Argentino Roca 145, B7500 Tres Arroyos,
            Provincia de Buenos Aires
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="contact-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.683285602681!2d-60.27193762497644!3d-38.379447566577916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926dbef7dc814b%3A0x5b4ca36b95723a8a!2sMarcelo%20Guillam%C3%B3n%20Automotores!5e0!3m2!1ses!2sar!4v1734458248264!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
