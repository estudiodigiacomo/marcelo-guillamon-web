import { db } from '../config/firebaseConfig.js';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy, limit  } from 'firebase/firestore';

const vehiclesCollection = collection(db, 'vehicles');

// Agregar un vehículo
export const addVehicle = async (vehicleData) => {
  const vehicleWithTimestamp = {
    ...vehicleData,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(vehiclesCollection, vehicleWithTimestamp);
  return docRef.id;
};

// Obtener todos los vehículos
export const getVehicles = async () => {
  try {
    const querySnapshot = await getDocs(vehiclesCollection);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};

export const getLatestVehicles = async () => {
  try {
    const q = query(
      collection(db, 'vehicles'),
      orderBy('createdAt', 'desc'),
      limit(4)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching latest vehicles:', error);
    throw error;
  }
};

// Actualizar un vehículo
export const updateVehicle = async (id, updatedData) => {
  const vehicleDoc = doc(db, 'vehicles', id);
  await updateDoc(vehicleDoc, updatedData);
};

// Eliminar un vehículo
export const deleteVehicle = async (id) => {
  const vehicleDoc = doc(db, 'vehicles', id);
  await deleteDoc(vehicleDoc);
};
