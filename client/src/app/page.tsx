import Navbar from '@/components/Navbar/Navbar'
import HomeComponent from '@/components/home/HomeComponent'
import React from 'react'
import Questions from '@/components/questions/Questions'
import FomrMail from '@/components/fomr-mail/FomrMail'

const Home = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <HomeComponent/>
      <Questions/>
      <FomrMail/>
    </>
  )
}

export default Home