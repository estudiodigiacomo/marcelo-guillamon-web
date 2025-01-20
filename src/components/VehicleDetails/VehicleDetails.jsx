import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVehicleById } from "../../service/vehiclesService.js";
import { FaWhatsapp } from "react-icons/fa";
import "./VehicleDetails.scss";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const data = await getVehicleById(id);
        setVehicle(data);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [id]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (!vehicle) {
    return <p>No se encontró el vehículo.</p>;
  }

  // Combinar imagen de portada con imágenes secundarias
  const allImages = vehicle.coverImage
    ? [vehicle.coverImage, ...(vehicle.secondaryImages || [])]
    : vehicle.secondaryImages || [];

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <div className="vehicle-details-detall">
        <div className="vehicle-content-detail">
          <div className="header">
            <h1>
              {vehicle.brand} {vehicle.model}
            </h1>
            <p className="version">{vehicle.version}</p>
          </div>

          <div className="specifications">
            <div>
              <p>
                <strong>Año:</strong> {vehicle.year}
              </p>
              <p>
                <strong>Motor:</strong> {vehicle.engine}L
              </p>
              <p>
                <strong>Combustible:</strong> {vehicle.fuel}
              </p>
              <p>
                <strong>Color:</strong> {vehicle.color}
              </p>
              <p>
                <strong>Permuta:</strong> {vehicle.barter}
              </p>
            </div>
            <div>
              <p>
                <strong>Tracción:</strong> {vehicle.traction}
              </p>
              <p>
                <strong>Kilómetros:</strong> {vehicle.kilometers} Km
              </p>
              <p>
                <strong>Transmisión:</strong> {vehicle.transmission}
              </p>
              <p>
                <strong>Marca:</strong> {vehicle.brand}
              </p>
            </div>
          </div>

          <div className="price-section">
            <div className="price-lines">
              {vehicle.consignament ? (
                <>
                  <p className="price">Consignación</p>
                  <p className="amount">ARS {vehicle.price.toLocaleString()}</p>
                  <p className="commission">+ 3% de Comisión</p>
                </>
              ) : (
                <p className="amount">ARS {vehicle.price.toLocaleString()}</p>
              )}
            </div>
          </div>

          <a
            href="https://wa.me/542983646897"
            target="_blank"
            rel="noopener noreferrer"
            className="consult-button"
          >
            <FaWhatsapp className="whatsapp-icon" /> CONSULTAR
          </a>
        </div>

        <div className="vehicle-image">
          <div
            id="vehicleCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {allImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={img}
                    className="d-block w-100"
                    alt={`Imagen ${index + 1} de ${vehicle.brand}`}
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#vehicleCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#vehicleCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
