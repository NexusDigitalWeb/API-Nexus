import Navbar from '@/components/Navbar/Navbar'
import HomeComponent from '@/components/home/HomeComponent'
import ServicesPage from '@/components/services/ServicesPage'
import React from 'react'
import Questions from '@/components/questions/Questions'

const Home = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <HomeComponent/>
      <ServicesPage/>
      <Questions/>
    </>
  )
}

export default Home