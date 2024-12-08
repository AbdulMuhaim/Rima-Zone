"use client";
import React from "react";
import img1 from "../../../public/Products Images/Adhesive&Sealant/Infinity-Bond-Medica-Device-1LB_600x.webp";
import img2 from "../../../public/Products Images/Adhesive&Sealant/loctite-263-threadlocker-50ml.jpg";
import img3 from "../../../public/Products Images/Adhesive&Sealant/165918363720220730.jpg";
import img4 from "../../../public/Products Images/Adhesive&Sealant/henkel-loctite-anaerobic-adhesive-1835206.webp";
import img5 from "../../../public/Products Images/Adhesive&Sealant/71dwy48j9bL._SL1500_.jpg";
import img6 from "../../../public/Products Images/Adhesive&Sealant/513XgasMPbL._AC_SL1024_.jpg";
import img7 from "../../../public/Products Images/Adhesive&Sealant/410KU0XPdWL._AC_.jpg";
import img8 from "../../../public/Products Images/Adhesive&Sealant/61H0sLtdfhL._AC_SL1500_.jpg";
import img9 from "../../../public/Products Images/Adhesive&Sealant/71isXumZCcL._AC_SL1500_.jpg";
import img10 from "../../../public/Products Images/Adhesive&Sealant/614tOlmfksL._SL1500_.jpg";
import img11 from "../../../public/Products Images/Adhesive&Sealant/715yBTIsFkL._AC_SL1500_.jpg";
import img12 from "../../../public/Products Images/Adhesive&Sealant/61Y7dtPqNbL._AC_SL1000_.jpg";
import img13 from "../../../public/Products Images/Adhesive&Sealant/61YGWwhLKSL._SL1405_.jpg";
import img14 from "../../../public/Products Images/Adhesive&Sealant/premium-window-door-hybrid-polymer-sealant-product-image-1.avif";


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
      name: "Cyanoacrylate",
    },
    {
      image: img2,
      name: "Threadlocker",
    },
    {
      image: img3,
      name: "Flexible Gasket",
    },
    {
      image: img4,
      name: "Retaining Compound",
    },
    {
      image: img5,
      name: "Epoxy Adhesive",
    },
    {
      image: img6,
      name: "Hot Melt Glue Sticks",
    },
    {
      image: img7,
      name: "Acrylic Adhesive",
    },
    {
      image: img8,
      name: "Contact Adhesive",
    },
    {
      image: img9,
      name: "Silicone Sealant",
    },
    {
      image: img10,
      name: "Polyurethane Sealant",
    },
    {
      image: img11,
      name: "Acrylic Latex Caulk",
    },
    {
      image: img12,
      name: "Butyl Sealant",
    },
    {
      image: img13,
      name: "M-Seal",
    },
    {
      image: img14,
      name: "Hybrid Polymer Sealants",
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
