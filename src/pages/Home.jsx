import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Product from '../components/Product'

function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </>
  )
}

export default Home
