import React from "react";
import pp from "@/assets/pp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Jumbotron = () => {
  return (
    <div className="relative h-screen Z-0">
      <div
        className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 bg-white w-[400px] h-[1px] rounded-b-full z-15"
        style={{ boxShadow: "0px 0px 250px 25px #93bdf481" }}
      ></div>

      <div className="relative p-24 lg:grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center  h-screen z-0 container mx-auto">
        <div className="text-group my-5 text-[#D9DFE7]">
          <p className="text-5xl italic font-semibold mb-3">
            Welcome to My Page
          </p>
          <p className="text-5xl italic font-semibold mb-3">
            Hi, I'm Dady Bima Nur Sejati.
          </p>
          <p className="font-thin text-xl my-5">
            Front-End React Developers, FOSS and Linux Enthusiast{" "}
          </p>
          <button
            className="p-3 my-5 rounded-md text-black border border-[#B895FD] bg-[#B895FD] hover:bg-[#fff] hover:border hover:border-[#B895FD] font-semibold duration-200 ease-in-out"
            style={{
              boxShadow: "0px 0px 100px 25px rgba(127, 17, 224, 0.1)",
              transition: "box-shadow 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 0px 20px 5px rgba(127, 17, 224, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 0px 100px 25px rgba(127, 17, 224, 0.1)";
            }}
          >
            Get in Touch
          </button>
        </div>
        <div className="wrapper flex items-center ">
          <img
            className="mx-auto rounded-full border border-[#2e3c51] shadow shadow-[#2e3c51]"
            src={pp}
            style={{ boxShadow: "0px 0px 100px 25px rgba(127, 17, 224, 0.1)" }}
            alt="my-photo"
            width={400}
            height={400}
          />
          <div className="flex flex-col text-white text-2xl gap-5">
            <a
              href="https://www.facebook.com/dady.bima.5"
              className="duration-300 ease-in-out hover:text-[#B895FD] hover:my-3"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="https://instagram.com/dybim__"
              className="duration-300 ease-in-out hover:text-[#B895FD] hover:my-3"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/dady-bima/"
              className="duration-300 ease-in-out hover:text-[#B895FD] hover:my-3"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://wa.me/087812566311"
              className="duration-300 ease-in-out hover:text-[#B895FD] hover:my-3"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
