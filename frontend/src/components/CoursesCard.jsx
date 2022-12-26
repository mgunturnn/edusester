import React from 'react'
import './courses.css'
import banjir from '../assets/banjir.png'
import gempabumi from '../assets/gempa-bumi.png'
import gunungmeletus from '../assets/gunung-meletus.png'
import tanahlongsor from '../assets/tanah-longsor.png'

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='content'>
          <div className='d_flex'>
            <div className='box_shadow_1'>
              <div className='imageDisaster'>
                <img src={banjir} alt='' />
              </div>
              <div className='details'>
                <h1>BENCANA BANJIR</h1>
                <p>
                  Banjir merupakan peristiwa ketika air menggenangi suatu wilayah yang biasanya tidak tergenangi air dalam jangka waktu tertentu. Banjir biasanya terjadi karena curah hujan turun terus menerus dan mengakibatkan meluapnya air sungai, danau, laut, drainase karena jumlah air yang melebihi daya tampung media penopang air dari curah hujan tadi.
                </p>
                <br />
                <p>
                  Selain disebabkan faktor alami, yaitu curah hujan yang tinggi, banjir juga terjadi karena ulah manusia. Contoh, berkurangnya kawasan resapan air karena alih fungsi lahan, penggundulan hutan yang meningkatkan erosi dan mendangkalkan sungai, serta perilaku tidak bertanggung jawab seperti membuang sampah di sungai dan mendirikan hunian di bantaran sungai.
                </p>
                <br />
                <p>Langkah mitigasi yang dapat dilakukan ketika terjadi banjir, yakni :
                  <ul>
                    <br />
                    <li>1. Hindari membuat rumah di pinggir sungai</li>
                    <li>2. Melaksanakan tebang pilih dan reboisasi</li>
                    <li>3. Penanaman Hutan Mangrove atau bakau</li>
                    <li>4. Buanglah sampah pada tempatnya</li>
                    <li>5. Rajin membersihkan saluran air</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className='content'>
          <div className='d_flex'>
            <div className='box_shadow_2'>
              <div className='imageDisaster'>
                <img src={gempabumi} alt='' />
              </div>
              <div className='details'>
                <h1>GEMPA BUMI</h1>
                <p>
                  Gempa bumi merupakan getaran asli dari dalam bumi, bersumber dari dalam bumi dan merambat sampai ke permukaan bumi akibat bergeser  dan pecahnya rekahan bumi.
                </p>
                <br />
                <p>
                  Gempa bumi disebabkan dari pelepasan energi yang dihasilkan oleh tekanan yang disebabkan oleh lempengan yang bergerak. Semakin lama tekanan itu kian membesar dan akhirnya mencapai pada keadaan di mana tekanan tersebut tidak dapat ditahan lagi oleh pinggiran lempengan. Pada saat itulah gempa bumi akan terjadi.
                </p>
                <br />
                <p>
                  Gempa Bumi biasanya terjadi di perbatasan lempengan-lempengan tersebut. Gempa Bumi yang paling parah biasanya terjadi di perbatasan lempengan kompresional dan translasional.
                  Beberapa gempa Bumi lain juga dapat terjadi karena pergerakan magma di dalam gunung berapi. Gempa Bumi seperti itu dapat menjadi gejala akan terjadinya letusan gunung berapi. Beberapa gempa Bumi (jarang namun) juga terjadi karena menumpuknya massa air yang sangat besar di balik dam, seperti Dam Karibia di Zambia, Afrika. Sebagian lagi (jarang juga) juga dapat terjadi karena injeksi atau akstraksi cairan dari/ke dalam Bumi (contoh, pada beberapa pembangkit listrik tenaga panas Bumi dan di Rocky Mountain Arsenal). Terakhir, gempa juga dapat terjadi dari peledakan bahan peledak.
                </p>
                <br />
                <p>Langkah mitigasi yang dapat dilakukan sebelum terjadi gempa bumi, yakni :
                  <ul>
                    <br />
                    <li>1. Memahami daerah yang saat ini kita tinggali</li>
                    <li>2. Mengumpulkan informasi terkait bencana yang sering terjadi di tempat tinggal kita</li>
                    <li>3. Mengetahui tempat-tempat aman untuk evakuasi saat terjadinya bencana</li>
                    <li>4. Membuat rencana jalur untuk evakuasi ke tempat yang aman</li>
                    <li>5. Melakukan latihan evakuasi dengan simulasi saat terjadinya gempa</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className='content'>
          <div className='d_flex'>
            <div className='box_shadow_3'>
              <div className='imageDisaster'>
                <img src={gunungmeletus} alt='' />
              </div>
              <div className='details'>
                <br />
                <h1>GUNUNG MELETUS</h1>
                <p>
                  Gunung meletus merupakan peristiwa yang terjadi akibat endapan magma di dalam perut bumi yang didorong keluar oleh gas yang bertekanan tinggi. Magma adalah cairan pijar yang terdapat di dalam lapisan bumi dengan suhu yang sangat tinggi, yakni diperkirakan lebih dari 1.000 °C. Cairan magma yang keluar dari dalam bumi disebut lava. Suhu lava yang dikeluarkan bisa mencapai 700-1.200 °C. Letusan gunung berapi yang membawa batu dan abu dapat menyembur sampai sejauh radius 18 km atau lebih, sedangkan lavanya bisa membanjiri sampai sejauh radius 90 km. Tidak semua gunung berapi sering meletus. Gunung berapi yang sering meletus disebut gunung berapi aktif.
                </p>
                <br />
                <p>
                  Penyebab gunung meletus adalah ketika magma di dapur magma sudah tidak kuat menahan tekanan. Ketika sudah tidak kuat, maka magma akan mencari jalan keluar ke permukaan bumi hingga menjadi penyebab gunung meletus.
                </p>
                <br />
                <p>Langkah mitigasi yang dapat dilakukan ketika terjadi Gunung meletus, yakni :
                  <ul>
                    <br />
                    <li>1. Mengenali daerah setempat yang dapat dijadikan tempat mengungsi</li>
                    <li>2. Memantau dan mendengarkan informasi tentang status gunung api</li>
                    <li>3. Mengikuti bimbingan dan penyuluhan dari pihak yang bertanggung jawab</li>
                    <li>4. Memiliki persediaan kebutuhan-kebutuhan dasar, seperti obat-obatan dan makanan yang memadai</li>
                    <li>5. Mengikuti arahan evakuasi pihak berwenang</li>
                    <li>6. Membawa barang-barang yang berharga, terutama dokumen dan surat penting</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className='content'>
          <div className='d_flex'>
            <div className='box_shadow_4'>
              <div className='imageDisaster'>
                <img src={tanahlongsor} alt='' />
              </div>
              <div className='details'>
                <h1>TANAH LONGSOR</h1>
                <p>
                  Tanah longsor sebagai salah satu jenis gerakan massa tanah atau batuan, ataupun percampuran keduanya, yang menuruni atau keluar lereng akibat terganggunya kestabilan tanah atau batuan penyusun lereng.
                </p>
                <br />
                <p>
                  Peristiwa tanah longsor dapat terjadi apabila air yang meresap ke dalam tanah menyebabkan bobot tanah bertambah, kemudian menembus sampai ke bidang gelincir, hingga menyebabkannya bergerak keluar lereng.
                  Apabila gaya pendorong pada lereng lebih besar dari gaya penahan maka terjadilah longsor.
                </p>
                <br />
                <p>
                  Gaya penahan umumnya dipengaruhi oleh kekuatan batuan dan kepadatan tanah. Sedangkan gaya pendorong dipengaruhi oleh besarnya sudut kemiringan lereng, air, beban serta berat jenis tanah batuan.
                  Bencana tanah longsor sering muncul di musim hujan, setelah musim kering yang menyebabkan permukaan tanah retak dan berpori. Saat tanah retak, maka air hujan makin mudah meresap ke bagian dalam tanah, membuat kandungan air dalam tanah menjadi jenuh.
                  Namun, jika ada banyak pohon maka tanah tidak mudah bergerak longsor. Maka itu, penghijauan di daerah perbukitan, pegunungan dan sekitar lereng penting dilakukan.
                </p>
                <br />
                <p>Adapun cara mengurangi risiko tanah longsor ialah sebagai berikut :
                  <ul>
                    <br />
                    <li>1. Tidak membangun rumah atau vila di lereng gunung, sehingga beban tanah di wilayah tersebut bertambah.</li>
                    <li>2. Tidak membuat sawah atau kolam di atas lereng karena air mudah meresap dan menimbulkan retakan di lereng.</li>
                    <li>3. Tidak membuat rumah di daerah bawah tebing atau lereng, untuk menghindari korban jiwa saat sewaktu-waktu terjadi longsor.</li>
                    <li>4. Tidak menebang pohon secara membabi buta di sekitar wilayah lereng, agar akar pepohonan dapat mengikat tanah dan mencegah longsor.</li>
                    <li>5. Menanami daerah lereng gunung dan bukit yang gundul dengan pepohonan, agar tidak terjadi erosi tanah apabila hujan datang.</li>
                    <li>6. Membuat terasering atau sistem tanah bertingkat jika harus menanam padi di lereng bukit. Terasering akan memperlambat aliran air dan tanah saat hujan.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default CoursesCard