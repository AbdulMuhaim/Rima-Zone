"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
// import { it } from "node:test";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <div className="flex absolute z-50 text-black w-full max-w-[1150px] px-4 lg:px-8">
          {/* Logo Section */}
          <div className="h-24 w-1/2 lg:w-1/5 flex items-center space-x-4">
            <Image
              src="/rimazone3.png"
              alt="Rima Zone Logo"
              width={80}
              height={80}
              aria-hidden
            />
            <div className="flex flex-col text-white">
              <h1 className="text-2xl md:text-3xl  font-sans whitespace-nowrap uppercase tracking-widest">
                <span className="font-bold">Rima</span>
                <span>Zone</span>
              </h1>
              <h6 className="uppercase text-xs md:text-sm whitespace-nowrap opacity-80">
                Complete Project Solution
              </h6>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex h-24 w-4/5 items-center justify-end space-x-6 md:space-x-12 text-white font-sans">
            {[
              "home",
              "about",
              "products",
              "services",
              "gallery",
              "contact",
            ].map((item) => (
              <a
                key={item}
                className="text-sm md:text-md hover:text-yellow-500 uppercase font-semibold cursor-pointer transition duration-200"
                href={item === "home" ? "/" : item}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden flex items-center justify-end w-1/2">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white text-2xl bg-yellow-500 rounded-md p-3"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute  top-40 z-20 w-full bg-white text-black flex flex-col items-start pl-2 space-y-6 py-10 pb-20">
            {[
              "home",
              "about",
              "products",
              "services",
              "gallery",
              "contact",
            ].map((item) => (
              <a
                key={item}
                className="text-sm font-sans uppercase font-bold hover:text-yellow-500 cursor-pointer py-1 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
                href={item}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
