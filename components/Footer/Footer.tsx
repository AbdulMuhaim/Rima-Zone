import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { RiSnapchatFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black font-sans text-gray-200 py-12 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 ">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-yellow-500 pb-2 mb-8">
            ABOUT US
          </h3>
          <p className="text-sm leading-loose opacity-70">
          At Rima Zone, based in Saudi Arabia, we specialize in providing complete procurement and trading solutions tailored to your project needs.
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-yellow-500 pb-2 mb-8">
            GET IN TOUCH
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="leading-loose opacity-70">
              <i className="fas fa-map-marker-alt"></i> Batha Al Riyadh, Saudi Arabia 94043
            </li>
            <li className="opacity-70">
              <i className="fas fa-envelope "></i> info.rimazone@gmail.com
            </li>
            <li className="opacity-70">
              <i className="fas fa-phone"></i> +966 53 013 3668
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-yellow-500 pb-2 mb-8">
            OPENING HOURS
          </h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Our support 24/7</li>
            <li>Monday – Friday: 9am–6pm</li>
            <li>Saturday: 10am–4pm</li>
            <li>Sunday: 10am–1pm</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="">
          <h3 className="text-lg font-bold border-b-2 border-yellow-500 pb-2 mb-8">
            SUBSCRIBE
          </h3>
          <p className="text-sm mb-4 leading-loose opacity-70">
            Subscribe to our mailing list to get the updates to your email
            inbox.
          </p>
          <form className="flex mx-auto justify-start ">
            <input
              type="email"
              placeholder="Your email here"
              className="flex-1 px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 px-4 py-2 rounded-r-md text-gray-900 font-bold hover:bg-yellow-600"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>


      </div>
      <div className="flex container mx-auto px-4 flex-col sm:flex-row justify-between text-center border-t border-gray-700 mt-8 pt-4 text-sm">
        <p>Copyrights © 2024 All Rights Reserved.</p>
        <div className="flex gap-5 mt-5 sm:mt-0 mx-auto sm:mx-0">
          <BiLogoLinkedin
            size={20}
            className="hover:text-yellow-500 cursor-pointer"
          />
          <RiSnapchatFill
            size={20}
            className="hover:text-yellow-500 cursor-pointer"
          />
          <AiFillInstagram
            size={20}
            className="hover:text-yellow-500 cursor-pointer"
          />
          <CgFacebook
            size={18}
            className="hover:text-yellow-500 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
