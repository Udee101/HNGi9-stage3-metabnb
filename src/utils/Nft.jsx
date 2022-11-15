import React from 'react'
const Nft = (props) => {
  return (
    <div className='nft_card rounded-2xl w-10/12 p-3 my-3 sm:w-72 sm:h-80 sm:text-xsm'>
      <div className='nft_img '>
        <img src={props.image} alt="nft" />
      </div>

      <div className='nft_details my-3'>
        <div className='d1 flex justify-between'>
          <div className='name'>
            <p>{props.name}</p>
          </div>
          <div className='price font-bold'>
            <p>{props.price}</p>
          </div>
        </div>

        <div className='d2 flex justify-between my-2'>
          <div className='dist'>
            <p>{props.distance}</p>
          </div>
          <div className='avail'>
            <p>{props.availability}</p>
          </div>
        </div>

        <div className='d3 my-2'>
          <img src={props.rating} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Nft