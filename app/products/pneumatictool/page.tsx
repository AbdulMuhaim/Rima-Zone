"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import img1 from "../../../public/Products Images/Pneumatic Tools/41oI3m8NVZL._AC_.jpg"
import img2 from "../../../public/Products Images/Pneumatic Tools/ag-180e-3v.webp"
import img3 from "../../../public/Products Images/Pneumatic Tools/61UM8DoKPdL._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Pneumatic Tools/71GHhqiG+7L._AC_SL1347_.jpg"
import img5 from "../../../public/Products Images/Pneumatic Tools/61FUl3YrvXL._AC_SL1001_.jpg"
import img6 from "../../../public/Products Images/Pneumatic Tools/61U2zg9G8oL._AC_SL1500_.jpg"
import img7 from "../../../public/Products Images/Pneumatic Tools/61gEsxRZZwL._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Pneumatic Tools/51FgqKPiJdL._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Pneumatic Tools/619YfsKSvtL._AC_SL1231_.jpg"
import img10 from "../../../public/Products Images/Pneumatic Tools/51MKlduwKxL._AC_SL1000_.jpg"




type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Air Drill",
    },
    {
      image: img2,
      name: "Air Angle Grinder",
    },
    {
      image: img3,
      name: "Air Die Grinder",
    },
    {
      image: img4,
      name: "Air Impact Wrench",
    },
    {
      image: img5,
      name: "Air Screwdriver",
    },
    {
      image: img6,
      name: "Air Orbital Sander",
    },
    {
      image: img7,
      name: "Air Needle Scaler",
    },
    {
      image: img8,
      name: "Air Hammer",
    },
    {
      image: img9,
      name: "Air Coil Nailer",
    },
    {
      image: img10,
      name: "Spring Balancer",
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
