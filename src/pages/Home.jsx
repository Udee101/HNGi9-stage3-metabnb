import React, {useState} from 'react'
import Button from '../components/Button'
import GroupImage from '../components/GroupImage'
import HomeNfts from '../components/HomeNfts'
import MoreNfts from '../components/MoreNfts'
import SearchInput from '../components/SearchInput'
import Wallets from '../components/Wallets'


const Home = () => {
  const [query, setQuery] = useState("")
  const handleChange = (e) =>{
    setQuery(e.target.value)
  }

  return (
    <div id='app' className='sm:mt-36 mt-28'>
      <section id='hero_section'>
        <div className='w-full mx-auto app lg:flex lg:justify-between'>
          <div className="hero_text w-full mt-9">
            <div className='w-full text_content sm:space-y-12'>
              <p className='text-4xl sm:text-5xl hero_intro mb-5'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p>

              <p className='hero_desc md:text-xl sm:w-11/12 mb-5'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
              </p>

              <div className='search_box flex'>
                <SearchInput
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="search for location"
                  className="border-solid border-2 border-grey-500"
                />
                <Button 
                  type="submit"
                  title="search"
                  className="rounded-r-lg btn_search md:w-80"
                />
              </div>
            </div> 
          </div>
        <GroupImage />
      </div>
      </section>

      <section id='wallets'>
        <Wallets />
      </section>

      <section id="next-adventure">
        <div className='app mx-auto my-6'>
          <h1 className='text-center font-bold my-7 text-4xl md:text-5xl'>Inspiration for your next adventure</h1>
          <HomeNfts />
        </div>
        
      </section>

      <section id='more-nfts' className='sm:flex sm:justify-between'>
        <div className='app mx-auto md:grid md:grid-cols-2'>
          <div className='w-full md:flex md:flex-col md:justify-center my-7 space-y-8'>
            <p className=' text-white text-5xl font-bold'>Metabnb NFTs</p>
            <p className='text-lg text-white md:pr-15 lg:pr-36'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

            <div className="btn_learn">
              <Button 
                title="Learn more"
                type="submit"
              />
            </div>
            
          </div>

          <MoreNfts />
        </div>  
      </section>
    </div>   
  )
}

export default Home