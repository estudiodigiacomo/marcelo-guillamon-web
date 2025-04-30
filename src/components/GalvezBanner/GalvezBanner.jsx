import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './GalvezBanner.scss'

const GalvezBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://storage.googleapis.com/guillamon-img/Oscar%20G%C3%A1lvez%20y%20Familia%20Guillamon.jpg",
    "https://storage.googleapis.com/guillamon-img/OScar-Alfredo-Galvez-2%20(1).jpg",
    "https://storage.googleapis.com/guillamon-img/galvez33.jpg",
    "https://storage.googleapis.com/guillamon-img/galvez44.jpg"
  ];

  return (
    <>
      <div className="content-header-galvez">
        <h2 className='title-galvez'>El rincón de Oscar Gálvez</h2>
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
          ))}
        </Slider>
    </div>
    <div className="content-text-galvez">
      <div className="first-text-galvez">
              <p className='text-content-galvez'>Oscar Alfredo Gálvez fue uno de los pilotos más destacados del automovilismo argentino, junto a su hermano Juan Gálvez. Nació en Buenos Aires en 1913 y desde joven mostró pasión por los autos, comenzando a competir en 1937. Fue campeón de Turismo Carretera en cinco ocasiones (1947, 1948, 1953, 1954 y 1961), logrando un total de 43 victorias en la categoría, incluyendo siete en el Gran Premio Argentino. También participó en competencias internacionales, destacándose su quinto puesto en el Primer Gran Premio de la República Argentina de Fórmula 1 en 1953, con una Maserati.</p>
              <p className='text-content-galvez'>
              A lo largo de su carrera, se destacó no solo por su destreza al volante, sino también por su habilidad mecánica, su carisma y nobleza, cualidades que le ganaron el respeto y el afecto incluso de sus rivales. Se retiró del automovilismo en 1964, a los 51 años. En reconocimiento a su trayectoria, fue nombrado Ciudadano Ilustre de la Ciudad de Buenos Aires y recibió el Premio Konex en 1980 y post mortem en 1990. Poco antes de su muerte, el Autódromo de Buenos Aires fue rebautizado en su honor como "Autódromo Oscar y Juan Gálvez". Falleció en 1989, a los 76 años y fue enterrado junto a su hermano en el Cementerio de la Chacarita.</p>
          </div>
          <div className="first-text-galvez">
              <p className='subtile-galvez'>Oscar y Flia. Guillamón</p>
              <p className='text-content-galvez'>Oscar Gálvez siempre guardó un cariño especial por Tres Arroyos. Recordaba con afecto a la familia Guillamón, quienes lo recibían como a uno más. Tenía su propia habitación para él y su acompañante, y se sentía como en casa. En aquel hogar compartía momentos con el padre, la madre, Tito, Enrique y Oscar a quienes sentía como hermanos propios. La mamá le preparaba el almuerzo y la cena, y él, como agradecimiento, solía devolver el gesto ganando la carrera. Para Oscar, Tres Arroyos era tierra de suerte y buenos recuerdos, un lugar que siempre asociaría con la calidez de su gente y el cariño de la familia Guillamón. “Nunca los voy a olvidar”, decía con emoción.</p>
              <p className='text-content-galvez'>Contamos con el testimonio de Clyde, integrante de la familia Guillamón, quien nos trae a la memoria anécdotas entrañables de aquella época. Sus palabras nos permiten revivir esos momentos de hospitalidad, alegría y emoción vividos junto a Oscar, y que dejaron una huella imborrable en todo</p>
          </div>
        </div>
    </>
  );
};

export default GalvezBanner;
