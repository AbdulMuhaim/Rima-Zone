"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

import img1 from "../../../public/Products Images/Storage Systems/euro-locker-single-column-1-door-starter-add-on-1000x1000.webp"
import img2 from "../../../public/Products Images/Storage Systems/b6c465d1-244d-4993-bbcd-5655dfb4c5bf_10091462_1.jpg"
import img3 from "../../../public/Products Images/Storage Systems/3-WideShort.jpg"
import img4 from "../../../public/Products Images/Storage Systems/5-tiers-abs-1.jpg"
import img5 from "../../../public/Products Images/Storage Systems/H100b3fcc22f94e1dba31bbda8d7c6b610.jpg_720x720q50.avif"
import img6 from "../../../public/Products Images/Storage Systems/GUEST_46126e9d-c80e-4bc3-a213-b81df4c9a258.webp"
import img7 from "../../../public/Products Images/Storage Systems/61N2EvC2w7L._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Storage Systems/71evior3v2L._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Storage Systems/H100b3fcc22f94e1dba31bbda8d7c6b610.jpg_720x720q50.avif"
import img10 from "../../../public/Products Images/Storage Systems/htc-ttx-329016-tactix-5-shelf-rack-black-1579155910.webp"
import img11 from "../../../public/Products Images/Storage Systems/053ECF0500015_1_9.avif"
import img12 from "../../../public/Products Images/Storage Systems/32a8b8f8-abcb-4dcd-8e0c-347898020e85_10092049_1.jpg"
import img13 from "../../../public/Products Images/Storage Systems/f91826f8-2b05-4ae5-b13c-e9f427295436_10143930.jpg"






type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Single Column Locker",
    },
    {
      image: img2,
      name: "Multi Column Locker",
    },
    {
      image: img3,
      name: "Locker Short",
    },
    {
      image: img4,
      name: "Abs Locker",
    },
    {
      image: img5,
      name: "File Cabinet",
    },
    {
      image: img6,
      name: "Drawer Cabinet",
    },
    {
      image: img7,
      name: "Server Rack",
    },
    {
      image: img8,
      name: "Janitor Cabinet",
    },
    {
      image: img9,
      name: "Fire Cabinet",
    },
    {
      image: img10,
      name: "Steel Shelving",
    },
    {
      image: img11,
      name: "Book Shelf",
    },
    {
      image: img12,
      name: "Mobile Filling Cabinet 3 Bays",
    },
    {
      image: img13,
      name: "Mobile Filling Cabinet 2 Bays",
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
