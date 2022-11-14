import React from 'react'
import Nfts from '../Data/HomeNFT'
import Nft from '../utils/Nft'

const HomeNfts = () => {
  return (
    <div className='Nfts_container flex flex-wrap justify-center sm:gap-x-4'>
      {Nfts.map(Nft)}
    </div>
  )
}

export default HomeNfts
