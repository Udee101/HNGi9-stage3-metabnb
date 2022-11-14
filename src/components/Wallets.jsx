import React from 'react'
import Logo from './Logo'
import Mbtoken from '../assets/mbtoken.svg'
import MetaMask from '../assets/metamask.svg'
import OpenSea from '../assets/opensea.svg'



const Wallets = () => {
  return (
    <div className='wallets mx-auto app flex justify-center flex-wrap my-3 md:justify-between md:h-16 md:pt-3'>
      <div className="mbt-logo m-3 md:m-0">
        <Logo src={Mbtoken}/>
      </div>

      <div className="mask-logo m-3 md:m-0">
        <Logo src={MetaMask} />
      </div>

      <div className="sea-logo m-3 md:m-0">
        <Logo src={OpenSea} />
      </div>
    </div>
  )
}

export default Wallets