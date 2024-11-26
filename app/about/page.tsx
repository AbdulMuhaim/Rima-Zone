"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import React from "react";
import aboutImage from "../../public/top-view-paper-chart-with-various-elements.jpg";
import Image from "next/image";
import VisionMissionValues from "@/components/About/VisionMissionValues";
import CallUsBanner from "@/components/About/CallUsButton";
import CommonBg from "../../components/UI/CommonBg";

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
              We are the leader in the trading.
              <span className="block  h-1 w-16 bg-yellow-500  mt-6"></span>
            </h1>

            <p className="mt-10 opacity-60 leading-loose font-sans ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia c. Eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit.
            </p>
          </div>

          <div className="md:w-1/2 w-full ">
            <Image src={aboutImage} className="" alt="aboutimage" />
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
              src="https://t4.ftcdn.net/jpg/01/95/72/05/360_F_195720521_0BHlQLHKnrFbbFZLYNlOcjDprb4rVVBM.jpg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="aboutimage"
            />
          </div>

          <div className="md:w-1/2 w-full flex flex-col justify-start items-start  px-10">
            <h1 className="text-3xl  uppercase font-bold font-sans">
              President's Message
              <span className="block  h-1 w-16 bg-yellow-500  mt-6"></span>
            </h1>

            <p className="mt-10 opacity-60 leading-loose font-sans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia c. Eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit.
            </p>
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
