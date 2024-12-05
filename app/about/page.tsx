"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import React from "react";
import aboutImage from "../../public/jpeg-optimizer_top-view-paper-chart-with-various-elements.jpg";
import Image from "next/image";
import VisionMissionValues from "@/components/About/VisionMissionValues";
import CallUsBanner from "@/components/About/CallUsButton";
import CommonBg from "../../components/UI/CommonBg";
import presidentImg from "../../public/WhatsApp Image 2024-12-01 at 19.24.48_67963493.jpg";
function page() {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <CommonBg />

      {/* about description */}
      <div className="flex w-full items-center justify-center py-20 ">
        <div className="max-w-[1150px] w-full flex flex-col sm:flex-row gap-10">
          <div className="md:w-1/2 w-full flex flex-col justify-start items-start px-10 text-black">
            <h1 className="text-3xl  uppercase font-bold font-sans">
              We are the leader in trading
              <span className="block  h-1 w-16 bg-yellow-500  mt-6"></span>
            </h1>

            <p className="mt-10 opacity-60 leading-loose font-sans ">
              At Rima Zone, based in Saudi Arabia, we specialize in providing
              complete procurement and trading solutions tailored to your
              project needs. From sourcing premium materials to managing
              logistics and offering customized services, we ensure quality,
              efficiency, and seamless execution. With a focus on reliability
              and customer satisfaction, we are your trusted partner for
              hassle-free solutions that drive your projects to success.
            </p>
          </div>

          <div className="md:w-1/2 w-full ">
            <Image
              src={aboutImage}
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
              quality={100}
              alt="aboutimage"
              priority
            />
          </div>
        </div>
      </div>
      {/* about description end*/}

      <VisionMissionValues />

      {/* president message */}
      <div className="flex w-full items-center justify-center py-20  text-black">
        <div className="max-w-[1150px] w-full flex flex-col sm:flex-row gap-10">
          <div className="md:w-1/2 w-full ">
          <Image
              src={presidentImg}
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
              quality={100}
              alt="aboutimage"
              priority
            />
          </div>

          <div className="md:w-1/2 w-full flex flex-col justify-start items-start  px-10">
            <h1 className="text-3xl  uppercase font-bold font-sans">
              President's Message
              <span className="block  h-1 w-16 bg-yellow-500  mt-6"></span>
            </h1>
            <p className="mt-10 opacity-60 leading-loose font-sans">
              We take pride in being your trusted partner for complete project
              solutions in Saudi Arabia. With a strong focus on excellence and
              innovation, we aim to deliver top-quality products and services
              that meet the evolving needs of our clients. Our dedication to
              reliability, efficiency, and customer satisfaction ensures that
              every project we undertake is executed to the highest standards.
              At Rima Zone, we don’t just provide solutions we build lasting
              relationships and pave the way for a future of success and growth
              together.{" "}
            </p>
            <div>
              <p className="mt-24 font-sans font-bold text-2xl">
                Mohammed Salem Alsaiari
              </p>
              <p className="font-sans font-bold opacity-80">966594871182</p>
            </div>
          </div>
        </div>
      </div>
      {/* president message end*/}

      <CallUsBanner />

      <Footer />
    </div>
  );
}

export default page;
