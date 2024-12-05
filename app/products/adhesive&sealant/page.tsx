"use client";
import React from "react";
import img1 from "../../../public/Products Images/Construction/honda-gxr120-jumping-jack-rammer-compactor-tamper-wacker-miskasa-2-2000x2000.jpg.webp";
import img2 from "../../../public/Products Images/Construction/71W9mFee4kL._AC_SL1500_.jpg";
import img3 from "../../../public/Products Images/Construction/201912241659435943.jpg";
import img4 from "../../../public/Products Images/Construction/71hr+esU6DL._AC_SL1500_.jpg";
import img5 from "../../../public/Products Images/Construction/HydraSaw-S14.jpg";
import img6 from "../../../public/Products Images/Construction/TPumpCat12_lb_700.jpg";
import img7 from "../../../public/Products Images/Construction/f36-pp-left-scaled-e1692125980743-1367x1536.webp";
import img8 from "../../../public/Products Images/Construction/concrete-power-screed-floor-leveller-concrete-finisher-surface-finishing-honda-engine-aluminum-blade-honda-1-2000x2000h.jpg.webp";
import img9 from "../../../public/Products Images/Construction/e8bc5528-99c9-4379-b1d7-c58a05ba118d_10137515_1.jpg";
import img10 from "../../../public/Products Images/Construction/pro20.webp";
import img11 from "../../../public/Products Images/Construction/Senci-SCWP80-1.jpg";
import img12 from "../../../public/Products Images/Construction/mev150_720x@2x.webp";
import img13 from "../../../public/Products Images/Construction/245012001.jpg";
import img14 from "../../../public/Products Images/Construction/concrete_vibrating_screed_blades_e35b1354-0612-4f09-879f-1cd25cb9df91_666x666.webp";
import ProductList from "@/components/Products/ProductList";

function page() {
  const products: Product[] = [
    {
      image: img1,
      name: "Rammer Tamping",
    },
    {
      image: img2,
      name: "Compactor",
    },
    {
      image: img3,
      name: "Roller Vibrator",
    },
    {
      image: img4,
      name: "Jack Hammer",
    },
    {
      image: img5,
      name: "Circular Saw Hydraulic",
    },
    {
      image: img6,
      name: "Trash Pump Hydraulic",
    },
    {
      image: img7,
      name: "Trowel",
    },
    {
      image: img14,
      name: "Screed Blade",
    },
    {
      image: img8,
      name: "Screed Finishing",
    },
    {
      image: img9,
      name: "Cutter Asphalt-Concrete",
    },
    {
      image: img10,
      name: "Power Pack Hydraulic",
    },
    {
      image: img11,
      name: "Water Pump Engine",
    },
    {
      image: img12,
      name: "Vibrator Electric",
    },
    {
      image: img13,
      name: "Vibrator Engine",
    },
  ];

  return (
    <div>
      <ProductList products={products} /> {/* Pass products here */}
    </div>
  );
}

export default page;
