import React, { useState } from "react";
import { data } from "./ListCertificate";

export const Certification = () => {
  // State untuk melacak jumlah elemen yang ditampilkan
  const [visibleItems, setVisibleItems] = useState(3);

  // Fungsi untuk menangani klik tombol "See More"
  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div className="p-24 text-white ">
      <div
        className="container mx-auto w-10/12 bg-[#10151D] border border-[#2e3c51] p-10 text-white"
        style={{ boxShadow: "0px 0px 250px 1px rgba(127, 17, 224, 0.1)" }}
      >
        <p className="text-3xl my-3 uppercase font-bold tracking-wide">
          Certification
        </p>
        {data.slice(0, visibleItems).map((item, i) => (
          <div className="wrapper flex lg:flex-row sm:flex-col justify-center  gap-14 my-14" key={i}>
            <img
              className="h-[200px] border"
              src={item.image}
              alt={item.title}
              width={600}
            />
            <div className="wrapper-text">
              <div className="text-2xl font-bold capitalize my-3 text-justify">
                {item.title}
              </div>
              <div className="text-lg font-thin ">{item.desc}</div>
              <button className="px-5 py-2 my-5 rounded-md text-black border border-[#B895FD] bg-[#B895FD] hover:bg-[#fff] hover:border hover:border-[#B895FD] font-semibold duration-200 ease-in-out">
                View
              </button>
            </div>
          </div>
        ))}

        {visibleItems < data.length && (
          <div className="flex justify-center">
            <button
              className="px-5 py-2 my-5 rounded-md text-black border border-[#B895FD] bg-[#B895FD] hover:bg-[#fff] hover:border hover:border-[#B895FD] font-semibold duration-200 ease-in-out"
              onClick={handleSeeMore}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
