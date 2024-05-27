import React from "react";
import pp from "../../assets/pp.jpg";

export const About = () => {
  return (
    <>
      <div className="p-24 container mx-auto text-white">
        <p className="text-4xl uppercase text-center font-semibold">About</p>
        <div className="grid grid-cols-2 items-start p-10">
          <div className="p-20 bg-[#10151d] border border-[#2e3c51] relative">
            <img
              className="mx-auto rounded-full relative z-10"
              src={pp}
              alt="ppku"
              width={250}
            />
            <div
              className="absolute bg-white inset-0 w-[150px] h-[150px] rounded-full m-auto z-15"
              style={{ boxShadow: "0px 0px 100px 10px #fff" }}
            ></div>
          </div>
          <div className="bg-[#10151D] text-group border-t border-r border-b border-[#2e3c51] " >
            <p className="font-thin text-justify text-xl p-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
