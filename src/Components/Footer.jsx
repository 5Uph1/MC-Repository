const Footer = () => {
  return (
    <div>
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <div className="flex gap-7">
              <a href="#beranda">Beranda</a>
              <a href="#tentang">Tentang</a>
              <a href="#galeri">Galeri</a>
          </div>
          <div className="flex items-center gap-3">
              <a href="https://wa.me/6285854793111?text=Halo, saya ingin informasi tentang layanan MC."><i className="ri-whatsapp-fill ri-2x"></i></a>
              <a href="https://www.instagram.com/yasinahmad_tofa/"><i className="ri-instagram-fill ri-2x"></i></a>
              <a href="https://t.me/6285854793111"><i className="ri-telegram-fill ri-2x"></i></a>
              <a href="https://www.tiktok.com/@yasinnahmad_1"><i className="ri-tiktok-fill ri-2x"></i></a>
          </div>
      </div>
    </div>
  )
}

export default Footer