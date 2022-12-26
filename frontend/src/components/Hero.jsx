import React from 'react'
import Heading from './Heading'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Heading subtitle='WELCOME TO EDUSASTER' title='MEDIA EDUKASI DAN INFORMASI BENCANA' />
            <p><b>EDUSASTER </b>adalah website edukasi mitigasi bencana yang dikembangkan oleh Tim Mahasiswa Kelompok 7 Pilkom-3A Universitas Pendidikan Indonesia.</p>
            <p>Website ini dibentuk demi membantu masyarakat untuk meningkatkan kewaspadaan akan bencana.</p>  
          </div>
        </div>
        
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero