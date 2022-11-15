import React from 'react'
import Cancel from '../assets/x.svg'
import MetaWallet from '../assets/meta-wallet.svg'
import WalletConnet from '../assets/wallet-connect.svg'
import RightCaret from '../assets/gt.svg'
import WalletButton from './WalletButton'

const ConnectWalletModal = ({setModalOn}) => {

  return (
    <div className=" modal_container fixed inset-0 z-40">  
      <div className="flex h-screen justify-center items-center p-8 ">
        <div className="modal w-96 min-h-80 flex-col justify-center z-50 bg-white rounded-2xl">
          <div className=" p-6 flex justify-between" >
            <p className='text-lg lg:text-2xl font-bold'>Connect Wallet</p>
            <button onClick={setModalOn}><img src={Cancel} alt="" /></button>
          </div> 
          <hr />
          <div className="btn_wallets p-6">
            <p className='text-sm pt-4'>choose your preferred wallet
            </p>

            <WalletButton 
              src1={MetaWallet}
              src2={RightCaret}
            />

            <WalletButton 
              src1={WalletConnet}
              src2={RightCaret}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletModal