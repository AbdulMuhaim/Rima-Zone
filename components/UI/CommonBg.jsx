"use client"
import React, { useEffect, useState } from "react";
import commonBanner from "../../public/commonBanner.jpg";

function CommonBg() {

  const [url, setUrl] = useState("");


  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href; // e.g., "http://localhost:3000/products"
      const pathSegment = fullUrl.split("/").pop(); // Extracts "products"
      setUrl(pathSegment); // Set only the last part ("products") in the state
    }
  }, []);

  const capitalizedWord = url.charAt(0).toUpperCase() + url.slice(1);


  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${commonBanner.src})` }}
    >
      {" "}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content (optional) */}
      <div className="relative z-10  flex flex-col items-center justify-center h-full ">
        <h2 className="text-4xl text-white font-sans font-bold uppercase relative inline-block">
          {url}
          <span className="block h-1 w-10 bg-yellow-500 mx-auto mt-2"></span>
        </h2>{" "}
        <div className="mt-4">
          <span className="text-white cursor-pointer">Home</span>
          <span className="text-white "> / </span>
          <span className="text-white cursor-pointer">{capitalizedWord}</span>
          <span className="text-white "> / </span>
          <span className="text-white cursor-pointer">{capitalizedWord}</span>
        </div>
      </div>
    </div>
  );
}

export default CommonBg;
