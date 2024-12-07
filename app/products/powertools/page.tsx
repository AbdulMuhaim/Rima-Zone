"use client";
import ProductList from "@/components/Products/ProductList";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import img1 from "../../../public/Products Images/Powertools/71mgFawreRL._AC_SL1500_.jpg"
import img2 from "../../../public/Products Images/Powertools/71GgTHXjPgL._AC_SL1500_.jpg"
import img3 from "../../../public/Products Images/Powertools/61ag--NcchL._AC_SL1500_.jpg"
import img4 from "../../../public/Products Images/Powertools/71A96aRhgxL._AC_SL1500_.jpg"
import img5 from "../../../public/Products Images/Powertools/c7aad65e-cda4-4001-8edc-a88427f35717_10124008_1.jpg"
import img6 from "../../../public/Products Images/Powertools/81yOWJgweKS._AC_SL1500_.jpg"
import img7 from "../../../public/Products Images/Powertools/51VH1eM8mNL._AC_SL1500_.jpg"
import img8 from "../../../public/Products Images/Powertools/61uOm59NvxL._AC_SL1500_.jpg"
import img9 from "../../../public/Products Images/Powertools/811JuRC3c9L._AC_SL1500_.jpg"
import img10 from "../../../public/Products Images/Powertools/81yPBvme1jL._AC_SL1500_.jpg"
import img11 from "../../../public/Products Images/Powertools/71Zbb0dM8eL._AC_SL1500_.jpg"
import img12 from "../../../public/Products Images/Powertools/71ukIgyKToL._AC_SL1500_.jpg"
import img13 from "../../../public/Products Images/Powertools/51rN2DylZEL._AC_SL1500_.jpg"
import img14 from "../../../public/Products Images/Powertools/51G+5d6g53L._AC_SL1000_.jpg"
import img15 from "../../../public/Products Images/Powertools/71yxGC80HGL._AC_SL1500_.jpg"
import img16 from "../../../public/Products Images/Powertools/41LqfJiIX2L._AC_SL1000_.jpg"
import img17 from "../../../public/Products Images/Powertools/6185ymotq8L._AC_SL1500_.jpg"
import img18 from "../../../public/Products Images/Powertools/71u1eUXfXDL._AC_SL1500_.jpg"
import img19 from "../../../public/Products Images/Powertools/81fw6LnrSTS._AC_SL1500_.jpg"
import img20 from "../../../public/Products Images/Powertools/71ASztESGES._AC_SL1500_.jpg"
import img21 from "../../../public/Products Images/Powertools/61CDnu0qiwL._AC_SL1500_.jpg"
import img22 from "../../../public/Products Images/Powertools/81x6e+yhQnL._AC_SL1344_.jpg"
import img23 from "../../../public/Products Images/Powertools/81F1lWOckbL._AC_SL1500_.jpg"


type Product = {
  image: StaticImageData; 
  name: string; 
};

function Page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Air Screwdriver",
    },
    {
      image: img2,
      name: "Cordless Glue Gun",
    },
    {
      image: img3,
      name: "Cordless Mini Grinder",
    },
    {
      image: img4,
      name: "Cordless Sander",
    },
    {
      image: img5,
      name: "Cordless Dual Function Saw",
    },
    {
      image: img6,
      name: "Cordless Impact Drill",
    },
    {
      image: img7,
      name: "Cordless Multi Cutter",
    },
    {
      image: img8,
      name: "Cordless Impact Wrench",
    },
    {
      image: img9,
      name: "Electric Drill and Impact Drill",
    },
    {
      image: img10,
      name: "Rotary Hammer Drill",
    },
    {
      image: img11,
      name: "Demolition Hammer",
    },
    {
      image: img12,
      name: "Magnetic Core Drill",
    },
    {
      image: img13,
      name: "Angle Grinder",
    },
    {
      image: img14,
      name: "Straight Die Grinder",
    },
    {
      image: img15,
      name: "Bench Grinder",
    },
    {
      image: img16,
      name: "Electric Blower",
    },
    {
      image: img17,
      name: "Electric Mixer",
    },
    {
      image: img18,
      name: "Cordless Grinder",
    },
    {
      image: img19,
      name: "Marble Cutter",
    },
    {
      image: img20,
      name: "Planer",
    },
    {
      image: img21,
      name: "Jig Saw",
    },
    {
      image: img22,
      name: "Circular Saw",
    },
    {
      image: img23,
      name: "Cut Off Machine",
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
