"use client";

import React, { useEffect, useState } from "react";
import commonBanner from "../../public/jpeg-optimizer_commonBanner.jpg";

function CommonBg() {
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

  // Function to format breadcrumbs
  const formatBreadcrumb = (crumb) => {
    return crumb
      .replace(/&/g, " & ") // Add spaces around "&"
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  // Function to generate breadcrumb links
  const generateBreadcrumbLink = (index) => {
    const path = breadcrumbs
      .slice(1, index + 1) // Include the breadcrumb up to the current one
      .join("/"); // Rejoin segments with "/"
    return `/${path}`; // Return the full path
  };

  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${commonBanner.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl text-white font-sans font-bold uppercase relative inline-block">
          {breadcrumbs.length > 0
            ? formatBreadcrumb(breadcrumbs[breadcrumbs.length - 1])
            : ""}
          <span className="block h-1 w-10 bg-yellow-500 mx-auto mt-2"></span>
        </h2>
        <div className="breadcrumbs mt-4 text-white">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index < breadcrumbs.length - 1 ? (
                // Add link for all breadcrumbs except the last one
                <a
                  href={index === 0 ? "/" : generateBreadcrumbLink(index)}
                  className="breadcrumb text-white cursor-pointer"
                >
                  {formatBreadcrumb(crumb)}
                </a>
              ) : (
                // Render the last breadcrumb as plain text without a link
                <span className="breadcrumb text-white cursor-default">
                  {formatBreadcrumb(crumb)}
                </span>
              )}
              {index < breadcrumbs.length - 1 && " / "}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommonBg;
