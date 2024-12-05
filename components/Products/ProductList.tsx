"use client";
import CallUsBanner from "@/components/About/CallUsButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CommonBg from "@/components/UI/CommonBg";
import Image from "next/image";
import React, { useState } from "react";


// Define the type for each product
type Product = {
  image: string;
  name: string;
};

// Define the type for the props
type ProductListProps = {
  products: Product[];
};



function ProductList({ products }: ProductListProps) {


  // States for pagination and search
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  // Filtered products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <CommonBg />
      <div className="bg-white">
        <div className="mx-auto container max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 flex justify-end">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={() => setCurrentPage(1)} // Reset to page 1 after search
              className="px-4 py-2 bg-yellow-500 text-white rounded-r-lg hover:bg-yellow-600 focus:outline-none"
            >
              Search
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-20">
            {displayedProducts.map((product, index) => (
              <a key={index} className="group w-full h-full">
                <Image
                  width={1000}
                  height={200}
                  src={product.image.src}
                  alt={product.name}
                  className="w-full h-full rounded-lg object-contain group-hover:opacity-75"
                />
                <div className="flex">
                  <h3 className="mt-4 font-bold text-center text-lg text-gray-700">
                    {product.name}
                  </h3>
                  {product.allSize ? (
                    <p className="mt-4 text-center text-lg text-gray-700">
                      &nbsp;(All size available)
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-40 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-yellow-500 text-black rounded-lg ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-yellow-600"
              }`}
            >
              Previous
            </button>
            <span className="font-medium text-black">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-yellow-500 text-black rounded-lg ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-yellow-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <CallUsBanner />
      <Footer />
    </div>
  );
}

export default ProductList;
