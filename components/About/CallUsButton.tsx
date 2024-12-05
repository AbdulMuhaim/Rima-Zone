import React from "react";

const CallUsBanner = () => {
  return (
    <div className="flex justify-center bg-yellow-500">
    <div className="container bg-yellow-500 flex justify-between items-center p-6 md:p-10 lg:p-16">
      {/* Left Section - Text */}
      <h1 className="text-black font-sans text-md md:text-xl lg:text-2xl font-bold uppercase">
        We provide fast and affordable service for your projects!
      </h1>

      {/* Right Section - Call Us Button */}
      <button className="bg-black  text-yellow-500  uppercase font-sans font-semibold py-2 px-6  md:px-8 rounded-sm hover:bg-yellow-500 border-2 border-black hover:text-black transition-all duration-300">
        Call Us Now
      </button>
    </div>
    </div>
  );
};

export default CallUsBanner;
