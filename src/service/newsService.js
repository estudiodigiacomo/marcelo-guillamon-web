import { db } from '../config/firebaseConfig.js'
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, orderBy, limit } from "firebase/firestore";

// Crear una nueva noticia
export const createNotice = async (title, sections, imageUrl) => {
  try {
    await addDoc(collection(db, "news"), {
      title: title,
      sections: sections, 
      imageUrl: imageUrl,
      createdAt: new Date(), 
    });
    console.log("Noticia creada con éxito!");
  } catch (error) {
    console.error("Error al crear la noticia:", error);
    throw error; 
  }
};

export const getNotice = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "news"));
    const notice = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Documento obtenido:", data); // <-- Inspeccionar cada documento
      notice.push({
        id: doc.id,
        ...data,
        section: Array.isArray(data.section) ? data.section : [], // Garantiza que `section` sea un arreglo
      });
    });
    return notice;
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    throw error;
  }
};

  // Obtener las 4 noticias más recientes
  export const getLatestNews = async () => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"), limit(4));
    const querySnapshot = await getDocs(q);
    const notices = [];
    querySnapshot.forEach((doc) => {
      notices.push({ id: doc.id, ...doc.data() });
    });
    return notices;
  };
  
  // Obtener una noticia por ID
  export const getNoticeById = async (id) => {
    try {
      const docRef = doc(db, "news", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("No se encontró la noticia");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener la noticia:", error);
      throw error;
    }
  };
  
  // Actualizar una noticia
  export const updateNotice = async (id, title, sections, imageUrl) => {
    try {
      const noticiaRef = doc(db, "news", id);
      await updateDoc(noticiaRef, {
        title: title,
        sections: sections,
        imageUrl: imageUrl,
      });
      console.log("Noticia actualizada con éxito!");
    } catch (error) {
      console.error("Error al actualizar la noticia:", error);
      throw error;
    }
  };
  
  // Eliminar una noticia
  export const deleteNotice = async (id) => {
    try {
      await deleteDoc(doc(db, "news", id));
      console.log("Noticia eliminada con éxito!");
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
      throw error;
    }
  };
  