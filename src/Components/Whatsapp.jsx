import React, { useState, useEffect } from 'react';

const Whatsapp = ({ phone = '+628123456789', message = 'Halo, saya ingin informasi tentang layanan MC.' }) => {
  const phoneDigits = phone.replace(/\D/g, '')
  const href = `https://wa.me/${phoneDigits}${message ? '?text=' + encodeURIComponent(message) : ''}`

  const [active, setActive] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) {
          setActive(true);
        } else {
          setActive(false);
        }
      };

      // run once on mount to set initial visibility if page is already scrolled
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat via WhatsApp"
      aria-hidden={!active}
      className={`fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]/40 ${active ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="ri-whatsapp-line text-4xl"></i>
    </a>
  )
}

export default Whatsapp