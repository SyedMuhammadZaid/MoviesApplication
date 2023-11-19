import React from 'react'
import './style.scss'
import HomeBanner from './homeBanner/HomeBanner'
import Trending from './trending/Trending'
import WhatsPopular from './whatsPopular/WhatsPopular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Trending />
      <WhatsPopular />
      <TopRated />
    </div>
  )
}

export default Home
