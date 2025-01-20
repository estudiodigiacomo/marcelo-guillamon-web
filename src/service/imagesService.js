import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig.js';

// Subir imagen a Firebase Storage y devolver la URL pública
export const uploadImage = async (file, vehicleId, type = 'secondary') => {
  const fileName = type === 'cover' ? 'cover.jpg' : `${Date.now()}-${file.name}`;
  const filePath = `vehicles/${vehicleId}/${fileName}`;
  const storageRef = ref(storage, filePath);

  // Subir archivo
  await uploadBytes(storageRef, file);

  // Obtener y devolver la URL pública
  return await getDownloadURL(storageRef);
};
