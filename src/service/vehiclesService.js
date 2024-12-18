import { db } from '../config/firebaseConfig.js';
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy, limit  } from 'firebase/firestore';

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
    const q = query(vehiclesCollection, orderBy('createdAt', 'desc')); 
    const querySnapshot = await getDocs(q);
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

export const getVehicleById = async (id) => {
  try {
    console.log("Buscando vehículo con ID:", id);
    const vehicleDoc = doc(db, 'vehicles', id); 
    const snapshot = await getDoc(vehicleDoc); 
    if (snapshot.exists()) {
      console.log("Vehículo encontrado:", snapshot.data()); 
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      console.log("El vehículo no existe en Firebase.");
      throw new Error('El vehículo no existe');
    }
  } catch (error) {
    console.error('Error fetching vehicle by ID:', error);
    throw error;
  }
};