import { FaInstagram } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { RiSnapchatLine } from "react-icons/ri";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ScrollDown from "./ScrollDown/ScrollDown";

const Home = () => {
  const textArray = ["Fullstack", "Backend", "Frontend", "Game", ""];

  return (
    <>
      <div className="py-16 md:py-2 min-h-screen flex flex-col justify-center items-center relative" id="home">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center w-full px-4">
          {/* Circle */}
          <div className="w-48 h-48 md:w-96 md:h-96 bg-white rounded-full shadow-lg mb-6 md:mb-0"></div>

          {/* Text and Button */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left w-full md:w-auto">
            <h1 className="font-semibold text-xl md:text-3xl text-gray-800">
              Haydar Ozgur Misirli
            </h1>

            <ScrollDown textArray={textArray} />

            {/* Social Media Icons */}
            <div className="flex gap-6 text-3xl text-gray-600 justify-center md:justify-start mb-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 transition-all duration-200" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGoogle className="hover:text-blue-500 transition-all duration-200" />
              </a>
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiSnapchatLine className="hover:text-yellow-500 transition-all duration-200" />
              </a>
            </div>

            {/* Hire me button */}
            <button className="bg-[#CCD5AE] text-white py-2 px-6 rounded-md hover:bg-[#E9EDC9] transition-colors duration-700">
              Hire me!
            </button>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-5 z-10 md:w-28 w-20 opacity-55 flex flex-col items-center group">
          <p className="font-bold group-hover:mb-1 duration-700 md:text-base text-sm">Scroll Down</p>
          <DotLottieReact
            className="group-hover:scale-110 duration-700"
            src="https://lottie.host/a8352cb6-61ee-400c-a38c-e2d88136d559/IOJ3hGhvKn.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </>
  );
};

export default Home;
