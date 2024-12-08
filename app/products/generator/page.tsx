"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import img1 from "../../../public/Products Images/Generator/71AU0vAPoTL._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Generator/61BvGVfachL._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Generator/medium-duty-generator-1000x1000.jpg"
import img4 from "../../../public/Products Images/Generator/heavy-duty-silent-generator-1000x1000.webp"
import img5 from "../../../public/Products Images/Generator/open25.webp"
import img6 from "../../../public/Products Images/Generator/Hilight-V5-plus-light-tower.webp"



type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Home and Portable Open",
    },
    {
      image: img2,
      name: "Home and Portable Silent",
    },
    {
      image: img3,
      name: "Middle Duty",
    },
    {
      image: img4,
      name: "Heavy Duty Silent",
    },
    {
      image: img5,
      name: "Heavy Duty Open",
    },
    {
      image: img6,
      name: "Tower Light",
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
