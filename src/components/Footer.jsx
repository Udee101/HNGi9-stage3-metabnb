import React from 'react'
import Logo from './Logo'
import Facebook from '../assets/social-3.svg'
import Insta from '../assets/social-2.svg'
import Twitter from '../assets/social-1.svg'
import MetaWhite from '../assets/meta-white.svg'
import FootLinks from './FootLinks'

const Footer = () => {
  return (
    <footer className=' bg-black text-white pt-10'>
      <div className='app flex flex-col sm:justify-between sm:flex-wrap sm:flex-row mx-auto'>
        <div>
          <div className='sm:mb-24 mb-10'>
            <Logo src={MetaWhite}/>
          </div>

          <div className='flex gap-x-6 sm:my-10 mt-3 mb-5'>
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Insta} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
          </div>

          <div>
            <p> &copy; 2022 Metabnb</p>
          </div>
        </div>

        <FootLinks
          header="Community" 
          link1= "NFT"
          link2= "Tokens"
          link3= "Landlords"
          link4= "Discord"
        />

        <FootLinks
          header="Places" 
          link1= "Castle"
          link2= "Farms"
          link3= "Beach"
          link4= "Learn more"
        />

        <div className='sm:mr-0 mr-5'>
        <FootLinks
          header="About us" 
          link1= "Road map"
          link2= "Creators"
          link3= "Career"
          link4= "Contact us"
        /> 
        </div>
      </div>
    </footer>
  )
}

export default Footer