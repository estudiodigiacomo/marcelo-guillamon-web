import { auth } from '../config/firebaseConfig.js';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut } from 'firebase/auth';


export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Inicio de sesión exitoso:', user);
    return user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error; 
  }
};


export const authenticate = async (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Usuario autenticado');
      callback(user);
    } else {

      console.log('Usuario no autenticado');
      callback(null);
    }
  });
};

// Función para enviar correo de recuperación de contraseña
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Correo de recuperación enviado a:', email);
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error);
    throw error; 
  }
};


export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada exitosamente");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};
