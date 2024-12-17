import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoticeById } from "../../service/newsService.js";
import "./NewsDetail.scss";

const NewsDetail = () => {
  const { id } = useParams(); 
  const [news, setNews] = useState(null); 

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const fetchedNews = await getNoticeById(id);
        setNews(fetchedNews);
      } catch (error) {
        console.error("Error al cargar la noticia:", error);
      }
    };
    fetchNotice();
  }, [id]);

  if (!news) {
    return <p>Cargando noticia...</p>;
  }

  return (
    <div className="news-detail-container">
      <p className="news-detail-title">{news.title}</p>

      {/* Imagen */}
      {news.imageUrl && (
        <img src={news.imageUrl} alt="Imagen de la noticia" className="news-detail-image" />
      )}

      {/* Contenido */}
      <div className="news-detail-content">
        {news.sections.map((section, index) => (
          <div key={index} className="news-detail-section">
            {section.subtitle && <h2 className="news-detail-subtitle">{section.subtitle}</h2>}
            <p className="news-detail-text">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
