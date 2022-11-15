import React from 'react'
import Img1 from '../assets/image 1.png'
import Img2 from '../assets/image 2.png'
import Img3 from '../assets/image 3.png'
import Img4 from '../assets/image 4.png'

const GroupImage = () => {
  return (
    <div className='hero_imgs my-6 flex w-full sm:w-full gap-2 justify-center lg:justify-end'>
      <div className='flex-col mt-20'>
        <img src={Img1} alt="" className='w-full my-2 sm:my-2' />
        <img src={Img2} alt="" className='w-full my-2'  />
      </div>

      <div className='sm:flex-col'>
        <img src={Img3} alt="" className='w-full my-2 sm:my-2' />
        <img src={Img4} alt="" className='w-full my-2' />
      </div>
    </div>
  )
}

export default GroupImage