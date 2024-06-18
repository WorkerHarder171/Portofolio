import hamburger_active from "@/assets/hamburger-active.svg";
import hamburger_non_active from "@/assets/hamburger-non-active.svg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { useInView } from "framer-motion";

export function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [color, setColor] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const changeColor = () => {
    if (window.scrollY >= 72) {
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

  const menuItems = [
    { text: "Beranda", link: "#" },
    { text: "Fitur", link: "card" },
    { text: "Tentang", link: "framePahlawan" },
    { text: "Eksplorasi", link: "frameDaurUlang" },
    { text: "FaQ", link: "question" },
  ];

  return (
    <>
      <nav
        className={
          "p-5 w-full fixed transition-all duration-500 ease-in-out z-50 border border-[#2e3c51] " +
          (color
            ? "bg-white shadow text-black"
            : "bg-[#16202de6] border-none text-white")
        }
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-[72px] flex justify-between items-center py-3 sm:py-4">
          <div className="w-28 order-1 sm:order-2 lg:order-1">
            <div className="nav-brand">
              <a href="#" className={"text-2xl tracking-wider font-bold"}>
                dybim__
              </a>
            </div>
          </div>
          <div
            className="cursor-pointer order-2 sm:order-1 lg:hidden"
            onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
          >
            <img
              className="w-9"
              src={toggleNavbar ? hamburger_active : hamburger_non_active}
              alt="toggle"
            />
          </div>
          <div className="hidden lg:block lg:order-2">
            <ul className="flex gap-14">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    className={
                      "nav-links duration-500 ease-in-out hover:font-semibold hover:mx-5 hover:text-lg " +
                      (color ? "hover:font-bold" : "hover:text-[#B895FD]")
                    }
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={700}
                    onSetActive={() => setActiveSection(item.link)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden`}>
          <ul className="text-start bg-white p-5">
            {menuItems.map((item, index) => (
              <li key={index} className="flex">
                <Link
                  activeClass="active"
                  className="text-black hover:font-bold cursor-pointer px-4 sm:px-8 py-2"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={700}
                  onSetActive={() => setActiveSection(item.link)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
