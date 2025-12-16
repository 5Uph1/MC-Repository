import {useState, useEffect} from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="navbar py-7 flex justify-between items-center">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-yellow-600 text-white p-1 md:bg-transparent md:text-yellow-600">LOGO</h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 -top-10 opacity-0 md:opacity-100 bg-amber-300/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all z-40 ${active ? 'top-0 opacity-100' : '-top-10 opacity-0'}`}>
                <a href="#beranda" className="text-white hover:text-amber-500 transition duration-300 ease-in-out sm:text-lg text-base font-semibold"><i className="hidden md:inline-block ri-home-9-fill px-2"></i> Beranda</a>
                <a href="#tentang" className="text-white hover:text-amber-500 transition duration-300 ease-in-out sm:text-lg text-base font-medium"><i class="ri-user-3-fill hidden md:inline-block px-2"></i> Tentang</a>
                <a href="#galeri" className="text-white hover:text-amber-500 transition duration-300 ease-in-out sm:text-lg text-base font-medium"><i class="ri-gallery-fill hidden md:inline-block px-2"></i> Galeri</a>
                <a href="https://wa.me/6285854793111?text=Halo, saya ingin informasi tentang layanan MC." className="text-white hover:text-amber-500 transition duration-300 ease-in-out sm:text-lg text-base font-medium"><i class="ri-contacts-fill hidden md:inline-block px-2"></i>Kontak</a>
        </ul>
    </div>
  )
}

export default Navbar