import { data } from "./ListProjects"; // Pastikan ListProjects.js menyediakan data yang benar

export const Portofolio = () => {
  // const imageHeight = "200px"; // Ubah tinggi sesuai kebutuhan

  return (
    <div className="md:container  md:p-24 sm:p-10 text-white mx-auto">
      <p className="md:text-3xl sm:text-xl font-bold uppercase py-10">Projects</p>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 justify-center items-center">
        {data.map((data, i) => (
          <div key={i} className="cards border rounded-md border-[#2e3c51] bg-[#10151D] transform transition-transform duration-500 ease-out hover:scale-110"
            style={{ boxShadow: "0px 0px 100px 25px rgba(127, 17, 224, 0.1)" }}
          >
            <div className="card-head">
              <img
                className="border"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="card-body p-5 relative">
              <div className="flex justify-between items-center">
                <p className="md:text-2xl sm:text-lg font-semibold">{data.title}</p>
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
