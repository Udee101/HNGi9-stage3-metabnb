import React, { useState } from 'react'
import FilterButton from '../assets/setting-5.svg'

const FilterLocation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block">
    {/* Dropdown toggle button */}

      <div onClick={toggleDropdown} className=" z-10 p-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300  focus:ring  focus:outline-none">
        <p className=' cursor-pointer flex text-base'>Location
          <img src={FilterButton} alt="filter-button" className="ml-8" />
        </p>  
      </div>

      {/* Dropdown Menu */}
      {
      isOpen ? 
      (
        <div className=" absolute lg:right-0 -right-36 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
        >
          <>
            <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> Resturant</a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> Cottage </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> Castle </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> fantast city </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> beach </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> Carbins </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> off-grid </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "> Farm </a>
          </>
        </div>) : null
      }
    
    </div>
  )
}

export default FilterLocation