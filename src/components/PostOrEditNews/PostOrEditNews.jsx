import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNotice, getNoticeById, updateNotice } from "../../service/newsService.js"; 
import './PostOrEditNews.scss'

const PostOrEditNews = () => {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([{ subtitle: "", content: "" }]);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchNotice = async () => {
        try {
          const notice = await getNoticeById(id);
          setTitle(notice.title);
          setSections(notice.sections || [{ subtitle: "", content: "" }]);
          setImageUrl(notice.imageUrl || "");
        } catch (error) {
          console.error("Error al cargar la noticia:", error);
        }
      };
      fetchNotice();
    }
  }, [id]);

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { subtitle: "", content: "" }]);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Modo edición
        await updateNotice(id, title, sections, imageUrl);
        console.log("Noticia actualizada");
      } else {
        // Modo creación
        await createNotice(title, sections, imageUrl);
        console.log("Noticia creada");
      }
      navigate("/noticias");
    } catch (error) {
      console.error("Error al guardar la noticia:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title-notice">{id ? "Editar Noticia" : "Crear Nueva Noticia"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">URL de la Imagen</label>
          <input
            type="text"
            id="imageUrl"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Secciones</label>
          {sections.map((section, index) => (
            <div key={index} className="mb-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Subtítulo"
                value={section.subtitle}
                onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
              />
              <textarea
                className="form-control textarea-content form-control mb-2"
                placeholder="Contenido"
                rows="3"
                value={section.content}
                onChange={(e) => handleSectionChange(index, "content", e.target.value)}/>
              <div className="btn-group">
                <button type="button" className="btn btn-secondary" onClick={handleAddSection}>
                  Agregar Sección
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveSection(index)}>
                  Eliminar Sección
                </button>
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {id ? "Guardar Cambios" : "Publicar Noticia"}
        </button>
      </form>
    </div>
  );
};

export default PostOrEditNews;
