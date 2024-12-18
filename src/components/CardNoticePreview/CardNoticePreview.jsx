import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestNews } from "../../service/newsService.js";
import "./CardNoticePreview.scss";

const CardNoticePreview = () => {
  const [latestNews, setLatestNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const news = await getLatestNews();
        setLatestNews(news);
      } catch (error) {
        console.error("Error al obtener las últimas noticias:", error);
      }
    };
    fetchLatestNews();
  }, []);

  return (
    <>
      <h2 className='title-notice-preview'>Últimas Noticias</h2>
      <div className="notice-preview">
        {latestNews.map((notice) => (
          <div
            className="content-preview"
            key={notice.id}
            onClick={() => navigate(`/noticias/${notice.id}`)} 
            style={{ cursor: "pointer" }} 
          >
            {notice.imageUrl && (
              <img
                src={notice.imageUrl}
                className="img-preview"
                alt="Imagen de la noticia"
              />
            )}
            <div className="content-text">
              <h2 className="title-preview">{notice.title}</h2>
              {notice.sections.length > 0 && (
                <p className="text-preview">
                  {notice.sections[0].content.slice(0, 210)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardNoticePreview;
