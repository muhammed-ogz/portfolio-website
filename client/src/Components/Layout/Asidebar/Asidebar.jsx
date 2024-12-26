import { IoHomeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";

const Asidebar = () => {
  return (
    <aside className="w-32 min-h-screen flex flex-col justify-between items-center py-10 gap-10 rounded-r-lg fixed top-0 z-40">
      {/* Portfolio Link */}
      <a
        href="/"
        className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-gray-800 hover:bg-gray-200 transition-all duration-200"
      >
        <IoHomeOutline size={24} />
      </a>

      {/* Navigation Links */}
      <ul className="space-y-10 flex flex-col items-center justify-center">
        <li className="text-white text-2xl hover:text-gray-400 cursor-pointer">
          <IoHomeOutline />
        </li>
        <li className="text-white text-2xl hover:text-gray-400 cursor-pointer">
          <FaRegUser />
        </li>
        <li className="text-white text-2xl hover:text-gray-400 cursor-pointer">
          <PiCertificateLight />
        </li>
        <li className="text-white text-2xl hover:text-gray-400 cursor-pointer">
          <MdOutlineFolderCopy />
        </li>
        <li className="text-white text-2xl hover:text-gray-400 cursor-pointer">
          <FaRegComment />
        </li>
      </ul>

      {/* Rotated Year */}
      <div className="w-full flex justify-center items-center pb-2">
        <p className="font-semibold text-white transform -rotate-90 whitespace-nowrap opacity-75 text-xs md:text-base">
          &copy; 2024 - 2025
        </p>
      </div>
    </aside>
  );
};

export default Asidebar;
