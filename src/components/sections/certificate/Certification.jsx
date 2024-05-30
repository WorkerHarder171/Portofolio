import React from "react";
  import { data } from "./ListCertificate";

export const Certification = () => {
  return (
    <div className="container p-24 mx-auto text-white ">
      <p className="text-4xl font-bold uppercase text-center py-10">
        Certification
      </p>
      <div className="p-5 border border-[#2e3c51] bg-[#10151d] rounded-md flex flex-col gap-5 overflow-auto h-[400px]">
        {data.map((data, i) => (
          <div className="cards border border-[#2e3c51] flex justify-between gap-5 items-center" key={i}>
            <div className="wrapper flex justify-start items-center">
              <div className="card-header">
                <img
                  className="min-w-[150px] max-w-[200px] h-[100px] border"
                  src={data.img}
                  alt={data.title}
                />
              </div>
              <div className="card-body p-5">
                <p className="text-2xl italic">{data.title}</p>
                <p className="text-lg font-thin">{data.desc}</p>
              </div>
            </div>
            <button className="p-2 bg-[#a87ffb] hover:bg-[#B895FD] rounded-md mr-10">
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
