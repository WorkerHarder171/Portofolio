import React from "react";
import { data } from "./ListProjects"; // Pastikan ListProjects.js menyediakan data yang benar

export const Portofolio = () => {
  const imageHeight = "200px"; // Ubah tinggi sesuai kebutuhan

  return (
    <div className="container p-24 text-white mx-auto">
      <p className="text-3xl font-bold uppercase py-10">Projects</p>
      <div className="grid grid-cols-2 gap-20 justify-center items-center">
        {data.map((data, i) => (
          <div key={i} className="cards border rounded-md border-[#2e3c51] bg-[#10151D] transform transition-transform duration-500 ease-out hover:scale-110">
            <div className="card-head">
              <img
                className="border w-full"
                src={data.img}
                alt={data.title}
                style={{ height: imageHeight, objectFit: "cover" }}
              />
            </div>
            <div className="card-body p-5 relative">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold">{data.title}</p>
                {/* <i>{data}</i>  */}
              </div>
              <p className="decs font-thin">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
