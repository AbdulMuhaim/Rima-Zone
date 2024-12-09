"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

import img1 from "../../../public/Products Images/Packing Equipment/61V-Xyzjo8L._AC_SL1000_.jpg"
import img2 from "../../../public/Products Images/Packing Equipment/71I5-QR3-oS._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Packing Equipment/61WNja-w1NS._AC_SL1200_.jpg"
import img4 from "../../../public/Products Images/Packing Equipment/1000x652_14fb27d51d551b5cc0df6eacb4cf512b.jpg"
import img5 from "../../../public/Products Images/Packing Equipment/41v23jPdFxL._AC_.jpg"
import img6 from "../../../public/Products Images/Packing Equipment/pCv31FBZPeyKJHUWnCSaCC8DvuZUUU2xDsmoBVz1.webp"
import img7 from "../../../public/Products Images/Packing Equipment/1010_1024x1024.webp"
import img8 from "../../../public/Products Images/Packing Equipment/716wKHm6mUL._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Packing Equipment/carton-sealer-GPA-50-0.jpg"
import img10 from "../../../public/Products Images/Packing Equipment/SWM-SA-0800.webp"




type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Strapping Tools",
    },
    {
      image: img2,
      name: "Plastic Sealer",
    },
    {
      image: img3,
      name: "Vaccum Packing",
    },
    {
      image: img4,
      name: "Strapping Machine",
    },
    {
      image: img5,
      name: "Pedal Sealer",
    },
    {
      image: img6,
      name: "Thermal Shrink Packing Machine",
    },
    {
      image: img7,
      name: "Vertical Vaccum Sealer",
    },
    {
      image: img8,
      name: "Continuous Sealer",
    },
    {
      image: img9,
      name: "Cartoon Sealer",
    },
    {
      image: img10,
      name: "Pallet Wrapping Machine",
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
