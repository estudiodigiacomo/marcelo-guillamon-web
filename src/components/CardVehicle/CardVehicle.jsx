import React, { useState, useEffect } from 'react';
import { getVehicles } from '../../service/vehiclesService.js';
import { useNavigate } from 'react-router-dom';
import './CardVehicle.scss';

const CardVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehiclesData = await getVehicles();
        setVehicles(vehiclesData);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const handleDetail = (id) => {
    navigate(`/catalogo/${id}`); // Redirige a la ruta de detalle
  };

  return (
    <>
      <h2 className="title-catalog">Catálogo de Vehículos</h2>
      <div className="vehicle-cata">
        {loading ? (
          <div className="spinner"></div>
        ) : vehicles.length === 0 ? (
          <p>No hay vehículos disponibles.</p>
        ) : (
          <div className="vehicle-cards">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                <img
                  src={
                    vehicle.imagenes && vehicle.imagenes[0]
                      ? vehicle.imagenes[0]
                      : 'placeholder.jpg'
                  }
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="vehicle-image"
                />
                <div className="vehicle-details">
                  <h3>
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <p className="vehicle-version">{vehicle.version}</p>
                  <span className="vehicle-type">{vehicle.type}</span>
                  <hr className="divider" />
                  <div className="vehicle-specs">
                    <span>{vehicle.year}</span>
                    <span>{vehicle.engine}</span>
                    <span>{vehicle.traction}</span>
                    <span>{vehicle.kilometers.toLocaleString()} Km</span>
                  </div>
                  <p className="vehicle-price">
                    {vehicle.currency} {vehicle.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleDetail(vehicle.id)}
                    className="detail-button"
                  >
                    Ver Ficha
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardVehicle;
