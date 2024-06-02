import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-[2vw] px-[1.4vw] bg-slate-100">
      <div className="cardcontainer w-1/2 h-[30vw]">
        <div className="card h-full w-full bg-[#004D43] rounded-lg overflow-hidden flex items-center flex-wrap justify-center relative ">
          <div className="img w-[11vw] h-[5vw]">


            <img className="w-full h-full" src="../oochi-logo.svg" alt="" />
            <button className="absolute left-10 bottom-7 px-3 py-1 border-[.12vw] border-[#CDEA68] text-[#CDEA68] rounded-full tracking-tight ">
              ©2019-2022
            </button>
          </div>
        </div>
      </div>
      <div className="cardcontainer flex gap-4 w-1/2 h-[30vw]">
        <div className="card1 h-full w-1/2 bg-[#0f0f0f] rounded-lg overflow-hidden flex items-center justify-center relative">
          <div className="img w-18 h-16">


            <img src="../clutch-logo.svg" alt="" />
            <button className="uppercase absolute left-[1vw] bottom-[1vw] px-[1vw] py-[.3vw] tracking-tighter border-[1.5px] rounded-full ">
              rating 5.0 on clutch
            </button>
          </div>
        </div>
        <div className="card2 relative h-full w-1/2 bg-black flex items-center justify-center rounded-lg overflow-hidden ">
          <div className="img w-1/3 h-16">

          
          <img className="w-full h-full" src="../logo3.png" alt="" />
          <button className="absolute left-3 bottom-4 border-[1.5px] tracking-tighter px-3  py-1 rounded-full uppercase ">
            buisness bootcamp alumini
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
