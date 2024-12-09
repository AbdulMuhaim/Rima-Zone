"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import img1 from "../../../public/Products Images/Painting&Coating/61LlLeIgoJS._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Painting&Coating/71qByQG-MZL._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Painting&Coating/P6PRO-with-A7700QT-500x500.webp"
import img4 from "../../../public/Products Images/Painting&Coating/tcppt8312_v1_1800x1800.webp"
import img5 from "../../../public/Products Images/Painting&Coating/91bhEeyniSL._AC_SL1500_.jpg"
import img6 from "../../../public/Products Images/Painting&Coating/painting-accessories-1.jpg"
import img7 from "../../../public/Products Images/Painting&Coating/22.jpg"
import img8 from "../../../public/Products Images/Painting&Coating/3114edbf-f1b9-42df-9454-1fda082c295b_KW1200232_1.jpeg"
import img9 from "../../../public/Products Images/Painting&Coating/61Wt-9CelIL._AC_SL1500_.jpg"
import img10 from "../../../public/Products Images/Painting&Coating/61L8bpTgFQL._AC_SL1000_.jpg"
import img11 from "../../../public/Products Images/Painting&Coating/51BWRHTCtUL.SS700.jpg"
import img12 from "../../../public/Products Images/Painting&Coating/71dqf8irGNL._AC_SL1500_.jpg"
import img13 from "../../../public/Products Images/Painting&Coating/71T-G5MEABL._AC_SL1500_.jpg"
import img14 from "../../../public/Products Images/Painting&Coating/s-l960.webp"
import img15 from "../../../public/Products Images/Painting&Coating/H014b72297aa74c4d90dbade45178e7ebO.jpg_720x720q50.avif"
import img16 from "../../../public/Products Images/Painting&Coating/Reciprocator-XT-SJ-2000-3-1.jpg"




type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Spray Gun",
    },
    {
      image: img2,
      name: "Electric Paint Sprayer",
    },
    {
      image: img3,
      name: "HVLP Turbine Spray",
    },
    {
      image: img4,
      name: "Spray Gun With Tank",
    },
    {
      image: img5,
      name: "Air Tool Kit",
    },
    {
      image: img6,
      name: "Painting Accessories",
    },
    {
      image: img7,
      name: "Pressure Tank",
    },
    {
      image: img8,
      name: "Air Glue Gun Bottom",
    },
    {
      image: img9,
      name: "Air Diaphragm Pump",
    },
    {
      image: img10,
      name: "Air Agitator",
    },
    {
      image: img11,
      name: "Viscosity Cup",
    },
    {
      image: img12,
      name: "Sand Blasting Kit",
    },
    {
      image: img13,
      name: "Airless",
    },
    {
      image: img14,
      name: "Powder Coating",
    },
    {
      image: img15,
      name: "Electrostatic Liquid Spary Gun",
    },
    {
      image: img16,
      name: "Reciprocator",
    },

  ];


  return (
 
    <div>
      <Header />
      <Navbar />
      <CommonBg />
        <ProductList products={products}/>
      <CallUsBanner />
      <Footer />    </div>
  );
}

export default Page;
