"use client";
import React from "react";
import img1 from "../../../public/Products Images/Air Compressor/00590-wm-2.jpg";
import img2 from "../../../public/Products Images/Air Compressor/BIG.jpg";
import img3 from "../../../public/Products Images/Air Compressor/1-3-HP-SINGLE-STAGE-BELT-DRIVEN.png";
import img4 from "../../../public/Products Images/Air Compressor/rotary-screw-compressors.png";
import img5 from "../../../public/Products Images/Air Compressor/belt-driven-two-stage-twin-cylinder-compressor-55-hp-270-l-tank-weagora-1_700x.jpg";
import img6 from "../../../public/Products Images/Air Compressor/H57bf6da60fa0470caaaf7a298dbbfe0ao.jpg_720x720q50.avif";
import img7 from "../../../public/Products Images/Air Compressor/image_1_1605864502.jpeg";
import img8 from "../../../public/Products Images/Air Compressor/WEB-Cleveland-Compressed-Air-03-15-28.jpg";
import img9 from "../../../public/Products Images/Air Compressor/9b475b4a-668b-47bb-aa8c-217e2cb0c5c0_KW1200226.jpg";
import img10 from "../../../public/Products Images/Air Compressor/81Sfqrn1-nL._SL1500_.jpg";
import img11 from "../../../public/Products Images/Air Compressor/715ZR6CJ0CL._AC_SL1500_.jpg";
import img12 from "../../../public/Products Images/Air Compressor/breathing-air-filter-cartridge.jpeg";



import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

type Product = {
  image: StaticImageData; 
  name: string; 
};


function page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Direct Driven Oilless",
    },
    {
      image: img2,
      name: "Direct Driven Oil Lubricated",
    },
    {
      image: img3,
      name: "Belt Driven One Stage",
    },
    {
      image: img4,
      name: "Screw Compressor",
    },
    {
      image: img5,
      name: "Belt Driven Two Stage",
    },
    {
      image: img6,
      name: "Belt Driven With Gasoline and Diesel",
    },
    {
      image: img7,
      name: "Screw Compressor VSD",
    },
    {
      image: img8,
      name: "Air Dryer and Air Storage Tank",
    },
    {
      image: img9,
      name: "Iron Air Duster",
    },
    {
      image: img10,
      name: "Filter Regulator",
    },
    {
      image: img11,
      name: "Recoil Hose",
    },
    {
      image: img12,
      name: "Air Filter Catridge",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <CommonBg />
        <ProductList products={products}/>
      <CallUsBanner />
      <Footer />    
      </div>
  );
}

export default page;
