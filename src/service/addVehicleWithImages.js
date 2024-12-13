import { addVehicle, updateVehicle } from '../service/vehiclesService.js';
import { uploadImage } from '../service/imagesService.js';

// Agregar vehículo con imágenes
export const addVehicleWithImages = async (vehicleData, files) => {
  const vehicleId = await addVehicle(vehicleData); // Agregar vehículo primero
  const imageUrls = await Promise.all(
    files.map((file) => uploadImage(file, vehicleId))
  ); // Subir imágenes
  await updateVehicle(vehicleId, { imagenes: imageUrls }); // Actualizar con URLs
};
