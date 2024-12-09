"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import img1 from "../../../public/Products Images/Cutting Tools/71cfSU6EY8L._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Cutting Tools/61NpPqK5mcL._SL1500_.jpg"
import img3 from "../../../public/Products Images/Cutting Tools/71G7MkPNa4L._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Cutting Tools/clean_67_26_1.webp"
import img5 from "../../../public/Products Images/Cutting Tools/R7932601-02.webp"
import img6 from "../../../public/Products Images/Cutting Tools/61eja7yvJbL._SL1001_.jpg"
import img7 from "../../../public/Products Images/Cutting Tools/81pbmFD0arL._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Cutting Tools/51xp0dvw9JL._SL1000_.jpg"
import img9 from "../../../public/Products Images/Cutting Tools/end-mills-group.jpg"
import img10 from "../../../public/Products Images/Cutting Tools/61MSJv3sv+L._AC_SL1200_.jpg"
import img11 from "../../../public/Products Images/Cutting Tools/61keiVuftAL._SL1201_.jpg"




type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Drill Bit",
    },
    {
      image: img2,
      name: "Hole Cutter",
    },
    {
      image: img3,
      name: "Blade",
    },
    {
      image: img4,
      name: "Core Drill",
    },
    {
      image: img5,
      name: "Multi Cutter",
    },
    {
      image: img6,
      name: "Wood and Tile Drill Set",
    },
    {
      image: img7,
      name: "Saw Blade",
    },
    {
      image: img8,
      name: "Set of Lathe Tool Kit",
    },
    {
      image: img9,
      name: "End Mill",
    },
    {
      image: img10,
      name: "Tap And Tie",
    },
    {
      image: img11,
      name: "Carbide End Mill",
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
