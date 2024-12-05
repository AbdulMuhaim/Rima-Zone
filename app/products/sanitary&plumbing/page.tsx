import ProductList from '@/components/Products/ProductList'
import React from 'react'
import img1 from "../../../public/Products Images/Plumbing&Sanitary/81syHA1+aEL._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Plumbing&Sanitary/T0337W-G.webp"
import img3 from "../../../public/Products Images/Plumbing&Sanitary/71TpBCuQ01L._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Plumbing&Sanitary/71Wa6WiS2cL._AC_SL1500_.jpg"
import img5 from "../../../public/Products Images/Plumbing&Sanitary/31025.jpg"
import img6 from "../../../public/Products Images/Plumbing&Sanitary/51q2UxScTPL._AC_SL1500_.jpg"
import img7 from "../../../public/Products Images/Plumbing&Sanitary/61XHyrVj-IL._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Plumbing&Sanitary/81hO76ZJmqL._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Plumbing&Sanitary/51KuUena+TS._AC_SL1100_.jpg"
import img10 from "../../../public/Products Images/Plumbing&Sanitary/61vbhbgclOL._AC_SL1500_.jpg"
import img11 from "../../../public/Products Images/Plumbing&Sanitary/41XjbxyuQpL._AC_SL1037_.jpg"
import img12 from "../../../public/Products Images/Plumbing&Sanitary/510dGeW-YTL._AC_SL1500_.jpg"
import img13 from "../../../public/Products Images/Plumbing&Sanitary/81Dwcq8Qj-L._AC_SL1500_.jpg"
import img14 from "../../../public/Products Images/Plumbing&Sanitary/61KsaS6cFDL._AC_SL1500_.jpg"
import img15 from "../../../public/Products Images/Plumbing&Sanitary/71RLeYcJvQS._AC_SL1500_.jpg"
import img16 from "../../../public/Products Images/Plumbing&Sanitary/81BpjeB6lnL._AC_SL1500_.jpg"
import img17 from "../../../public/Products Images/Plumbing&Sanitary/611pIOiO3nL._AC_SL1382_.jpg"
import img18 from "../../../public/Products Images/Plumbing&Sanitary/81Z-hzOGiuL._AC_SL1500_.jpg"
import img20 from "../../../public/Products Images/Plumbing&Sanitary/hottubjacuzzi.webp"
import img21 from "../../../public/Products Images/Plumbing&Sanitary/brogrund-towel-holder-3-bars-stainless-steel__1084293_pe859573_s5.avif"
import img22 from "../../../public/Products Images/Plumbing&Sanitary/51bzW+5-FdL._AC_SL1500_.jpg"
import img23 from "../../../public/Products Images/Plumbing&Sanitary/jpeg-optimizer_MainImage_dea5873a-b4c4-4733-8970-d51f80212ea8.jpg"
import img24 from "../../../public/Products Images/Plumbing&Sanitary/91Gr-p-+3kL._AC_SL1500_.jpg"
import img25 from "../../../public/Products Images/Plumbing&Sanitary/61EXARQlffL._AC_SL1500_.jpg"
import img26 from "../../../public/Products Images/Plumbing&Sanitary/zurn-z5738-205-00-38zl45.jpg"
import img27 from "../../../public/Products Images/Plumbing&Sanitary/61HJdYnJf2L._AC_SL1500_.jpg"
import img28 from "../../../public/Products Images/Plumbing&Sanitary/61EMSLuLHfL._AC_SL1500_.jpg"
import img29 from "../../../public/Products Images/Plumbing&Sanitary/vattudalen-inset-sink-1-1-2-bowl-w-drainboard-stainless-steel__0754695_pe748046_s5.avif"
import img30 from "../../../public/Products Images/Plumbing&Sanitary/nysjoen-mirror-cabinet-white__0971580_pe811387_s5.avif"
import img31 from "../../../public/Products Images/Plumbing&Sanitary/aengsjoen-backsjoen-wash-stand-wash-basin-tap-oak-effect-white-marble-effect__1208659_pe908700_s5.avif"
import img32 from "../../../public/Products Images/Plumbing&Sanitary/61ltEFMAn5L._AC_SL1500_.jpg"

function page() {

    const products = [
       {
        image:img1 ,
        name:"Wall-Mounted Toilets"
       },
       {
        image:img2 ,
        name:"Floor-Mounted Toilets"
       },
       {
        image:img3 ,
        name:"Smart Toilets"
       },
       {
        image:img4 ,
        name:"Bidet Sprays"
       },
       {
        image:img5 ,
        name:"Pedestal Basins"
       },
       {
        image:img6 ,
        name:"Countertop Basins"
       },
       {
        image:img7 ,
        name:"Wall-Mounted Basins"
       },
       {
        image:img8 ,
        name:"Under-Mount Basins"
       },
       {
        image:img9 ,
        name:"Single-Lever Mixers"
       },
       {
        image:img10 ,
        name:"Wall-Mounted Taps"
       },
       {
        image:img11 ,
        name:"Sensor Faucets"
       },
       {
        image:img12 ,
        name:"Kitchen Sink Faucets"
       },
       {
        image:img13 ,
        name:"Overhead Showers"
       },
       {
        image:img14 ,
        name:"Hand Showers"
       },
       {
        image:img15 ,
        name:"Shower Panels"
       },
       {
        image:img16 ,
        name:"Rain Showers"
       },
       {
        image:img17 ,
        name:"Freestanding Bathtubs"
       },
       {
        image:img18 ,
        name:"Built-in Bathtubs"
       },
       {
        image:img20 ,
        name:"Jacuzzi Tubs"
       },
       {
        image:img21 ,
        name:"Towel Holders"
       },
       {
        image:img22 ,
        name:"Soap Dispensers"
       },
       {
        image:img23 ,
        name:"Toilet Paper Holders"
       },
       {
        image:img24 ,
        name:"Robe Hooks"
       },
       {
        image:img25 ,
        name:"Water-Saving Dual Flush Systems"
       },
       {
        image:img26 ,
        name:"Urinals with Automatic Flushing Systems"
       },
       {
        image:img27 ,
        name:"Drainage Pipes"
       },
       {
        image:img28 ,
        name:"Gully Traps"
       },
       {
        image:img29 ,
        name:"Sinks with Garbage Disposals"
       },
       {
        image:img30 ,
        name:"Mirror Cabinets"
       },
       {
        image:img31 ,
        name:"Vanity Units"
       },
       {
        image:img32 ,
        name:"Exhaust Fans"
       },

    ]

  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default page