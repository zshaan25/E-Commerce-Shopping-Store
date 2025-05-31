import React from 'react'
import Hero from '../views/home/Hero'
import Popular from '../views/home/Popular'
import Offers from '../views/home/Offers'
import NewCollections from "../views/home/NewCollections"
import Newsletter from '../views/home/Newsletter'
import Footer from '../layouts/Footer'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop