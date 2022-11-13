import React from 'react'

const Image = ({src}) => {
  return (
    <>
      <div className='logo_icon'><img src={src} alt="logo-img" /></div>
    </>
  )
}

export default Image