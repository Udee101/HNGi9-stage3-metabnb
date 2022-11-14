import React from 'react'
import PTSNfts from '../Data/PlaceToStayNFTs'
import Nft from '../utils/Nft'

const PlaceToStayNFTs = () => {
  return (
    <div className='Nfts_container flex flex-wrap justify-center sm:gap-x-4'>
      {PTSNfts.map(Nft)}
    </div>
  )
}

export default PlaceToStayNFTs
