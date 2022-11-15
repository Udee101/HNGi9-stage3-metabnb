import React from 'react'
import FilterLocation from '../components/FilterLocation'
import Location from '../components/Location'
import PlaceToStayNFTs from '../components/PlaceToStayNFTs'

const PlaceToStay = () => {
  return (
    <>
      <div className='app mx-auto mb-20 mt-44'>
        <div className=' w-11/12 sm:flex sm:justify-between sm:items-center mb-10'>
        <Location/>
        <FilterLocation />
        </div>
        <PlaceToStayNFTs />
      </div>
    </>
  )
}

export default PlaceToStay