import React from 'react'

const WalletButton = ({src1, src2}) => {
  return (
    <div className='connect-wallet rounded-xl w-full h-16 p-6 my-4 flex justify-between items-center hover:bg-slate-50'>
      <div><img src={src1} alt="wallets" /></div>
      <div><img src={src2} alt="wallets" /></div>
    </div>
  )
}

export default WalletButton