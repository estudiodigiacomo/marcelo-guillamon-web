import React, { useState, useEffect } from 'react';
import { getVehicles, deleteVehicle } from '../../service/vehiclesService.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './CardVehicle.scss';

const CardVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Estado para el vehículo a eliminar
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

  const navigate = useNavigate();
  const { user } = useAuth();

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
    navigate(`/catalogo/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-vehicle/${id}`);
  };

  const handleDeleteClick = (vehicle) => {
    setSelectedVehicle(vehicle); // Guarda el vehículo a eliminar
    setShowModal(true); // Muestra el modal
  };

  const confirmDelete = async () => {
    if (selectedVehicle) {
      try {
        await deleteVehicle(selectedVehicle.id);
        setVehicles(vehicles.filter((vehicle) => vehicle.id !== selectedVehicle.id));
        console.log(`Vehículo con ID ${selectedVehicle.id} eliminado`);
      } catch (error) {
        console.error('Error al eliminar el vehículo:', error);
      } finally {
        setShowModal(false); // Cierra el modal
      }
    }
  };

  return (
    <>
      <h2 className="title-catalog">Catálogo de Vehículos</h2>

      {user?.uid === "TIRcWSsdobf9gpn9qMWf4UH3QMx2" && (
        <button className="vehicles-add-button" onClick={() => navigate('/edit-vehicle')}>
          <FiEdit size={20} /> Agregar Vehículo
        </button>
      )}

      <div className="vehicle-cata">
        {loading ? (
          <div className="spinner"></div>
        ) : vehicles.length === 0 ? (
          <p>No hay vehículos disponibles.</p>
        ) : (
          <div className="vehicle-cards">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                {vehicle.buy && <div className="sold-banner">Vendido</div>}
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

                  {/* Acciones de Editar y Eliminar visibles solo para administradores */}
                  {user?.uid === "TIRcWSsdobf9gpn9qMWf4UH3QMx2" && (
                    <div className="vehicle-card-actions">
                      <FiEdit
                        size={20}
                        className="action-icon edit-icon"
                        onClick={() => handleEdit(vehicle.id)}
                      />
                      <FiTrash2
                        size={20}
                        className="action-icon delete-icon"
                        onClick={() => handleDeleteClick(vehicle)}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirmar Eliminación</h3>
            <p>
              ¿Estás seguro de que deseas eliminar el vehículo{" "}
              <strong>{selectedVehicle.brand} {selectedVehicle.model}</strong>?
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-confirm" onClick={confirmDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardVehicle;
