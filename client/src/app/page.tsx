import Navbar from '@/components/Navbar/Navbar'
import HomeComponent from '@/components/home/HomeComponent'
import ServicesPage from '@/components/services/ServicesPage'
import React from 'react'

const Home = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <HomeComponent/>
      <ServicesPage/>
    </>
  )
}

export default Home