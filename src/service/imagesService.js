import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig.js';

// Subir imagen y obtener URL
export const uploadImage = async (file, vehicleId) => {
  const storageRef = ref(storage, `vehicles/${vehicleId}/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
