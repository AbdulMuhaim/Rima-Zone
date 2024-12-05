"use client"

import React, { useEffect, useState } from "react";
import commonBanner from "../../public/jpeg-optimizer_commonBanner.jpg";

function CommonBg() {

  // const [url, setUrl] = useState("");
  // const capitalizedWord = url.charAt(0).toUpperCase() + url.slice(1);

 
  
  const [breadcrumbs, setBreadcrumbs] = useState([]);



  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the pathname after the domain
      const pathSegments = window.location.pathname
        .split("/") // Split by "/"
        .filter((segment) => segment); // Remove empty strings (e.g., from leading "/")

      // Update the state with the array of path segments
      setBreadcrumbs(["Home", ...pathSegments]);
    }
  }, []);

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
        {breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : ""}
        <span className="block h-1 w-10 bg-yellow-500 mx-auto mt-2"></span>
        </h2>{" "}
        <div className="breadcrumbs mt-4">
        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="breadcrumb text-white">
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)} {/* Capitalize */}
            {index < breadcrumbs.length - 1 && " / "} {/* Add separator */}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CommonBg;
