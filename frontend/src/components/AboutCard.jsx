import React from 'react'
import reta from '../assets/reta_resize.png'
import tiam from '../assets/tiam_resize.png'
import raehan from '../assets/raehan_resize.png'
import guntur from '../assets/guntur_resize.png'
import aditya from '../assets/profilkosong.png'
import './about.css'

const AboutCard = () => {
  return (
    <>
      <section className='aboutCard'>
        <div className="container">
          <div className="judultengah">
            <h1>ALASAN KAMI MEMBANGUN WEB</h1>
          </div>
          <div className='kotak grid'>
            <div className="box_shadow">
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
              <h2>ALL ABOUT EDUSASTER</h2>
              <br />
              <p>
                <b>EDUSASTER</b> adalah website edukasi dan mitigasi bencana alam yang disusun dan dikembangkan oleh Kelompok 7 Pilkom - 3A Universitas Pendidikan Indonesia.
                Website ini dibangun untuk memenuhi <b>tugas besar mata kuliah Pemrograman Internet</b> dosen pengampu Erlangga, M.T.
              </p>
              <br />
              <p>
                Selain itu, website ini bertujuan untuk memberikan informasi serta edukasi kepada khalayak umum mengenai pencegahan dan mitigasi terhadap bencana alam.
              </p>
            </div>

            <br />
            <br />

            <div className="box_shadow">
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
              <h2>ISI INTI WEB EDUSASTER</h2>
              <br />
              <p>
                Website ini berisi informasi-informasi terkait bencana alam, khususnya yang sering terjadi di Indonesia yang berdampak kecil maupun besar seperti Gempa Bumi di Cianjur yang menghancurkan banyak rumah warga dan bangunan-bangunan lainnya.
              </p>
              <br />
              <p>
                Website ini juga memiliki fitur lapor bencana yang berguna untuk melaporkan bencana yang terjadi secara real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className='teamCard'>
        <h2>TIM PENGEMBANG WEBSITE</h2>
        <br />
        <p>
          <b>EDUSASTER</b> dikembangkan oleh Kelompok 7 Pilkom-3A yang beranggotakan:
        </p>
        <br />
        <br />
        <div className="grid">
          <div className="box_shadow_team">
            <div className='imageTeam'>
              <img src={reta} alt='' />
            </div>
            <div className="detail">
              <br />
              <h3>Reta Haura Zahra</h3>
              <h4>2105699</h4>
              <h4>Front-End Developer</h4>
            </div>
          </div>

          <div className="box_shadow_team">
            <div className="imageTeam">
              <img src={tiam} alt='' />
            </div>
            <br />
            <br />
            <h3>Tia Aulia Marhamah</h3>
            <h4>2100301</h4>
            <h4>Front-End Developer</h4>
          </div>

          <div className="box_shadow_team">
            <div className="imageTeam">
              <img src={raehan} alt='' />
            </div>
            <br />
            <h3>M Raehan Aria Pratama</h3>
            <h4>2102680</h4>
            <h4>Front-End Developer</h4>
          </div>

          <div className="box_shadow_team">
            <div className="imageTeam">
              <img src={guntur} alt='' />
            </div>
            <br />
            <br />
            <h3>M Guntur Nugraha</h3>
            <h4>2103420</h4>
            <h4>Back-End Developer</h4>
          </div>

          <div className="box_shadow_team">
            <img src={aditya} alt='' />
            <br />
            <br />
            <h3>Aditya Mulyana Yusuf</h3>
            <br />
            <h4>2106594</h4>
            <br />
            <h4>UI Designer</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard