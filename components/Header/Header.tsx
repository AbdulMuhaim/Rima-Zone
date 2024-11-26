import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { LiaSnapchatGhost } from "react-icons/lia";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";

function Header() {
  return (
    <div>

<div className="flex justify-center items-center ">
          <div className=" w-full flex flex-col sm:flex-row justify-between  items-center text-black py-3 max-w-[1150px] px-7">
            <div className="flex mb-2 sm:mb-0 text-yellow-500 font-sans space-x-4 text-sm">
              <a
                className="flex justify-center items-center"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosCall size={20} />
                <span className="text-black">&nbsp; +9660578965425</span>
              </a>{" "}
              <a
                className="flex justify-center items-center"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiMail size={20} />{" "}
                <span className="text-black">&nbsp; rimazone@gmail.com</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                className="hover:text-yellow-500"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialFacebook size={20} />
              </a>
              <a
                className="hover:text-yellow-500"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaSnapchatGhost size={20} />
              </a>
              <a
                className="hover:text-yellow-500"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn size={20} />
              </a>
              <a
                className="hover:text-yellow-500"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Header