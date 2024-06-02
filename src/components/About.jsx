import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function About() {
  return (
    <div
      className="w-full p-[6vw] rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl text-black bg-[#CDEA68] "
    >
      <div>
        <h1 className=' font-["Neue_Montreal"] text-[4vw] leading-[4vw]  '>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className="w-full flex  pt-[4vw] mt-[6vw] border-t-[1px] border-[#6b683d]">
          <div className="w-1/2">
            <h1 className="text-[4vw] tracking-tighter ">Our approach:</h1>
            <button className="flex gap-[1vw] items-center px-[1.4vw] py-[1vw] rounded-full text-white text-[1.2vw] tracking-tight uppercase bg-zinc-800 mt-[2vw]">
              Read More
              <div className=" rotate-[45deg] w-[2vw] h-[2vw] flex items-center justify-center transition-all  rounded-full">
                <FaArrowUp />
              </div>
            </button>
          </div>
          <div className="w-1/2 h-[30vw] rounded-lg overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="../Homepage-Photo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
