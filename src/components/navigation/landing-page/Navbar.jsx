import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const Navbar = () => {
  const [color, setColor] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Fungsi untuk mengubah warna navbar saat scroll
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          "p-5 w-full fixed transition-all duration-500 ease-in-out z-50 border border-[#2e3c51] " +
          (color ? "bg-white shadow text-black" : "bg-[#16202de6]  border-none text-white")
        }
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className="flex justify-around items-center ">
          {/* Logo */}
          <div className="nav-brand">
            <a href="#" className={"text-2xl tracking-wider font-bold"}>
              dybim__
            </a>
          </div>

          {/* Navigation */}
          <ul className="w-2/6 flex justify-around items-center text-lg">
            <li className="nav-item">
              <a href="#" className={"nav-links duration-500 ease-in-out hover:font-semibold hover:mx-5 hover:text-lg " + (color ? "hover:font-bold" : "hover:text-[#B895FD]")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={"nav-links duration-500 ease-in-out hover:font-semibold hover:mx-5 hover:text-lg " + (color ? "hover:font-bold" : "hover:text-[#B895FD]")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={"nav-links duration-500 ease-in-out hover:font-semibold hover:mx-5 hover:text-lg " + (color ? "hover:font-bold" : "hover:text-[#B895FD]")}>
                Portofolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={"nav-links duration-500 ease-in-out hover:font-semibold hover:mx-5 hover:text-lg " + (color ? "hover:font-bold" : "hover:text-[#B895FD]")}>
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
