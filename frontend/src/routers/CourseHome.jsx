import React from 'react'
import Back from '../components/Back'
import CoursesCard from '../components/CoursesCard'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CourseHome = () => {
  return (
    <>
      <Header />
      <Back title='KENALI BENCANA SEKITAR ANDA'/>
      <CoursesCard />
      <Footer />
    </>
  )
}

export default CourseHome