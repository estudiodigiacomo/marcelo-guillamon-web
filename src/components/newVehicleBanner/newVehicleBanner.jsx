import React from 'react'
import { Link } from 'react-router-dom';
import './newVehicleBanner.scss'

const newVehicleBanner = () => {
  return (
    <div className='content-okm'>
        <Link to="/okm" className="banner-link">
            <img className="banner-okm" src="https://storage.googleapis.com/guillamon-img/banner-0km.webp" alt="banner-okm"/>
        </Link>
    </div>
  )
}

export default newVehicleBanner