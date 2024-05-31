import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer className="p-10 bg-[#10151D] border-[#2e3c51] border relative">
      <div
        className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 bg-white w-[400px] h-[1px] rounded-b-full z-50"
        style={{ boxShadow: "0px 0px 250px 25px #93bdf481" }}
      ></div>
        <div className="wrapper-text text-white text-center">
          <p className="text-center text-4xl my-3">Get in touch</p>
          <p className="font-thin text-xl text-center">
            For business inquiry please send email to <span> </span>
            <a
              href="mailto:dadybima171@gmail.com"
              className="text-[#92A9FF] hover:text-[#B895FD]"
            >
              dadybima171@gmail.com
            </a>
          </p>
          <div className="wrapper flex gap-5 justify-center items-center text-4xl my-5">
            <a
              href="https://www.facebook.com/dady.bima.5"
              className="duration-300 ease-in-out hover:text-[#B895FD]"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="https://instagram.com/dybim__"
              className="duration-300 ease-in-out hover:text-[#B895FD]"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/dady-bima/"
              className="duration-300 ease-in-out hover:text-[#B895FD]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://wa.me/087812566311"
              className="duration-300 ease-in-out hover:text-[#B895FD]"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </a>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:underline ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              dybim__
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
