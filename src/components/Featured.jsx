import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-slate-100 text-black ">
      <div className="border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-[4.5vw] px-[4vw] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="px-[2vw] ">
        <div className=" heading flex gap-[44vw] mt-[4vw] mb-[2vw] ml-[2vw]">
          <div>
            <h1 className=" uppercase">• fyde</h1>
          </div>
          <div>
            <h1 className=" uppercase ">•vise</h1>
          </div>
        </div>

        <div className="cards flex gap-[2vw] w-full ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="z-[9] text-[7.5vw] font-semibold tracking-tighter uppercase text-[#CDEA68] absolute flex overflow-hidden left-full top-1/2 leading-none -translate-x-1/2 -translate-y-1/2 ">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card hover:scale-95 transition-all w-full h-full bg-cyan-100 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="./public/Fyde_Illustration.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer hover:scale-95 transition-all relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="text-[7.5vw] flex overflow-hidden uppercase font-semibold z-[9] text-[#CDEA68] tracking-tighter leading-none absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2">
                {"vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="./public/Vise.jpg"
                alt=""
              />
            </div>
            <div></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
