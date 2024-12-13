import React, { useState, useEffect } from 'react';
import { getLatestVehicles } from '../../service/vehiclesService.js';
import './LatestVehicles.scss';

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchLatestVehicles = async () => {
      try {
        const latestVehicles = await getLatestVehicles();
        setVehicles(latestVehicles);
      } catch (error) {
        console.error('Error fetching latest vehicles:', error);
      }
    };
    fetchLatestVehicles();
  }, []);

  return (
    <>
        <h2 className='title-latest'>Vehículos Destacados</h2>
        <div className="latest-vehicles">
        {vehicles.length === 0 ? (
            <p>No vehicles available.</p>
        ) : (
            <div className="vehicle-cards">
            {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card">
                <img
                    src={vehicle.imagenes && vehicle.imagenes[0] ? vehicle.imagenes[0] : 'placeholder.jpg'}
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
                    <button onClick={() => handleDetail(vehicle.id)} className="detail-button">
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

// Placeholder function for button click
const handleDetail = (id) => {
  console.log(`Go to details of vehicle ID: ${id}`);
};

export default LatestVehicles;
