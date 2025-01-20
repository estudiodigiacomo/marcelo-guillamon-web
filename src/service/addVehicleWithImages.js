import { addVehicle, updateVehicle } from '../service/vehiclesService.js';
import { uploadImage } from '../service/imagesService.js';

// Agregar vehículo con portada y secundarias
export const addVehicleWithImages = async (vehicleData, coverImage, secondaryImages) => {
  try {
    // Crear vehículo en Firestore
    const vehicleId = await addVehicle(vehicleData);

    // Subir la imagen de portada
    let coverImageUrl = null;
    if (coverImage) {
      coverImageUrl = await uploadImage(coverImage, vehicleId, 'cover');
    }

    // Subir las imágenes secundarias
    const secondaryImageUrls = await Promise.all(
      secondaryImages.map((file) => uploadImage(file, vehicleId, 'secondary'))
    );

    // Actualizar el vehículo con las URLs de las imágenes
    await updateVehicle(vehicleId, {
      coverImage: coverImageUrl,
      secondaryImages: secondaryImageUrls,
    });

    console.log('Vehículo agregado con éxito, incluyendo imágenes.');
  } catch (error) {
    console.error('Error al agregar el vehículo con imágenes:', error);
    throw error;
  }
};

// Actualizar vehículo con portada y secundarias
export const updateVehicleWithImages = async (vehicleId, vehicleData, coverImage, secondaryImages) => {
  try {
    // Subir nueva imagen de portada (si se proporciona)
    let coverImageUrl = vehicleData.coverImage || null;
    if (coverImage) {
      coverImageUrl = await uploadImage(coverImage, vehicleId, 'cover');
    }

    // Subir nuevas imágenes secundarias (si se proporcionan)
    let secondaryImageUrls = vehicleData.secondaryImages || [];
    if (secondaryImages && secondaryImages.length > 0) {
      secondaryImageUrls = await Promise.all(
        secondaryImages.map((file) => uploadImage(file, vehicleId, 'secondary'))
      );
    }

    // Actualizar el vehículo en Firestore
    await updateVehicle(vehicleId, {
      ...vehicleData,
      coverImage: coverImageUrl,
      secondaryImages: secondaryImageUrls,
    });

    console.log(`Vehículo con ID ${vehicleId} actualizado con éxito.`);
  } catch (error) {
    console.error('Error al actualizar el vehículo con imágenes:', error);
    throw error;
  }
};