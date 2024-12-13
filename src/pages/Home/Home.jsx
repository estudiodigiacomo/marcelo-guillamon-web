import React from 'react'
import Banner from '../../components/Banner/Banner'
import LatestVehicles from '../../components/LatestVehicles/LatestVehicles'
import BtnCatalog from '../../components/btnCatalog/btnCatalog'
import NewVehicleBanner from '../../components/newVehicleBanner/newVehicleBanner'
import CardNoticePreview from '../../components/CardNoticePreview/CardNoticePreview'

const Home = () => {
  return (
    <>
        <Banner/>
        <LatestVehicles/>
        <BtnCatalog/>
        <NewVehicleBanner/>
        <CardNoticePreview/>
    </>
  )
}

export default Home