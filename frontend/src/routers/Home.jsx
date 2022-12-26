import React from 'react'
import AboutCard from '../components/AboutCard'
import ContactCard from '../components/ContactCard'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <ContactCard />
      <Footer />
    </>
  ) 
}

export default Home