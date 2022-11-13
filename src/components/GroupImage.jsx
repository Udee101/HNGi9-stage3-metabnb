import React from 'react'
import Img1 from '../assets/image 1.png'
import Img2 from '../assets/image 2.png'
import Img3 from '../assets/image 3.png'
import Img4 from '../assets/image 4.png'

const GroupImage = () => {
  return (
    <div className='hero_imgs my-6'>
      <div>
        <img src={Img1} alt="" className='w-full my-3' />
        <img src={Img2} alt="" className='w-full my-3' />
      </div>

      <div>
        <img src={Img3} alt="" className='w-full my-3' />
        <img src={Img4} alt="" className='w-full my-3' />
      </div>
    </div>
  )
}

export default GroupImage