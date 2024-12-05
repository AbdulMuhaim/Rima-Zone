import React from "react";

import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { RiSnapchatFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";

function Header() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className=" w-full flex flex-col sm:flex-row justify-between  items-center text-black py-3 gap-3 max-w-[1150px] px-7">
          <div className="flex mb-2 sm:mb-0 text-yellow-500 font-sans space-x-4 text-sm">
            <a
              className="flex justify-center items-center"
              href="tel:+9660534144479"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosCall size={20} />
              <span className="text-black">&nbsp; 0534144479</span>
            </a>{" "}
            <a
              className="flex justify-center items-center"
              href="mailto:info@rimazones.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiMail size={20} />{" "}
              <span className="text-black">&nbsp; info@rimazones.com</span>
            </a>
          </div>
          <div className="flex space-x-8">
            <a
              className="hover:text-yellow-500 "
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgFacebook size={20} />
            </a>
            <a
              className="hover:text-yellow-500"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={20} />
            </a>
            <a
              className="hover:text-yellow-500"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiSnapchatFill size={20} />
            </a>
            <a
              className="hover:text-yellow-500"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
