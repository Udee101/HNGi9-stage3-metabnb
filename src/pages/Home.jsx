import React, {useState} from 'react'
import Button from '../components/Button'
import GroupImage from '../components/GroupImage'
import SearchInput from '../components/SearchInput'
import Wallets from '../components/Wallets'

const Home = () => {
  const [query, setQuery] = useState("")
  const handleChange = (e) =>{
    setQuery(e.target.value)
  }

  return (
    <div className='app'>
      <section id='hero_section' className='w-full  mt-28'>
        <div className="hero_text w-full md:w-">
          <p className='text-4xl hero_intro mb-4'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p>

          <p className='hero_desc mb-4'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

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

        <GroupImage />
      </section>

      <section id='wallets'>
        <Wallets />
      </section>
    </div>  
  )
}

export default Home