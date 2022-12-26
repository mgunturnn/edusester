import React from 'react'
import Back from '../components/Back'
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactHome = () => {
  return (
    <>
      <Header />
      <Back title='HUBUNGI KAMI'/>
      <ContactCard />
      <Footer />
    </>
  )
}

export default ContactHome