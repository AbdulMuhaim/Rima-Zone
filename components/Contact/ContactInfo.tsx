import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
    return (
      <div className="p-6 lg:p-12 font-sans col-span-1">
        <h2 className="text-xl lg:text-2xl font-bold mb-6">Contact Info</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <MdLocationPin size={25} className="material-icons text-yellow-500 mr-2"/>
            <p>Batha Al Riyadh, Saudi Arabia 94043</p>
          </li>
          <li className="flex items-start">
          <MdEmail size={20} className="material-icons text-yellow-500 mr-2"/>
          <p>info.rimazone@gmail.com</p>
          </li>
          <li className="flex items-start">
          <FaPhoneAlt size={18} className="material-icons text-yellow-500 mr-2"/>
          <p>+1 800 559 6580</p>
          </li>
        </ul>
        <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">Opening Hours</h2>
        <ul className="space-y-2 opacity-70">
          <li>Our support is available 24/7</li>
          <li>Monday – Friday: 9am-6pm</li>
          <li>Saturday: 10am-4pm</li>
          <li>Sunday: 10am-1pm</li>
        </ul>
      </div>
    );
  }
  