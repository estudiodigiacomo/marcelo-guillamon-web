import React, { useEffect, useState } from "react";
import { getNotice, deleteNotice } from "../../service/newsService.js";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './NewsCards.scss';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const NewsCards = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNotice();
        
        // Ordenar las noticias correctamente usando createdAt
        const sortedNews = fetchedNews.sort((a, b) => {
          const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
          const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
          return dateB - dateA;
        });

        setNews(sortedNews);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };
    fetchNews();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-post/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteNotice(id);
      setNews(news.filter((notice) => notice.id !== id));
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
    }
  };

  const handleViewDetail = (id) => {
    navigate(`/noticias/${id}`);
  };

  // Muestra spinner o mensaje de carga mientras se autentica
  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <p className='title-blog'>Noticias</p>

      {user?.uid === "TIRcWSsdobf9gpn9qMWf4UH3QMx2" && (
        <button className="news-add-button" onClick={() => navigate('/new-post')}>
          <FiEdit size={20} />
          Redactar Nuevo Post
        </button>
      )}

      <div className="news-container">
        {news.map((notice) => (
          <div
            className="news-card"
            key={notice.id}
            onClick={() => handleViewDetail(notice.id)}
            style={{ cursor: "pointer" }}
          >
            {notice.imageUrl && (
              <img
                src={notice.imageUrl}
                className="news-card-image"
                alt="Imagen de la noticia"
              />
            )}
            <div className="news-card-text">
              <h2 className="news-card-title">{notice.title}</h2>
              {notice.sections.length > 0 && (
                <p className="news-card-preview">
                  {notice.sections[0].content.slice(0, 400)}
                </p>
              )}
            </div>

            {user?.uid === "TIRcWSsdobf9gpn9qMWf4UH3QMx2" && (
              <div
                className="news-card-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <FiEdit
                  size={20}
                  className="action-icon edit-icon"
                  onClick={() => handleEdit(notice.id)}
                />
                <FiTrash2
                  size={20}
                  className="action-icon delete-icon"
                  onClick={() => handleDelete(notice.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCards;
