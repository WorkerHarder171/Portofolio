import React from "react";
import pp from "../../assets/pp.jpg";

export const Jumbotron = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 bg-white w-[400px] h-[1px] rounded-b-full z-15"
        style={{ boxShadow: "0px 0px 250px 25px #fff" }}
      ></div>

      <div className="relative p-24 flex flex-col justify-center items-center text-center h-screen z-10 bg-transparent">
        <img
          className="mx-auto border rounded-full"
          src={pp}
          alt="my-photo"
          width={150}
        />
        <div className="text-group my-5 text-[#D9DFE7]">
          <p className="text-5xl italic font-semibold mb-3">
            Hi, I'm Dady Bima Nur Sejati.
          </p>
          <p className="font-thin text-xl">
            Front-End React Developers, FOSS and Linux Enthusiast{" "}
          </p>
        </div>
        <button className="p-3 rounded-md text-white bg-[#a87ffb] hover:bg-[#B895FD]">
          View CV
        </button>
      </div>
    </div>
  );
};
