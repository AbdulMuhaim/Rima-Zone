import ProductList from '@/components/Products/ProductList'
import React from 'react'
import img1 from "../../../public/Products Images/CleaningEquipments/81DPrEwkLyL._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/CleaningEquipments/71a7yI4pF4L._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/CleaningEquipments/23671_220849_Reinigungswagen.webp"
import img4 from "../../../public/Products Images/CleaningEquipments/515re2tBfiL._SL1000_.jpg"
import img5 from "../../../public/Products Images/CleaningEquipments/51AZtptSuQL._AC_SL1500_.jpg"
import img6 from "../../../public/Products Images/CleaningEquipments/71B2VHG70FL._AC_SL1500_.jpg"
import img7 from "../../../public/Products Images/CleaningEquipments/71NyZcywWRL._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/CleaningEquipments/61xpW8MbESL._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/CleaningEquipments/s-l1600.webp"
import img10 from "../../../public/Products Images/CleaningEquipments/westward-22xp39.jpg"
import img11 from "../../../public/Products Images/CleaningEquipments/390-Statesman.jpg"
import img12 from "../../../public/Products Images/CleaningEquipments/4477298.webp"
import img13 from "../../../public/Products Images/CleaningEquipments/Ruby-50E.jpeg"
import img14 from "../../../public/Products Images/CleaningEquipments/RapidClean-IPC-1250-Ride-On-Sweeper.jpg"

function page() {

    const products = [
      {
        image: img1,
        name: "Hall Mop",
      },
      {
        image: img2,
        name: "Bucket Wringer"
      },
      {
        image: img3,
        name: "Cleaning Trolley"
      },
      {
        image: img4,
        name: "Stainless Bin"
      },
      {
        image: img5,
        name: "Plastic Bin"
      },
      {
        image: img6,
        name: "Vacuum Cleaner"
      },
      {
        image: img7,
        name: "High Pressure Washer"
      },
      {
        image: img8,
        name: "Floor Washer"
      },
      {
        image: img9,
        name: "Scrubber & Polisher"
      },
      {
        image: img10,
        name: "Drain Cleaner"
      },
      {
        image: img11,
        name: "Portable Toilet"
      },
      {
        image: img12,
        name: "Carpet Cleaner"
      },
      {
        image: img13,
        name: "Scrubber Dryer"
      },
      {
        image: img14,
        name: "Ride On Sweeper"
      },
    ]
    
  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default page