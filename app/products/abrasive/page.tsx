"use client";
import { StaticImageData } from "next/image";
import img1 from "../../../public/Products Images/Abrasive/2b70e7a7a6a10fa0d03aa1b31cef12eec55caf87_original.jpeg";
import img2 from "../../../public/Products Images/Abrasive/61JpUOQPJ-L._SL1080_.jpg";
import img3 from "../../../public/Products Images/Abrasive/71HtMsg-gVL._SL1500_.jpg";
import img4 from "../../../public/Products Images/Abrasive/71iOlQjwsXL._SL1500_.jpg";
import img5 from "../../../public/Products Images/Abrasive/8166d4B1btL._SL1500_.jpg";
import img6 from "../../../public/Products Images/Abrasive/81Hay6HblUL._AC_SL1500_.jpg";
import img7 from "../../../public/Products Images/Abrasive/71Ch-441WYL._SL1500_.jpg";
import img8 from "../../../public/Products Images/Abrasive/81MCAFkGU6L._AC_SL1500_.jpg";
import img9 from "../../../public/Products Images/Abrasive/R1884338-06.jpg";
import img10 from "../../../public/Products Images/Abrasive/Zirconium-Corundum-Flap-Disc-115X22-23mm-40-for-Stainless-Steel.avif";
import img11 from "../../../public/Products Images/Abrasive/ES_coolman-diamond-grinding-wheel-7-1-1.png";
import img12 from "../../../public/Products Images/Abrasive/815lhMeJSDL._SL1500_.jpg";
import img13 from "../../../public/Products Images/Abrasive/81SvHJK1HVL._SL1500_.jpg";
import img14 from "../../../public/Products Images/Abrasive/71sZhrIIBiL._SL1500_.jpg";
import img15 from "../../../public/Products Images/Abrasive/lincoln-wire-brush-k3185-1-13_1500x.webp";
import ProductList from "@/components/Products/ProductList";

type Product = {
  image: StaticImageData; 
  name: string; 
};



function Page() {

  const products: Product[] = [
    { image: img1, name: "Ceramic Polish" },
    { image: img2, name: "Flexible Depressed Wheel" },
    { image: img3, name: "Depressed Center Wheel" },
    { image: img4, name: "Cut Off Wheel"},
    { image: img5, name: "Grinding Wheel" },
    { image: img6, name: "Sandbelt" },
    { image: img7, name: "Sandpaper" },
    { image: img8, name: "Circular Saw Blade" },
    { image: img9, name: "Flap Disc Aluminium" },
    { image: img10, name: "Flap Disc Zirconium" },
    { image: img11, name: "Diamond Grinding Wheel" },
    { image: img12, name: "Diamond Cut Wheel" },
    { image: img13, name: "End Cup Brush & Wheel" },
    { image: img14, name: "Scrubber" },
    { image: img15, name: "Welding Handbrush" },
  ];


  return (
    <div>
  <ProductList products={products}/>
    </div>
  );
}

export default Page;
