import React from 'react';
import { useNavigate } from 'react-router-dom';
import './btnCatalog.scss';

const BtnCatalog = () => {
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate('/catalogo'); 
  };

  return (
    <div className='content-button-catalog'>
      <button className="catalog-button" onClick={handleGoToCatalog}>
        Catálogo de Vehículos
      </button>
    </div>
  );
};

export default BtnCatalog;
