"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";

import img1 from "../../../public/Products Images/Security Products/61dFkXOnxZL._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Security Products/61wH2GgiyYL._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Security Products/71DHd6GiAWL._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Security Products/81qRrKO1vTL._AC_SL1500_.jpg"
import img5 from "../../../public/Products Images/Security Products/frc1-3.jpg"
import img6 from "../../../public/Products Images/Security Products/USA23-TextBlack-ChromeElectronic-Open_2048x.webp"
import img7 from "../../../public/Products Images/Security Products/317N1iz7GcL._AC_.jpg"
import img8 from "../../../public/Products Images/Security Products/61WJeXqKg3L._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Security Products/61T8lbwkE0L._AC_SL1500_.jpg"
import img10 from "../../../public/Products Images/Security Products/10080B.webp"





type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Padlock",
    },
    {
      image: img2,
      name: "Key Cabinet",
    },
    {
      image: img3,
      name: "Cash Box",
    },
    {
      image: img4,
      name: "Fire Safe Box",
    },
    {
      image: img5,
      name: "Fire Resistant Filling Cabinet",
    },
    {
      image: img6,
      name: "Fire Resistant Gun Safe",
    },
    {
      image: img7,
      name: "Under Vehicle Inspection Mirror",
    },
    {
      image: img8,
      name: "Hand Held Metal Detector",
    },
    {
      image: img9,
      name: "Metal Detector Walk Through",
    },
    {
      image: img10,
      name: "XRay Baggage ",
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
