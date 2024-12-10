"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

import img1 from "../../../public/Products Images/Welding/HAN0115-MESIN-LAS-HAN-SHEN-MMA-200-A.jpg"





type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "MMA Welding DC Inverter",
    },
    // {
    //   image: img2,
    //   name: "Key Cabinet",
    // },
    // {
    //   image: img3,
    //   name: "Cash Box",
    // },
    // {
    //   image: img4,
    //   name: "Fire Safe Box",
    // },
    // {
    //   image: img5,
    //   name: "Fire Resistant Filling Cabinet",
    // },
    // {
    //   image: img6,
    //   name: "Fire Resistant Gun Safe",
    // },
    // {
    //   image: img7,
    //   name: "Under Vehicle Inspection Mirror",
    // },
    // {
    //   image: img8,
    //   name: "Hand Held Metal Detector",
    // },
    // {
    //   image: img9,
    //   name: "Metal Detector Walk Through",
    // },
    // {
    //   image: img10,
    //   name: "XRay Baggage ",
    // },
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
