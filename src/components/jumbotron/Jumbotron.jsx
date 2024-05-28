import React from "react";
import wew from "../../assets/wew.jpg";

export const Jumbotron = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 bg-white w-[400px] h-[1px] rounded-b-full z-15"
        style={{ boxShadow: "0px 0px 250px 25px #93bdf481" }}
      ></div>

      <div className="relative p-24 lg:grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center  h-screen z-10 bg-transparent">
        <img
          className="mx-auto rounded-full"
          src={wew}
          style={{ boxShadow: "0px 0px 10px 1px #D9DFE7" }}
          alt="my-photo"
          width={300}
          height={300}
          />

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
          <button className="p-3 my-5 rounded-md text-black border border-[#B895FD] bg-[#B895FD] hover:bg-[#fff] hover:border hover:border-[#B895FD] font-semibold duration-200 ease-in-out">
            View CV
          </button>
        </div>
      </div>
    </div>
  );
};
