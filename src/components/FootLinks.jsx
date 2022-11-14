import React from 'react'

const FootLinks = ({header, link1, link2, link3, link4}) => {
  return (
    <div className='foot_links mt-4 sm:mt-0'>
      <h3 className=' font-bold text-lg'>{header}</h3>
      <p className=' text-sm font-normal'>{link1}</p>
      <p className=' text-sm font-normal'>{link2}</p>
      <p className=' text-sm font-normal'>{link3}</p>
      <p className=' text-sm font-normal'>{link4}</p>
    </div>
  )
}

export default FootLinks