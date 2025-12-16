import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Whatsapp from "./Components/Whatsapp";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>Kode Yang INdah Lahir dari ketekunan. 👌</q>
          </div> */}
          <h1 className="text-5xl/tight font-bold mb-6">Master of Ceremony Terbaik Untuk Kesempurnaan Acara Anda</h1>
          <p className="text-3xl/loose mb-6 opacity-50">Profesional & Berpengalaman</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://wa.me/6285854793111?text=Halo, saya ingin informasi tentang layanan MC." className="bg-green-500 p-4 rounded-4xl hover:bg-green-400 transition duration-300 hover:-translate-y-2"><i className="ri-whatsapp-line ri-xl"></i> WhatsApp </a>
            <a href="https://www.instagram.com/yasinahmad_tofa/" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-90 p-4 rounded-4xl hover:opacity-100 transition duration-300 hover:-translate-y-2"><i className="ri-instagram-line ri-xl"></i> Instagram </a>
          </div>
        </div>
        <img src="./image/Kak Yasin & Tofa.png" alt="Hero Image" className="w-[500px] rounded-b-4xl md:ml-auto animate__animated animate__fadeInUp animate__delay-1s animate__slow" loading="lazy"/>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src="./image/Kak Yasin & Tofa.png" alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-4 text-justify">Saya adalah seorang MC dan pendongeng profesional yang telah berkecimpung di dunia event sejak tahun 2014. Perjalanan karier saya dimulai dari berbagai kesempatan memandu acara, baik acara pemerintahan, akad nikah, resepsi pernikahan, hingga kegiatan mendongeng yang membutuhkan kemampuan komunikasi dan penguasaan panggung yang kuat. Dengan pengalaman tersebut, saya terbiasa menyesuaikan gaya pembawaan sesuai dengan karakter dan kebutuhan setiap acara.</p>
          <p className="text-base/loose mb-10 text-justify">Selain aktif di berbagai event, saya juga pernah tampil di TVRI sebagai pembawa acara, yang semakin memperkaya pengalaman saya dalam membawakan acara secara profesional di depan kamera maupun audiens secara langsung. Saya juga pernah mengikuti audisi AKSI pada tahun 20XX, yang menjadi salah satu pengalaman berharga dalam mengasah mental, kepercayaan diri, serta kemampuan berbicara di hadapan publik yang lebih luas. Dengan pengalaman, dedikasi, dan kecintaan pada dunia komunikasi, saya siap membantu menghadirkan acara yang berjalan lancar, berkesan, dan penuh makna.</p>
          <div className="flex items-center justify-between">
            <img src="./image/Kak Yasin & Tofa.png" alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">250<span className="text-amber-500">+</span></h1>
                <p>Acara Sukses</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">10<span className="text-amber-500">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Kelebihan mt-32 justify-items-center">
          <div className="w-full lg:w-fit">
            <div className="text-center">
              <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kenapa Memilih Saya?</h1>
              <p className="text-base" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut keunggulan saya sebagai Master of Ceremony </p>
            </div>
            <div className="kelebihan-box mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                  <i class="ri-star-fill h-fit p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Kualitas</h1>
                  <p className="opacity-50">Kualitas tidak perlu diragukan. Saya telah mengikuti berbagai kursus public speaking, Master of Ceremony, serta aktif dalam berbagai kegiatan dan event, sehingga mampu membawakan acara dengan percaya diri, terstruktur, dan berkelas.</p>
                </div>
              </div>
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                <i class="ri-money-dollar-circle-line p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Harga</h1>
                  <p className="opacity-50">Harga yang ditawarkan sangat kompetitif dan transparan. Anda dapat membandingkannya dengan layanan lain. Berapapun pilihan paketnya, kualitas pelayanan tetap menjadi prioritas utama agar acara Anda berjalan maksimal dan berkesan.</p>
                </div>
              </div>
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                <i class="ri-briefcase-fill h-fit p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Pengalaman</h1>
                  <p className="opacity-50">Pengalaman memandu berbagai acara dengan klien yang tersebar di seluruh Jawa Timur, dari beragam latar belakang dan kebutuhan. Dengan pengalaman tersebut, konsep acara dapat disesuaikan secara matang dan profesional.</p>
                </div>
              </div>
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <i class="ri-time-line h-fit p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Profesional</h1>
                  <p className="opacity-50">Menjunjung tinggi ketepatan waktu, etika kerja, dan tanggung jawab. Setiap acara dipersiapkan dengan serius agar berjalan sesuai rundown dan tanpa kendala.</p>
                </div>
              </div>
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <i class="ri-recycle-line h-fit p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Fleksibelitas</h1>
                  <p className="opacity-50">Mampu menyesuaikan gaya pembawaan dengan konsep acara, baik formal, semi-formal, maupun santai. Setiap acara memiliki karakter unik, dan saya siap menyesuaikannya.</p>
                </div>
              </div>
              <div className="flex items-center sm:items-start sm:justify-center gap-4 border border-amber-500 rounded-xl hover:bg-amber-500/10 p-6 rounded-md group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <i className="ri-shake-hands-line p-1 text-6xl bg-amber-500/10 rounded-xl group-hover:bg-amber-500/40 transition duration-300 ease-in-out"></i>
                <div>
                  <h1 className="font-bold text-2xl">Komunikatif</h1>
                  <p className="opacity-50">Mampu membangun suasana, berinteraksi dengan audiens, serta menjaga energi acara tetap hidup tanpa menghilangkan kesan profesional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Welcome Note */}
      <div className="welcome-note mt-32">
        <div className="bg-zinc-800 rounded-md py-10 px-7 lg:w-2/3 w-full mx-auto flex flex-col lg:gap-10 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-4xl font-bold mb-4 text-center underline decoration-amber-500 decoration-3 underline-offset-4">Welcome Notes!</h1>
          <div className="xl:flex gap-3 items-center">
            <img src="./image/img3.jpg" alt="Ini Gambar" width="300px" className="block mx-auto border p-2 xl:mx-0 xl:ml-3"/>
            <div className="p-2">
              <p className="text-base/loose opacity-50 mx-auto text-justify mt-4 xl:mt-0">"Selamat datang di website kami. Anda telah mengambil keputusan yang tepat dengan mengunjungi website ini. Kami hadir sebagai solusi bagi Anda yang sedang mencari referensi Jasa MC profesional untuk mempersiapkan acara Anda. Percayakan momen penting Anda kepada kami, dan biarkan kami membantu mewujudkan acara yang berkesan dan berjalan dengan sempurna.</p>
              <p className="text-base/loose opacity-50 mx-auto text-justify mt-4">
              Kira-kira acara apa saja yang bisa dilayani oleh Jasa MC kami? Kami bisa membantu dalam acara Pernikahan, Resepsi, Akad Nikah, Lamaran, Tunangan, Gathering, Kegiatan Protokoler, dan Pesta."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Note */}

      {/* Galery */}
      <div className="galery mt-32 py-10" id="galeri">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Galeri</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut beberapa momen saat saya memandu berbagai acara</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img2.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img4.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img5.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img7.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img1.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
          <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
            <img src="./image/img9.jpg" alt="Proyek Image" loading="lazy"/>
          </div>
        </div>
      </div>
      {/* Galery */}
      <Whatsapp phone="+6285854793111" message="Halo, saya ingin informasi tentang layanan MC." />
    </>
  )
}

export default App
