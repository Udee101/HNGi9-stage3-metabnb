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

      <div onClick={toggleDropdown} className=" z-10 p-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
        <p className=' cursor-pointer flex text-base'>Location
          <img src={FilterButton} alt="filter-button" className="ml-8" />
        </p>  
      </div>

      {/* Dropdown Menu */}
      {
      isOpen ? 
      (
        <div className=" absolute lg:right-0 -right-36 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <>
            <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Resturant</a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Cottage </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Castle </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> fantast city </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> beach </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Carbins </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> off-grid </a><a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Farm </a>
          </>
        </div>) : null
      }
    
    </div>
  )
}

export default FilterLocation