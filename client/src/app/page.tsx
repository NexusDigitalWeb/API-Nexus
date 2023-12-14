import Navbar from '@/components/Navbar/Navbar'
import HomeComponent from '@/components/home/HomeComponent'
import React from 'react'

const Home = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <HomeComponent/>
    </>
  )
}

export default Home