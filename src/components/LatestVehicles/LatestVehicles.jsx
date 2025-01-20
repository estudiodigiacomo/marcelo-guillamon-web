import React, { useState, useEffect } from 'react';
import { getLatestVehicles } from '../../service/vehiclesService.js';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './LatestVehicles.scss';

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el spinner
  const navigate = useNavigate(); // Hook de navegación

  useEffect(() => {
    const fetchLatestVehicles = async () => {
      try {
        const latestVehicles = await getLatestVehicles();

        // Filtrar los vehículos que no estén marcados como "buy: true"
        const availableVehicles = latestVehicles.filter((vehicle) => !vehicle.buy);

        setVehicles(availableVehicles);
      } catch (error) {
        console.error('Error fetching latest vehicles:', error);
      } finally {
        setLoading(false); // Detenemos el spinner
      }
    };
    fetchLatestVehicles();
  }, []);

  const handleDetail = (id) => {
    navigate(`/catalogo/${id}`); // Navega a la ruta de detalles
  };

  return (
    <>
      <h2 className="title-latest">Vehículos Destacados</h2>
      <div className="latest-vehicles">
        {loading ? (
          <div className="spinner"></div>
        ) : vehicles.length === 0 ? (
          <p>No hay vehículos disponibles.</p>
        ) : (
          <div className="vehicle-cards">
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className="vehicle-card"
                onClick={() => handleDetail(vehicle.id)} // Clic en la tarjeta completa
                style={{ cursor: 'pointer' }} // Cambia el cursor a puntero
              >
                <img
                  src={
                    vehicle.coverImage // Mostrar la imagen de portada
                      ? vehicle.coverImage
                      : 'placeholder.jpg' // Imagen predeterminada si no hay portada
                  }
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="vehicle-image"
                />
                <div className="vehicle-details">
                  <h3>{vehicle.brand} {vehicle.model}</h3>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDetail(vehicle.id);
                    }} 
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

export default LatestVehicles;
