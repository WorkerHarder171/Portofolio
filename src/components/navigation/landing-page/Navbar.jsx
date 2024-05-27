import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="bg-[#16202de6] p-5 text-white w-full absolute z-50 border border-[#2e3c51]">
          <div className="flex justify-around items-center">
            {/* Logo */}
            <div className="nav-brand">
              <a href="#" className="text-2xl tracking-wider font-bold">
                dybim__
              </a>
            </div>

            {/* Navigation */}
            <ul className="w-2/6 flex justify-around items-center">
              <li className="nav-item">
                <a href="#" className="nav-links">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">
                  Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
