import React from 'react'
import './contact.css'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import email from '../assets/email.png'

const ContactCard = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2221314883363!2d107.58691681428697!3d-6.86396219503974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6bc5c2ad025%3A0xe9a44376e51ebf09!2sGg.%20Gegersuni%201%2C%20Gegerkalong%2C%20Kec.%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040153!5e0!3m2!1sid!2sid!4v1671421560923!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <section className="contactCard">
        <div className="container">
          <div className="judul-tengah padding">
            <h1>SAMPAIKAN SARAN DAN KRITIK ANDA</h1>
          </div>
          <div className="grud">
            <div className="box-shadow">
              <div className="tools">
                <div class="circle">
                  <span class="red box"></span>
                </div>
                <div class="circle">
                  <span class="yellow box"></span>
                </div>
                <div className="circle">
                  <span className="green box"></span>
                </div>
              </div>
              <div className="isi-kontak">
                <h2>CONTACT US</h2>
                <br />
                <p>
                  Lebih baik mencegah sebelum terjadi sesuatu yang lebih besar. Ayo hubungi kami kapanpun dan dimanapun kalian berada!
                </p>
                <br />
                <div className="info">
                  <div className="information">
                    <img src={phone} alt='' />
                    <div className="infoDetail">
                      <p>123-456-789</p>
                    </div>
                  </div>
                  <div className="information">
                    <img src={location} alt='' />
                    <div className="infoDetail">
                      <p>Jl. Gegerkalong Girang, GG Gegersuni 1 No 51, Kota Bandung</p>
                    </div>
                  </div>
                  <div className="information">
                    <img src={email} alt='' />
                    <div className="infoDetail">
                      <p>edusaster@upi.edu</p>
                    </div>
                  </div>
                </div>
                <div className="media-social">
                  <div className="social-icon">
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-shadow">
              <iframe src={map} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactCard