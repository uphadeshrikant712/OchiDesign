import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-slate-100 text-black pt-[1vw]"
    >
      <div className="textstructure mt-32 px-20">
        {["We create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-cover bg-center bg-[url('./public/content-image.jpg')] "
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] font-semibold leading-[.75] font-['Founders_Grotesk_X']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-500 mt-[4vw] flex items-center justify-between px-[4vw] py-[1vw] ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light leading-none">{item}</p>
        ))}

        <div className="start flex items-center justify-center gap-1">
          <div className="hover:bg-black hover:text-white uppercase font-normal text-sm px-[1vw] py-[.3vw]  border-[1px] text-center border-zinc-900 rounded-full">
            start the project
          </div>
          <div className=" hover:rotate-[45deg] hover:bg-black hover:text-white transition-all ease-in w-[2vw] h-[4vh] rounded-full border-[1px] border-zinc-900 flex items-center justify-center">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
