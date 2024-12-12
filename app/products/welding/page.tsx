"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

import img1 from "../../../public/Products Images/Welding/HAN0115-MESIN-LAS-HAN-SHEN-MMA-200-A.jpg"
import img2 from "../../../public/Products Images/Welding/welder-generator-stick-tig-kit-twg210a-tomahawk-power-main-wheels_600x.webp"
import img3 from "../../../public/Products Images/Welding/61PoBGe1dCS._AC_SL1024_.jpg"
import img4 from "../../../public/Products Images/Welding/71iIS+joknL._AC_SL1500_.jpg"
import img5 from "../../../public/Products Images/Welding/deca-miga-215-multiprocess-welding-machine-mma-mig-mag-tig.jpg"
import img6 from "../../../public/Products Images/Welding/71u+Fq79r2L._AC_SL1500_.jpg"
import img7 from "../../../public/Products Images/Welding/61q6NSY3FPL._AC_SL1200_.jpg"
import img8 from "../../../public/Products Images/Welding/61me1HjltTL._AC_SL1001_.jpg"
import img9 from "../../../public/Products Images/Welding/71BHse8DrZL._AC_SL1500_.jpg"
import img10 from "../../../public/Products Images/Welding/Welding-Mother-Oven-4.jpg"
import img11 from "../../../public/Products Images/Welding/Regulator-1022x1024.png"
import img12 from "../../../public/Products Images/Welding/ok2-1000x668.jpg"
import img13 from "../../../public/Products Images/Welding/41acRxIaNSL._AC_.jpg"
import img14 from "../../../public/Products Images/Welding/GYS-consumables-compulation.jpg"





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
    {
      image: img2,
      name: "Engine Driven Welding",
    },
    {
      image: img3,
      name: "Tig Welding",
    },
    {
      image: img4,
      name: "Inverter Plasma Cutting",
    },
    {
      image: img5,
      name: "Multiprocess Welding",
    },
    {
      image: img6,
      name: "Mig Mag Welding",
    },
    {
      image: img7,
      name: "Spot Welding",
    },
    {
      image: img8,
      name: "Dent Pull Welding",
    },
    {
      image: img9,
      name: "Gas Cutting",
    },
    {
      image: img10,
      name: "Dryer and Oven Electrode",
    },
    {
      image: img11,
      name: "Regulator",
    },
    {
      image: img12,
      name: "Ground Clamp",
    },
    {
      image: img13,
      name: "Electrode Holder",
    },
    {
      image: img14,
      name: "Welding Consumable",
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
