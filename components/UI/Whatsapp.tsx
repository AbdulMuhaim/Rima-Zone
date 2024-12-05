import React from 'react'
import Image from "next/image";
import whatsappLogo from "../../public/WhatsApp.svg.png";

function Whatsapp() {
  return (
    <div className="fixed z-20 p-3 flex items-center justify-center rounded-full left-4 sm:left-10 bottom-10 animate-pulse-border">
    <a
      href="https://api.whatsapp.com/send?phone=966534144479"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={whatsappLogo}
        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
        alt="WhatsApp Logo"
      />
    </a>
  </div>
  )
}

export default Whatsapp