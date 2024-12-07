"use clent"
import CallUsBanner from '@/components/About/CallUsButton'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import ProductList from '@/components/Products/ProductList'
import CommonBg from '@/components/UI/CommonBg'
import { StaticImageData } from 'next/image'
import React from 'react'
import img1 from "../../../public/Products Images/Electrical&Lighting/61tNaKTWR3L._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Electrical&Lighting/61ptvGLJAXL._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Electrical&Lighting/61t2m2OSfBS._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Electrical&Lighting/61j80XrOwTL._AC_SL1500_.jpg"
import img5 from "../../../public/Products Images/Electrical&Lighting/explosion-proof-flashlight-nitecore-ef1-atex-certiifed.png.webp"
import img6 from "../../../public/Products Images/Electrical&Lighting/61XRQGCZRUL._AC_SL1152_.jpg"
import img7 from "../../../public/Products Images/Electrical&Lighting/91eS26kOq+L._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Electrical&Lighting/61JllLYlb1L._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Electrical&Lighting/51+ulNt4E6L._AC_SL1000_.jpg"
import img10 from "../../../public/Products Images/Electrical&Lighting/1-newair-high-velocity-fan-windpro18f-hero.webp"
import img11 from "../../../public/Products Images/Electrical&Lighting/H0331ab534f6e40a0ba239013f95e48b3I.webp"
import img12 from "../../../public/Products Images/Electrical&Lighting/71EeZCp7cvL._AC_SL1500_.jpg"
import img13 from "../../../public/Products Images/Electrical&Lighting/315.jpg"
import img14 from "../../../public/Products Images/Electrical&Lighting/61OhHn0g9mL._AC_SL1500_.jpg"
import img15 from "../../../public/Products Images/Electrical&Lighting/KP1013.jpeg"
import img16 from "../../../public/Products Images/Electrical&Lighting/41cUyC1ilXL._AC_SL1000_.jpg"
import img17 from "../../../public/Products Images/Electrical&Lighting/61-598rgAbL._AC_SL1500_.jpg"

type Product = {
  image: StaticImageData; 
  name: string; 
};

function page() {

  const products: Product[] = [
    {
      image: img1,
      name: "LED Flash Light",
    },
    {
      image: img2,
      name: "LED Head Light",
    },
    {
      image: img3,
      name: "LED Work Light",
    },
    {
      image: img4,
      name: "Rechargeable Spotlight",
    },
    {
      image: img5,
      name: "Explotion Proof Flashlight",
    },
    {
      image: img6,
      name: "Emergency Light",
    },
    {
      image: img7,
      name: "Cable Reel",
    },
    {
      image: img8,
      name: "Street Light LED",
    },
    {
      image: img9,
      name: "Solar System",
    },
    {
      image: img10,
      name: "Fan",
    },
    {
      image: img11,
      name: "Industrial Portable Fan HVLS",
    },
    {
      image: img12,
      name: "Pedestal Fan",
    },
    {
      image: img13,
      name: "Misty Fan",
    },
    {
      image: img14,
      name: "Double Fan",
    },
    {
      image: img15,
      name: "Pedestal Drum Fan",
    },
    {
      image: img16,
      name: "HVLS Ceiling Fan",
    },
    {
      image: img17,
      name: "Dehumidifier",
    },
  ]
  
  return (
    <div>
      <Header />
      <Navbar />
      <CommonBg />
        <ProductList products={products}/>
      <CallUsBanner />
      <Footer />
    </div>
  )
}

export default page