import { data, education } from "./ListAbout";


export const About = () => {
  return (
    <div className="md:p-24 sm:p-10 text-white relative z-0 ">
      <div
        className="md:container mx-auto md:w-full sm:w-full bg-[#10151D] border border-[#2e3c51] p-10"
        style={{ boxShadow: "0px 0px 250px 25px rgba(127, 17, 224, 0.1)" }}
      >
        <p className="md:text-3xl sm:text-xl my-3 uppercase font-bold tracking-wide">About</p>
        <p className="font-thin text-justify  md:text-xl sm:text-md tracking-wider">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        {/* wrapper experience */}
        <div className="wrapper p-5 my-5">
          <p className="text-xl my-3 uppercase font-bold tracking-wide">
            Experience
          </p>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
            {data.map((item, i) => (
              <div className="text-content flex lg:flex-row sm:flex-col gap-5 w-full" key={i}>
                <div className="left-content w-7/12">
                  <p className="date md:text-xl sm:text-md tracking-wider font-bold text-[#B895FD]">
                    {item.date}
                  </p>
                </div>
                <div className="right-content">
                  <p className="font-semibold md:text-xl sm:text-md tracking-wider">
                    {item.title}
                  </p>
                  <p className="desc font-thin text-justify md:text-xl sm:text-md tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* wrapper education */}
        <div className="wrapper p-5 my-5">
          <p className="text-xl my-3 uppercase font-bold tracking-wide">
            Education
          </p>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
            {education.map((item, i) => (
              <div className="text-content flex lg:flex-row sm:flex-col gap-5 w-full" key={i}>
                <div className="left-content w-7/12">
                  <p className="date md:text-xl sm:text-md tracking-wider font-bold text-[#B895FD]">
                    {item.date}
                  </p>
                </div>
                <div className="right-content">
                  <p className="font-semibold md:text-xl sm:text-md tracking-wider">
                    {item.title}
                  </p>
                  <p className="desc font-thin text-justify md:text-xl sm:text-md tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
