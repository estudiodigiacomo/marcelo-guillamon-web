import React, { useState } from 'react';
import { addVehicleWithImages } from '../../service/addVehicleWithImages.js';
import './addVehicles.scss'

const AddVehicleForm = () => {
    const [vehicleData, setVehicleData] = useState({
      model: '',
      version: '',
      brand: '',
      kilometers: 0,
      year: 0,
      price: 0,
      consignament: false,
      engine: '',
      fuel: '',
      traction: '',
      currency: '',
      color: '',
      type: '',
      buy: false,
    });
    const [files, setFiles] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addVehicleWithImages(vehicleData, files);
        alert('Vehículo agregado exitosamente');
      } catch (error) {
        console.error(error);
        alert('Hubo un error al agregar el vehículo');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Marca"
          value={vehicleData.brand}
          onChange={(e) => setVehicleData({ ...vehicleData, brand: e.target.value })}
        />
        <input
          type="text"
          placeholder="Modelo"
          value={vehicleData.model}
          onChange={(e) => setVehicleData({ ...vehicleData, model: e.target.value })}
        />
        <input
          type="text"
          placeholder="Versión"
          value={vehicleData.version}
          onChange={(e) => setVehicleData({ ...vehicleData, version: e.target.value })}
        />


        <p>Kilometros</p>
        <input
          type="number"
          placeholder="Kilómetros"
          value={vehicleData.kilometers}
          onChange={(e) => setVehicleData({ ...vehicleData, kilometers: parseInt(e.target.value) })}
        />
        <p>Año</p>
        <input
          type="number"
          placeholder="Año"
          value={vehicleData.year}
          onChange={(e) => setVehicleData({ ...vehicleData, year: parseInt(e.target.value) })}
        />
        <p>Precio</p>
        <input
          type="number"
          placeholder="Precio"
          value={vehicleData.price}
          onChange={(e) => setVehicleData({ ...vehicleData, price: parseFloat(e.target.value) })}
        />
        <select
          value={vehicleData.currency}
          onChange={(e) => setVehicleData({ ...vehicleData, currency: e.target.value })}
        >
          <option value="">Seleccionar Moneda</option>
          <option value="USD">USD</option>
          <option value="ARS">ARS</option>
        </select>
        <input
          type="text"
          placeholder="Motor"
          value={vehicleData.engine}
          onChange={(e) => setVehicleData({ ...vehicleData, engine: e.target.value })}
        />
        <select
          value={vehicleData.fuel}
          onChange={(e) => setVehicleData({ ...vehicleData, fuel: e.target.value })}
        >
          <option value="">Seleccionar Combustible</option>
          <option value="Nafta">Nafta</option>
          <option value="GNC">GNC</option>
          <option value="Diésel">Diésel</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Híbrido">Híbrido</option>
        </select>
        <select
          value={vehicleData.tracción}
          onChange={(e) => setVehicleData({ ...vehicleData, traction: e.target.value })}
        >
          <option value="">Seleccionar Tracción</option>
          <option value="Integral">Integral</option>
          <option value="4x2">4x2</option>
          <option value="4x4">4x4</option>
        </select>
        <input
          type="text"
          placeholder="Color"
          value={vehicleData.color}
          onChange={(e) => setVehicleData({ ...vehicleData, color: e.target.value })}
        />
        <select
          value={vehicleData.type}
          onChange={(e) => setVehicleData({ ...vehicleData, type: e.target.value })}
        >
          <option value="">Seleccionar Tipo</option>
          <option value="Sedán 4 Puertas">Sedán 4 Puertas</option>
          <option value="Sedán 5 Puertas">Sedán 5 Puertas</option>
          <option value="SUV">SUV</option>
          <option value="Pick Up">Pick Up</option>
          <option value="Rural">Rural</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={vehicleData.consignament}
            onChange={(e) => setVehicleData({ ...vehicleData, consignament: e.target.checked })}
          />
          Consignación
        </label>
        <label>
          <input
            type="checkbox"
            checked={vehicleData.buy}
            onChange={(e) => setVehicleData({ ...vehicleData, buy: e.target.checked })}
          />
          Vendido
        </label>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
        />
        <button type="submit">Agregar Vehículo</button>
      </form>
    );
  };
  
  export default AddVehicleForm;
