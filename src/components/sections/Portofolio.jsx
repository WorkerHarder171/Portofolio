import React from "react";
import contoh1 from "../../assets/contoh 1.webp";
import contoh2 from "../../assets/contoh 2.jpg";
import contoh3 from "../../assets/contoh 3.jpg";

export const Portofolio = () => {
  const imageHeight = "200px"; // Ubah tinggi sesuai kebutuhan

  return (
    <div className="container p-24 text-white mx-auto">
      <p className="text-4xl font-bold uppercase text-center py-10">
        Portofolio
      </p>
      <div className="grid grid-cols-3 gap-20 justify-center items-center">
        {/* cards 1 */}
        <div className="cards border rounded-md border-[#2e3c51] bg-[#10151D] transform transition-transform duration-500 ease-out hover:scale-110">
          <div className="card-head">
            <img
              className="border w-full"
              src={contoh1}
              alt=""
              style={{ height: imageHeight, objectFit: "cover" }}
            />
          </div>
          <div className="card-body p-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Halo</p>
              <i>p</i>
            </div>
            <p className="decs font-thin">lorem ipsum</p>
          </div>
        </div>

        {/* cards 2 */}
        <div className="cards border rounded-md border-[#2e3c51] bg-[#10151D] transform transition-transform duration-500 ease-out hover:scale-110">
          <div className="card-head">
            <img
              className="border w-full"
              src={contoh2}
              alt=""
              style={{ height: imageHeight, objectFit: "cover" }}
            />
          </div>
          <div className="card-body p-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Halo</p>
              <i>p</i>
            </div>
            <p className="decs font-thin">lorem ipsum</p>
          </div>
        </div>

        {/* cards 3 */}
        <div className="cards border rounded-md border-[#2e3c51] bg-[#10151D] transform transition-transform duration-500 ease-out hover:scale-110">
          <div className="card-head">
            <img
              className="border w-full"
              src={contoh3}
              alt=""
              style={{ height: imageHeight, objectFit: "cover" }}
            />
          </div>
          <div className="card-body p-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Halo</p>
              <i>p</i>
            </div>
            <p className="decs font-thin">lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
