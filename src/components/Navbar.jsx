import React, { useState } from 'react'
import Logo from './Logo'
import BnbLogo from '../assets/metabnb.png';
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-50 text-gray-700 body-font mb-4 shadow-sm fixed top-0 left-0 right-0">

      {/* :DESKTOP MENU */}
      <div className=" nav_logo container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <div className='nav_logo flex'>
          <Logo 
            src={BnbLogo}
          />
        </div>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-6 hover:text-indigo-500">Home</a>
          <a href="#link" className="mr-6 hover:text-indigo-500">Place to stay</a>
          <a href="#link" className="mr-6 hover:text-indigo-500">NFTs</a>
          <a href="#link" className="mr-6 hover:text-indigo-500">Community</a>
        </nav>
        {/* button */}
        <div className="hidden sm:inline-flex btn_connect ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <Button 
          className="rounded-md"
            type="submit" 
            title="Connect wallet" 
          />
        </div>
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-700">Place to stay</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-700">NFTs</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-700">Community</a>
          <div className='btn_connect'>
            <Button 
              className="rounded-md"
              type="submit" 
              title="Connect wallet" 
            />
          </div>
          
        </div>
      }
    </nav>
  )
}

export default Navbar
