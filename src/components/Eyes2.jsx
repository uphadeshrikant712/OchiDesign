import React, { useEffect, useState } from "react";

function Eyes2() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=".7"
      className="w-full h-screen bg-[#CDEA68] text-black"
    >
      <div className=" font-['gilroy']  tracking-tighter uppercase font-bold text-[12vw] w-full h-full leading-none  flex items-center justify-center flex-col">
        <h1>Ready</h1>
        <h1>to start</h1>
        <h1>the project ?</h1>

        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".3"
          className=" absolute  mb-[15vw] flex items-center justify-center gap-3 w-1/3 h-[60vh] "
        >
          <div className=" maincircle1 w-[13vw] h-[13vw] rounded-full bg-slate-100 flex items-center justify-center ">
            <div className="innercircle1 relative flex items-center  justify-center w-[8vw] h-[8vw] rounded-full bg-slate-900 ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[3vw] "
              >
                <div className=" inner-innercircle1 w-[1vw] h-[1vw] rounded-full bg-slate-50 "></div>
              </div>
            </div>
          </div>

          <div className="maincircle2 w-[13vw] h-[13vw] rounded-full bg-slate-100 flex items-center justify-center ">
            <div className="innercircle2 group relative  w-[8vw] h-[8vw] bg-slate-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full flex items-center h-6"
              >
                <div className="h-[1vw] w-[1vw] bg-cyan-50 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes2;
