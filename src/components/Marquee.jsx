import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-400  flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[24vw] leading-none font-["Founders_Grotesk_x"] uppercase font-semibold pt-8 -mb-[7vw] pr-20 '
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[24vw] leading-none font-["Founders_Grotesk_x"] font-semibold uppercase pt-8 -mb-[7vw] pr-20'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
