"use client"

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import CommonBg from '@/components/UI/CommonBg'
import img from "../../public/ServiceImages/jpeg-optimizer_carpenter-working-sawmill-wood-manufacture.jpg"

import React from 'react'
import CallUsBanner from '@/components/About/CallUsButton'

function page() {


        const images = [
          { src: img, size: "big" },
          { src: img, size: "medium" },
          { src: img, size: "small" },
          { src: img, size: "small" },
          { src: img, size: "big" },
          { src: img, size: "small" },
          { src: img, size: "small" },
          { src: img, size: "medium" },
          { src: img, size: "small" },
          { src: img, size: "big" },
          { src: img, size: "small" },
          { src: img, size: "medium" },
          // Add more images here
        ];

  return (
    <div>
      <Header />
      <Navbar />
      <CommonBg />





    <div className="min-h-screen  p-6 py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${
              image.size === "big"
                ? "col-span-2 row-span-2"
                : image.size === "medium"
                ? "col-span-1 row-span-2"
                : ""
            }`}
          >
            <img
              src={image.src.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


<CallUsBanner/>
<Footer/>
    </div>
  )
}

export default page