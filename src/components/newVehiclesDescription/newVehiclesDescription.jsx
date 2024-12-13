import React from 'react'
import './newVehiclesDescription.scss'
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineFile } from 'react-icons/ai';

const newVehiclesDescription = () => {
  return (
    <div className='content-okm-description'>
        <p className='title-okm'>gestionamos la compra de tu ford 0km</p>
        <p className='subtitle-okm'>¿Estás buscando tu próximo auto? </p>
        <p className='description-okm'>En <b>Marcelo Guillamón</b> te ofrecemos un servicio personalizado para que encuentres el Ford <b>0Km. Tu imagen. </b></p>
        <div className="points">
            <p><BiMessageSquareDetail/> Elegir mi Ford.</p>
            <p><AiOutlineFile/> Trámites Simplificados.</p>
        </div>
    </div>
  )
}

export default newVehiclesDescription