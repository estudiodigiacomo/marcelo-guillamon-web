import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addVehicleWithImages, updateVehicleWithImages } from '../../service/addVehicleWithImages.js';
import { getVehicleById, updateVehicle } from '../../service/vehiclesService.js';
import './addVehicles.scss';
import { FiUpload } from 'react-icons/fi';

const AddVehicleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicleData, setVehicleData] = useState({
    model: '',
    version: '',
    brand: '',
    kilometers: '',
    year: '',
    price: '',
    consignament: false,
    engine: '',
    fuel: '',
    traction: '',
    transmission: '',
    currency: '',
    color: '',
    type: '',
    buy: false,
    description: '',
    barter: '',
  });

  const [coverImage, setCoverImage] = useState(null); // Imagen de portada
  const [secondaryImages, setSecondaryImages] = useState([]); // Imágenes secundarias
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchVehicleData = async () => {
      if (id) {
        try {
          const existingVehicle = await getVehicleById(id);
          setVehicleData(existingVehicle);
        } catch (error) {
          console.error('Error al cargar el vehículo:', error);
        }
      }
      setLoading(false);
    };
    fetchVehicleData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0]; // Solo permite una imagen para la portada
    setCoverImage(file);
  };

  const handleSecondaryImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setSecondaryImages((prevFiles) => {
      const newFiles = selectedFiles.filter(
        (file) => !prevFiles.some((prevFile) => prevFile.name === file.name)
      );
      return [...prevFiles, ...newFiles];
    });
  };

  const handleSoldClick = () => {
    setVehicleData((prevData) => ({
      ...prevData,
      buy: !prevData.buy,
    }));
    setModalMessage('El vehículo ha sido marcado como vendido.');
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (id) {
        // Actualizar vehículo existente
        await updateVehicleWithImages(id, vehicleData, coverImage, secondaryImages);
        setModalMessage('Vehículo actualizado exitosamente.');
      } else {
        // Crear nuevo vehículo
        await addVehicleWithImages(vehicleData, coverImage, secondaryImages);
        setModalMessage('Vehículo agregado exitosamente.');
      }
  
      setShowModal(true);
    } catch (error) {
      console.error('Error al guardar el vehículo:', error);
      setModalMessage('Error al guardar el vehículo. Intenta nuevamente.');
      setShowModal(true);
    }
  };
  
  if (loading) return <div className="spinner"></div>;

  return (
    <>
            <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-grid">
          {/* Sección izquierda con inputs */}
          
          <div className="left-section">
            <div className="row">
              {/* Input con datalist para Marca */}
              <input
                list="brand-options"
                name="brand"
                placeholder="Marca"
                value={vehicleData.brand}
                onChange={handleChange}
              />
              <datalist id="brand-options">
                <option value="Ford" />
                <option value="Toyota" />
                <option value="Chevrolet" />
                <option value="Nissan" />
                <option value="Volkswagen" />
                <option value="Renault" />
                <option value="Fiat" />
                <option value="Peugeot" />
                <option value="Honda" />
              </datalist>
              
              <input
                name="model"
                placeholder="Modelo"
                value={vehicleData.model}
                onChange={handleChange}
              />
              <select name="type" value={vehicleData.type} onChange={handleChange}>
                <option value="">Tipo</option>
                <option value="Sedán">Sedán</option>
                <option value="SUV">SUV</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Rural">Rural</option>
                <option value="Utilitario">Utilitario</option>
              </select>
            </div>
            <div className="row">
              <input name="version" placeholder="Versión" value={vehicleData.version} onChange={handleChange} />
            </div>
            <div className="row">
              <input name="year" placeholder="Año" type="number" value={vehicleData.year} onChange={handleChange} />
              <select name="traction" value={vehicleData.traction} onChange={handleChange}>
                <option value="">Tracción</option>
                <option value="4x2">4x2</option>
                <option value="4x4">4x4</option>
                <option value="Integral">Integral</option>
              </select>
            </div>
            <div className="row">
              <input name="engine" placeholder="Cilindrada" value={vehicleData.engine} onChange={handleChange} />
              <input name="kilometers" placeholder="Kilómetros" type="number" value={vehicleData.kilometers} onChange={handleChange} />
            </div>
            <div className="row">
              <select name="fuel" value={vehicleData.fuel} onChange={handleChange}>
                <option value="">Combustible</option>
                <option value="Nafta">Nafta</option>
                <option value="GNC">GNC</option>
                <option value="Diesel">Diésel</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>
            <div className="row">
              <input name="color" placeholder="Color" value={vehicleData.color} onChange={handleChange} />
              <select name="transmission" value={vehicleData.transmission} onChange={handleChange}>
                <option value="">Transmisión</option>
                <option value="Manual">Manual</option>
                <option value="Automática">Automática</option>
              </select>
            </div>
            <div className="row">
              <select name="barter" value={vehicleData.barter} onChange={handleChange}>
                <option value="No Permuta">No Permuta</option>
                <option value="Permuta">Permuta</option>
                <option value="Consultar">Consultar</option>
              </select>
            </div>
            <div className="row">
              <select name="currency" value={vehicleData.currency} onChange={handleChange}>
                <option value="">Moneda</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>
              <input name="price" placeholder="Precio" type="number" value={vehicleData.price} onChange={handleChange} />
            </div>
            <div className="row">
              <label>
                <input type="checkbox" name="consignament" checked={vehicleData.consignament} onChange={handleChange} />
                Consignación
              </label>
            </div>
            <button type="button" className="btn-sold" onClick={handleSoldClick}>
              {vehicleData.buy ? 'Desmarcar Vendido' : 'Marcar como Vendido'}
            </button>
          </div>

          {/* Sección de imágenes */}
          <div className="right-section">
            {/* Imagen de portada */}
            <div className="image-upload hoverable">
              <label htmlFor="coverImageInput">
                <FiUpload size={40} />
                <p>Subir imagen de portada</p>
              </label>
              <input
                id="coverImageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleCoverImageChange}
              />
              {coverImage && (
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Portada"
                  className="preview-image"
                />
              )}
            </div>

            {/* Imágenes secundarias */}
            <div className="image-upload hoverable">
              <label htmlFor="secondaryImagesInput">
                <FiUpload size={40} />
                <p>Subir imágenes secundarias</p>
              </label>
              <input
                id="secondaryImagesInput"
                type="file"
                accept="image/*"
                multiple
                style={{ display: 'none' }}
                onChange={handleSecondaryImagesChange}
              />
              <div className="image-preview">
                {secondaryImages.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Secundaria-${index}`}
                    className="preview-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-submit">
          {id ? 'Guardar Cambios' : 'Agregar Vehículo'}
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddVehicleForm;
